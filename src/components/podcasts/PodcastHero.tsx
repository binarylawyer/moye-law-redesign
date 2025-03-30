
import React from 'react';

const PodcastHero: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">
            Estate Planning Insights Podcast
          </h1>
          <p className="text-lg text-charcoal/80 mb-12">
            Listen to our AI-driven podcast series exploring complex estate planning topics in a clear, 
            accessible format. Get expert insights on protecting your assets and securing your family's future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
