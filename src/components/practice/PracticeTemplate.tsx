import React, { useEffect } from 'react';
// Remove Header and Footer imports as Layout provides them
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { Link } from 'react-router-dom';
import '../../styles/mondrian.css';

// Define TypeScript types for the data structure
export type PrincipleType = {
  number: string;
  title: string;
  description: string;
  color: string;
};

export type ProcessStepType = {
  number: string;
  title: string;
  description: string;
  color: string;
};

export type KeyConsiderationType = {
  title: string;
  description: string;
  icon?: string; // Optional: For future icon integration
  personaTags?: string[]; // Optional: To tag which persona it primarily addresses
};

export type PracticeTemplateProps = {
  title: string;
  description: string;
  principles: PrincipleType[];
  keyConsiderations?: KeyConsiderationType[]; // Add the new data prop
  process: ProcessStepType[];
  phoneNumber: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaTagline: string;
  phoneLabel: string;
};

const PracticeTemplate: React.FC<PracticeTemplateProps> = ({
  title,
  description,
  principles,
  keyConsiderations = [], // Default to empty array
  process,
  phoneNumber,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaTagline,
  phoneLabel
}) => {
  // Add useEffect to handle reveal animations within the template
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Optional: remove visibility when scrolling out of view
          // entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Select all elements with the 'reveal' class *within this component*
    const revealElements = document.querySelectorAll('.reveal'); 
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Remove min-h-screen if Layout handles it
    <div className="bg-white"> 
      {/* <Header /> REMOVED */}
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row">
              {/* Mondrian composition on left - changed from 1/3 to 1/4 width */}
              <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                <MondrianClassicComposition />
              </div>
              
              {/* Added spacing between Mondrian and content */}
              <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
              
              {/* White content block - adjusted width */}
              <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
                <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">{title}</h1>
                <p className="text-xl text-black/80">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-yellow"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-display text-black text-3xl mb-8">Our Principles</h2>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {principles.map((principle, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  {/* Number block with corresponding Mondrian color */}
                  <div className={`${principle.color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                    <span className="font-display text-white text-3xl font-bold">{principle.number}</span>
                  </div>
                  
                  {/* Content block */}
                  <div className="bg-white p-6 border-4 border-black flex-grow">
                    <h3 className="font-display text-black text-2xl mb-4">{principle.title}</h3>
                    <p className="text-black/80 text-lg">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Considerations Section (New Styling) */}
        {keyConsiderations.length > 0 && (
          <section className="py-24 bg-white"> {/* Increased vertical padding, white background */}
            <div className="container mx-auto px-8">
              <div className="mondrian-grid mb-20"> {/* Increased margin bottom */}
                <div className="col-span-3 mondrian-light-blue"></div>
                <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                  <h2 className="font-display text-black text-3xl mb-8">Key Considerations</h2>
                </div>
                <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
              </div>
              
              {/* Grid for the cards with more spacing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto"> 
                {keyConsiderations.map((item, index) => {
                  const colors = ['mondrian-red', 'mondrian-blue', 'mondrian-yellow'];
                  const bgColorClass = colors[index % colors.length];
                  
                  return (
                    // Outer Card: Rectangular frame, padding p-6, thick black border
                    <div 
                      key={index} 
                      className={`group reveal ${bgColorClass} p-6 border-4 border-black flex items-center justify-center`} 
                    >
                      {/* Inner Card: SQUARE, 85% size (10% bigger than before), centered, with more space between title and description */}
                      <div className="bg-light-gray p-3 border-2 border-black aspect-square transition-transform duration-300 ease-in-out group-hover:scale-[1.02] w-[85%] h-[85%] flex flex-col justify-center items-center"> 
                        <h3 className="font-display text-navy text-xl mb-5 text-center">{item.title}</h3>
                        <p className="text-charcoal/90 text-sm leading-relaxed text-center w-[90%]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
        {/* Process Section - Reverted to 2-Column Layout */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-20">
              {/* Title bar for Process Section */}
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-display text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-red"></div>
            </div>
            
            {/* Grid for Process Steps - Reverted to 2 columns, map all steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"> 
              {/* Map ALL process steps */}
              {process.map((step, index) => (
                <div 
                  key={index} 
                  // Use original padding p-8 
                  className="reveal bg-white p-8 border-4 border-black flex flex-col" 
                >
                  {/* Top section with number and title */}
                  <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-200">
                    {/* Number block with corresponding Mondrian color */}
                    <div className={`${step.color} w-16 h-16 flex-shrink-0 flex items-center justify-center mr-6`}>
                      <span className="font-display text-white text-2xl font-bold">{step.number}</span>
                    </div>
                    {/* Title */}
                    <h3 className="font-display text-primary text-2xl flex-grow">{step.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-black/80 text-lg flex-grow">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action button */}
        <section className="py-8">
          <div className="container mx-auto px-8 flex justify-center">
            <div className="mondrian-divider flex items-center w-full max-w-4xl">
              <div className="mondrian-yellow h-8 w-16 flex-shrink-0"></div>
              <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
                <span className="text-xl">{phoneLabel}: {phoneNumber}</span>
              </div>
              <div className="mondrian-red h-8 w-32 flex-shrink-0"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="mondrian-grid grid-cols-1 md:grid-cols-12">
                {/* Text content area (span 7) */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center mondrian-border-r">
                    <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-4">
                        {ctaTagline}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">
                        {ctaTitle}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        {ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-black bg-gold text-black font-semibold text-lg hover:bg-black hover:text-gold transition-colors duration-300 mondrian-interactive">
                            {ctaButtonText} <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
                {/* Mondrian color blocks area (span 5) */}
                <div className="hidden md:grid md:col-span-5 grid-rows-2 grid-cols-3 gap-0">
                    <div className="col-span-2 row-span-1 mondrian-blue"></div>
                    <div className="col-span-1 row-span-1 mondrian-white mondrian-border-l"></div>
                    <div className="col-span-1 row-span-1 mondrian-red mondrian-border-t"></div>
                    <div className="col-span-2 row-span-1 mondrian-yellow mondrian-border-l mondrian-border-t"></div>
                </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> REMOVED */}
    </div>
  );
};

export default PracticeTemplate; 