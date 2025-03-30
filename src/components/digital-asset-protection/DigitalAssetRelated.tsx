
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DigitalAssetRelated: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/practice/crypto-assets" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-serif text-xl text-navy mb-4">Crypto & Digital Assets</h3>
            <p className="text-charcoal mb-4">Legal solutions for blockchain technologies and digital asset management.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
          <Link to="/practice/intellectual-property" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-serif text-xl text-navy mb-4">Intellectual Property</h3>
            <p className="text-charcoal mb-4">Strategic protection for entrepreneurs and innovators in the digital economy.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
          <Link to="/practice/estate-planning" className="border border-gray-200 p-8 hover:border-gold transition-colors">
            <h3 className="font-serif text-xl text-navy mb-4">Estate Planning & Trusts</h3>
            <p className="text-charcoal mb-4">Strategic wealth preservation and legacy planning for high-net-worth individuals.</p>
            <div className="text-gold flex items-center">
              Learn more <ArrowRight className="ml-2" size={16} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalAssetRelated;
