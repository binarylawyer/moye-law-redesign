import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Lock, Download, ChevronRight, FileText, Users, Shield, Database, Briefcase, Scale, Globe, Mic } from 'lucide-react';
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Toaster } from "@/components/ui/toaster";
import { books, Book as BookType } from '../data/booksData';
import { Button } from "@/components/ui/button";

// Book categories
const categories = Array.from(new Set(books.map(book => book.category)));

const Books: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn] = useState(false); // This would normally come from auth context
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter books by category
  const filteredBooks = activeCategory === 'All' 
    ? books 
    : books.filter(book => book.category === activeCategory);
  
  if (isLoading) {
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        title="Legal Resource Library"
        description="Download our comprehensive guides and books on various legal topics. Some resources are exclusively available to clients."
        variant="yellow"
      />
      
      {/* Category Filter */}
      <section className="py-10 border-t-4 border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'All'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Books
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBooks.map(book => (
              <Link 
                key={book.id}
                to={`/books/${book.slug}`}
                className={`block bg-white border-2 border-black overflow-hidden transition-all duration-300 group ${
                  book.clientOnly && !isLoggedIn
                    ? 'opacity-70 grayscale pointer-events-none'
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white">
                    <div className="bg-white text-black p-4 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      <Book className="h-8 w-8" />
                    </div>
                    <div className="text-center px-4">
                      <div className="font-display text-lg transition-colors duration-300 group-hover:text-yellow-300">{book.title}</div>
                      <div className="text-sm text-gray-300 mt-2">{book.author}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {book.category}
                    </span>
                    {book.clientOnly && (
                      <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-1 rounded flex items-center">
                        <Lock className="h-3 w-3 mr-1" /> Client Only
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-navy transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {book.pages ? `${book.pages} pages | ` : ''} Published: {book.publicationDate}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {book.clientOnly && !isLoggedIn ? (
                      <Button variant="outline" size="sm" disabled className="w-full">
                        <Lock className="w-4 h-4 mr-2" /> Login to View
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full bg-transparent border-black text-black hover:bg-black hover:text-white transition-colors duration-300">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Login CTA */}
      {!isLoggedIn && (
        <section className="py-16 bg-gray-50 border-t-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl mb-4">Access Client-Exclusive Resources</h2>
              <p className="text-gray-600 mb-8">As a Moye Law client, you gain access to our complete library of legal resources, including in-depth guides and books that aren't publicly available.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/login"
                  className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
                >
                  Client Login
                </a>
                <a 
                  href="/contact"
                  className="bg-white border-2 border-black text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  Become a Client
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-12">Explore More Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Book className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-display text-xl mb-3">Articles & Insights</h3>
                <p className="text-gray-600 mb-6">Explore our collection of articles on cutting-edge legal topics and industry trends.</p>
                <a 
                  href="/resources/articles"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Browse Articles
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="border-2 border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 mb-4 text-red-600" />
                <h3 className="font-display text-xl mb-3">Research Publications</h3>
                <p className="text-gray-600 mb-6">Access our in-depth research on complex legal issues and emerging practice areas.</p>
                <a 
                  href="/research"
                  className="inline-flex items-center text-red-600 hover:text-red-800 font-medium"
                >
                  View Research
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="border-2 border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="font-display text-xl mb-3">AI Podcast Series</h3>
                <p className="text-gray-600 mb-6">Listen to our AI-driven podcast exploring complex legal topics in an accessible format.</p>
                <a 
                  href="/podcasts"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Listen Now
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
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

export default Books; 