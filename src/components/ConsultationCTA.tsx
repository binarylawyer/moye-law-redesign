
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const ConsultationCTA: React.FC = () => {
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
    <section className="py-96 bg-muted-navy text-white">
      <div className="container mx-auto px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            ref={el => elementsRef.current[0] = el} 
            className="reveal font-serif text-white mb-32"
          >
            Schedule a Confidential Consultation
          </h2>
          
          <p 
            ref={el => elementsRef.current[1] = el} 
            className="reveal text-lg mb-64 text-white/80"
            style={{ transitionDelay: '0.1s' }}
          >
            Take the first step toward securing your legacy. Our confidential consultation process ensures your information remains private while we develop solutions tailored to your specific needs.
          </p>
          
          <Button 
            ref={el => elementsRef.current[2] = el} 
            className="reveal bg-gold hover:bg-gold/90 text-white font-medium px-32 py-24"
            style={{ transitionDelay: '0.2s' }}
          >
            Request Consultation
          </Button>
          
          <p 
            ref={el => elementsRef.current[3] = el} 
            className="reveal text-sm mt-24 text-white/60"
            style={{ transitionDelay: '0.3s' }}
          >
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
