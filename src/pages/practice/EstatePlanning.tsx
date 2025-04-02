import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { practiceAreasData } from '@/data/practiceAreasData';
import MondrianDecoration from '@/components/MondrianDecoration';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import CallToAction from '@/components/shared/CallToAction';
import { logger } from '@/utils/logger';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const EstatePlanning: React.FC = () => {
  // Find the estate planning data from practiceAreasData
  const practiceData = practiceAreasData.find(practice => practice.id === 'estate-planning');
  
  // Log for debugging - use string format instead of passing objects
  if (practiceData) {
    logger.debug(`Estate Planning Component - Data found: ${practiceData.id}, ${practiceData.title}`);
  } else {
    logger.debug('Estate Planning Component - Data not found');
  }
  
  // Use our custom intersection observer hook to prevent memory leaks
  const { observe, unobserve } = useIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  // Observe elements when component mounts
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observe(el));
    
    // Cleanup function to unobserve elements
    return () => {
      revealElements.forEach((el) => unobserve(el));
    };
  }, [observe, unobserve]);

  if (!practiceData) {
    logger.error('Estate Planning data not found in practiceAreasData');
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-8 py-24 text-center">
            <h1 className="font-serif text-black text-4xl md:text-5xl mb-8">Error Loading Estate Planning</h1>
            <p className="text-xl mb-8">Unable to load practice area data. Please try again later.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Header Section - Mondrian Style */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              {/* Using red color for Estate Planning (based on first letter 'E') */}
              <div className="col-span-3 mondrian-red"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h1 className="reveal font-serif text-black text-4xl md:text-5xl lg:text-6xl mb-8">{practiceData.title}</h1>
                <p className="reveal text-xl text-black/80 mx-auto">{practiceData.introduction}</p>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            </div>
          </div>
        </section>
        
        {/* Principles Section - Mondrian Style */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="reveal font-serif text-black text-3xl mb-8">Our Principles</h2>
              </div>
              <div className="col-span-3 mondrian-yellow"></div>
            </div>
            
            <div className="space-y-16 max-w-5xl mx-auto">
              {practiceData.principles.map((principle, index) => (
                <div key={index} className="mondrian-grid reveal">
                  {/* Number block - alternating colors */}
                  <div className={`col-span-12 md:col-span-2 flex items-center justify-center ${
                    index % 3 === 0 ? 'mondrian-red' : 
                    index % 3 === 1 ? 'mondrian-blue' : 'mondrian-yellow'
                  }`}>
                    <span className="font-serif text-white text-3xl font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content block */}
                  <div className="col-span-12 md:col-span-10 mondrian-grid-item bg-white p-8">
                    {/* Add Mondrian decoration to the first principle */}
                    {index === 0 && <MondrianDecoration position="left" variant={1} />}
                    
                    <h3 className="font-serif text-black text-2xl mb-4">{principle.title}</h3>
                    <p className="text-black/80 text-lg">{principle.description}</p>
                    
                    {/* Add Mondrian decoration to the third principle on the right */}
                    {index === 2 && <MondrianDecoration position="right" variant={3} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section - Mondrian Style */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-blue"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="reveal font-serif text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Process steps - Mondrian Grid */}
              {practiceData.process.map((step, index) => (
                <div 
                  key={index} 
                  className="reveal mondrian-grid mb-4"
                  style={{ transitionDelay: `${0.1 * index}s` }}
                >
                  {/* For even indices, show red block and content */}
                  {index % 2 === 0 && (
                    <>
                      <div className="col-span-12 md:col-span-3 mondrian-red flex items-center justify-center p-8">
                        <span className="font-serif text-white text-3xl">0{index + 1}</span>
                      </div>
                      <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-8">
                        {/* Add Mondrian decoration to the second step */}
                        {index === 1 && <MondrianDecoration position="right" variant={2} />}
                        
                        <h3 className="font-serif text-black text-2xl mb-4">{step.title}</h3>
                        <p className="text-black/80 text-lg">{step.description}</p>
                      </div>
                    </>
                  )}
                  
                  {/* For odd indices, show blue block and content */}
                  {index % 2 === 1 && (
                    <>
                      <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-8">
                        <h3 className="font-serif text-black text-2xl mb-4">{step.title}</h3>
                        <p className="text-black/80 text-lg">{step.description}</p>
                        
                        {/* Add Mondrian decoration to the last step */}
                        {index === practiceData.process.length - 1 && (
                          <MondrianDecoration position="left" variant={4} />
                        )}
                      </div>
                      <div className="col-span-12 md:col-span-3 mondrian-blue flex items-center justify-center p-8">
                        <span className="font-serif text-white text-3xl">0{index + 1}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Replace standard Mondrian divider with the new CTA version */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <MondrianDividerCTA 
            text={`Ask us about ${practiceData.title} services:`}
          />
        </div>
        
        {/* Using the new Mondrian-style CallToAction component */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default EstatePlanning; 