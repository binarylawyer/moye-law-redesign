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
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Compassionate legal support for seniors and their families addressing aging-related challenges.",
      benefit: "Ensuring dignity, security, and peace of mind for older adults.",
      path: "/practice/elder-law"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="py-48 md:py-64">
          <div className="container mx-auto px-24 md:px-32">
            <h1 className="reveal font-sans text-primary text-4xl md:text-5xl lg:text-6xl mb-32 md:mb-48 text-center font-light">
              Areas of Practice
            </h1>
            <p className="reveal text-center max-w-2xl mx-auto text-charcoal/80 mb-48 md:mb-64 leading-relaxed">
              Moye Law provides specialized legal services at the intersection of tradition and innovation, 
              with particular focus on wealth preservation, intellectual property, and emerging technologies.
            </p>
            
            {/* Updated grid layout to make cards wider and less narrow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-48">
              {practiceAreas.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="reveal border border-primary-light/30 bg-white p-32 rounded-md hover:shadow-md transition-all duration-300 flex flex-col"
                  style={{ transitionDelay: `${0.1 * (index % 2)}s` }}
                >
                  <h3 className="font-sans text-primary mb-16 text-xl font-medium">{practice.title}</h3>
                  <p className="text-charcoal/80 mb-16 leading-relaxed">{practice.description}</p>
                  
                  {practice.benefit && (
                    <p className="text-primary-muted mb-16 italic leading-relaxed">
                      {practice.benefit}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-16">
                    <Link 
                      to={practice.path} 
                      className="inline-flex items-center font-sans text-primary hover:text-gold transition-colors"
                      aria-label={`Learn more about ${practice.title}`}
                    >
                      Learn more <ChevronRight className="ml-8 h-4 w-4" />
                    </Link>
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
