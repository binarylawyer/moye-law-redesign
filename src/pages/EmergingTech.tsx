
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmergingTechHero from '@/components/emerging-tech/EmergingTechHero';
import EmergingTechOverview from '@/components/emerging-tech/EmergingTechOverview';
import EmergingTechAreas from '@/components/emerging-tech/EmergingTechAreas';
import EmergingTechProcess from '@/components/emerging-tech/EmergingTechProcess';
import EmergingTechRelated from '@/components/emerging-tech/EmergingTechRelated';
import ConsultationCTA from '@/components/ConsultationCTA';

const EmergingTech: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <EmergingTechHero />
        <EmergingTechOverview />
        <EmergingTechAreas />
        <EmergingTechProcess />
        <EmergingTechRelated />
        <ConsultationCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default EmergingTech;
