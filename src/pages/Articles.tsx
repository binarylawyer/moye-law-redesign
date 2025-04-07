import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resources as articles } from '../data/articlesData';
import ConsultationCTA from "../components/ConsultationCTA";

const ITEMS_PER_PAGE = 9;

const Articles: React.FC = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Get all articles
  const allArticles = articles.filter(resource => resource.category === 'article');
  
  // Get featured articles (newest 3 articles)
  const featuredArticles = allArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get all unique tags
  const allTags = [...new Set(allArticles.flatMap(article => article.tags || []))];

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    return allArticles
      .filter(article => {
        const matchesSearch = searchQuery === '' ||
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesTags = selectedTags.length === 0 ||
          selectedTags.every(tag => article.tags?.includes(tag));
        
        return matchesSearch && matchesTags;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
  }, [allArticles, searchQuery, selectedTags, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [allArticles]);

  if (isLoading) {
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
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
      {/* Hero Section with Featured Articles - Mondrian Style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Mondrian-style title container */}
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-red"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h1 className="font-display text-4xl md:text-5xl text-black mb-6">
                Legal Insights & Articles
              </h1>
              <p className="text-black/80 text-lg md:text-xl">
                Stay informed with our latest legal insights, analysis, and expert perspectives.
              </p>
            </div>
            <div className="col-span-3 mondrian-yellow"></div>
          </div>

          {/* Featured Articles - Mondrian Grid */}
          <div className="mondrian-grid mb-20">
            {/* Featured 1 */}
            <div className="col-span-12 md:col-span-4 mondrian-grid-item bg-white p-6">
              <div className="h-3 mondrian-red w-1/2 mb-4"></div>
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1">
                  Featured
                </span>
                <span className="text-xs text-black/60 ml-3">
                  {featuredArticles[0]?.date}
                </span>
              </div>
              <h3 className="font-display text-xl text-black mb-3">
                {featuredArticles[0]?.title}
              </h3>
              <p className="text-black/80 text-sm mb-4 line-clamp-3">
                {featuredArticles[0]?.description}
              </p>
              <Link 
                to={`/resources/${featuredArticles[0]?.slug}`}
                className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors text-sm font-medium inline-flex items-center"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Featured 2 */}
            <div className="col-span-12 md:col-span-4 mondrian-grid-item bg-white p-6">
              <div className="h-3 mondrian-blue w-1/3 mb-4"></div>
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1">
                  Featured
                </span>
                <span className="text-xs text-black/60 ml-3">
                  {featuredArticles[1]?.date}
                </span>
              </div>
              <h3 className="font-display text-xl text-black mb-3">
                {featuredArticles[1]?.title}
              </h3>
              <p className="text-black/80 text-sm mb-4 line-clamp-3">
                {featuredArticles[1]?.description}
              </p>
              <Link 
                to={`/resources/${featuredArticles[1]?.slug}`}
                className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors text-sm font-medium inline-flex items-center"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Featured 3 */}
            <div className="col-span-12 md:col-span-4 mondrian-grid-item bg-white p-6">
              <div className="h-3 mondrian-yellow w-2/3 mb-4"></div>
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1">
                  Featured
                </span>
                <span className="text-xs text-black/60 ml-3">
                  {featuredArticles[2]?.date}
                </span>
              </div>
              <h3 className="font-display text-xl text-black mb-3">
                {featuredArticles[2]?.title}
              </h3>
              <p className="text-black/80 text-sm mb-4 line-clamp-3">
                {featuredArticles[2]?.description}
              </p>
              <Link 
                to={`/resources/${featuredArticles[2]?.slug}`}
                className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors text-sm font-medium inline-flex items-center"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search - Mondrian Style */}
      <section className="py-10 border-t-4 border-b-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search with Mondrian styling */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Tags Filter - Mondrian Style */}
            <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 hide-scrollbar">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTags(prev => 
                    prev.includes(tag) 
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  )}
                  className={`px-3 py-1 text-sm whitespace-nowrap transition-colors duration-200 border-2 ${
                    selectedTags.includes(tag)
                      ? 'bg-[#D6001C] text-white border-black'
                      : 'bg-white text-black border-black hover:bg-black/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort - Mondrian style */}
            <button
              onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
              className="text-sm text-black hover:text-[#D6001C] transition-colors flex items-center whitespace-nowrap border-2 border-black px-3 py-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
          </div>
        </div>
      </section>

      {/* Articles Grid - Mondrian Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {paginatedArticles.length > 0 ? (
            <>
              <div className="mondrian-grid">
                {paginatedArticles.map((article, index) => (
                  <div 
                    key={article.id}
                    className={`col-span-12 md:col-span-4 mondrian-grid-item bg-white p-6 reveal visible`}
                    style={{ transitionDelay: `${0.1 * index}s` }}
                  >
                    <div className={`h-2 w-1/3 mb-4 ${index % 3 === 0 ? 'mondrian-red' : index % 3 === 1 ? 'mondrian-blue' : 'mondrian-yellow'}`}></div>
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1">
                        Article
                      </span>
                      <span className="text-xs text-black/60 ml-3">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="font-display text-xl text-black mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-black/80 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/resources/${article.slug}`}
                        className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors text-sm font-medium inline-flex items-center"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                      {article.author && (
                        <span className="text-xs text-black/60">
                          By {article.author}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination - Mondrian Style */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &larr;
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 border-2 border-black flex items-center justify-center ${
                        currentPage === page ? 'bg-[#D6001C] text-white' : 'bg-white text-black hover:bg-black/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &rarr;
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 border-4 border-black">
              <h3 className="text-xl mb-2">No articles found</h3>
              <p className="text-black/70">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Research Section - Academic Papers and Analysis */}
      <section className="py-16 md:py-24 bg-gray-50 border-t-4 border-black">
        <div className="container mx-auto px-4">
          {/* Mondrian-style title container */}
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-blue"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-black mb-6">
                Academic Research & Analysis
              </h2>
              <p className="text-black/80 text-lg">
                In-depth scholarly articles and comprehensive legal research from our expert team.
              </p>
            </div>
            <div className="col-span-3 mondrian-yellow"></div>
          </div>

          {/* Research Papers */}
          <div className="mondrian-grid">
            {articles
              .filter(resource => resource.category === 'research')
              .slice(0, 3)
              .map((research, index) => (
                <div 
                  key={research.id}
                  className="col-span-12 md:col-span-4 mondrian-grid-item bg-white p-6 border-2 border-black flex flex-col"
                >
                  <div className={`h-3 ${
                    index % 3 === 0 ? 'mondrian-blue' : 
                    index % 3 === 1 ? 'mondrian-red' : 
                    'mondrian-yellow'
                  } w-${index % 2 === 0 ? '1/2' : '2/3'} mb-4`}></div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1">
                      Research
                    </span>
                    <span className="text-xs text-black/60 ml-3">
                      {research.date}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl text-black mb-3">
                    {research.title}
                  </h3>
                  
                  <p className="text-black/80 text-sm mb-4 line-clamp-3 flex-grow">
                    {research.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <Link 
                      to={`/research/${research.slug}`}
                      className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors text-sm font-medium inline-flex items-center"
                    >
                      Read Full Paper
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    {research.clientOnly && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        Client Access
                      </span>
                    )}
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/research"
              className="inline-flex items-center bg-white border-2 border-black px-6 py-2 font-medium hover:bg-black hover:text-white transition-colors"
            >
              View All Research
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mondrian-style divider */}
      <div className="mondrian-divider max-w-7xl mx-auto mb-16">
        <div className="mondrian-divider-red"></div>
        <div className="mondrian-divider-white"></div>
        <div className="mondrian-divider-blue"></div>
        <div className="mondrian-divider-yellow"></div>
      </div>

      <ConsultationCTA />
    </main>
  );
};

export default Articles;
