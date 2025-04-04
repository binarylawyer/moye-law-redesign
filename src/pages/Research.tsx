import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ChevronRight, Users, Scale, Database, Globe, Shield, Briefcase } from 'lucide-react';
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import ConsultationCTA from "../components/ConsultationCTA";
import { Toaster } from "@/components/ui/toaster";

// Define research paper data structure
interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  category: string;
  topics: string[];
  clientOnly: boolean;
  downloadUrl: string;
  pdfSize: string;
  citation: string;
  slug: string;
  icon: React.ReactNode;
}

// Sample research papers
const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title: "Algorithmic Estate Planning: Automated Decision Systems in Wealth Distribution",
    authors: ["Dr. Emily Chen", "Prof. Michael Rodriguez, J.D."],
    abstract: "This paper examines the legal implications of using artificial intelligence and algorithmic systems to automate estate planning decisions. We analyze recent case law regarding algorithmic decision-making and propose a framework for compliance with fiduciary responsibilities.",
    publicationDate: "2023-11-15",
    category: "Estate Planning",
    topics: ["AI/ML", "Automation", "Fiduciary Law"],
    clientOnly: false,
    downloadUrl: "/papers/algorithmic-estate-planning.pdf",
    pdfSize: "1.2 MB",
    citation: "Chen, E. & Rodriguez, M. (2023). Algorithmic Estate Planning: Automated Decision Systems in Wealth Distribution. Journal of Digital Law, 12(4), 78-92.",
    slug: "algorithmic-estate-planning",
    icon: <Database className="h-8 w-8" />
  },
  {
    id: "paper-2",
    title: "Cross-Jurisdictional NFT Protection: A Comparative Analysis",
    authors: ["Dr. James Wilson", "Sarah Matthews, Esq."],
    abstract: "This research evaluates how different legal jurisdictions approach the protection of non-fungible tokens (NFTs) and digital art. Through analysis of recent litigation in the United States, European Union, and Singapore, we identify emerging legal frameworks and propose harmonization strategies.",
    publicationDate: "2023-09-22",
    category: "Digital Assets",
    topics: ["NFTs", "Intellectual Property", "International Law"],
    clientOnly: true,
    downloadUrl: "/papers/cross-jurisdictional-nft-protection.pdf",
    pdfSize: "2.4 MB",
    citation: "Wilson, J. & Matthews, S. (2023). Cross-Jurisdictional NFT Protection: A Comparative Analysis. International Journal of Digital Property Law, 8(2), 145-167.",
    slug: "cross-jurisdictional-nft-protection",
    icon: <Globe className="h-8 w-8" />
  },
  {
    id: "paper-3",
    title: "Emerging Contract Protocols: Smart Contract Enforceability in Elder Care Arrangements",
    authors: ["Prof. David Thompson, J.D.", "Dr. Lisa Nguyen"],
    abstract: "This paper investigates the legal enforceability of blockchain-based smart contracts in elder care arrangements. We analyze current statutory frameworks, identify gaps in existing law, and propose model legislation that balances technological innovation with elder protection principles.",
    publicationDate: "2023-10-05",
    category: "Elder Law",
    topics: ["Smart Contracts", "Elder Care", "Legislative Frameworks"],
    clientOnly: false,
    downloadUrl: "/papers/smart-contracts-elder-care.pdf",
    pdfSize: "1.8 MB",
    citation: "Thompson, D. & Nguyen, L. (2023). Emerging Contract Protocols: Smart Contract Enforceability in Elder Care Arrangements. Elder Law Review, 15(3), 210-228.",
    slug: "smart-contracts-elder-care",
    icon: <Users className="h-8 w-8" />
  },
  {
    id: "paper-4",
    title: "Licensing Limitations in Generative AI: Implications for Creative Industries",
    authors: ["Dr. Alexandra Park", "Jonathan Lee, Esq."],
    abstract: "This paper examines the emerging licensing challenges posed by generative AI technologies in creative industries. We analyze recent copyright litigation involving AI-generated works and propose a framework for equitable licensing structures that protect both human creators and technological innovation.",
    publicationDate: "2023-12-10",
    category: "Intellectual Property",
    topics: ["Generative AI", "Copyright", "Creative Industries"],
    clientOnly: true,
    downloadUrl: "/papers/generative-ai-licensing.pdf",
    pdfSize: "2.1 MB",
    citation: "Park, A. & Lee, J. (2023). Licensing Limitations in Generative AI: Implications for Creative Industries. Technology Law Review, 19(4), 302-318.",
    slug: "generative-ai-licensing",
    icon: <Shield className="h-8 w-8" />
  },
  {
    id: "paper-5",
    title: "Multi-Generational Business Structures: Tax Optimization Strategies for Family-Owned Tech Companies",
    authors: ["Prof. Richard Davis, J.D.", "Dr. Maria Gonzalez"],
    abstract: "This research analyzes optimal business structures for transferring technology companies across multiple generations. We compare various trust instruments, corporate forms, and intellectual property holding strategies to maximize tax efficiency while preserving family control.",
    publicationDate: "2023-08-18",
    category: "Business Law",
    topics: ["Family Business", "Tax Planning", "Succession Planning"],
    clientOnly: false,
    downloadUrl: "/papers/multi-generational-tech-business.pdf",
    pdfSize: "1.9 MB",
    citation: "Davis, R. & Gonzalez, M. (2023). Multi-Generational Business Structures: Tax Optimization Strategies for Family-Owned Tech Companies. Journal of Business Planning, 22(2), 178-195.",
    slug: "multi-generational-tech-business",
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    id: "paper-6",
    title: "Algorithmic Bias in Legal Technology: Impacts on Access to Justice",
    authors: ["Dr. Samantha Wong", "Thomas Rivera, J.D."],
    abstract: "This paper investigates how algorithmic bias in legal technology tools affects access to justice for underserved communities. Through empirical analysis of automated legal document systems, we identify patterns of bias and propose technical and policy interventions to mitigate disparate impacts.",
    publicationDate: "2024-01-15",
    category: "Legal Technology",
    topics: ["Algorithm Bias", "Access to Justice", "Legal Ethics"],
    clientOnly: false,
    downloadUrl: "/papers/algorithmic-bias-legal-tech.pdf",
    pdfSize: "1.7 MB",
    citation: "Wong, S. & Rivera, T. (2024). Algorithmic Bias in Legal Technology: Impacts on Access to Justice. Journal of Legal Technology, 7(1), 45-63.",
    slug: "algorithmic-bias-legal-tech",
    icon: <Scale className="h-8 w-8" />
  }
];

