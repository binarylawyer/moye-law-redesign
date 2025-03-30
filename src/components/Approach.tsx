
import React, { useRef, useEffect } from 'react';

const Approach: React.FC = () => {
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
    <section className="py-96 bg-white">
      <div className="container mx-auto px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={el => elementsRef.current[0] = el} 
            className="reveal font-serif mb-64"
          >
            Our Approach
          </h2>
          
          <p 
            ref={el => elementsRef.current[1] = el} 
            className="reveal text-xl md:text-2xl font-serif font-light text-charcoal mb-32 leading-relaxed"
            style={{ transitionDelay: '0.1s' }}
          >
            We blend personalized attention with technological innovation to deliver legal solutions that are both traditional in values and forward-thinking in execution.
          </p>
          
          <div 
            ref={el => elementsRef.current[2] = el} 
            className="reveal flex justify-center items-center gap-24 text-charcoal/60 my-64"
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Traditional & Innovative elements side by side */}
            <div className="text-center">
              <span className="block text-lg md:text-xl font-serif mb-16">Traditional</span>
              <span className="block text-sm">Personal relationship</span>
              <span className="block text-sm">Family values</span>
              <span className="block text-sm">Attentive service</span>
            </div>
            
            <div className="h-32 w-px bg-charcoal/20"></div>
            
            <div className="text-center">
              <span className="block text-lg md:text-xl font-serif mb-16">Innovative</span>
              <span className="block text-sm">Advanced technology</span>
              <span className="block text-sm">Secure processes</span>
              <span className="block text-sm">Efficient solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
