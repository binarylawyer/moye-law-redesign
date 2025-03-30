
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PodcastHero from "../components/podcasts/PodcastHero";
import PodcastList from "../components/podcasts/PodcastList";
import ConsultationCTA from "../components/ConsultationCTA";
import { podcastData } from "../data/podcastData";
import { Toaster } from "@/components/ui/toaster";

const Podcasts: React.FC = () => {
  // Use the default podcast data directly
  const podcasts = podcastData;

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        <PodcastHero />
        <PodcastList customPodcasts={podcasts} />
        <ConsultationCTA />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Podcasts;
