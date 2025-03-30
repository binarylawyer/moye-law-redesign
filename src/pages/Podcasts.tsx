
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PodcastHero from "../components/podcasts/PodcastHero";
import PodcastList from "../components/podcasts/PodcastList";
import PodcastUpload from "../components/podcasts/PodcastUpload";
import ConsultationCTA from "../components/ConsultationCTA";
import { Podcast, podcastData } from "../data/podcastData";

const Podcasts: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(podcastData);

  const handlePodcastUploaded = (newPodcast: Podcast) => {
    // Add the new podcast to the beginning of the list
    setPodcasts([newPodcast, ...podcasts]);
  };

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        <PodcastHero />
        <section className="py-12 bg-light-gray">
          <div className="container mx-auto px-8">
            <PodcastUpload onPodcastUploaded={handlePodcastUploaded} />
          </div>
        </section>
        <PodcastList customPodcasts={podcasts} />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Podcasts;
