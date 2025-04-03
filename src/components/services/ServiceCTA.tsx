import React from 'react';
import { Link } from 'react-router-dom';
// Assuming Icon component maps names to SVGs or similar
// import { Icon } from '@/components/ui/Icon'; 
// Using a simple span for icon placeholder for now
const Icon = ({ name, className }: { name: string, className?: string }) => <span className={`inline-block ${className}`}>({name})</span>;

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  phoneNumber?: string;
  ctaTagline?: string; // Add tagline prop from practice CTA
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  description,
  buttonText,
  phoneNumber,
  ctaTagline // Destructure tagline
}) => {
  return (
    // Use white background for the section
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Use mondrian-grid for layout */}
        <div className="mondrian-grid grid-cols-1 md:grid-cols-12">

          {/* Text content area (span 7) */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center mondrian-border-r">
            {/* Optional Tagline */}
            {ctaTagline && (
              <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-4" data-animation="fade-in">
                {ctaTagline}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary" data-animation="fade-in" data-animation-delay="100">
              {title}
            </h2>
            <p className="text-lg text-gray-700 mb-8" data-animation="fade-in" data-animation-delay="200">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4" data-animation="fade-in" data-animation-delay="300">
              <Link 
                to="/contact" 
                // Use gold color for primary CTA button, black text
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-black bg-gold text-black font-semibold text-lg hover:bg-black hover:text-gold transition-colors duration-300 mondrian-interactive"
              >
                {buttonText} <span className="ml-2">→</span>
              </Link>
              {phoneNumber && (
                <a 
                  href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                  // Secondary button style: black border, white bg, primary text
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-black bg-white text-primary font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 mondrian-interactive"
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  {phoneNumber}
                </a>
              )}
            </div>
          </div>

          {/* Mondrian color blocks area (span 5) */}
          <div className="hidden md:grid md:col-span-5 grid-rows-2 grid-cols-3 gap-0">
              {/* Example color block layout */}
              <div className="col-span-2 row-span-1 mondrian-blue"></div>
              <div className="col-span-1 row-span-1 mondrian-white mondrian-border-l"></div>
              <div className="col-span-1 row-span-1 mondrian-red mondrian-border-t"></div>
              <div className="col-span-2 row-span-1 mondrian-yellow mondrian-border-l mondrian-border-t"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 