import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Filter, Headphones, Clock, Calendar, Code } from 'lucide-react';
import ConsultationCTA from "../../components/ConsultationCTA";
import ResourcePageHeader from "../../components/resources/ResourcePageHeader";
import { podcastData } from "../../data/podcastData";
import { Toaster } from "@/components/ui/toaster";

// Filter to get only Tech & IP related podcasts
const techIPPodcasts = podcastData.filter(
  podcast => podcast.topics.some(topic => 
    ['IP Protection', 'Digital Assets', 'Tech Founders', 'Intellectual Property', 'Software Development', 'Licensing', 'Open Source'].includes(topic)
  )
);

const TechIPPodcasts: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  
  // Get all unique topics within Tech & IP podcasts
  const allTopics = Array.from(
    new Set(techIPPodcasts.flatMap(podcast => podcast.topics))
  );
  
  // Toggle topic selection
  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };
  
  // Filter and sort podcasts
  const filteredAndSortedPodcasts = techIPPodcasts
    .filter(podcast => 
      selectedTopics.length === 0 || 
      selectedTopics.some(topic => podcast.topics.includes(topic))
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <main className="pt-48 bg-white">
      <ResourcePageHeader 
        title="Technology & IP Podcasts"
        description="Explore discussions on intellectual property protection, digital assets, software licensing, and technology innovation strategies."
        variant="red"
      />
      
      {/* Back to main podcasts link */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/podcasts"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to All Podcasts
        </Link>
      </div>
      
      {/* Filters Bar */}
      <section className="py-6 border-t-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display text-xl">
              {filteredAndSortedPodcasts.length} Episodes
            </h2>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center px-4 py-2 border-2 border-black text-black hover:bg-gray-100"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter & Sort
            </button>
          </div>
          
          {/* Expandable filter panel */}
          {isFilterOpen && (
            <div className="bg-gray-50 p-6 border-2 border-black mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Topics filter */}
                <div>
                  <h3 className="font-medium mb-3">Filter by Topic</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTopics.map(topic => (
                      <button
                        key={topic}
                        onClick={() => toggleTopic(topic)}
                        className={`px-3 py-1 text-sm whitespace-nowrap rounded-full transition-colors ${
                          selectedTopics.includes(topic)
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Sort options */}
                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSortOrder('newest')}
                      className={`px-4 py-2 text-sm border-2 transition-colors ${
                        sortOrder === 'newest'
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black hover:bg-gray-100'
                      }`}
                    >
                      Newest First
                    </button>
                    <button
                      onClick={() => setSortOrder('oldest')}
                      className={`px-4 py-2 text-sm border-2 transition-colors ${
                        sortOrder === 'oldest'
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black hover:bg-gray-100'
                      }`}
                    >
                      Oldest First
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Filter actions */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    setSelectedTopics([]);
                    setSortOrder('newest');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800 mr-4"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-4 py-2 bg-black text-white text-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Podcasts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredAndSortedPodcasts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPodcasts.map((podcast, index) => (
                <div 
                  key={podcast.id}
                  className="bg-white border-2 border-black overflow-hidden transition-shadow hover:shadow-lg"
                >
                  {/* Mondrian-style header */}
                  <div className="h-32 relative border-b-2 border-black overflow-hidden">
                    {/* Mondrian grid layout - using random patterns based on index */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-1 p-1">
                      {index % 3 === 0 ? (
                        <>
                          <div className="col-span-8 row-span-3 bg-red-600 border border-black"></div>
                          <div className="col-span-4 row-span-6 bg-white border border-black"></div>
                          <div className="col-span-8 row-span-3 bg-blue-600 border border-black"></div>
                        </>
                      ) : index % 3 === 1 ? (
                        <>
                          <div className="col-span-4 row-span-6 bg-white border border-black"></div>
                          <div className="col-span-8 row-span-2 bg-blue-600 border border-black"></div>
                          <div className="col-span-8 row-span-2 bg-red-600 border border-black"></div>
                          <div className="col-span-8 row-span-2 bg-white border border-black"></div>
                        </>
                      ) : (
                        <>
                          <div className="col-span-3 row-span-6 bg-blue-600 border border-black"></div>
                          <div className="col-span-9 row-span-3 bg-white border border-black"></div>
                          <div className="col-span-9 row-span-3 bg-red-600 border border-black"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Link
                        to={`/podcasts/episode/${podcast.id}`}
                        className="w-14 h-14 flex items-center justify-center bg-white border-2 border-black rounded-full hover:scale-110 transition-transform"
                      >
                        <PlayCircle className="w-10 h-10 text-red-600" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Podcast info */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {podcast.topics.slice(0, 2).map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-display text-xl mb-3 line-clamp-2">
                      {podcast.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {podcast.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="inline-flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {podcast.duration}
                      </span>
                      <span className="inline-flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {podcast.date}
                      </span>
                      <span className="inline-flex items-center">
                        <Headphones className="w-4 h-4 mr-1" />
                        {podcast.listens} listens
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-4 border-black">
              <h3 className="text-xl mb-2">No podcasts found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Tech Insights */}
      <section className="py-16 bg-red-50 border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="h-64 w-64 mx-auto bg-white border-2 border-black p-4">
                  <div className="h-full w-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <Code className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="font-display text-2xl md:text-3xl mb-4">
                  Tech Law Innovators
                </h2>
                <p className="text-gray-700 mb-6">
                  Our Tech & IP podcast series features leading innovators at the intersection of technology and law. Join our community for exclusive interviews, code samples, and case studies from our technology law specialists.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/resources/tech-law-guide" 
                    className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                  >
                    Download Tech Law Guide
                  </a>
                  <a 
                    href="/events" 
                    className="px-6 py-2 bg-white border-2 border-black hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Join Our Next Webinar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationCTA />
      <Toaster />
    </main>
  );
};

export default TechIPPodcasts; 