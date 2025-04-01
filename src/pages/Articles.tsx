import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../data/resourcesData';
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  const allArticles = resources.filter(resource => resource.category === 'article');
  
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
    
    // Remove verbose debugging logs
    console.log(`Total articles found: ${allArticles.length}`);
  }, [allArticles]);

  if (isLoading) {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-32 bg-white">
        {/* Hero Section with Featured Articles */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Legal Insights & Articles
              </h1>
              <p className="text-charcoal/80 text-lg md:text-xl">
                Stay informed with our latest legal insights, analysis, and expert perspectives.
              </p>
            </div>

            {/* Featured Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article, index) => (
                <div 
                  key={article.id}
                  className="reveal visible bg-white rounded-lg shadow-md overflow-hidden card-hover transition-transform duration-300 hover:translate-y-[-5px]"
                  style={{ transitionDelay: `${0.1 * index}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-medium bg-gold/20 text-gold px-2 py-1 rounded">
                        Featured
                      </span>
                      <span className="text-xs text-charcoal/60 ml-3">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-navy mb-3">
                      {article.title}
                    </h3>
                    <p className="text-charcoal/80 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <Link 
                      to={`/resources/${article.slug}`}
                      className="text-navy hover:text-gold transition-colors text-sm font-medium inline-flex items-center"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-10 border-b bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search with icon */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </div>

              {/* Tags Filter - scrollable on mobile */}
              <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-2 hide-scrollbar">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => 
                      prev.includes(tag) 
                        ? prev.filter(t => t !== tag)
                        : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-navy text-white'
                        : 'bg-navy/10 text-navy hover:bg-navy/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort - with icon */}
              <button
                onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                className="text-sm text-navy hover:text-gold transition-colors flex items-center whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {paginatedArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedArticles.map((article, index) => (
                    <div 
                      key={article.id}
                      className="reveal visible bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover transition-all duration-300 hover:shadow-md hover:border-gray-200"
                      style={{ transitionDelay: `${0.1 * index}s` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                            Article
                          </span>
                          <span className="text-xs text-charcoal/60 ml-3">
                            {article.date}
                          </span>
                        </div>
                        <h2 className="font-serif text-xl text-navy mb-3 line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-charcoal/80 text-sm mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Link 
                            to={`/resources/${article.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium inline-flex items-center"
                          >
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                          {article.author && (
                            <span className="text-xs text-charcoal/60">
                              By {article.author}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination - Improved */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 rounded-md flex items-center justify-center ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-navy hover:bg-navy/10'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-md transition-colors ${
                          currentPage === page
                            ? 'bg-navy text-white'
                            : 'bg-white text-navy hover:bg-navy/10'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 rounded-md flex items-center justify-center ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-navy hover:bg-navy/10'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-navy mb-2">No Articles Found</h3>
                <p className="text-charcoal/60 max-w-md mx-auto">
                  We couldn't find any articles matching your search criteria. 
                  Try adjusting your filters or search terms.
                </p>
                {(searchQuery || selectedTags.length > 0) && (
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTags([]);
                    }}
                    className="mt-6 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Articles;
