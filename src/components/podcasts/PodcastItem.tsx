
import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause } from 'lucide-react';
import { Podcast } from '../../data/podcastData';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(podcast.duration);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // The audioUrl path needs to include the public directory base path
  const audioSrc = podcast.audioUrl;

  useEffect(() => {
    // Create audio element only once when component mounts
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    
    // Set up preload to check if the file exists
    audio.preload = "metadata";
    
    const handleLoadedMetadata = () => {
      // Clear any previous errors since file loaded successfully
      setAudioError(null);
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    const handleTimeUpdate = () => {
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60);
      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    const handleError = () => {
      console.error("Audio file not found or cannot be played:", audioSrc);
      setAudioError(`Audio file could not be loaded. Path: ${audioSrc}`);
      setIsPlaying(false);
    };
    
    // Add event listeners
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    
    // Pre-load the audio
    audio.load();
    
    // Clean up function
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [audioSrc]); // Dependency on audioSrc so it rebuilds if the URL changes

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error("Audio element not available");
      toast({
        title: "Playback Error",
        description: "Audio player not initialized. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log("Attempting to play audio:", audio.src);
      
      // Make sure audio source is set correctly
      if (!audio.src || audio.src === '') {
        audio.src = audioSrc;
        audio.load();
      }
      
      audio.play()
        .then(() => {
          console.log("Audio playback started successfully");
          setIsPlaying(true);
          setAudioError(null);
        })
        .catch(error => {
          console.error("Error playing audio:", error);
          setAudioError("Could not play the audio. The file may be missing or in an unsupported format.");
          toast({
            title: "Playback Error",
            description: "Could not play the audio. The file may be missing or in an unsupported format.",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium bg-gold/20 text-gold px-2 py-1 rounded flex items-center gap-1">
            <Headphones size={14} />
            Podcast
          </span>
          <span className="text-xs text-charcoal/60 ml-3">{podcast.date}</span>
          <span className="text-xs text-charcoal/60 ml-3">{duration}</span>
        </div>
        
        <h3 className="font-serif text-xl text-navy mb-3">{podcast.title}</h3>
        <p className="text-charcoal/80 text-sm mb-4">{podcast.description}</p>
        
        {audioError && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Audio Error</AlertTitle>
            <AlertDescription>{audioError}</AlertDescription>
          </Alert>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <Button 
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded transition-colors"
              variant="default"
              disabled={!!audioError && !isPlaying}
            >
              {isPlaying ? (
                <>
                  <Pause size={18} /> Pause
                </>
              ) : (
                <>
                  <Play size={18} /> Listen Now
                </>
              )}
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            {isPlaying && <span className="text-sm text-charcoal/80">{currentTime}</span>}
            <span className="text-sm text-charcoal/60">
              {podcast.listens} listens
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastItem;
