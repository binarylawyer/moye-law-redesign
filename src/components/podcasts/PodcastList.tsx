
import React from 'react';
import PodcastItem from './PodcastItem';
import { podcastData, Podcast } from '../../data/podcastData';

interface PodcastListProps {
  customPodcasts?: Podcast[];
}

const PodcastList: React.FC<PodcastListProps> = ({ customPodcasts }) => {
  // Use custom podcasts if provided, otherwise use the default data
  const podcasts = customPodcasts || podcastData;
  
  // Separate podcasts by topic
  const estatePlanningPodcasts = podcasts.filter(
    podcast => podcast.topics.some(topic => 
      ['Estate Planning', 'Trusts', 'Probate', 'Inheritance'].includes(topic)
    )
  );
  
  const ipPodcasts = podcasts.filter(
    podcast => podcast.topics.some(topic => 
      ['IP Protection', 'Digital Assets', 'Tech Founders', 'Intellectual Property'].includes(topic)
    )
  );

  // For podcasts that don't fit into either category, put them into IP by default
  const otherPodcasts = podcasts.filter(
    podcast => !estatePlanningPodcasts.includes(podcast) && !ipPodcasts.includes(podcast)
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
              {[...ipPodcasts, ...otherPodcasts].map((podcast) => (
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
