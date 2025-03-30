
import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className }) => {
  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4 reveal">
        Contact & Consultation
      </h1>
      <p className="text-lg text-charcoal/80 mb-6 reveal" style={{ transitionDelay: '0.1s' }}>
        Take the first step toward securing your legacy with a confidential consultation. 
        All inquiries are protected by attorney-client privilege.
      </p>
    </div>
  );
};

export default ContactHero;
