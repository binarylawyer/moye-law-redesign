import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Practice: React.FC = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Updated practice areas to follow the hub-and-spoke model
  const practiceAreas = [
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Strategic protection and monetization of intellectual property assets in the digital age.",
      benefit: "Comprehensive IP services including patents, trademarks, copyrights, and trade secrets.",
      path: "/practice/intellectual-property"
    },
    {
      id: "estate-legacy",
      title: "Estate & Legacy",
      description: "Holistic wealth preservation, succession planning, and elder care solutions for families and individuals.",
      benefit: "Preserving wealth and ensuring your legacy for generations to come.",
      path: "/practice/estate-legacy"
    },
    {
      id: "arts-media-law",
      title: "Arts & Media Law",
      description: "Legal support for artists, creators, and media professionals in traditional and digital spaces.",
      benefit: "Protecting creative works and navigating the complex entertainment industry landscape.",
      path: "/practice/arts-media-law"
    },
    {
      id: "real-estate-hub",
      title: "Real Estate",
      description: "Sophisticated counsel for property transactions, development projects, and real estate investments.",
      benefit: "Navigate complex property matters with confidence and strategic planning.",
      path: "/practice/real-estate-hub"
    },
    {
      id: "emerging-technology-hub",
      title: "Emerging Technology",
      description: "Forward-thinking legal guidance for AI, blockchain, and other cutting-edge technologies.",
      benefit: "Navigate the legal complexities of tomorrow's technologies with expert counsel.",
      path: "/practice/emerging-technology-hub"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section with Title - Mondrian Style */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-0 border-4 border-black">
              <div className="col-span-3 bg-[#D6001C]"></div>
              <div className="col-span-6 bg-white p-8 text-center">
                <h1 className="font-display text-4xl md:text-5xl text-black mb-6">
                  Practice Areas
                </h1>
                <p className="text-black/80 text-lg md:text-xl">
                  Specialized legal expertise serving high-net-worth individuals and their families.
                </p>
              </div>
              <div className="col-span-3 bg-[#003B98]"></div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceAreas.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="reveal border-4 border-black bg-white overflow-hidden flex flex-col visible"
                  style={{ transitionDelay: `${0.1 * (index % 2)}s` }}
                >
                  <div className={`h-2 w-1/3 ${index % 3 === 0 ? 'bg-[#D6001C]' : index % 3 === 1 ? 'bg-[#003B98]' : 'bg-[#FFD500]'} mt-6 ml-6`}></div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-black mb-4">{practice.title}</h3>
                    <p className="text-black/80 mb-4">{practice.description}</p>
                    
                    {practice.benefit && (
                      <p className="text-black/60 mb-8 italic">
                        {practice.benefit}
                      </p>
                    )}
                    
                    <div className="mt-auto">
                      <Link 
                        to={practice.path} 
                        className="inline-flex items-center text-black hover:text-[#D6001C] transition-colors"
                      >
                        Learn more <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Practice;
