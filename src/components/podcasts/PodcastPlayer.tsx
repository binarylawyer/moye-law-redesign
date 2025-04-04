import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react';
import { Podcast } from '../../data/podcastData';

interface PodcastPlayerProps {
  podcast: Podcast;
  expanded?: boolean;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ podcast, expanded = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Set up audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const setAudioData = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const resetPlayer = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    
    // Set up event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', resetPlayer);
    
    // Set the audio source
    audio.src = podcast.audioUrl;
    audio.load();
    
    return () => {
      audio.pause();
      audio.src = '';
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', resetPlayer);
    };
  }, [podcast.audioUrl]);
  
  // Apply volume changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  
  const jumpTime = (amount: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = Math.min(Math.max(audio.currentTime + amount, 0), audio.duration);
  };
  
  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (!audio || !progressBar) return;
    
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (parseFloat(e.target.value) > 0 && isMuted) {
      setIsMuted(false);
    }
  };
  
  // Format time
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate progress percentage
  const progress = duration ? (currentTime / duration) * 100 : 0;
  
  return (
    <div className={`${expanded ? 'p-6 bg-opacity-50 bg-blue-800 rounded-lg' : ''}`}>
      <audio ref={audioRef} preload="metadata" />
      
      <div className={`flex flex-col ${expanded ? 'space-y-6' : 'space-y-3'}`}>
        {/* Progress bar */}
        <div
          ref={progressBarRef}
          className="h-2 bg-blue-700 rounded-full cursor-pointer relative"
          onClick={handleProgressChange}
        >
          <div
            className="absolute h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Time display */}
        <div className="flex justify-between text-xs text-blue-100">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => jumpTime(-10)}
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Skip back 10 seconds"
            >
              <SkipBack size={expanded ? 24 : 20} />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="bg-white text-blue-900 rounded-full p-2 hover:bg-blue-100 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause size={expanded ? 24 : 20} />
              ) : (
                <Play size={expanded ? 24 : 20} className="ml-1" />
              )}
            </button>
            
            <button
              onClick={() => jumpTime(10)}
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Skip forward 10 seconds"
            >
              <SkipForward size={expanded ? 24 : 20} />
            </button>
          </div>
          
          {/* Volume control */}
          <div className="relative">
            <button
              onClick={toggleMute}
              onMouseEnter={() => setShowVolumeControl(true)}
              className="text-white hover:text-blue-300 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX size={expanded ? 24 : 20} />
              ) : (
                <Volume2 size={expanded ? 24 : 20} />
              )}
            </button>
            
            {showVolumeControl && (
              <div 
                className="absolute bottom-full right-0 mb-2 p-3 bg-blue-800 rounded-lg"
                onMouseLeave={() => setShowVolumeControl(false)}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-white"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Expanded view content */}
        {expanded && (
          <div className="pt-4 border-t border-blue-700">
            <h3 className="text-xl font-display mb-3">Episode Highlights</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-16 flex-shrink-0 text-blue-300 text-sm">01:15</div>
                <div className="text-white text-sm">Overview of key legal considerations in this area</div>
              </div>
              <div className="flex">
                <div className="w-16 flex-shrink-0 text-blue-300 text-sm">03:45</div>
                <div className="text-white text-sm">Recent court decisions and their impact</div>
              </div>
              <div className="flex">
                <div className="w-16 flex-shrink-0 text-blue-300 text-sm">06:15</div>
                <div className="text-white text-sm">Practical advice for documentation and asset inventory</div>
              </div>
              <div className="flex">
                <div className="w-16 flex-shrink-0 text-blue-300 text-sm">09:45</div>
                <div className="text-white text-sm">Technology solutions for management and transfer</div>
              </div>
              <div className="flex">
                <div className="w-16 flex-shrink-0 text-blue-300 text-sm">13:15</div>
                <div className="text-white text-sm">Final thoughts on adapting to evolving legal requirements</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastPlayer; 