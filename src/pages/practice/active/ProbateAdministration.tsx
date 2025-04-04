import React from 'react';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProbateAdministration: React.FC = () => {
  // Log page visit
  React.useEffect(() => {
    logger.info('Probate Administration practice area visited');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl mb-8">Probate Administration</h1>
        <p className="text-lg mb-4">
          Guidance through the probate process, representation in probate court, and estate administration.
        </p>
        <p>This practice area page is under development.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ProbateAdministration; 