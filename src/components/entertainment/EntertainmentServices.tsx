
import React from 'react';
import { Film, Music, Newspaper, Radio } from 'lucide-react';

const EntertainmentServices: React.FC = () => {
  const entertainmentAreas = [
    {
      icon: <Film className="h-10 w-10 text-gold" />,
      title: "Film & Television",
      description: "Comprehensive legal services for production, distribution, and talent agreements in visual media."
    },
    {
      icon: <Music className="h-10 w-10 text-gold" />,
      title: "Music & Audio",
      description: "Rights management, licensing, and contract negotiation for composers, performers, and labels."
    },
    {
      icon: <Newspaper className="h-10 w-10 text-gold" />,
      title: "Publishing & Literary Works",
      description: "Strategic legal guidance for authors, publishers, and digital content distribution."
    },
    {
      icon: <Radio className="h-10 w-10 text-gold" />,
      title: "Digital Media & Gaming",
      description: "Forward-looking legal solutions for interactive entertainment, streaming, and emerging platforms."
    }
  ];
  
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Entertainment Industry Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {entertainmentAreas.map((service, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-200">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-navy mb-4">{service.title}</h3>
              <p className="text-charcoal">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntertainmentServices;
