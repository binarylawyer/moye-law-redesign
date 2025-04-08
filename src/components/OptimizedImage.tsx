import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

/**
 * OptimizedImage Component
 * 
 * This component is specifically designed to optimize image loading performance,
 * particularly for the Largest Contentful Paint (LCP) metric.
 * 
 * Features:
 * - Proper dimensions that respect natural aspect ratio
 * - Only requires either width OR height, not both
 * - No aspect ratio forcing to prevent stretching
 * - High fetch priority option for critical images
 * - Async decoding for performance
 * - Proper loading attribute (eager for high priority, lazy for others)
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload high priority images
    if (priority) {
      const imagePreloader = new Image();
      imagePreloader.src = src;
      
      // Handle the case where the image is already cached
      if (imagePreloader.complete) {
        setIsLoaded(true);
        onLoad?.();
      } else {
        imagePreloader.onload = () => {
          setIsLoaded(true);
          onLoad?.();
        };
      }
    }
  }, [src, priority, onLoad]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        // Only set aspect ratio if both dimensions are provided
        ...(width && height ? { aspectRatio: `${width}/${height}` } : {}),
        contentVisibility: 'auto',
        transition: 'opacity 0.3s',
      }}
      onLoad={handleImageLoad}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
};

export default OptimizedImage; 