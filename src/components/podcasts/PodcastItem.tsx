
import React from 'react';
import { Podcast } from '../../data/podcastData';
import { Play, Pause, Download } from "lucide-react";
import { cn } from '@/lib/utils';

interface PodcastItemProps {
  podcast: Podcast;
}

type AudioState = {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
};

const PodcastItem = ({ podcast }: PodcastItemProps) => {
  const [audio] = React.useState(() => new Audio(podcast.audioUrl));
  const [audioState, setAudioState] = React.useState<AudioState>({
    isPlaying: false,
    duration: 0,
    currentTime: 0
  });

  React.useEffect(() => {
    const setAudioData = () => {
      setAudioState((prev) => ({
        ...prev,
        duration: audio.duration
      }));
    };

    const setAudioTime = () => {
      setAudioState((prev) => ({
        ...prev,
        currentTime: audio.currentTime
      }));
    };

    const audioEnded = () => {
      setAudioState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0
      }));
      audio.currentTime = 0;
    };

    // Audio event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', audioEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', audioEnded);
    };
  }, [audio]);

  const togglePlayPause = () => {
    if (audioState.isPlaying) {
      audio.pause();
      setAudioState((prev) => ({
        ...prev,
        isPlaying: false
      }));
    } else {
      audio.play();
      setAudioState((prev) => ({
        ...prev,
        isPlaying: true
      }));
    }
  };

  // Format time from seconds to MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Calculate progress as a percentage
  const progress = audioState.duration ? (audioState.currentTime / audioState.duration) * 100 : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif text-xl text-navy mb-2">{podcast.title}</h3>
          <p className="text-sm text-charcoal/70 mb-2">
            {new Date(podcast.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
            {podcast.duration}
          </span>
        </div>
      </div>
      
      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {podcast.topics.map((topic, index) => (
          <span 
            key={index}
            className="text-xs bg-gray-100 text-charcoal/70 px-2 py-1 rounded"
          >
            {topic}
          </span>
        ))}
      </div>
      
      {/* Description */}
      <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{podcast.description}</p>
      
      {/* Audio Player */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={togglePlayPause}
          className="w-10 h-10 flex items-center justify-center bg-navy text-white rounded-full flex-shrink-0 hover:bg-navy/90 transition-colors"
        >
          {audioState.isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full bg-navy transition-all duration-100",
                audioState.isPlaying ? "bg-gold" : "bg-navy"
              )} 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-charcoal/60 mt-1">
            <span>{formatTime(audioState.currentTime)}</span>
            <span>{formatTime(audioState.duration)}</span>
          </div>
        </div>
        
        <a 
          href={podcast.audioUrl} 
          download
          className="w-8 h-8 flex items-center justify-center text-navy bg-navy/5 rounded-full hover:bg-navy/10 transition-colors"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default PodcastItem;
