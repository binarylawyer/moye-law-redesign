
import React from 'react';
import { Code, Database, Network, Zap } from 'lucide-react';

const EmergingTechAreas: React.FC = () => {
  const techAreas = [
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: "AI & Machine Learning",
      description: "Legal frameworks for artificial intelligence development, data usage, and ethical compliance."
    },
    {
      icon: <Database className="h-10 w-10 text-gold" />,
      title: "Blockchain & Digital Assets",
      description: "Comprehensive legal guidance for blockchain platforms, smart contracts, and tokenization."
    },
    {
      icon: <Network className="h-10 w-10 text-gold" />,
      title: "Internet of Things",
      description: "Strategic legal solutions for connected devices, data collection, and cross-border compliance."
    },
    {
      icon: <Zap className="h-10 w-10 text-gold" />,
      title: "Quantum Computing",
      description: "Forward-looking legal strategies for quantum technologies and associated intellectual property."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-navy mb-12 text-center">Our Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {techAreas.map((area, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200">
              <div className="mb-6">
                {area.icon}
              </div>
              <h3 className="font-display text-xl text-navy mb-4">{area.title}</h3>
              <p className="text-charcoal">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergingTechAreas;
