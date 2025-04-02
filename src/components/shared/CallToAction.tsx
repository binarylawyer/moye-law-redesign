import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white relative moye-cta-component">
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="mondrian-grid mb-6">
          <div className="col-span-2 mondrian-red"></div>
          <div className="col-span-1 mondrian-light-blue"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <h2 className="reveal font-display text-3xl md:text-4xl text-black mb-4">
              Protect Your Future —<br />Contact Us Today
            </h2>
            <p className="reveal text-black/80 mb-6" style={{ transitionDelay: '0.1s' }}>
              Schedule a consultation to discuss your legal needs<br />and discover how our firm's vision and forward-thinking approach can help you.
            </p>
            <div className="flex justify-center mt-8">
              <div className="inline-block border-4 border-black p-3">
                <span className="block font-display text-xl">30 YEARS OF TRUSTED COUNSEL</span>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Link to="/contact">
                <Button className="mondrian-button light-yellow text-black">
                  Request Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-2 mondrian-light-yellow"></div>
          <div className="col-span-1 mondrian-yellow"></div>
        </div>
        
        <div className="mondrian-grid h-16 relative">
          <div className="col-span-3 mondrian-red"></div>
          <div className="col-span-6 bg-white flex items-center justify-center">
            <Link to="/contact" className="flex items-center text-black hover:text-gold transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact us for a private consultation (212) 555-0123
            </Link>
          </div>
          <div className="col-span-3 mondrian-blue"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 