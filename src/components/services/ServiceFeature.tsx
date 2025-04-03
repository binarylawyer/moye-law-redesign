import React from 'react';
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
    <div className="features-section">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">{title}</h2>
        {description && (
          <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">{description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`mondrian-border-t mondrian-border-l ${idx % 2 !== 0 ? 'md:border-r-0' : 'md:border-r-4'} ${idx >= features.length - 2 ? 'border-b-4' : 'border-b-0 md:border-b-4'} border-black p-6 md:p-8 bg-white mondrian-interactive`}
            data-animation="fade-in"
            data-animation-delay={`${idx * 100}`}
          >
            <div className="flex items-start gap-4">
              {feature.icon && (
                <div className="text-primary mt-1 flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center mondrian-yellow">
                    <Icon name={feature.icon} size={24} className="text-black" />
                  </div>
                </div>
              )}
              <div>
                <h3 className="font-display text-xl text-black mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeature; 