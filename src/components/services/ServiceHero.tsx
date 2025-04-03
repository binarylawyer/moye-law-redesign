import React from 'react';

// Simplified props
interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description }) => {
  return (
    // Use white background, add padding and bottom border
    <section className="bg-white py-16 md:py-24 mondrian-border-b">
      <div className="container mx-auto px-4">
        {/* Simple 2-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
          
          {/* Text Content Area (Span 7 columns on medium screens) */}
          <div className="md:col-span-7 flex flex-col justify-center pr-8 md:pr-12 py-8">
            <h1 
              className="text-4xl md:text-6xl font-display mb-6 text-primary" // Use primary text color
              data-animation="fade-in"
            >
              {title}
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-700 max-w-3xl" // Use readable gray text
              data-animation="fade-in"
              data-animation-delay="150"
            >
              {description}
            </p>
          </div>

          {/* Mondrian Color Block Area (Span 5 columns on medium screens) */}
          {/* Add a thick left border to separate from text */}
          <div className="hidden md:flex md:col-span-5 mondrian-red mondrian-border-l items-center justify-center min-h-[200px]">
             {/* Optionally add subtle text or keep blank */}
             {/* <span className="mondrian-text-on-color text-sm opacity-50">M</span> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero; 