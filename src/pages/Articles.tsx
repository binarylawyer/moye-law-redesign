import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../data/resourcesData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { Search, SortAsc, SortDesc } from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

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
  }, []);

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

  // Add these console logs
  console.log('Articles component rendered');
  console.log('All articles:', allArticles);
  console.log('Featured articles:', featuredArticles);

  return (
    <ErrorBoundary>
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
                  className="reveal bg-white rounded-lg shadow-md overflow-hidden card-hover"
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
                    <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <Link 
                      to={`/resources/${article.slug}`}
                      className="text-navy hover:text-gold transition-colors text-sm font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => 
                      prev.includes(tag) 
                        ? prev.filter(t => t !== tag)
                        : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-navy text-white'
                        : 'bg-navy/10 text-navy hover:bg-navy/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <button
                onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
              >
                {sortOrder === 'newest' ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
                {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {paginatedArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedArticles.map((article, index) => (
                    <div 
                      key={article.id}
                      className="reveal bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
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
                        <h2 className="font-serif text-xl text-navy mb-3">
                          {article.title}
                        </h2>
                        <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Link 
                            to={`/resources/${article.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
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

                {/* Pagination */}
                <div className="mt-12 flex justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-md ${
                        currentPage === page
                          ? 'bg-navy text-white'
                          : 'bg-white text-navy hover:bg-navy/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-charcoal/60">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default Articles;
