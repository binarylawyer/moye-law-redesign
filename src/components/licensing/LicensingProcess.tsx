
import React from 'react';

const LicensingProcess: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Licensing Process</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {/* Process steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-serif text-xl text-navy mb-4">Strategy Development</h3>
                <p className="text-charcoal">We work with you to develop a licensing strategy aligned with your business objectives, identifying appropriate licensing models and target markets.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">1</div>
            </div>
            
            {/* Step 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-serif text-xl text-navy mb-4 md:pl-16">Term Sheet Creation</h3>
                <p className="text-charcoal md:pl-16">We prepare clear term sheets that outline key business and legal parameters for licensing relationships, providing a foundation for negotiations.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">2</div>
            </div>
            
            {/* Step 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-serif text-xl text-navy mb-4">Agreement Development</h3>
                <p className="text-charcoal">We create comprehensive licensing agreements tailored to your specific needs, including usage rights, payment structures, quality control, and term conditions.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">3</div>
            </div>
            
            {/* Step 4 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-serif text-xl text-navy mb-4 md:pl-16">Negotiation Support</h3>
                <p className="text-charcoal md:pl-16">We provide strategic negotiation support to achieve favorable terms while maintaining positive business relationships with potential licensees.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">4</div>
            </div>
            
            {/* Step 5 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-serif text-xl text-navy mb-4">Compliance Management</h3>
                <p className="text-charcoal">We help establish systems to monitor licensee compliance, track royalties, and maintain effective ongoing relationships with your licensing partners.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingProcess;
