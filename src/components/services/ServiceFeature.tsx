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
    <div className="features-section py-16 md:py-24">
      {/* Section title with MoMA-inspired minimal styling */}
      <div className="mb-20">
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-normal tracking-tight text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {/* Gallery-style grid for features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Icon with minimal styling */}
            {feature.icon && (
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Icon name={feature.icon} size={28} className="text-black" />
                </div>
              </div>
            )}
            
            {/* Feature title with clean typography */}
            <h3 className="font-display text-xl text-black mb-4">{feature.title}</h3>
            
            {/* Description with proper spacing */}
            <p className="text-gray-700 font-sans leading-relaxed">{feature.description}</p>
            
            {/* Minimal accent - small colored dot */}
            <div className={`mt-6 w-3 h-3 rounded-full ${
              idx % 3 === 0 ? 'bg-mondrian-blue' : 
              idx % 3 === 1 ? 'bg-mondrian-red' : 
              'bg-mondrian-yellow'
            }`}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeature; 