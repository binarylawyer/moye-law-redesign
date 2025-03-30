
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LicensingCTA: React.FC = () => {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="font-serif text-3xl mb-6">Monetize Your Intellectual Assets</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Ready to explore licensing opportunities for your intellectual property? Contact us to discuss how we can help develop and implement effective licensing strategies.
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

export default LicensingCTA;
