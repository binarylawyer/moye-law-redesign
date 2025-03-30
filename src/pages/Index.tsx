
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Approach from '@/components/Approach';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Approach />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
