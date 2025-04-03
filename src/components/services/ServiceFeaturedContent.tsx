import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedContent } from '@/types/services';

interface ServiceFeaturedContentProps {
  content: FeaturedContent;
}

const ServiceFeaturedContent: React.FC<ServiceFeaturedContentProps> = ({ content }) => {
  const { title, content: paragraphs, imageSrc, imageAlt } = content;
  
  // Check if the source is a video (ends with mp4, webm, etc.)
  const isVideo = imageSrc?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Text Column - Now placed first for better mobile experience */}
          <motion.div 
            className={`lg:col-span-5 xl:col-span-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-normal tracking-tight mb-8 md:mb-12">
              {title}
            </h2>
            
            <div className="space-y-6">
              {paragraphs.map((paragraph, idx) => (
                <motion.p 
                  key={idx} 
                  className="text-base md:text-lg text-gray-700 font-sans leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
          
          {/* Media Column - Large, gallery-style image or video with filter */}
          {imageSrc && (
            <motion.div 
              className="lg:col-span-7 xl:col-span-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-md shadow-md">
                {isVideo ? (
                  // Video with constraints
                  <div className="relative w-full aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={imageSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Semi-transparent overlay for video */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent mix-blend-multiply"></div>
                  </div>
                ) : (
                  // Image with filter overlay
                  <div className="relative">
                    <img
                      src={imageSrc}
                      alt={imageAlt || title}
                      className="w-full h-auto object-cover filter brightness-90 contrast-105"
                    />
                    {/* Semi-transparent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent mix-blend-multiply"></div>
                  </div>
                )}
                {/* Optional caption */}
                <p className="mt-3 text-sm text-gray-500 font-sans">{imageAlt}</p>
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceFeaturedContent; 