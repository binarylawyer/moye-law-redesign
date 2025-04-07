import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight, Users, Scale, Database, Globe, Shield, Briefcase, Lock } from 'lucide-react';
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Toaster } from "@/components/ui/toaster";
import { researchPapers, ResearchPaper } from '../data/researchData';
import { Button } from "@/components/ui/button";

// Icon Helper (copied from ResearchPaperPage, consider moving to utils)
import * as LucideIcons from 'lucide-react';
function isValidIconName(name: string): name is keyof typeof LucideIcons {
  return name in LucideIcons;
}
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  if (isValidIconName(name)) {
    const Icon = LucideIcons[name];
    return <Icon className={className} />;
  }
  return <LucideIcons.FileText className={className} />; // Default icon
};

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn] = useState(false); // This would normally come from auth context

  // Define categories and topics inside the component using useMemo
  const categories = useMemo(() => 
    Array.from(new Set(researchPapers.map(paper => paper.category)))
  , []); // Empty dependency array - only calculate once

  const allTopics = useMemo(() => 
    Array.from(new Set(researchPapers.flatMap(paper => paper.topics || [])))
  , []); // Empty dependency array - only calculate once

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle topic selection
  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  // Filter papers by category and topics
  const filteredPapers = researchPapers.filter(paper => {
    const matchesCategory = activeCategory === 'All' || paper.category === activeCategory;
    const matchesTopics = selectedTopics.length === 0 || 
      selectedTopics.every(topic => paper.topics?.includes(topic));
    
    return matchesCategory && matchesTopics;
  });

  if (isLoading) {
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-48 bg-white">
      <ResourcePageHeader
        title="Academic Research & Analysis"
        description="Access our scholarly publications, academic papers, and in-depth legal analysis across various practice areas."
        variant="blue"
      />

      {/* Filters Section */}
      <section className="py-10 border-t-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-6">
            {/* Category filter */}
            <div>
              <h3 className="text-lg font-medium mb-3">Research Categories</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`px-4 py-2 text-sm font-medium border-2 transition-colors ${
                    activeCategory === 'All'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-black border-black hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm font-medium border-2 transition-colors ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-black border-black hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Topics filter */}
            <div>
              <h3 className="text-lg font-medium mb-3">Research Topics</h3>
              <div className="flex flex-wrap gap-2">
                {allTopics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`px-3 py-1 text-sm whitespace-nowrap rounded-full transition-colors ${
                      selectedTopics.includes(topic)
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPapers.map((paper, index) => (
                <Link
                  key={paper.id}
                  to={`/research/${paper.slug}`}
                  className={`block bg-white ${
                    index % 2 === 0 ? 'border-l-8 border-l-blue-600' : 'border-l-8 border-l-red-600'
                  } border-t-2 border-r-2 border-b-2 border-black p-6 transition-shadow duration-300 group hover:shadow-lg ${
                    paper.clientOnly && !isLoggedIn ? 'opacity-70 grayscale pointer-events-none' : ''
                  }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Top section with icon and category */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-full ${
                          index % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
                        }`}>
                        <IconComponent name={paper.iconName} className={`h-7 w-7 ${index % 2 === 0 ? 'text-blue-700' : 'text-red-700'}`} />
                      </div>
                      {paper.clientOnly && (
                        <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-1 rounded flex items-center">
                          <Lock className="h-3 w-3 mr-1" /> Client Only
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display text-xl text-black mb-3 flex-grow group-hover:text-navy transition-colors duration-300">
                      {paper.title}
                    </h3>
                    
                    {/* Authors */}
                    <p className="text-sm text-gray-600 mb-4">
                      By {paper.authors.map(a => a.name).join(', ')}
                    </p>
                    
                    {/* Abstract */}
                    <p className="text-sm text-gray-700 line-clamp-3 mb-6 flex-grow">
                      {paper.abstract}
                    </p>
                    
                    {/* Footer with date and action */}
                    <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(paper.publicationDate).toLocaleDateString()}
                      </span>
                      <Button 
                        variant="link"
                        size="sm"
                        className="text-navy group-hover:text-gold p-0 h-auto font-semibold"
                        onClick={(e) => {
                          if (paper.clientOnly && !isLoggedIn) {
                            e.preventDefault(); 
                          }
                        }}
                      >
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No research papers match the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Client Access Section */}
      {!isLoggedIn && (
        <section className="py-16 bg-blue-50 border-t-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl mb-4">Access Premium Research</h2>
              <p className="text-gray-600 mb-8">
                As a Moye Law client, you gain exclusive access to our complete library of legal research, 
                including in-depth analysis papers, comparative studies, and policy recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/client-login"
                  className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Client Login
                </a>
                <a
                  href="/consultation"
                  className="px-6 py-3 bg-white border-2 border-black text-black font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
      <Toaster />
    </main>
  );
};

export default Research; 