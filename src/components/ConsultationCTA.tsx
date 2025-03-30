
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-navy to-muted-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            Schedule a Confidential Consultation
          </h2>
          
          <p className="text-base md:text-lg mb-4 text-white/90">
            Take the first step toward securing your legacy.
          </p>
          
          <div>
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-normal px-6 py-2 rounded-none text-sm"
              >
                Request Consultation
              </Button>
            </Link>
          </div>
          
          <p className="text-xs mt-3 text-white/70">
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
