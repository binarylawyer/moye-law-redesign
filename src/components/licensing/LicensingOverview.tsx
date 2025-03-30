
import React from 'react';

const LicensingOverview: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-3xl text-navy mb-6">Strategic Licensing Solutions</h2>
            <p className="text-lg mb-6">
              Effective licensing strategies allow businesses to monetize intellectual property, expand into new markets, and establish strategic partnerships while maintaining appropriate control over valuable assets.
            </p>
            <p className="text-lg mb-6">
              Our licensing practice provides comprehensive legal support for all aspects of intellectual property and technology licensing, from strategy development through negotiation and ongoing management.
            </p>
            <p className="text-lg">
              We work with technology companies, content creators, brand owners, and other IP-rich businesses to develop licensing approaches that maximize value while mitigating risks.
            </p>
          </div>
          <div className="bg-gray-50 p-8">
            <h3 className="font-serif text-xl text-navy mb-4">Key Benefits:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Generate revenue from intellectual assets</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Expand market reach without significant investment</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Access complementary technologies or capabilities</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Establish strategic industry partnerships</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Maintain appropriate control over your assets</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Create clear frameworks for usage and compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingOverview;
