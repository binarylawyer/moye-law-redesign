
import React from 'react';
import { FileText, BarChart3, Shield, ShieldCheck } from 'lucide-react';

const LicensingAreas: React.FC = () => {
  const licensingAreas = [
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Software & Technology Licensing",
      description: "Comprehensive licensing agreements for software products, platforms, and technology solutions."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-gold" />,
      title: "Content & Media Licensing",
      description: "Strategic agreements for content distribution, publishing rights, and media usage."
    },
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: "Patent & Technology Transfer",
      description: "Structured licensing frameworks for patented technologies and technical know-how."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-gold" />,
      title: "Trademark & Brand Licensing",
      description: "Comprehensive agreements for brand usage, merchandising, and franchise relationships."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-navy mb-12 text-center">Our Licensing Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {licensingAreas.map((area, idx) => (
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

export default LicensingAreas;
