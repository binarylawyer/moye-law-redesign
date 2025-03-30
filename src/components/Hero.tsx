
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="pt-48 pb-24 md:pt-64 lg:pt-96">
      <div className="container mx-auto px-24">
        {/* Main headline with more whitespace */}
        <div className="max-w-4xl mx-auto mb-96">
          <h1 
            ref={el => elementsRef.current[0] = el} 
            className="reveal font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-32 text-center leading-tight"
          >
            Family Values, <br className="hidden md:block" />Future-Forward Legal Solutions
          </h1>
          <p 
            ref={el => elementsRef.current[1] = el} 
            className="reveal text-lg md:text-xl text-center max-w-2xl mx-auto mb-64 text-charcoal/80"
            style={{ transitionDelay: '0.1s' }}
          >
            We combine time-honored legal expertise with innovative approaches to protect what matters most to you and your family.
          </p>
        </div>
        
        {/* Hero Image with Abstract Visualization */}
        <div 
          ref={el => elementsRef.current[2] = el} 
          className="reveal max-w-6xl mx-auto mb-96 relative aspect-[16/9] md:aspect-[21/9]"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute inset-0 bg-pastel-blue/30 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-1/3 w-1/2 h-1/3 bg-pastel-beige/50 rounded-r-full"></div>
            <div className="absolute right-1/4 bottom-1/4 w-1/3 h-1/3 bg-pastel-cream/50 rounded-full"></div>
            <div className="absolute right-1/5 top-1/5 w-1/5 h-2/5 bg-pastel-green/30 rounded-lg"></div>
            
            {/* Traditional elements (left side) */}
            <div className="absolute left-1/6 top-1/4 w-1/4 border-t border-navy/20"></div>
            <div className="absolute left-1/5 bottom-1/4 w-1/5 h-1/5 border border-navy/10 rounded-sm"></div>
            
            {/* Tech/Innovation elements (right side) */}
            <div className="absolute right-1/6 top-2/3 w-1/5 h-px bg-gold/50"></div>
            <div className="absolute right-1/4 top-1/3 w-px h-1/5 bg-gold/50"></div>
            <div className="absolute right-1/3 bottom-1/5 w-1/6 h-1/6 bg-navy/5 rounded-full"></div>
          </div>
        </div>

        {/* CTA Buttons with more whitespace */}
        <div 
          ref={el => elementsRef.current[3] = el} 
          className="reveal flex flex-col sm:flex-row justify-center gap-16 max-w-xl mx-auto mb-64"
          style={{ transitionDelay: '0.3s' }}
        >
          <Button className="primary-btn">
            Schedule a Consultation
          </Button>
          <Button variant="outline" className="outline-btn">
            Explore Our Services
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div 
          ref={el => elementsRef.current[4] = el} 
          className="reveal flex flex-col md:flex-row justify-center gap-32 md:gap-64 items-center text-sm text-charcoal/60 my-64"
          style={{ transitionDelay: '0.4s' }}
        >
          <p>Family-owned since 1985</p>
          <div className="hidden md:block h-1 w-1 bg-charcoal/20 rounded-full"></div>
          <p>Serving New York & Virginia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
