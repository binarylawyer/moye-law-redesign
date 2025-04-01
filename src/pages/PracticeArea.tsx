import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { practiceAreasData } from '@/data/practiceAreasData';
import ConsultationCTA from '@/components/ConsultationCTA';

const PracticeArea: React.FC = () => {
  const { area } = useParams();
  const practiceData = practiceAreasData.find(practice => practice.id === area);
  
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (!practiceData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-8 py-24 text-center">
            <div className="mondrian-grid">
              <div className="col-span-3 mondrian-red"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8">
                <h1 className="font-serif text-black text-4xl md:text-5xl mb-8">Practice Area Not Found</h1>
                <p className="text-xl mb-8">The practice area you're looking for doesn't exist.</p>
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
                    <h3 className="font-serif text-black text-2xl mb-4">{principle.title}</h3>
                    <p className="text-black/80 text-lg">{principle.description}</p>
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
        
        {/* Mondrian-style divider */}
        <div className="mondrian-divider max-w-7xl mx-auto mb-16">
          <div className="mondrian-divider-red"></div>
          <div className="mondrian-divider-white"></div>
          <div className="mondrian-divider-blue"></div>
          <div className="mondrian-divider-yellow"></div>
        </div>
        
        {/* Using the ConsultationCTA component instead of inline CTA */}
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PracticeArea;
