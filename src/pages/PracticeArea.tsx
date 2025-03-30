
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { practiceAreasData } from '@/data/practiceAreasData';

const PracticeArea: React.FC = () => {
  const { area } = useParams<{ area: string }>();
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
        <main className="pt-24 md:pt-32">
          <div className="container mx-auto px-24 py-96 text-center">
            <h1 className="font-serif text-navy text-4xl md:text-5xl mb-32">Practice Area Not Found</h1>
            <p className="mb-32">The practice area you're looking for doesn't exist.</p>
            <Button asChild className="bg-gold hover:bg-gold/90 text-white">
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
      <main className="pt-24 md:pt-32">
        {/* Header Section */}
        <section className="py-64 md:py-96">
          <div className="container mx-auto px-24">
            <h1 className="reveal font-serif text-navy text-4xl md:text-5xl lg:text-6xl mb-32">{practiceData.title}</h1>
            <p className="reveal max-w-3xl text-charcoal/80 text-lg">{practiceData.introduction}</p>
          </div>
        </section>
        
        {/* Principles Section */}
        <section className="py-64 md:py-96">
          <div className="container mx-auto px-24">
            <h2 className="reveal font-serif text-navy text-3xl mb-64">Our Principles</h2>
            
            <div className="space-y-64">
              {practiceData.principles.map((principle, index) => (
                <div key={index} className="reveal flex flex-col md:flex-row md:items-start gap-32">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
                      <span className="font-serif text-gold text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-navy text-2xl mb-16">{principle.title}</h3>
                    <p className="text-charcoal/80">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-64 md:py-96 bg-light-gray">
          <div className="container mx-auto px-24">
            <h2 className="reveal font-serif text-navy text-3xl mb-64">Our Process</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy/20 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-96">
                {practiceData.process.map((step, index) => (
                  <div 
                    key={index} 
                    className="reveal relative flex flex-col md:flex-row"
                    style={{ transitionDelay: `${0.1 * index}s` }}
                  >
                    <div className="md:w-1/2 md:text-right md:pr-64 mb-32 md:mb-0">
                      <span className="md:hidden absolute left-8 top-8 w-8 h-8 bg-navy rounded-full transform -translate-x-1/2"></span>
                      <h3 className="font-serif text-navy text-2xl mb-16 md:pl-0">{step.title}</h3>
                      {index % 2 === 0 && (
                        <p className="text-charcoal/80">{step.description}</p>
                      )}
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-8 w-8 h-8 bg-navy rounded-full transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-64 pl-32">
                      {index % 2 === 1 && (
                        <h3 className="font-serif text-navy text-2xl mb-16 md:hidden">{step.title}</h3>
                      )}
                      {index % 2 === 1 && (
                        <p className="text-charcoal/80">{step.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-64 md:py-96 bg-navy text-white">
          <div className="container mx-auto px-24 text-center">
            <h2 className="reveal font-serif text-3xl mb-32">Ready to discuss your {practiceData.title.toLowerCase()} needs?</h2>
            <p className="reveal max-w-xl mx-auto mb-32">Our experienced attorneys are available to provide personalized guidance tailored to your specific situation.</p>
            <Button className="reveal bg-gold hover:bg-gold/90 text-white mt-32">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeArea;
