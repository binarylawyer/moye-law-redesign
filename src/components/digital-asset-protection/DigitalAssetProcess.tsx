
import React from 'react';

const DigitalAssetProcess: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-navy mb-12 text-center">Our Digital Asset Protection Process</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {/* Process steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Digital Asset Inventory</h3>
                <p className="text-charcoal">We conduct a comprehensive inventory of all digital assets, their locations, access methods, and associated values.</p>
              </div>
              <div className="md:pl-16"></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">1</div>
            </div>
            
            {/* Step 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-display text-xl text-navy mb-4 md:pl-16">Risk Assessment</h3>
                <p className="text-charcoal md:pl-16">We evaluate potential vulnerabilities and risks specific to each digital asset type and your personal situation.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">2</div>
            </div>
            
            {/* Step 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Protection Strategy Development</h3>
                <p className="text-charcoal">We create a customized protection strategy combining legal structures, technical protocols, and documentation systems.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">3</div>
            </div>
            
            {/* Step 4 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-display text-xl text-navy mb-4 md:pl-16">Implementation</h3>
                <p className="text-charcoal md:pl-16">We assist with implementing all protection measures, including establishing legal entities, drafting documents, and coordinating with technical advisors.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">4</div>
            </div>
            
            {/* Step 5 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Ongoing Monitoring & Updates</h3>
                <p className="text-charcoal">We provide regular reviews to ensure your protection strategy remains effective as regulations, technologies, and your holdings evolve.</p>
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

export default DigitalAssetProcess;
