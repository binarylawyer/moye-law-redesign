
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EntertainmentHero from '@/components/entertainment/EntertainmentHero';
import EntertainmentOverview from '@/components/entertainment/EntertainmentOverview';
import EntertainmentServices from '@/components/entertainment/EntertainmentServices';
import EntertainmentPrinciples from '@/components/entertainment/EntertainmentPrinciples';
import EntertainmentProcess from '@/components/entertainment/EntertainmentProcess';
import EntertainmentRelated from '@/components/entertainment/EntertainmentRelated';
import ConsultationCTA from '@/components/ConsultationCTA';

const EntertainmentLaw: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <EntertainmentHero />
        <EntertainmentOverview />
        <EntertainmentServices />
        <EntertainmentPrinciples />
        <EntertainmentProcess />
        <EntertainmentRelated />
        <ConsultationCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default EntertainmentLaw;
