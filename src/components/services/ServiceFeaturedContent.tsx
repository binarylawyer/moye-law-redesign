import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FeaturedContent } from '@/types/services';

interface ServiceFeaturedContentProps {
  content: FeaturedContent;
}

const ServiceFeaturedContent: React.FC<ServiceFeaturedContentProps> = ({ content }) => {
  const { title, content: paragraphs, imageSrc, imageAlt, callToAction } = content;
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Check if the source is a video (ends with mp4, webm, etc.)
  const isVideo = imageSrc?.match(/\.(mp4|webm|ogg)$/i);

  // Effect to handle custom video looping at 7 seconds (updated from 6)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 7) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Split paragraphs for before and after media
  const beforeMediaParagraphs = paragraphs.slice(0, 2);
  const afterMediaParagraphs = paragraphs.slice(2);

  return (
    <div className="py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Updated layout for text wrapping around media */}
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Title and initial paragraphs on the left */}
          <div className="col-span-12 md:col-span-5">
            {/* Title with gallery spacing */}
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-normal tracking-tight mb-8 md:mb-10 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            
            {/* First two paragraphs beside the image */}
            <div className="text-wrapper">
              {beforeMediaParagraphs.map((paragraph, idx) => (
                <motion.p 
                  key={idx} 
                  className="text-base md:text-lg text-gray-700 font-sans leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
          
          {/* Media section - aligned right */}
          {imageSrc && (
            <motion.div 
              className="col-span-12 md:col-span-7 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Mondrian-inspired frame */}
                <div className="relative border-8 border-black p-4 bg-white">
                  {isVideo ? (
                    // Video with constraints
                    <div className="relative w-full aspect-video">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={imageSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Dark blue filter overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/85 to-[#3B82F6]/75 mix-blend-multiply"></div>
                      {/* Additional texture overlay for gallery aesthetic */}
                      <div className="absolute inset-0 mix-blend-overlay" style={{ 
                        backgroundImage: 'url("/images/textures/subtle-grain.png")',
                        opacity: 0.25
                      }}></div>
                    </div>
                  ) : (
                    // Image 
                    <div className="relative w-full aspect-video">
                      <img
                        src={imageSrc}
                        alt={imageAlt || title}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark blue filter overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/85 to-[#3B82F6]/75 mix-blend-multiply"></div>
                      {/* Additional texture overlay for gallery aesthetic */}
                      <div className="absolute inset-0 mix-blend-overlay" style={{ 
                        backgroundImage: 'url("/images/textures/subtle-grain.png")',
                        opacity: 0.25
                      }}></div>
                    </div>
                  )}
                  {/* Decorative color blocks */}
                  <div className="absolute top-0 left-0 w-24 h-8 bg-[#FFD500] -translate-x-4 -translate-y-4 -z-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#003B98] translate-x-4 translate-y-4 -z-10"></div>
                </div>
                
                {/* Gallery-style minimal caption */}
                <p className="mt-3 text-sm text-gray-500 font-sans italic">{imageAlt}</p>
              </div>
            </motion.div>
          )}
          
          {/* Remaining paragraphs that wrap below the image */}
          <div className="col-span-12 mt-8">
            <div className="text-wrapper">
              {afterMediaParagraphs.map((paragraph, idx) => (
                <motion.p 
                  key={idx + beforeMediaParagraphs.length} 
                  className="text-base md:text-lg text-gray-700 font-sans leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx + beforeMediaParagraphs.length) * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
              
              {/* Call to action if provided */}
              {callToAction && (
                <motion.p
                  className="text-base md:text-lg font-medium text-[#003B98] mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {callToAction}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeaturedContent; 