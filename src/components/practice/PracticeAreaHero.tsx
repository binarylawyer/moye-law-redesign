import React from 'react';

interface PracticeAreaHeroProps {
  title: string;
  description: string;
  subtitle?: string;
  imagePath?: string;
}

const PracticeAreaHero: React.FC<PracticeAreaHeroProps> = ({ 
  title, 
  description, 
  subtitle,
  imagePath 
}) => {
  // Determine color based on first letter of title for Mondrian aesthetics
  const getMondrianColor = () => {
    const firstLetter = title.toLowerCase().charAt(0);
    if (firstLetter <= 'h') return 'mondrian-red';
    if (firstLetter <= 'p') return 'mondrian-blue';
    return 'mondrian-yellow';
  };

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="mondrian-grid">
          {/* Mondrian-style colored block - color determined by title */}
          <div className={`col-span-3 ${getMondrianColor()}`}>
            {imagePath && (
              <div className="h-full w-full overflow-hidden relative">
                <img 
                  src={imagePath} 
                  alt={title} 
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
              </div>
            )}
          </div>
          
          {/* Content in white block with Mondrian border */}
          <div className="col-span-6 mondrian-grid-item bg-white p-6 text-center">
            <h1 className="reveal font-serif text-black text-4xl md:text-5xl mb-4 !opacity-100">{title}</h1>
            
            {subtitle && (
              <h2 className="reveal font-serif text-black/80 text-2xl mb-4 !opacity-100">{subtitle}</h2>
            )}
            
            <p className="reveal text-xl text-black/80 mx-auto !opacity-100">
              {description}
            </p>
          </div>
          
          {/* White block with black border */}
          <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black">
            {imagePath && (
              <div className="h-full w-full overflow-hidden relative">
                <img 
                  src={imagePath} 
                  alt={title} 
                  className="absolute inset-0 h-full w-full object-cover opacity-10"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaHero; 