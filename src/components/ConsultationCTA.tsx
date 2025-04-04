import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Laptop, Building } from 'lucide-react';

const ConsultationCTA: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  
  const personas = [
    {
      id: "tech",
      icon: <Laptop className="h-5 w-5" />,
      name: "Tech Innovator",
      description: "Digital asset protection & IP strategies",
      ctaText: "Protect Your Digital Assets"
    },
    {
      id: "caregiver",
      icon: <Users className="h-5 w-5" />,
      name: "Executive Caregiver",
      description: "Elder law & complex estate planning",
      ctaText: "Support Your Family"
    },
    {
      id: "legacy",
      icon: <Building className="h-5 w-5" />,
      name: "Legacy Builder",
      description: "Multi-generational wealth preservation",
      ctaText: "Secure Your Legacy"
    }
  ];
  
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
              Ready for Legal Guidance That Fits Your Needs?
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto mb-8">
              Select your situation below for a consultation experience tailored to your specific challenges and goals.
            </p>
            
            {/* Persona Selection */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    selectedPersona === persona.id 
                      ? 'bg-gold text-white' 
                      : 'bg-white text-navy hover:bg-navy/5'
                  }`}
                >
                  {persona.icon}
                  <span>{persona.name}</span>
                </button>
              ))}
            </div>
            
            {/* CTA Box that changes based on selection */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-navy/10">
              {selectedPersona ? (
                <div className="max-w-lg mx-auto">
                  <h3 className="font-display text-2xl text-navy mb-4">
                    {personas.find(p => p.id === selectedPersona)?.ctaText}
                  </h3>
                  <p className="text-navy/70 mb-6">
                    {selectedPersona === "tech" && 
                      "Our technology-focused consultation includes a deep dive into your digital assets, IP portfolio, and future innovation plans."}
                    {selectedPersona === "caregiver" && 
                      "Our executive-friendly consultation respects your time constraints while addressing your family's immediate and long-term needs."}
                    {selectedPersona === "legacy" && 
                      "Our legacy planning consultation provides sophisticated strategies for preserving wealth and values across generations."}
                  </p>
                  <Link 
                    to={`/contact?persona=${selectedPersona}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors"
                  >
                    Schedule Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ) : (
                <div className="max-w-lg mx-auto">
                  <h3 className="font-display text-2xl text-navy mb-4">
                    Schedule Your Consultation
                  </h3>
                  <p className="text-navy/70 mb-6">
                    Select your situation above or schedule a general consultation to discuss your legal needs with our experienced team.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors"
                  >
                    Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
            
            <p className="text-navy/50 text-sm mt-6">
              Initial consultations are confidential and scheduled at your convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
