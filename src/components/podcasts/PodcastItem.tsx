
import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Play, Pause } from 'lucide-react';
import { Podcast } from '../../data/podcastData';
import { getFileUrl } from '../../utils/fileUpload';

interface PodcastItemProps {
  podcast: Podcast;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [duration, setDuration] = useState(podcast.duration);
  const [currentTime, setCurrentTime] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check if it's a local storage URL or external URL
    if (podcast.audioUrl && podcast.audioUrl.startsWith('podcast-')) {
      const url = getFileUrl(podcast.audioUrl);
      if (url) {
        setAudioSrc(url);
      }
    } else {
      setAudioSrc(podcast.audioUrl);
    }
    
    // Log for debugging
    console.log("Audio URL for", podcast.title, ":", podcast.audioUrl);
    if (podcast.audioUrl && podcast.audioUrl.startsWith('podcast-')) {
      console.log("Retrieved from local storage:", getFileUrl(podcast.audioUrl));
    }
  }, [podcast.audioUrl]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const minutes = Math.floor(audioRef.current.duration / 60);
      const seconds = Math.floor(audioRef.current.duration % 60);
      setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const minutes = Math.floor(audioRef.current.currentTime / 60);
      const seconds = Math.floor(audioRef.current.currentTime % 60);
      setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
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
            <button 
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded transition-colors"
              disabled={!audioSrc}
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
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {isPlaying && <span className="text-sm text-charcoal/80">{currentTime}</span>}
            <span className="text-sm text-charcoal/60">
              {podcast.listens} listens
            </span>
          </div>
        </div>
        
        {audioSrc && (
          <audio 
            ref={audioRef}
            src={audioSrc}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            className="hidden" 
          />
        )}
      </div>
    </div>
  );
};

export default PodcastItem;
