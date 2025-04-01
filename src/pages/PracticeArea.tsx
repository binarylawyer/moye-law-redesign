
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
          <div className="container mx-auto px-24 py-96 text-center">
            <h1 className="font-serif text-navy text-4xl md:text-5xl mb-32">Practice Area Not Found</h1>
            <p className="text-xl mb-32">The practice area you're looking for doesn't exist.</p>
            <Button asChild className="bg-gold hover:bg-gold/90 text-white text-lg">
              <Link to="/practice">View All Practice Areas</Link>
            </Button>
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
        {/* Header Section */}
        <section className="py-72 md:py-96 bg-pastel-blue/20">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="reveal font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">{practiceData.title}</h1>
              <p className="reveal text-xl md:text-2xl text-charcoal/80 mx-auto">{practiceData.introduction}</p>
            </div>
          </div>
        </section>
        
        {/* Principles Section */}
        <section className="py-72 md:py-96">
          <div className="container mx-auto px-8">
            <h2 className="reveal font-serif text-navy text-4xl mb-24 text-center">Our Principles</h2>
            
            <div className="space-y-72 max-w-5xl mx-auto">
              {practiceData.principles.map((principle, index) => (
                <div key={index} className="reveal flex flex-col md:flex-row md:items-start gap-16">
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
                      <span className="font-serif text-gold text-2xl">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-ocean-blue text-3xl mb-8 text-center md:text-left">{principle.title}</h3>
                    <p className="text-charcoal/80 text-xl">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-72 md:py-96 bg-gradient-to-br from-pastel-blue/30 to-white">
          <div className="container mx-auto px-8">
            <h2 className="reveal font-serif text-navy text-4xl mb-24 text-center">Our Process</h2>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-navy/20 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-96">
                {practiceData.process.map((step, index) => (
                  <div 
                    key={index} 
                    className="reveal relative flex flex-col md:flex-row"
                    style={{ transitionDelay: `${0.1 * index}s` }}
                  >
                    <div className="md:w-1/2 md:text-right md:pr-64 mb-32 md:mb-0">
                      <span className="md:hidden absolute left-8 top-8 w-12 h-12 bg-ocean-blue rounded-full transform -translate-x-1/2"></span>
                      <h3 className="font-serif text-navy text-3xl mb-8 md:pl-0">{step.title}</h3>
                      {index % 2 === 0 && (
                        <p className="text-charcoal/80 text-xl">{step.description}</p>
                      )}
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-8 w-12 h-12 bg-ocean-blue rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-64 pl-32">
                      {index % 2 === 1 && (
                        <h3 className="font-serif text-navy text-3xl mb-8 md:hidden">{step.title}</h3>
                      )}
                      {index % 2 === 1 && (
                        <p className="text-charcoal/80 text-xl">{step.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Using the ConsultationCTA component instead of inline CTA */}
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PracticeArea;
