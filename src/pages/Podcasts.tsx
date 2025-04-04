import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, Book, ScrollText, ChevronRight, PlayCircle, Activity, Share2, BookmarkPlus, Headphones } from 'lucide-react';
import ConsultationCTA from "../components/ConsultationCTA";
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import { podcastData } from "../data/podcastData";
import { Toaster } from "@/components/ui/toaster";
import PodcastPlayer from "../components/podcasts/PodcastPlayer";

// Extend the podcast data with transcripts and related content for this page
const extendedPodcasts = podcastData.map(podcast => ({
  ...podcast,
  transcript: `[00:00:00] Host: Welcome to the Moye Law AI Podcast. Today we're discussing ${podcast.title}.\n\n[00:01:15] AI Assistant: Let's start by exploring the key legal considerations in this area. There are several aspects practitioners need to consider.\n\n[00:02:30] Host: That's an interesting point. Could you elaborate on how recent court decisions have impacted this area?\n\n[00:03:45] AI Assistant: Certainly. In the past year, we've seen several landmark cases that have significantly altered the landscape. First, there's the matter of jurisdiction and how digital assets are treated across state lines...\n\n[00:05:00] Host: What practical advice would you give to our listeners who might be facing these challenges?\n\n[00:06:15] AI Assistant: The most important first step is documentation. Ensuring that all digital assets are properly inventoried and access information is securely stored but accessible to the right parties...\n\n[00:08:30] Host: Are there technology solutions that can help with this process?\n\n[00:09:45] AI Assistant: Yes, there are several. Digital asset management platforms specifically designed for estate planning have emerged in recent years. These tools provide secure vaults for passwords and access information, as well as mechanisms for transferring access under specific conditions...\n\n[00:12:00] Host: Thank you for these insights. Any final thoughts for our listeners?\n\n[00:13:15] AI Assistant: Remember that the law in this area is evolving rapidly. What's important is creating a framework that can adapt to changing legal requirements while still maintaining your intent for how these assets should be managed and transferred.`,
  relatedContent: [
    {
      type: 'article',
      title: `Understanding ${podcast.topics[0]}: A Practical Guide`,
      slug: `understanding-${podcast.topics[0].toLowerCase().replace(/\s+/g, '-')}`,
      excerpt: `A comprehensive guide to navigating the complexities of ${podcast.topics[0]} in today's evolving legal landscape.`
    },
    {
      type: 'book',
      title: `The Future of ${podcast.topics[0]}`,
      slug: `future-of-${podcast.topics[0].toLowerCase().replace(/\s+/g, '-')}`,
      excerpt: `How emerging technologies and recent court decisions are reshaping ${podcast.topics[0]} for practitioners and clients alike.`,
      clientOnly: Math.random() > 0.7 // Randomly mark some books as client-only
    },
    {
      type: 'research',
      title: `Comparative Analysis: ${podcast.topics[0]} Across Jurisdictions`,
      slug: `comparative-analysis-${podcast.topics[0].toLowerCase().replace(/\s+/g, '-')}`,
      excerpt: `An in-depth examination of how different jurisdictions approach ${podcast.topics[0]} with implications for multi-state practice.`
    }
  ]
}));

