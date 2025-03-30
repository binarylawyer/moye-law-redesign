
import React from 'react';

const EmergingTechProcess: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Approach</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {/* Process steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-serif text-xl text-navy mb-4">Technology Assessment</h3>
                <p className="text-charcoal">We analyze the technology and its potential legal implications, identifying key areas of risk and opportunity.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">1</div>
            </div>
            
            {/* Step 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left md:pl-16">
                <h3 className="font-serif text-xl text-navy mb-4">Strategy Development</h3>
                <p className="text-charcoal">We develop a customized legal strategy aligned with your business objectives, addressing regulatory compliance, intellectual property protection, and risk management.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">2</div>
            </div>
            
            {/* Step 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-serif text-xl text-navy mb-4">Implementation</h3>
                <p className="text-charcoal">We assist with implementing the legal strategy, including drafting contracts, developing policies, and providing training to your team.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">3</div>
            </div>
            
            {/* Step 4 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left md:pl-16">
                <h3 className="font-serif text-xl text-navy mb-4">Ongoing Support</h3>
                <p className="text-charcoal">We provide ongoing legal support to help you navigate the evolving legal landscape and address new challenges as they arise.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergingTechProcess;
