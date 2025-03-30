
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-4">
            Areas of Practice
          </h2>
          <p className="reveal text-charcoal/80" style={{ transitionDelay: '0.1s' }}>
            Our specialized legal expertise serves the unique needs of high-net-worth individuals
            and their families.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              className="reveal bg-white p-6 rounded-lg border border-navy/10 hover:border-navy/20 transition-all duration-300 flex flex-col h-full"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="font-serif text-navy mb-3 text-xl">{practice.title}</h3>
              <p className="text-charcoal/80 mb-4 text-sm">{practice.description}</p>
              
              <div className="mt-auto">
                <Link 
                  to={practice.path} 
                  className="inline-flex items-center text-navy hover:text-gold transition-colors text-sm"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
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
