import React from 'react';
import { FeaturedContent } from '@/types/services';

interface ServiceFeaturedContentProps {
  content: FeaturedContent;
}

const ServiceFeaturedContent: React.FC<ServiceFeaturedContentProps> = ({ content }) => {
  const { title, content: paragraphs, imageSrc, imageAlt } = content;

  return (
    <div className="max-w-full mx-auto">
      <div className="mondrian-grid grid-cols-1 md:grid-cols-12">
        
        {imageSrc && (
          <div className="hidden md:flex md:col-span-5 p-0 mondrian-border-r">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-full object-cover mondrian-border-r"
              data-animation="fade-in"
            />
          </div>
        )}
        
        <div className={`p-8 md:p-12 ${imageSrc ? 'md:col-span-7' : 'md:col-span-12'}`}>
          <h2 
            className="text-3xl md:text-4xl font-display mb-6 text-primary"
            data-animation="fade-in"
            data-animation-delay="100"
          >
            {title}
          </h2>
          
          <div className="space-y-4">
            {paragraphs.map((paragraph, idx) => (
              <p 
                key={idx} 
                className="text-lg text-gray-700"
                data-animation="fade-in"
                data-animation-delay={`${150 + idx * 50}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceFeaturedContent; 