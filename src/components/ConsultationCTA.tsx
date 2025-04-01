import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA = () => {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-serif text-3xl md:text-4xl mb-6 tracking-tight">
            Protect Your Future – Contact Us Today
          </h2>
          
          <p className="reveal text-xl mb-10 text-white/80 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Schedule a consultation to discuss your legal needs
          </p>
          
          <div className="reveal mb-10" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                className="bg-white text-navy hover:bg-gray-100 font-medium px-8 py-4 text-lg shadow-sm"
              >
                Request Your Free Consultation
              </Button>
            </Link>
          </div>
          
          <p className="reveal text-sm text-white/60" style={{ transitionDelay: '0.3s' }}>
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
