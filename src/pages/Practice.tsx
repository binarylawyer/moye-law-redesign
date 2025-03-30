
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

  // Practice areas aligned with personas from knowledge file
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning & Trusts",
      description: "Strategic wealth preservation and legacy planning for high-net-worth individuals.",
      persona: "David (Prudent Investor)",
      path: "/practice/estate-planning"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Comprehensive planning for aging family members with compassion and foresight.",
      persona: "Barbara (Executive & Caregiver)",
      path: "/practice/elder-law"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Protection for entrepreneurs and innovators in the digital economy.",
      persona: "Alex (Tech Innovator)",
      path: "/practice/intellectual-property"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal services for collectors, artists, and cultural institutions.",
      persona: "Premium Differentiator",
      path: "/practice/art-law"
    },
    {
      id: "software-licensing",
      title: "Software Licensing",
      description: "Strategic protection and monetization of software assets and intellectual property.",
      path: "/practice/software-licensing"
    },
    {
      id: "ip-licensing",
      title: "IP Licensing",
      description: "Maximizing the value of intellectual assets through strategic licensing agreements.",
      path: "/practice/ip-licensing"
    },
    {
      id: "entertainment-law",
      title: "Entertainment Law",
      description: "Legal guidance for creators, performers, and entertainment businesses.",
      path: "/practice/entertainment-law"
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Sophisticated counsel for complex real estate transactions and investments.",
      path: "/practice/real-estate"
    },
    {
      id: "crypto-assets",
      title: "Crypto & Digital Assets",
      description: "Legal solutions for blockchain technologies and digital asset management.",
      persona: "Alex (Tech Innovator)",
      path: "/practice/crypto-assets"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="py-96">
          <div className="container mx-auto px-24">
            <h1 className="reveal font-serif text-navy text-4xl md:text-5xl lg:text-6xl mb-32 md:mb-64 text-center">
              Areas of Practice
            </h1>
            <p className="reveal text-center max-w-3xl mx-auto text-charcoal/80 mb-96">
              Moye Law provides specialized legal services at the intersection of tradition and innovation, 
              with particular focus on wealth preservation, intellectual property, and emerging technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 md:gap-64">
              {practiceAreas.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="reveal border border-gray-200 bg-white p-32 md:p-48 rounded-lg hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${0.1 * (index % 3)}s` }}
                >
                  <h3 className="font-serif text-navy mb-24 text-2xl">{practice.title}</h3>
                  <p className="text-charcoal/80 mb-32 leading-relaxed">{practice.description}</p>
                  
                  <Link 
                    to={practice.path} 
                    className="inline-flex items-center font-sans text-gold hover:text-navy transition-colors mt-16"
                  >
                    Learn more <ChevronRight className="ml-8 h-4 w-4" />
                  </Link>
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
