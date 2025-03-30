
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
      benefit: "Preserve family wealth across generations with sophisticated trust strategies.",
      path: "/practice/estate-planning"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Comprehensive planning for aging family members with compassion and foresight.",
      persona: "Barbara (Executive & Caregiver)",
      benefit: "Ensure peace of mind with expert guidance on elder care and Medicaid planning.",
      path: "/practice/elder-law"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Protection for entrepreneurs and innovators in the digital economy.",
      persona: "Alex (Tech Innovator)",
      benefit: "Secure your digital assets and IP with forward-thinking legal protection.",
      path: "/practice/intellectual-property"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal services for collectors, artists, and cultural institutions.",
      persona: "Premium Differentiator",
      benefit: "Navigate the complex intersection of art, law and wealth preservation.",
      path: "/practice/art-law"
    },
    {
      id: "software-licensing",
      title: "Software Licensing",
      description: "Strategic protection and monetization of software assets and intellectual property.",
      persona: "Alex (Tech Innovator)",
      benefit: "Maximize the value of your software while ensuring proper legal protection.",
      path: "/practice/software-licensing"
    },
    {
      id: "ip-licensing",
      title: "IP Licensing",
      description: "Maximizing the value of intellectual assets through strategic licensing agreements.",
      persona: "Alex (Tech Innovator)",
      benefit: "Transform intellectual property into revenue streams with expert licensing strategies.",
      path: "/practice/ip-licensing"
    },
    {
      id: "entertainment-law",
      title: "Entertainment Law",
      description: "Legal guidance for creators, performers, and entertainment businesses.",
      benefit: "Protect creative works and negotiate favorable agreements in the entertainment industry.",
      path: "/practice/entertainment-law"
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Sophisticated counsel for complex real estate transactions and investments.",
      persona: "David (Prudent Investor)",
      benefit: "Navigate complex property transactions with confidence and strategic tax planning.",
      path: "/practice/real-estate"
    },
    {
      id: "crypto-assets",
      title: "Crypto & Digital Assets",
      description: "Legal solutions for blockchain technologies and digital asset management.",
      persona: "Alex (Tech Innovator)",
      benefit: "Cutting-edge legal protection for your cryptocurrency and digital asset holdings.",
      path: "/practice/crypto-assets"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="py-64 md:py-96">
          <div className="container mx-auto px-24 md:px-32">
            <h1 className="reveal font-sans text-primary text-4xl md:text-5xl lg:text-6xl mb-32 md:mb-48 text-center font-light">
              Areas of Practice
            </h1>
            <p className="reveal text-center max-w-2xl mx-auto text-charcoal/80 mb-64 md:mb-96 leading-relaxed">
              Moye Law provides specialized legal services at the intersection of tradition and innovation, 
              with particular focus on wealth preservation, intellectual property, and emerging technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 md:gap-48">
              {practiceAreas.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="reveal border border-primary-light/30 bg-white p-32 md:p-40 rounded-md hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${0.1 * (index % 3)}s` }}
                >
                  <h3 className="font-sans text-primary mb-16 text-xl font-medium">{practice.title}</h3>
                  <p className="text-charcoal/80 mb-24 leading-relaxed text-sm">{practice.description}</p>
                  
                  {practice.benefit && (
                    <p className="text-primary-muted text-sm mb-24 italic leading-relaxed">
                      {practice.benefit}
                    </p>
                  )}
                  
                  <Link 
                    to={practice.path} 
                    className="inline-flex items-center font-sans text-sm text-primary hover:text-gold transition-colors mt-16"
                    aria-label={`Learn more about ${practice.title}`}
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
