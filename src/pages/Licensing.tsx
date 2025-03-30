
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LicensingHero from '@/components/licensing/LicensingHero';
import LicensingOverview from '@/components/licensing/LicensingOverview';
import LicensingAreas from '@/components/licensing/LicensingAreas';
import LicensingProcess from '@/components/licensing/LicensingProcess';
import LicensingRelated from '@/components/licensing/LicensingRelated';
import ConsultationCTA from '@/components/ConsultationCTA';

const Licensing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <LicensingHero />
        <LicensingOverview />
        <LicensingAreas />
        <LicensingProcess />
        <LicensingRelated />
        <ConsultationCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Licensing;
