
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EntertainmentRelated: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-navy mb-12 text-center">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/practice/intellectual-property" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-display text-xl text-navy mb-4">Intellectual Property</h3>
            <p className="text-charcoal mb-4">Strategic protection for entrepreneurs and innovators in the digital economy.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
          <Link to="/practice/ip-licensing" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-display text-xl text-navy mb-4">IP Licensing</h3>
            <p className="text-charcoal mb-4">Strategic licensing solutions that protect intellectual assets while generating revenue.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
          <Link to="/case-studies" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-display text-xl text-navy mb-4">Client Success Stories</h3>
            <p className="text-charcoal mb-4">See how we've helped creators and entertainment businesses achieve their goals.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentRelated;
