import React, { useState, useEffect } from 'react';
import { Book, Lock, Download, ChevronRight, FileText, Users, Shield, Database, Briefcase, Scale, Globe } from 'lucide-react';
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Toaster } from "@/components/ui/toaster";

// Define the book data structure
interface BookData {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  pages: number;
  publishDate: string;
  clientOnly: boolean;
  downloadUrl: string;
  category: string;
  relatedPracticeArea: string;
  icon: React.ReactNode;
}

// Sample book data
const books: BookData[] = [
  {
    id: "book-1",
    title: "The Digital Estate: Planning for Your Online Legacy",
    author: "Moye Law Digital Asset Team",
    cover: "/images/books/digital-estate-planning.jpg",
    description: "A comprehensive guide to protecting and transferring digital assets as part of your estate plan. Includes practical worksheets and implementation strategies.",
    pages: 78,
    publishDate: "2023-10-15",
    clientOnly: false,
    downloadUrl: "#digital-estate-planning",
    category: "Estate Planning",
    relatedPracticeArea: "Digital Asset & Emerging Technology",
    icon: <Database className="h-8 w-8" />
  },
  {
    id: "book-2",
    title: "Safeguarding AI Innovation: Legal Frameworks for Tech Founders",
    author: "Moye Law IP Team",
    cover: "/images/books/ai-innovation-legal-guide.jpg",
    description: "Learn how to protect AI innovations through patents, trade secrets, and strategic contracts. Includes case studies and compliance checklists.",
    pages: 92,
    publishDate: "2023-09-02",
    clientOnly: true,
    downloadUrl: "#ai-innovation-framework",
    category: "Intellectual Property",
    relatedPracticeArea: "IP Consulting & Strategy",
    icon: <Shield className="h-8 w-8" />
  },
  {
    id: "book-3",
    title: "Smart Contracts & Digital Transactions: A Legal Guide",
    author: "Moye Law Transactions Team",
    cover: "/images/books/smart-contracts-guide.jpg",
    description: "A practical guide to implementing legally sound smart contracts and digital transactions. Includes regulatory considerations and enforcement mechanisms.",
    pages: 64,
    publishDate: "2023-11-20",
    clientOnly: false,
    downloadUrl: "#smart-contracts-guide",
    category: "Transactions",
    relatedPracticeArea: "Licensing & Transactions",
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    id: "book-4",
    title: "Family Wealth Preservation: Multi-Generational Planning Strategies",
    author: "Moye Law Estate Team",
    cover: "/images/books/family-wealth-preservation.jpg",
    description: "Advanced strategies for preserving family wealth across generations. Covers trusts, family governance, and tax optimization techniques.",
    pages: 110,
    publishDate: "2023-08-15",
    clientOnly: true,
    downloadUrl: "#wealth-preservation-strategies",
    category: "Estate Planning",
    relatedPracticeArea: "Estate Planning",
    icon: <Users className="h-8 w-8" />
  },
  {
    id: "book-5",
    title: "Creative Rights in the Digital Age: A Guidebook for Artists",
    author: "Moye Law Arts Team",
    cover: "/images/books/creative-rights-digital-age.jpg",
    description: "Protecting creative works in the digital landscape. Covers copyright, licensing, and emerging issues in NFTs and digital art.",
    pages: 86,
    publishDate: "2023-07-10",
    clientOnly: false,
    downloadUrl: "#creative-rights-guidebook",
    category: "Arts & Entertainment",
    relatedPracticeArea: "Art & Entertainment Law",
    icon: <FileText className="h-8 w-8" />
  },
  {
    id: "book-6",
    title: "Elder Care Legal Frameworks: Preparing for Later Life Transitions",
    author: "Moye Law Elder Law Team",
    cover: "/images/books/elder-care-frameworks.jpg",
    description: "A comprehensive guide to the legal aspects of aging. Covers healthcare directives, asset protection, and caregiving arrangements.",
    pages: 72,
    publishDate: "2023-12-05",
    clientOnly: false,
    downloadUrl: "#elder-care-frameworks",
    category: "Elder Law",
    relatedPracticeArea: "Elder Law",
    icon: <Users className="h-8 w-8" />
  },
  {
    id: "book-7",
    title: "Global IP Strategy: Cross-Border Protection Frameworks",
    author: "Moye Law International IP Team",
    cover: "/images/books/global-ip-strategy.jpg",
    description: "Strategic approaches to protecting intellectual property across multiple jurisdictions. Includes enforcement mechanisms and treaty considerations.",
    pages: 98,
    publishDate: "2023-06-22",
    clientOnly: true,
    downloadUrl: "#global-ip-strategy",
    category: "Intellectual Property",
    relatedPracticeArea: "IP Consulting & Strategy",
    icon: <Globe className="h-8 w-8" />
  },
  {
    id: "book-8",
    title: "Startup Legal Playbook: From Formation to Exit",
    author: "Moye Law Business Team",
    cover: "/images/books/startup-legal-playbook.jpg",
    description: "Essential legal guidance for technology startups at every stage. Covers entity formation, equity arrangements, IP strategy, and exit planning.",
    pages: 124,
    publishDate: "2023-05-14",
    clientOnly: false,
    downloadUrl: "#startup-legal-playbook",
    category: "Business Law",
    relatedPracticeArea: "Licensing & Transactions",
    icon: <Scale className="h-8 w-8" />
  }
];

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
              <div
                key={book.id}
                className={`bg-white border-2 border-black overflow-hidden transition-all duration-300 ${
                  book.clientOnly && !isLoggedIn
                    ? 'opacity-70 grayscale'
                    : 'hover:shadow-xl'
                }`}
              >
                {/* Book Cover */}
                <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                  {/* Placeholder cover with icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white">
                    <div className="bg-white text-black p-4 rounded-full mb-4">
                      {book.icon}
                    </div>
                    <div className="text-center px-4">
                      <div className="font-display text-lg">{book.title}</div>
                      <div className="text-sm text-gray-300 mt-2">{book.author}</div>
                    </div>
                  </div>
                </div>
                
                {/* Book Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {book.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {book.pages} pages
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Published: {new Date(book.publishDate).toLocaleDateString()}
                      </span>
                      
                      {book.clientOnly && !isLoggedIn ? (
                        <div className="flex items-center text-gray-500">
                          <Lock className="h-4 w-4 mr-1" />
                          <span className="text-sm">Client Only</span>
                        </div>
                      ) : (
                        <a
                          href={book.downloadUrl}
                          className="inline-flex items-center px-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
                  href="/resources/research"
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