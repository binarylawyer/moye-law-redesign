
import React from 'react';

const EntertainmentPrinciples: React.FC = () => {
  const principles = [
    {
      title: "Creator Protection",
      description: "We prioritize protecting the creative and economic rights of artists, writers, and performers across all distribution channels."
    },
    {
      title: "Fair Compensation",
      description: "Our agreements ensure transparent accounting and appropriate compensation for creative contributions and intellectual property."
    },
    {
      title: "Rights Clarity",
      description: "We establish clear ownership and usage rights for all parties to prevent future disputes over valuable content and IP."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Entertainment Law Principles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, idx) => (
            <div key={idx} className="relative border border-gold p-8">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full border-2 border-gold bg-white flex items-center justify-center text-navy font-medium">
                {idx + 1}
              </div>
              <h3 className="font-serif text-xl text-navy mb-4 pt-2">{principle.title}</h3>
              <p className="text-charcoal">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentPrinciples;
