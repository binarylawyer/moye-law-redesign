import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedContent } from '@/types/services';

interface ServiceFeaturedContentProps {
  content: FeaturedContent;
}

const ServiceFeaturedContent: React.FC<ServiceFeaturedContentProps> = ({ content }) => {
  const { title, content: paragraphs, imageSrc, imageAlt } = content;

  return (
    <div className="py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Text Column - Now placed first for better mobile experience */}
          <motion.div 
            className={`lg:col-span-5 xl:col-span-4`}
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
          
          {/* Image Column - Large, gallery-style image */}
          {imageSrc && (
            <motion.div 
              className="lg:col-span-7 xl:col-span-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-auto object-cover"
              />
              {/* Optional caption in MoMA style */}
              <p className="mt-3 text-sm text-gray-500 font-sans">{imageAlt}</p>
            </motion.div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceFeaturedContent; 