import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Simple Mondrian-inspired horizontal line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 flex">
        <div className="w-1/6 bg-[#D6001C]/50"></div>
        <div className="w-2/6 bg-white"></div>
        <div className="w-2/6 bg-[#003B98]/50"></div>
        <div className="w-1/6 bg-[#FFD500]/50"></div>
      </div>
      
      {/* Very subtle vertical lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-black/5"></div>
      <div className="absolute right-1/3 top-0 h-full w-px bg-black/5"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center relative">
            {/* Extremely subtle colored accent */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D6001C]/30"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[#003B98]/30"></div>
            
            <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-8 tracking-tight relative inline-block">
              Protect Your Future – Contact Us Today
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#FFD500]/50"></span>
            </h2>
            
            <p className="reveal text-xl mb-16 text-navy/80 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: '0.1s' }}>
              Schedule a consultation to discuss your legal needs and discover how our family values and forward-thinking approach can benefit you.
            </p>
            
            {/* Highlight 30 years of experience */}
            <div className="reveal mb-8" style={{ transitionDelay: '0.15s' }}>
              <div className="inline-flex items-center justify-center mb-8">
                <div className="h-px w-8 bg-[#003B98]/30"></div>
                <span className="mx-3 text-sm font-medium text-navy/70 px-4 py-1 bg-white">
                  <span className="text-[#003B98]/80">30 YEARS</span> OF TRUSTED COUNSEL
                </span>
                <div className="h-px w-8 bg-[#003B98]/30"></div>
              </div>
            </div>
            
            <div className="reveal mb-8" style={{ transitionDelay: '0.2s' }}>
              <Link to="/contact">
                <button 
                  className="group bg-white hover:bg-gray-100 text-navy font-medium py-4 px-10 text-lg border border-black/30 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D6001C]/60"></div>
                  <span className="relative">Request Your Free Consultation</span>
                  <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative" />
                </button>
              </Link>
            </div>
            
            <p className="reveal text-sm text-navy/60 flex items-center justify-center" style={{ transitionDelay: '0.3s' }}>
              <Lock className="h-4 w-4 mr-2 text-[#003B98]/70" />
              All consultations are protected by attorney-client privilege
            </p>
          </div>
        </div>
        
        {/* Simple Mondrian-inspired horizontal line at bottom */}
        <div className="mt-16 h-px w-full flex">
          <div className="h-full w-1/4 bg-[#FFD500]/30"></div>
          <div className="h-full w-1/2 bg-black/5"></div>
          <div className="h-full w-1/4 bg-[#D6001C]/30"></div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
