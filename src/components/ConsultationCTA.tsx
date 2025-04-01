import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA = () => {
  return (
    <section className="py-28 bg-navy text-white relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 -skew-x-12 -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-gold/10 rounded-tr-full -z-10"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-serif text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
            Protect Your Future – Contact Us Today
          </h2>
          
          <div className="w-20 h-1 bg-gold/60 mx-auto mb-10"></div>
          
          <p className="reveal text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: '0.1s' }}>
            Schedule a consultation to discuss your legal needs and discover how our family values and future-forward approach can benefit you.
          </p>
          
          <div className="reveal mb-12" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                className="bg-white text-navy hover:bg-gray-100 font-medium py-6 px-10 text-lg shadow-sm rounded-md transition-all hover:shadow-md"
              >
                Request Your Free Consultation
              </Button>
            </Link>
          </div>
          
          <p className="reveal text-sm text-white/60 flex items-center justify-center" style={{ transitionDelay: '0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
