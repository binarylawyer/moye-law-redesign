
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EmergingTechCTA: React.FC = () => {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="font-serif text-3xl mb-6">Innovate with Confidence</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Navigate the legal complexities of emerging technologies with our expert guidance. Contact us to discuss your legal needs.
        </p>
        <Link to="/contact">
          <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EmergingTechCTA;
