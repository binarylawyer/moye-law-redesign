
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-48 md:py-72 bg-gradient-to-br from-navy to-muted-navy text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="reveal font-serif text-4xl md:text-5xl mb-16"
          >
            Schedule a Confidential Consultation
          </h2>
          
          <p 
            className="reveal text-xl md:text-2xl mb-20 text-white/90"
            style={{ transitionDelay: '0.1s' }}
          >
            Take the first step toward securing your legacy. Our consultation process ensures your information 
            remains private while we develop solutions tailored to your specific needs.
          </p>
          
          <div className="reveal flex flex-col sm:flex-row gap-10 items-center justify-center" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-normal px-10 py-8 rounded-none text-lg"
              >
                Request Consultation
              </Button>
            </Link>
            
            <Separator className="hidden sm:block h-10 w-px bg-white/20" orientation="vertical" />
            
            <a href="tel:+12125551234" className="text-white hover:text-gold transition-colors text-xl">
              +1 212 555 1234
            </a>
          </div>
          
          <p 
            className="reveal text-base mt-16 text-white/70"
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
