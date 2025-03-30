
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PodcastHero from "../components/podcasts/PodcastHero";
import PodcastList from "../components/podcasts/PodcastList";
import PodcastUpload from "../components/podcasts/PodcastUpload";
import ConsultationCTA from "../components/ConsultationCTA";
import { Podcast, podcastData } from "../data/podcastData";
import { Toaster } from "@/components/ui/toaster";

const Podcasts: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  // Load podcasts when component mounts
  useEffect(() => {
    // Start with the default podcasts
    setPodcasts(podcastData);
    
    // Check localStorage for any user-uploaded podcasts
    const checkForStoredPodcasts = () => {
      const storedPodcasts: Podcast[] = [];
      
      // Scan localStorage for podcast keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('podcast-') && !key.includes('metadata-')) {
          // This is a podcast audio file, look for its metadata
          const metadataKey = `metadata-${key}`;
          const metadataStr = localStorage.getItem(metadataKey);
          
          if (metadataStr) {
            try {
              const metadata = JSON.parse(metadataStr) as Podcast;
              storedPodcasts.push(metadata);
            } catch (e) {
              console.error("Failed to parse podcast metadata", e);
            }
          }
        }
      }
      
      // If we found stored podcasts, add them to state
      if (storedPodcasts.length > 0) {
        console.log("Found stored podcasts:", storedPodcasts.length);
        setPodcasts(prev => [...storedPodcasts, ...prev]);
      }
    };
    
    // Run the check
    checkForStoredPodcasts();
  }, []);

  const handlePodcastUploaded = (newPodcast: Podcast) => {
    // Store podcast metadata in localStorage
    const metadataKey = `metadata-${newPodcast.audioUrl}`;
    localStorage.setItem(metadataKey, JSON.stringify(newPodcast));
    
    // Add the new podcast to the beginning of the list
    setPodcasts(prevPodcasts => [newPodcast, ...prevPodcasts]);
    console.log("Podcast added to state, total count:", podcasts.length + 1);
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
      <Toaster />
    </>
  );
};

export default Podcasts;
