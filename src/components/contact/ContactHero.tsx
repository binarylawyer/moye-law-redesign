import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className }) => {
  return (
    <section className="py-20 md:py-24 bg-white relative">
      {/* Horizontal Mondrian lines that extend beyond screen width */}
      <div className="absolute top-16 left-0 w-full h-4 mondrian-blue -z-10"></div>
      <div className="absolute bottom-16 left-0 w-full h-4 mondrian-red -z-10"></div>
      
      <div className="container mx-auto px-8">
        {/* Mondrian-style title container */}
        <div className="mondrian-grid mb-12">
          <div className="col-span-3 mondrian-red"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-black mb-6 reveal">
              Contact & Consultation
            </h1>
            <p className="text-black/80 text-lg md:text-xl reveal" style={{ transitionDelay: '0.1s' }}>
              Take the first step toward securing your legacy with a confidential consultation. 
              All inquiries are protected by attorney-client privilege.
            </p>
          </div>
          <div className="col-span-3 mondrian-yellow"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
