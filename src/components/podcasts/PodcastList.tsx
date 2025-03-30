
import React from 'react';
import PodcastItem from './PodcastItem';
import { podcastData } from '../../data/podcastData';

const PodcastList: React.FC = () => {
  // Separate podcasts by topic
  const estatePlanningPodcasts = podcastData.filter(
    podcast => podcast.topics.some(topic => 
      ['Estate Planning', 'Trusts', 'Probate', 'Inheritance'].includes(topic)
    )
  );
  
  const ipPodcasts = podcastData.filter(
    podcast => podcast.topics.some(topic => 
      ['IP Protection', 'Digital Assets', 'Tech Founders', 'Intellectual Property'].includes(topic)
    )
  );

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Estate Planning Column (Left) */}
          <div>
            <h2 className="font-serif text-3xl text-navy mb-8">
              Estate Planning Insights
            </h2>
            
            <div className="space-y-8">
              {estatePlanningPodcasts.map((podcast) => (
                <PodcastItem key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </div>
          
          {/* IP Column (Right) */}
          <div>
            <h2 className="font-serif text-3xl text-navy mb-8">
              Intellectual Property Insights
            </h2>
            
            <div className="space-y-8">
              {ipPodcasts.map((podcast) => (
                <PodcastItem key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastList;
