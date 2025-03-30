
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl">
          <h2 
            className="reveal font-serif text-3xl md:text-4xl text-navy mb-12"
          >
            Schedule a Confidential Consultation
          </h2>
          
          <p 
            className="reveal text-lg mb-16 text-charcoal/80"
            style={{ transitionDelay: '0.1s' }}
          >
            Take the first step toward securing your legacy. Our consultation process ensures your information 
            remains private while we develop solutions tailored to your specific needs.
          </p>
          
          <div className="reveal flex flex-col sm:flex-row gap-8 items-center" style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-normal px-8 py-6 rounded-none"
              >
                Request Consultation
              </Button>
            </Link>
            
            <Separator className="hidden sm:block h-8 w-px bg-navy/10" orientation="vertical" />
            
            <a href="tel:+12125551234" className="text-navy hover:text-gold transition-colors">
              +1 212 555 1234
            </a>
          </div>
          
          <p 
            className="reveal text-sm mt-12 text-charcoal/60"
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
