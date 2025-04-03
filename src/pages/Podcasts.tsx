import React from 'react';
import PodcastList from "../components/podcasts/PodcastList";
import ConsultationCTA from "../components/ConsultationCTA";
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import { podcastData } from "../data/podcastData";
import { Toaster } from "@/components/ui/toaster";

const Podcasts: React.FC = () => {
  // Use the default podcast data directly
  const podcasts = podcastData;

  return (
    <main className="pt-48 bg-white">
      <ResourcePageHeader 
        title="Moye Law Podcast Series"
        description="Listen to our AI-driven podcast series exploring complex legal topics in a clear, accessible format. Get expert insights on estate planning, intellectual property protection, and other specialized areas."
        variant="blue"
      />
      <PodcastList customPodcasts={podcasts} />
      <ConsultationCTA />
      <Toaster />
    </main>
  );
};

export default Podcasts;
