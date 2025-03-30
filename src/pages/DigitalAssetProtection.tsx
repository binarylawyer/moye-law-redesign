
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalAssetHero from '@/components/digital-asset-protection/DigitalAssetHero';
import DigitalAssetOverview from '@/components/digital-asset-protection/DigitalAssetOverview';
import DigitalAssetStrategies from '@/components/digital-asset-protection/DigitalAssetStrategies';
import DigitalAssetProcess from '@/components/digital-asset-protection/DigitalAssetProcess';
import DigitalAssetRelated from '@/components/digital-asset-protection/DigitalAssetRelated';
import ConsultationCTA from '@/components/ConsultationCTA';

const DigitalAssetProtection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <DigitalAssetHero />
        <DigitalAssetOverview />
        <DigitalAssetStrategies />
        <DigitalAssetProcess />
        <ConsultationCTA />
        <DigitalAssetRelated />
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalAssetProtection;
