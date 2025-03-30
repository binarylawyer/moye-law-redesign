
import React from 'react';

const EntertainmentHero: React.FC = () => {
  return (
    <section className="py-72 md:py-96 bg-pastel-blue/20">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">Entertainment Law</h1>
          <p className="text-xl md:text-2xl text-charcoal/80 mx-auto">
            Strategic legal guidance for creators, producers, and distributors across all entertainment mediums.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentHero;
