import React from 'react';

interface ResourcePageHeaderProps {
  title: string;
  description: string;
  variant?: 'red' | 'blue' | 'yellow';
}

const ResourcePageHeader: React.FC<ResourcePageHeaderProps> = ({ 
  title, 
  description,
  variant = 'red' 
}) => {
  // Get color classes based on variant
  const getColorClasses = () => {
    switch (variant) {
      case 'blue':
        return ['mondrian-blue', 'mondrian-yellow'];
      case 'yellow':
        return ['mondrian-yellow', 'mondrian-red'];
      case 'red':
      default:
        return ['mondrian-red', 'mondrian-blue'];
    }
  };

  const [leftColor, rightColor] = getColorClasses();

  return (
    <section className="py-20 md:py-24 bg-white relative">
      {/* Horizontal Mondrian lines that extend beyond screen width */}
      <div className="absolute top-16 left-0 w-full h-4 mondrian-blue -z-10"></div>
      <div className="absolute bottom-16 left-0 w-full h-4 mondrian-red -z-10"></div>
      
      <div className="container mx-auto px-8">
        {/* Mondrian-style title container */}
        <div className="mondrian-grid mb-12">
          <div className={`col-span-3 ${leftColor}`}></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-black mb-6">
              {title}
            </h1>
            <p className="text-black/80 text-lg md:text-xl">
              {description}
            </p>
          </div>
          <div className={`col-span-3 ${rightColor}`}></div>
        </div>
      </div>
    </section>
  );
};

export default ResourcePageHeader; 