const Podcasts: React.FC = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(extendedPodcasts[0]);
  const [activeTab, setActiveTab] = useState<'transcript' | 'related'>('transcript');
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

  // Filter podcasts by categories for the featured section
  const featuredPodcasts = extendedPodcasts.slice(0, 3);
  const estatePlanningPodcasts = extendedPodcasts.filter(
    podcast => podcast.topics.some(topic => 
      ['Estate Planning', 'Trusts', 'Probate', 'Inheritance'].includes(topic)
    )
  ).slice(0, 4);
  
  const techPodcasts = extendedPodcasts.filter(
    podcast => podcast.topics.some(topic => 
      ['IP Protection', 'Digital Assets', 'Tech Founders', 'Intellectual Property'].includes(topic)
    )
  ).slice(0, 4);

  return (
    <main className="pt-48 bg-white">
      <ResourcePageHeader 
        title="The Legal Frontier Podcast"
        description="Our AI-powered podcast series explores the intersection of law, technology, and client needs with expert analysis and practical insights."
        variant="blue"
      />
      
      {/* Featured Podcast Section with Expanded Player */}
      <section className="py-16 border-t-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Full-width player on mobile, left side on desktop */}
            <div className={`lg:col-span-${isPlayerExpanded ? '12' : '7'} transition-all duration-300`}>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8 text-white mondrian-border relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 mondrian-yellow opacity-20 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 mondrian-red opacity-20 translate-y-1/2 -translate-x-1/2 rounded-full"></div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-700 text-white mb-3">
                        <Headphones className="w-3 h-3 mr-1" />
                        Featured Episode
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl">{selectedPodcast.title}</h2>
                      <p className="mt-2 text-blue-100 text-sm">
                        {new Date(selectedPodcast.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} • {selectedPodcast.duration}
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
                      className="text-white bg-blue-800 hover:bg-blue-700 p-2 rounded"
                    >
                      {isPlayerExpanded ? 'Minimize' : 'Expand'}
                    </button>
                  </div>
                  
                  <p className="text-blue-100 mb-6">{selectedPodcast.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPodcast.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-blue-800 text-blue-100"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {/* Embedded player component */}
                  <PodcastPlayer podcast={selectedPodcast} expanded={isPlayerExpanded} />
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button className="inline-flex items-center px-4 py-2 bg-white text-blue-900 rounded hover:bg-blue-50 transition">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-blue-800 transition">
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Save for Later
                    </button>
                    <a 
                      href={selectedPodcast.audioUrl} 
                      download
                      className="inline-flex items-center px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-blue-800 transition"
                    >
                      <Headphones className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transcript and Related Content - Hidden when player is expanded */}
            {!isPlayerExpanded && (
              <div className="lg:col-span-5">
                <div className="bg-white mondrian-border h-full">
                  {/* Tabs */}
                  <div className="flex border-b border-black">
                    <button 
                      className={`flex-1 py-3 text-center font-medium ${activeTab === 'transcript' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('transcript')}
                    >
                      <span className="inline-flex items-center">
                        <ScrollText className="w-4 h-4 mr-2" />
                        Transcript
                      </span>
                    </button>
                    <button 
                      className={`flex-1 py-3 text-center font-medium ${activeTab === 'related' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                      onClick={() => setActiveTab('related')}
                    >
                      <span className="inline-flex items-center">
                        <Book className="w-4 h-4 mr-2" />
                        Related Content
                      </span>
                    </button>
                  </div>
                  
                  {/* Transcript Content */}
                  {activeTab === 'transcript' && (
                    <div className="p-6 h-[400px] overflow-y-auto custom-scrollbar">
                      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                        {selectedPodcast.transcript}
                      </pre>
                    </div>
                  )}
                  
                  {/* Related Content */}
                  {activeTab === 'related' && (
                    <div className="p-6 h-[400px] overflow-y-auto custom-scrollbar">
                      <h3 className="font-display text-lg mb-4">Explore Related Resources</h3>
                      
                      <div className="space-y-4">
                        {selectedPodcast.relatedContent.map((content, index) => (
                          <div key={index} className="border-l-4 pl-4 py-2 hover:bg-gray-50">
                            <div className="flex items-start">
                              {content.type === 'article' && <ScrollText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />}
                              {content.type === 'book' && <Book className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />}
                              {content.type === 'research' && <Mic className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />}
                              
                              <div>
                                <div className="flex items-center">
                                  <h4 className="font-medium">{content.title}</h4>
                                  {content.clientOnly && (
                                    <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded">
                                      Client Only
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{content.excerpt}</p>
                                <Link 
                                  to={`/resources/${content.slug}`}
                                  className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center"
                                >
                                  View {content.type}
                                  <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Podcast Grid with Visual Waveforms - Estate Planning */}
      <section className="py-16 bg-gray-50 border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl relative">
              <span className="relative z-10">Estate Planning Insights</span>
              <span className="absolute left-0 bottom-0 h-3 w-24 mondrian-yellow -z-0"></span>
            </h2>
            <Link to="/resources/estate-planning-podcasts" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estatePlanningPodcasts.map((podcast, index) => (
              <div 
                key={podcast.id} 
                className="bg-white mondrian-border hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPodcast(podcast)}
              >
                {/* Mondrian-style audio visualization */}
                <div className="h-32 relative border-b-2 border-black overflow-hidden">
                  {/* Mondrian grid layout */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-1 p-1">
                    {/* Dynamic pattern based on podcast index */}
                    {index % 4 === 0 ? (
                      <>
                        <div className="col-span-5 row-span-3 bg-blue-600 border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-3 row-span-2 bg-red-600 border border-black"></div>
                        <div className="col-span-2 row-span-1 bg-yellow-400 border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-yellow-400 border border-black"></div>
                        <div className="col-span-5 row-span-1 bg-white border border-black"></div>
                      </>
                    ) : index % 4 === 1 ? (
                      <>
                        <div className="col-span-3 row-span-2 bg-yellow-400 border border-black"></div>
                        <div className="col-span-5 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-5 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-3 row-span-2 bg-white border border-black"></div>
                        <div className="col-span-5 row-span-2 bg-blue-600 border border-black"></div>
                      </>
                    ) : index % 4 === 2 ? (
                      <>
                        <div className="col-span-4 row-span-2 bg-red-600 border border-black"></div>
                        <div className="col-span-4 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-4 row-span-1 bg-blue-600 border border-black"></div>
                        <div className="col-span-2 row-span-2 bg-yellow-400 border border-black"></div>
                        <div className="col-span-2 row-span-2 bg-white border border-black"></div>
                        <div className="col-span-4 row-span-2 bg-white border border-black"></div>
                      </>
                    ) : (
                      <>
                        <div className="col-span-2 row-span-4 bg-white border border-black"></div>
                        <div className="col-span-3 row-span-2 bg-blue-600 border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-yellow-400 border border-black"></div>
                        <div className="col-span-6 row-span-2 bg-white border border-black"></div>
                      </>
                    )}
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-full hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                </div>
                  
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {podcast.topics[0]}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {podcast.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-lg mb-2 line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {podcast.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(podcast.date).toLocaleDateString()}
                    </span>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Listen now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Podcast Grid with Visual Waveforms - Tech & IP */}
      <section className="py-16 bg-white border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl relative">
              <span className="relative z-10">Digital Asset & IP Insights</span>
              <span className="absolute left-0 bottom-0 h-3 w-24 mondrian-red -z-0"></span>
            </h2>
            <Link to="/resources/ip-podcasts" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPodcasts.map((podcast, index) => (
              <div 
                key={podcast.id} 
                className="bg-white mondrian-border hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPodcast(podcast)}
              >
                {/* Mondrian-style audio visualization */}
                <div className="h-32 relative border-b-2 border-black overflow-hidden">
                  {/* Mondrian grid layout */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-1 p-1">
                    {/* Dynamic pattern based on podcast index - different patterns for tech section */}
                    {index % 4 === 0 ? (
                      <>
                        <div className="col-span-2 row-span-1 bg-yellow-400 border border-black"></div>
                        <div className="col-span-4 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-2 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-2 row-span-3 bg-blue-600 border border-black"></div>
                        <div className="col-span-6 row-span-2 bg-white border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-yellow-400 border border-black"></div>
                      </>
                    ) : index % 4 === 1 ? (
                      <>
                        <div className="col-span-8 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-3 row-span-3 bg-white border border-black"></div>
                        <div className="col-span-5 row-span-1 bg-blue-600 border border-black"></div>
                        <div className="col-span-2 row-span-2 bg-yellow-400 border border-black"></div>
                        <div className="col-span-3 row-span-2 bg-white border border-black"></div>
                      </>
                    ) : index % 4 === 2 ? (
                      <>
                        <div className="col-span-5 row-span-2 bg-blue-600 border border-black"></div>
                        <div className="col-span-3 row-span-4 bg-white border border-black"></div>
                        <div className="col-span-2 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-3 row-span-1 bg-red-600 border border-black"></div>
                        <div className="col-span-5 row-span-1 bg-yellow-400 border border-black"></div>
                      </>
                    ) : (
                      <>
                        <div className="col-span-4 row-span-1 bg-yellow-400 border border-black"></div>
                        <div className="col-span-4 row-span-1 bg-white border border-black"></div>
                        <div className="col-span-2 row-span-3 bg-red-600 border border-black"></div>
                        <div className="col-span-6 row-span-2 bg-blue-600 border border-black"></div>
                        <div className="col-span-6 row-span-1 bg-white border border-black"></div>
                      </>
                    )}
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-full hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-red-600" />
                    </div>
                  </div>
                </div>
                  
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                      {podcast.topics[0]}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {podcast.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-lg mb-2 line-clamp-2">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {podcast.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(podcast.date).toLocaleDateString()}
                    </span>
                    <button className="text-sm text-red-600 hover:text-red-800">
                      Listen now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter signup - Capture subscribers interested in the podcast */}
      <section className="py-16 bg-blue-50 border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Stay Updated on New Episodes</h2>
            <p className="text-gray-600 mb-8">Get notified when we release new podcast episodes and related content. No spam, just legal insights.</p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <ConsultationCTA />
      <Toaster />
    </main>
  );
};

export default Podcasts;
