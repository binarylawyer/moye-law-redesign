import React from 'react';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlockchainDigitalAssets: React.FC = () => {
  // Log page visit
  React.useEffect(() => {
    logger.info('Blockchain & Digital Assets practice area visited');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl mb-8">Blockchain & Digital Assets</h1>
        <p className="text-lg mb-4">
          Comprehensive legal guidance for blockchain technologies, cryptocurrencies, NFTs, and decentralized applications, addressing regulatory, security, and transactional considerations.
        </p>
        <p>This practice area page is under development.</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlockchainDigitalAssets; 