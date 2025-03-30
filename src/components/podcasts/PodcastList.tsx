
import React from 'react';
import PodcastItem from './PodcastItem';
import { podcastData } from '../../data/podcastData';

const PodcastList: React.FC = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-navy mb-12">
            Latest Episodes
          </h2>
          
          <div className="space-y-8">
            {podcastData.map((podcast) => (
              <PodcastItem key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastList;
