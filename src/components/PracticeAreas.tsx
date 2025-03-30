
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  // Practice areas tailored to each persona
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning & Trusts",
      description: "Strategic wealth preservation and legacy planning for high-net-worth individuals. Our tailored approach ensures your assets are protected and your wishes are honored for generations to come.",
      path: "/practice/estate-planning",
      bgColor: "bg-pastel-blue/30"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Comprehensive planning for aging family members with compassion and foresight. We guide executives and professionals through the complexities of caring for parents while managing their own responsibilities.",
      path: "/practice/elder-law",
      bgColor: "bg-pastel-green/30"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property & Digital Assets",
      description: "Protection for entrepreneurs and innovators in the digital economy. Our tech-forward approach safeguards your creative work, software, and digital investments with cutting-edge legal strategies.",
      path: "/practice/intellectual-property",
      bgColor: "bg-pastel-beige/30"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal services for collectors, artists, and cultural institutions. Our expertise covers acquisition, authentication, estate integration, and philanthropic planning for valuable collections.",
      path: "/practice/art-law",
      bgColor: "bg-pastel-cream/30"
    }
  ];

  return (
    <section className="py-48 md:py-72 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-12">
            Areas of Practice
          </h2>
          <p className="reveal text-xl md:text-2xl text-charcoal/80" style={{ transitionDelay: '0.1s' }}>
            Our specialized legal expertise serves the unique needs of high-net-worth individuals
            and their families, with solutions as individual as you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              className={`reveal ${practice.bgColor} border border-gray-100 rounded-lg p-12`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <span className="text-navy/50 text-base mb-6 block">{(index + 1).toString().padStart(2, '0')}</span>
              <h3 className="font-serif text-navy text-3xl mb-6">{practice.title}</h3>
              <p className="text-charcoal/80 text-lg mb-12">{practice.description}</p>
              
              <div className="mt-auto">
                <Link 
                  to={practice.path} 
                  className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors text-lg"
                >
                  Learn more <ArrowRight className="ml-3 h-5 w-5" />
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
