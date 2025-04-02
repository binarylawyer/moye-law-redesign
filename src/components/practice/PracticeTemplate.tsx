import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row">
              {/* Mondrian composition on left */}
              <div className="w-full md:w-1/3 h-64 md:h-auto">
                <MondrianClassicComposition />
              </div>
              
              {/* White content block */}
              <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:w-2/3">
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
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-display text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-red"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Process step 1 */}
              <div className="flex flex-col md:flex-row">
                <div className={`${process[0].color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{process[0].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[0].title}</h3>
                  <p className="text-black/80 text-lg">{process[0].description}</p>
                </div>
              </div>
              
              {/* Process step 2 */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className={`${process[1].color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{process[1].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[1].title}</h3>
                  <p className="text-black/80 text-lg">{process[1].description}</p>
                </div>
              </div>
              
              {/* Process step 3 */}
              <div className="flex flex-col md:flex-row">
                <div className={`${process[2].color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{process[2].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[2].title}</h3>
                  <p className="text-black/80 text-lg">{process[2].description}</p>
                </div>
              </div>
              
              {/* Process step 4 with Mondrian decoration */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className={`${process[3].color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{process[3].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                  <h3 className="font-display text-black text-2xl mb-4">{process[3].title}</h3>
                  <p className="text-black/80 text-lg">{process[3].description}</p>
                  
                  {/* Small Mondrian decoration in bottom right */}
                  <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1">
                    <div className="mondrian-red"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="mondrian-yellow"></div>
                  </div>
                </div>
              </div>
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
        <div className="max-w-7xl mx-auto px-8 mb-1">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row">
                {/* Mondrian composition for the left section */}
                <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                  <MondrianClassicComposition />
                </div>
                
                <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
                
                <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                  <h2 className="font-display text-3xl mb-4">{ctaTitle}</h2>
                  <p className="mb-6">{ctaDescription}</p>
                  
                  <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium">
                    {ctaTagline}
                  </div>
                </div>
                
                <div className="bg-gray-200 w-full md:w-1/6 p-8"></div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="mondrian-blue hover:bg-blue-700 text-white font-bold py-3 px-6 border-2 border-black inline-flex items-center">
                  {ctaButtonText}
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeTemplate; 