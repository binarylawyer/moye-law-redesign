
import React from 'react';
import { Shield, Key, FileText, Users } from 'lucide-react';

const DigitalAssetStrategies: React.FC = () => {
  const protectionStrategies = [
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: "Comprehensive Legal Protection",
      description: "We develop legal structures that protect digital assets from creditors, disputes, and unauthorized access while enabling authorized use and succession."
    },
    {
      icon: <Key className="h-10 w-10 text-gold" />,
      title: "Access & Recovery Protocols",
      description: "We establish secure but accessible protocols that ensure digital assets remain available to authorized parties regardless of circumstance."
    },
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Documentation & Inventory",
      description: "We create thorough documentation systems that catalog and track digital assets while maintaining appropriate confidentiality."
    },
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: "Succession Planning",
      description: "We integrate digital assets into comprehensive estate plans to ensure seamless transfer according to your wishes."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Protection Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {protectionStrategies.map((strategy, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200">
              <div className="mb-6">
                {strategy.icon}
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">{strategy.title}</h3>
              <p className="text-charcoal">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAssetStrategies;
