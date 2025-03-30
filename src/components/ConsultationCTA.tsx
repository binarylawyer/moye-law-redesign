
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-navy to-muted-navy">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/contact">
            <Button 
              className="bg-gold hover:bg-gold/90 text-white font-normal px-8 py-6 rounded-none text-base"
            >
              Request Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
