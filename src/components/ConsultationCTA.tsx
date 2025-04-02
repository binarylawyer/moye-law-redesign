import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Phone } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-8 max-w-7xl relative">
        {/* Pure Mondrian composition */}
        <div className="mondrian-grid mb-6">
          {/* Top row with asymmetrical blocks */}
          <div className="col-span-2 mondrian-red"></div>
          <div className="col-span-1 mondrian-light-blue"></div>
          
          {/* Main content box with thick border */}
          <div className="col-span-6 mondrian-grid-item bg-white p-10">
            <div className="text-center">
              <h2 className="reveal font-display text-4xl md:text-5xl text-black mb-8 tracking-tight">
                Protect Your Future – Contact Us Today
              </h2>
              
              <div className="w-40 h-2 bg-black mx-auto mb-8"></div>
              
              <p className="reveal text-xl mb-12 text-black/80 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: '0.1s' }}>
                Schedule a consultation to discuss your legal needs and discover how our family values and forward-thinking approach can benefit you.
              </p>
              
              {/* 30 years highlight - pure Mondrian style */}
              <div className="reveal mb-12" style={{ transitionDelay: '0.15s' }}>
                <div className="inline-block border-4 border-black p-4 relative mx-auto flex items-center">
                  <div className="w-16 h-full mondrian-light-yellow border-r-4 border-black"></div>
                  <span className="text-xl font-medium pl-4">
                    <span className="font-bold">30 YEARS</span> OF TRUSTED COUNSEL
                  </span>
                </div>
              </div>
              
              <div className="reveal mb-8" style={{ transitionDelay: '0.2s' }}>
                <Link to="/contact">
                  <button className="mondrian-button light-yellow text-xl py-5 px-12">
                    Request Your Free Consultation
                    <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
              
              <div className="border-t-4 border-black pt-6 mt-12 inline-block">
                <p className="reveal text-sm text-black/80 flex items-center justify-center" style={{ transitionDelay: '0.3s' }}>
                  <Lock className="h-4 w-4 mr-2" />
                  All consultations are protected by attorney-client privilege
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side asymmetrical blocks */}
          <div className="col-span-2 mondrian-blue"></div>
          <div className="col-span-1 mondrian-light-yellow"></div>
          
          {/* Bottom row with more asymmetrical blocks */}
          <div className="col-span-3 bg-white"></div>
          <div className="col-span-2 mondrian-light-blue"></div>
          <div className="col-span-3 bg-white"></div>
          <div className="col-span-1 mondrian-yellow"></div>
          <div className="col-span-3 mondrian-light-yellow"></div>
        </div>
        
        {/* Redesigned Pure Mondrian-style grid beneath - shorter height with more asymmetry */}
        <div className="mondrian-grid h-16 relative">
          {/* Left side - broken into asymmetrical colored blocks */}
          <div className="col-span-1 flex flex-col h-full">
            <div className="h-1/2 mondrian-red"></div>
            <div className="h-1/2 mondrian-light-blue"></div>
          </div>
          <div className="col-span-1 flex flex-col h-full">
            <div className="h-2/3 mondrian-light-yellow"></div>
            <div className="h-1/3 bg-white"></div>
          </div>
          
          {/* Middle section with CTA */}
          <div className="col-span-8 flex items-center justify-center bg-white h-full border-l-4 border-r-4 border-black">
            <Link to="/contact" className="flex items-center font-medium text-lg hover:underline">
              <Phone className="h-4 w-4 mr-2" />
              Contact us for a private consultation (212) 555-0123
            </Link>
          </div>
          
          {/* Right side - broken into asymmetrical colored blocks */}
          <div className="col-span-1 flex flex-col h-full">
            <div className="h-1/3 mondrian-blue"></div>
            <div className="h-2/3 mondrian-light-yellow"></div>
          </div>
          <div className="col-span-1 flex flex-col h-full">
            <div className="h-3/5 bg-white"></div>
            <div className="h-2/5 mondrian-yellow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
