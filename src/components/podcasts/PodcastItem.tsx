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
    <div className="bg-white mondrian-border p-6 relative">
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
          <span className="text-xs font-medium mondrian-border px-2 py-1">
            {podcast.duration}
          </span>
        </div>
      </div>
      
      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {podcast.topics.map((topic, index) => (
          <span 
            key={index}
            className={`text-xs px-2 py-1 ${
              index % 3 === 0 ? 'mondrian-light-yellow text-navy' : 
              index % 3 === 1 ? 'mondrian-light-blue text-white' : 
              'bg-gray-100 text-charcoal/70'
            }`}
          >
            {topic}
          </span>
        ))}
      </div>
      
      {/* Description */}
      <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{podcast.description}</p>
      
      {/* Audio Player */}
      <div className="flex items-center space-x-4 pt-3 border-t-2 border-black">
        <button 
          onClick={togglePlayPause}
          className="w-10 h-10 flex items-center justify-center mondrian-blue text-white flex-shrink-0 hover:bg-navy/90 transition-colors mondrian-border"
        >
          {audioState.isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="h-2 w-full bg-gray-200 overflow-hidden">
            <div 
              className={cn(
                "h-full transition-all duration-100",
                audioState.isPlaying ? "mondrian-yellow" : "mondrian-blue"
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
          className="w-8 h-8 flex items-center justify-center text-navy mondrian-yellow mondrian-border"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default PodcastItem;
