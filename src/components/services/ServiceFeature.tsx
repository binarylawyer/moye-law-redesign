import React from 'react';
import { motion } from 'framer-motion';
import { ServiceFeature as ServiceFeatureType } from '@/types/services';
import { Icon } from '@/components/ui/Icon';

interface ServiceFeatureProps {
  features: ServiceFeatureType[];
  title?: string;
  description?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ 
  features,
  title = "Service Highlights",
  description
}) => {
  return (
    <div className="features-section py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section title with MOMA-inspired asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5 lg:col-start-2">
            <motion.h2 
              className="text-3xl md:text-5xl font-display font-normal tracking-tight text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
          </div>
          
          <div className="lg:col-span-5">
            {description && (
              <motion.p 
                className="text-lg text-gray-700 font-sans leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
        
        {/* Museum gallery-style grid for features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-20 md:gap-y-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className={`feature-card relative ${idx % 3 === 1 ? 'md:mt-12' : idx % 3 === 2 ? 'md:mt-24' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Museum gallery-inspired feature presentation */}
              <div className="mb-8">
                {/* Decorative color block - museum exhibit style */}
                <div className={`absolute top-0 left-0 w-24 h-1 ${
                  idx % 5 === 0 ? 'bg-[#D42E12]' : // Mondrian red 
                  idx % 5 === 1 ? 'bg-[#0A2342]' : // Navy
                  idx % 5 === 2 ? 'bg-[#F9D923]' : // Mondrian yellow
                  idx % 5 === 3 ? 'bg-[#226CE0]' : // Mondrian blue
                  'bg-[#C99D56]' // Gold accent
                }`}></div>
                
                {/* Icon with museum-style presentation */}
                {feature.icon && (
                  <div className="mt-8 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Icon name={feature.icon} size={28} className="text-black" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Feature title with gallery-style typography */}
              <h3 className="font-display text-2xl text-black mb-4">{feature.title}</h3>
              
              {/* Description with proper spacing and readability */}
              <p className="text-gray-700 font-sans leading-relaxed pr-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeature; 