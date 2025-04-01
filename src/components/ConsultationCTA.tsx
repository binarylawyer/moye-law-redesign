import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Strong Mondrian-inspired grid structure */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background grid with black borders */}
        <div className="absolute top-0 left-0 w-1/4 h-full border-r-2 border-black"></div>
        <div className="absolute top-0 right-0 w-1/5 h-full border-l-2 border-black"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-0.5 border-b-2 border-black"></div>
        
        {/* Mondrian color blocks */}
        <div className="absolute top-0 left-1/2 w-1/6 h-1/3 bg-[#D6001C]"></div>
        <div className="absolute bottom-0 left-0 w-1/6 h-1/3 bg-[#FFD500]"></div>
        <div className="absolute top-1/3 right-0 w-1/10 h-1/4 bg-[#003B98]"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto">
          {/* Main content box with border */}
          <div className="bg-white border-2 border-black p-8 md:p-12 relative">
            {/* Yellow decorative block */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FFD500] border-2 border-black -z-10"></div>
            
            <div className="text-center relative">
              <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-8 tracking-tight">
                Protect Your Future – Contact Us Today
              </h2>
              
              <div className="w-40 h-1 bg-black mx-auto mb-8"></div>
              
              <p className="reveal text-xl mb-12 text-navy/80 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: '0.1s' }}>
                Schedule a consultation to discuss your legal needs and discover how our family values and forward-thinking approach can benefit you.
              </p>
              
              {/* 30 years highlight - Mondrian block style */}
              <div className="reveal mb-12" style={{ transitionDelay: '0.15s' }}>
                <div className="inline-block border-2 border-black p-4 relative">
                  <div className="absolute top-0 left-0 w-8 h-full bg-[#D6001C]"></div>
                  <span className="relative pl-4 text-xl font-medium">
                    <span className="font-bold">30 YEARS</span> OF TRUSTED COUNSEL
                  </span>
                </div>
              </div>
              
              <div className="reveal mb-8 relative" style={{ transitionDelay: '0.2s' }}>
                {/* Blue decorative element */}
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-[#003B98] border-2 border-black hidden md:block"></div>
                
                <Link to="/contact">
                  <button 
                    className="group bg-white hover:bg-gray-100 text-navy font-medium py-5 px-12 text-lg border-2 border-black transition-all relative overflow-hidden"
                  >
                    <span className="relative">Request Your Free Consultation</span>
                    <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                
                {/* Red decorative element */}
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#D6001C] border-2 border-black hidden md:block"></div>
              </div>
              
              <div className="border-t-2 border-black pt-6 mt-12 inline-block">
                <p className="reveal text-sm text-navy/70 flex items-center justify-center" style={{ transitionDelay: '0.3s' }}>
                  <Lock className="h-4 w-4 mr-2 text-[#003B98]" />
                  All consultations are protected by attorney-client privilege
                </p>
              </div>
            </div>
          </div>
          
          {/* Mondrian-style grid beneath */}
          <div className="mt-16 grid grid-cols-12 gap-2 h-10">
            <div className="col-span-2 bg-[#D6001C] border-2 border-black"></div>
            <div className="col-span-3 bg-white border-2 border-black"></div>
            <div className="col-span-1 bg-[#003B98] border-2 border-black"></div>
            <div className="col-span-4 bg-white border-2 border-black"></div>
            <div className="col-span-2 bg-[#FFD500] border-2 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
