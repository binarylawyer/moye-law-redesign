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
    <section className="py-20 relative overflow-hidden">
      {/* Horizontal line extending beyond the screen width - position 1 */}
      <div className="absolute w-[150vw] h-5 mondrian-blue left-[-25vw] top-[15%] z-10"></div>
      
      <div className="container mx-auto px-8 relative">
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-navy mb-8 relative z-20 bg-white inline-block pr-8">
            Estate Planning Insights
          </h2>
          
          <div className="mondrian-grid grid-cols-1 md:grid-cols-12 border-0">
            {estatePlanningPodcasts.map((podcast, index) => (
              <div 
                key={podcast.id} 
                className={`
                  ${index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'}
                  ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}
                  mb-8 relative
                  ${index % 4 === 0 ? 'ml-8 md:ml-16' : ''}
                  ${index % 4 === 1 ? 'mr-0 md:mr-8' : ''}
                `}
              >
                <div className={`
                  absolute w-6 h-6 mondrian-yellow z-10 top-[-8px] left-[-8px]
                  ${index % 2 === 0 ? 'mondrian-yellow' : 'mondrian-red'}
                  mondrian-border
                `}></div>
                <PodcastItem podcast={podcast} />
              </div>
            ))}
          </div>
        </div>
          
        {/* Horizontal line extending beyond the screen width - position 2 */}
        <div className="relative">
          <div className="absolute w-[150vw] h-5 mondrian-red right-[-25vw] bottom-[45%] z-10"></div>
          
          <h2 className="font-serif text-3xl text-navy mb-8 mt-16 relative z-20 bg-white inline-block pr-8">
            Intellectual Property Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-0">
            {[...ipPodcasts, ...otherPodcasts].map((podcast, index) => (
              <div 
                key={podcast.id} 
                className={`
                  ${index % 4 === 0 ? 'md:col-span-8' : 'md:col-span-4'}
                  ${index % 4 === 1 ? 'md:col-span-6' : ''}
                  ${index % 4 === 2 ? 'md:col-span-7' : ''}
                  ${index % 4 === 3 ? 'md:col-span-5' : ''}
                  ${index % 3 === 0 ? 'md:col-start-2' : ''}
                  ${index % 3 === 1 ? 'md:col-start-5' : ''}
                  mb-8 relative
                  ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-6'}
                `}
              >
                <div className={`
                  absolute w-6 h-6 z-10 top-[-8px] right-[-8px]
                  ${index % 3 === 0 ? 'mondrian-blue' : 'mondrian-light-blue'}
                  mondrian-border
                `}></div>
                <PodcastItem podcast={podcast} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastList;
