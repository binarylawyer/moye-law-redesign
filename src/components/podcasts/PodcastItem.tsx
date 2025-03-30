
import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause } from 'lucide-react';
import { Podcast } from '../../data/podcastData';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(podcast.duration);
  const [currentTime, setCurrentTime] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Create a fixed audio URL that we know exists
  // This ensures we have a working audio file for all podcasts
  const audioSrc = "/podcast-sample.mp3";

  useEffect(() => {
    // Create audio element only once when component mounts
    const audio = new Audio(audioSrc);
    audioRef.current = audio;
    
    const handleLoadedMetadata = () => {
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
    
    // Add event listeners
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    
    // Pre-load the audio
    audio.load();
    
    // Clean up function
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, []); // Only run once on component mount

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
      
      // Make sure audio source is set (in case it was lost)
      if (!audio.src || audio.src === '') {
        audio.src = audioSrc;
        audio.load();
      }
      
      audio.play()
        .then(() => {
          console.log("Audio playback started successfully");
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Error playing audio:", error);
          toast({
            title: "Playback Error",
            description: "Could not play the audio. This might be due to browser restrictions or missing audio file.",
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
        
        <div className="flex items-center justify-between">
          <div>
            <Button 
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded transition-colors"
              variant="default"
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
