
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-navy to-muted-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold accent line above heading */}
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
          
          <h2 className="font-serif text-2xl md:text-4xl mb-5 tracking-wide">
            Schedule a Confidential Consultation
          </h2>
          
          <p className="text-base md:text-xl mb-8 text-white/90 max-w-xl mx-auto">
            Take the first step toward securing your legacy.
          </p>
          
          <div>
            <Link to="/contact">
              <Button 
                className="bg-gold hover:bg-gold/80 text-white font-normal px-8 py-3 rounded-none text-base border border-gold/30 transition-all hover:shadow-lg"
              >
                Request Consultation
              </Button>
            </Link>
          </div>
          
          {/* Gold accent line below the content */}
          <div className="w-16 h-0.5 bg-gold/60 mx-auto mt-8"></div>
          
          <p className="text-sm mt-4 text-white/70">
            All consultations are protected by attorney-client privilege
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
