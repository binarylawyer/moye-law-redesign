
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PodcastHero from "../components/podcasts/PodcastHero";
import PodcastList from "../components/podcasts/PodcastList";
import ConsultationCTA from "../components/ConsultationCTA";

const Podcasts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        <PodcastHero />
        <PodcastList />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Podcasts;
