import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { practiceAreasData } from '@/data/practiceAreasData';
import ConsultationCTA from '@/components/ConsultationCTA';
import MondrianDecoration from '@/components/MondrianDecoration';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import CallToAction from '@/components/shared/CallToAction';
import { logger } from '@/utils/logger';
import { normalizeServiceId } from '@/utils/practiceHelpers';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const PracticeArea: React.FC = () => {
  const { area } = useParams();
  const location = useLocation();
  
  // Improved logging for debugging purposes
  logger.debug('PracticeArea Component - Current URL:', location.pathname);
  logger.debug('Practice Area Component - URL Parameter:', area);
  logger.debug('Available Practice Areas:', practiceAreasData.map(p => ({ id: p.id, title: p.title })));
  
  // Use normalized ID for comparison to be more forgiving with matching
  const normalizedAreaId = area ? normalizeServiceId(area) : '';
  
  // Try to find the practice area by normalized ID for more robust matching
  const practiceData = practiceAreasData.find(practice => 
    normalizeServiceId(practice.id) === normalizedAreaId
  );
  
  logger.debug('Matched Practice Area:', practiceData ? { id: practiceData.id, title: practiceData.title } : 'None');
  
  if (!practiceData) {
    logger.warn(`No practice area found for ID: ${area}. This might indicate a route conflict or missing definition.`);
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
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-8 py-24 text-center">
            <div className="mondrian-grid">
              <div className="col-span-3 mondrian-red"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8">
                <h1 className="font-display text-black text-4xl md:text-5xl mb-8">Practice Area Not Found</h1>
                <p className="text-xl mb-8">The practice area you're looking for doesn't exist.</p>
                <p className="text-md mb-8">Attempted to find: "{area}"</p>
                <Button asChild className="mondrian-button yellow">
                  <Link to="/practice">View All Practice Areas</Link>
                </Button>
              </div>
              <div className="col-span-3 mondrian-blue"></div>
            </div>
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
              {/* Use the first letter of practice area to determine color */}
              <div className={`col-span-3 ${
                practiceData.title.toLowerCase().charAt(0) <= 'h' ? 'mondrian-red' : 
                practiceData.title.toLowerCase().charAt(0) <= 'p' ? 'mondrian-blue' : 'mondrian-yellow'
              }`}></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h1 className="reveal font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">{practiceData.title}</h1>
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
                <h2 className="reveal font-display text-black text-3xl mb-8">Our Principles</h2>
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
                    <span className="font-display text-white text-3xl font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content block */}
                  <div className="col-span-12 md:col-span-10 mondrian-grid-item bg-white p-8">
                    {/* Add Mondrian decoration to the first principle */}
                    {index === 0 && <MondrianDecoration position="left" variant={1} />}
                    
                    <h3 className="font-display text-black text-2xl mb-4">{principle.title}</h3>
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
                <h2 className="reveal font-display text-black text-3xl mb-8">Our Process</h2>
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
                        <span className="font-display text-white text-3xl">0{index + 1}</span>
                      </div>
                      <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-8">
                        {/* Add Mondrian decoration to the second step */}
                        {index === 1 && <MondrianDecoration position="right" variant={2} />}
                        
                        <h3 className="font-display text-black text-2xl mb-4">{step.title}</h3>
                        <p className="text-black/80 text-lg">{step.description}</p>
                      </div>
                    </>
                  )}
                  
                  {/* For odd indices, show blue block and content */}
                  {index % 2 === 1 && (
                    <>
                      <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-8">
                        <h3 className="font-display text-black text-2xl mb-4">{step.title}</h3>
                        <p className="text-black/80 text-lg">{step.description}</p>
                        
                        {/* Add Mondrian decoration to the last step */}
                        {index === practiceData.process.length - 1 && (
                          <MondrianDecoration position="left" variant={4} />
                        )}
                      </div>
                      <div className="col-span-12 md:col-span-3 mondrian-blue flex items-center justify-center p-8">
                        <span className="font-display text-white text-3xl">0{index + 1}</span>
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

export default PracticeArea;
