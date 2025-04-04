import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Users, Building } from 'lucide-react';

const PersonaPathways: React.FC = () => {
  const personas = [
    {
      icon: <Laptop className="h-8 w-8 text-[#4D80D4]" />,
      name: "Tech Innovator",
      title: "Digital Asset & IP Protection",
      description: "Safeguard your innovations and digital holdings with future-forward legal strategies designed for tech entrepreneurs.",
      benefits: [
        "Tech startup equity planning",
        "Digital asset protection",
        "Cryptocurrency estate planning",
        "IP integration in your estate"
      ],
      link: "/practice/intellectual-property",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5",
      textColor: "text-[#4D80D4]",
      hoverColor: "hover:border-[#4D80D4]"
    },
    {
      icon: <Users className="h-8 w-8 text-[#D6001C]" />,
      name: "Executive Caregiver",
      title: "Family & Elder Care Solutions",
      description: "Balance your career demands with family responsibilities through comprehensive planning for you and your aging loved ones.",
      benefits: [
        "Elder law & Medicaid planning",
        "Healthcare directives",
        "Complex estate planning",
        "Family protection frameworks"
      ],
      link: "/practice/estate-legacy",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5",
      textColor: "text-[#D6001C]",
      hoverColor: "hover:border-[#D6001C]"
    },
    {
      icon: <Building className="h-8 w-8 text-[#FFEB80]" />,
      name: "Legacy Builder",
      title: "Multi-Generational Wealth",
      description: "Preserve your wealth and values across generations with sophisticated legacy planning strategies.",
      benefits: [
        "Advanced tax minimization",
        "Dynasty trust structures",
        "Family governance frameworks",
        "Family business succession"
      ],
      link: "/practice/estate-legacy",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5",
      textColor: "text-black",
      hoverColor: "hover:border-[#FFEB80]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Find Your Path</h2>
            <p className="text-navy/70 text-lg max-w-3xl mx-auto">
              Discover tailored legal solutions designed for your specific needs and circumstances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <div 
                key={index}
                className={`border-2 ${persona.color} p-8 rounded-lg transition-all duration-300 hover:shadow-xl ${persona.bgColor} flex flex-col h-full`}
              >
                <div className="mb-6">
                  {persona.icon}
                </div>
                <div className={`${persona.textColor} text-sm font-medium mb-2`}>For the {persona.name}</div>
                <h3 className="font-display text-2xl text-navy mb-4">{persona.title}</h3>
                <p className="text-navy/70 mb-6">{persona.description}</p>
                
                <div className="mt-auto">
                  <ul className="space-y-2 mb-8">
                    {persona.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${persona.color.replace('border-', 'bg-')}`}></div>
                        <span className="text-navy/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={persona.link}
                    className={`inline-flex items-center font-medium ${persona.textColor}`}
                  >
                    Explore solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaPathways; 