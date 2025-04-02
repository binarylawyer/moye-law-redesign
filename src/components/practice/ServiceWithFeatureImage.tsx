import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceWithFeatureImageProps {
  serviceTitle: string;
  serviceDescription: string;
  imagePath?: string; // Optional image path
  callToActionText?: string;
  callToActionLink?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const ServiceWithFeatureImage: React.FC<ServiceWithFeatureImageProps> = ({ 
  serviceTitle, 
  serviceDescription,
  imagePath = '/images/service-default.jpg', // Default image if none provided
  callToActionText = 'Schedule a consultation',
  callToActionLink = '/contact',
  variant = 'primary'
}) => {
  // Define color classes based on variant
  const getColorClasses = () => {
    switch (variant) {
      case 'secondary':
        return {
          accent: 'mondrian-light-blue',
          border: 'border-[#4D80D4]',
          text: 'text-[#4D80D4]'
        };
      case 'tertiary':
        return {
          accent: 'mondrian-yellow',
          border: 'border-[#FFD500]',
          text: 'text-[#FFD500]'
        };
      default:
        return {
          accent: 'mondrian-red',
          border: 'border-[#D6001C]',
          text: 'text-[#D6001C]'
        };
    }
  };
  
  const colorClasses = getColorClasses();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[400px]">
          {/* Left content area */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl text-black mb-6">{serviceTitle}</h2>
              <p className="text-lg text-black/80 mb-8">{serviceDescription}</p>
              
              <Link 
                to={callToActionLink} 
                className={`inline-flex items-center ${colorClasses.text} font-medium hover:underline`}
              >
                {callToActionText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right image/graphic area */}
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative">
              {/* Main image with mondrian border */}
              <div className={`border-4 border-black overflow-hidden h-[400px] relative`}>
                <img 
                  src={imagePath} 
                  alt={serviceTitle}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback for image loading errors
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/service-default.jpg';
                  }}
                />
                
                {/* Overlay with slight color tint */}
                <div className={`absolute inset-0 ${colorClasses.accent} opacity-10`}></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${colorClasses.accent} border-2 border-black z-10`}></div>
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 ${colorClasses.accent} border-2 border-black z-10`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWithFeatureImage; 