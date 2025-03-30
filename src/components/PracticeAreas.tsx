
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  // Practice areas tailored to each persona
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning & Trusts",
      description: "Strategic wealth preservation and legacy planning for high-net-worth individuals.",
      path: "/practice/estate-planning"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Comprehensive planning for aging family members with compassion and foresight.",
      path: "/practice/elder-law"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property & Digital Assets",
      description: "Protection for entrepreneurs and innovators in the digital economy.",
      path: "/practice/intellectual-property"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal services for collectors, artists, and cultural institutions.",
      path: "/practice/art-law"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-4">
            Areas of Practice
          </h2>
          <p className="reveal text-charcoal/80" style={{ transitionDelay: '0.1s' }}>
            Our specialized legal expertise serves the unique needs of high-net-worth individuals
            and their families.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              className="reveal border-t border-gray-200 pt-6"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <span className="text-navy/50 text-sm mb-3 block">{(index + 1).toString().padStart(2, '0')}</span>
              <h3 className="font-serif text-navy text-2xl mb-3">{practice.title}</h3>
              <p className="text-charcoal/80 mb-6">{practice.description}</p>
              
              <div className="mt-auto">
                <Link 
                  to={practice.path} 
                  className="inline-flex items-center text-navy hover:text-gold transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
