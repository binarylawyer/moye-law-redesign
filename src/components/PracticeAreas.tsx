import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreas = () => {
  // Updated practice areas with concise descriptions
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning",
      description: "Wills, trusts & legacy planning for your family's future in NYC and Westchester.",
      path: "/practice/estate-planning",
      bgColor: "bg-white"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Compassionate legal guidance for aging loved ones, including Medicaid planning and caregiving arrangements.",
      path: "/practice/elder-law",
      bgColor: "bg-white"
    },
    {
      id: "probate",
      title: "Probate & Administration",
      description: "Guiding families through estate settlement with efficiency and care.",
      path: "/practice/probate",
      bgColor: "bg-white"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Protecting innovations, creative works, and digital assets with forward-looking strategies.",
      path: "/practice/intellectual-property",
      bgColor: "bg-white"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized counsel for artists, collectors, and galleries in New York's vibrant art community.",
      path: "/practice/art-law",
      bgColor: "bg-white"
    },
    {
      id: "emergent-tech",
      title: "Emergent Tech Law",
      description: "Helping innovators navigate the legal landscape of AI, blockchain, and more.",
      path: "/practice/emergent-tech",
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6 tracking-tight">
            Our Practice Areas
          </h2>
          <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
          <p className="reveal text-lg text-charcoal/70" style={{ transitionDelay: '0.1s' }}>
            Specialized legal expertise serving high-net-worth individuals and their families with solutions as individual as you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              className={`reveal ${practice.bgColor} border border-navy/5 rounded-xl p-10 shadow-sm hover:shadow-md transition-all h-full flex flex-col`}
              style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-navy/5 mb-6 flex items-center justify-center">
                <span className="font-serif text-navy font-medium">{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">{practice.title}</h3>
              <p className="text-charcoal/70 mb-6 text-base flex-grow">{practice.description}</p>
              
              <Link 
                to={practice.path} 
                className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors text-sm font-medium mt-auto"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