// Get all categories and topics for filtering
const categories = Array.from(new Set(researchPapers.map(paper => paper.category)));
const allTopics = Array.from(new Set(researchPapers.flatMap(paper => paper.topics)));

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn] = useState(false); // This would normally come from auth context

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
      selectedTopics.every(topic => paper.topics.includes(topic));
    
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
                <div
                  key={paper.id}
                  className={`bg-white ${
                    index % 2 === 0 ? 'border-l-8 border-l-blue-600' : 'border-l-8 border-l-red-600'
                  } border-t-2 border-r-2 border-b-2 border-black p-0 ${
                    paper.clientOnly && !isLoggedIn
                      ? 'opacity-70 grayscale'
                      : 'hover:shadow-lg'
                  } transition-all`}
                >
                  <div className="p-6">
                    {/* Paper header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className={`p-2 mr-4 ${
                          index % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
                        } rounded-full`}>
                          {paper.icon}
                        </div>
                        <div>
                          <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {paper.category}
                          </span>
                          {paper.clientOnly && (
                            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                              Client Only
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {paper.publicationDate}
                      </span>
                    </div>
                    
                    {/* Paper title */}
                    <h2 className="font-display text-xl font-medium text-black mb-3">
                      {paper.title}
                    </h2>
                    
                    {/* Authors */}
                    <p className="text-sm text-gray-700 mb-4">
                      By {paper.authors.join(', ')}
                    </p>
                    
                    {/* Abstract */}
                    <p className="text-sm text-gray-600 mb-4">
                      {paper.abstract}
                    </p>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.topics.map(topic => (
                        <span 
                          key={topic}
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    {/* Citation */}
                    <div className="bg-gray-50 p-3 mb-4 text-xs text-gray-700 border border-gray-200">
                      <strong>Citation:</strong> {paper.citation}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/research/${paper.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        View Full Paper
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                      
                      <a
                        href={paper.clientOnly && !isLoggedIn ? "#login-required" : paper.downloadUrl}
                        className={`inline-flex items-center text-sm ${
                          paper.clientOnly && !isLoggedIn
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-blue-600 hover:text-blue-800'
                        }`}
                        onClick={(e) => {
                          if (paper.clientOnly && !isLoggedIn) {
                            e.preventDefault();
                            // Would normally show login modal
                            alert("Please log in to download client-only research papers");
                          }
                        }}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF ({paper.pdfSize})
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-4 border-black">
              <h3 className="text-xl mb-2">No research papers found</h3>
              <p className="text-gray-600">Try adjusting your search filters</p>
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