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
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements for more organic feel */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-navy/3 rounded-full -z-10 opacity-40 transform -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/3 w-56 h-56 bg-gold/3 rounded-full -z-10 opacity-30 transform translate-x-1/3"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6 tracking-tight">
            Our Practice Areas
          </h2>
          <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
          <p className="reveal text-lg text-charcoal/70" style={{ transitionDelay: '0.1s' }}>
            Specialized legal expertise serving high-net-worth individuals and their families with solutions as individual as you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mb-20">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              className="reveal"
              style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className={`${practice.bgColor} border border-navy/5 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all h-full flex flex-col relative group`}>
                {/* Number indicator with subtle styling */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:bg-navy/10">
                  <span className="font-serif text-navy/70 font-medium text-sm">{index + 1}</span>
                </div>
                
                <h3 className="font-serif text-xl text-navy mb-4 mt-4">{practice.title}</h3>
                <p className="text-charcoal/70 mb-6 text-base flex-grow">{practice.description}</p>
                
                <Link 
                  to={practice.path} 
                  className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors text-sm font-medium mt-auto group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              {/* Add offset background to even cards for more organic feel */}
              {index % 2 === 1 && (
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-navy/5 rounded-2xl -z-10 bg-navy/[0.02] hidden md:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Add a more organic section divider */}
        <div className="relative h-16 w-full overflow-hidden">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-gold/30 rounded-full mx-auto mb-2"></div>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-navy/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
