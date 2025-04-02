
import React from 'react';

const PodcastHero: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl text-navy mb-8">
            Moye Law Podcast Series
          </h1>
          <p className="text-lg text-charcoal/80 mb-12">
            Listen to our AI-driven podcast series exploring complex legal topics in a clear, 
            accessible format. Get expert insights on estate planning, intellectual property protection,
            and other specialized areas to help you navigate the legal landscape with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;
