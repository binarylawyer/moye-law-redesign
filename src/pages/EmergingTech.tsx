
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmergingTechHero from '@/components/emerging-tech/EmergingTechHero';
import EmergingTechOverview from '@/components/emerging-tech/EmergingTechOverview';
import EmergingTechAreas from '@/components/emerging-tech/EmergingTechAreas';
import EmergingTechProcess from '@/components/emerging-tech/EmergingTechProcess';
import EmergingTechCTA from '@/components/emerging-tech/EmergingTechCTA';
import EmergingTechRelated from '@/components/emerging-tech/EmergingTechRelated';

const EmergingTech: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <EmergingTechHero />
        <EmergingTechOverview />
        <EmergingTechAreas />
        <EmergingTechProcess />
        <EmergingTechCTA />
        <EmergingTechRelated />
      </main>
      
      <Footer />
    </div>
  );
};

export default EmergingTech;
