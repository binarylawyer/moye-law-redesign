import React from 'react';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ArtLaw: React.FC = () => {
  // Log page visit
  React.useEffect(() => {
    logger.info('Art Law practice area visited');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl mb-8">Art Law</h1>
        <p className="text-lg mb-4">
          Specialized legal services for artists, galleries, collectors, and cultural institutions addressing the unique legal challenges in the art world.
        </p>
        <p>This practice area page is under development.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ArtLaw; 