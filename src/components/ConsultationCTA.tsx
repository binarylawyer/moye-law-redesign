
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-navy to-muted-navy text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="reveal font-serif text-3xl md:text-4xl mb-10"
          >
            Schedule a Confidential Consultation
          </h2>
          
          <p 
            className="reveal text-lg md:text-xl mb-10 text-white/90"
            style={{ transitionDelay: '0.1s' }}
          >
            Take the first step toward securing your legacy.
          </p>
          
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-normal px-8 py-6 rounded-none text-base"
              >
                Request Consultation
              </Button>
            </Link>
          </div>
          
          <p 
            className="reveal text-sm mt-8 text-white/70"
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
