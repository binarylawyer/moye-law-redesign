
import React from 'react';

const EntertainmentProcess: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-navy mb-12 text-center">Our Entertainment Law Process</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
          
          {/* Process steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Rights Assessment</h3>
                <p className="text-charcoal">We analyze existing rights, contracts, and restrictions to understand your current position and opportunities within the entertainment landscape.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">1</div>
            </div>
            
            {/* Step 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-display text-xl text-navy mb-4 md:pl-16">Deal Structuring</h3>
                <p className="text-charcoal md:pl-16">Our team develops appropriate deal structures that align with industry standards while protecting your specific interests and creative vision.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">2</div>
            </div>
            
            {/* Step 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Contract Development</h3>
                <p className="text-charcoal">We create comprehensive agreements covering production, distribution, licensing, and talent relationships with clear terms and appropriate protections.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">3</div>
            </div>
            
            {/* Step 4 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-2 md:text-left">
                <h3 className="font-display text-xl text-navy mb-4 md:pl-16">Rights Management</h3>
                <p className="text-charcoal md:pl-16">We establish systems to track and enforce your rights across territories and distribution channels to ensure proper recognition and compensation.</p>
              </div>
              <div></div>
              {/* Circle marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">4</div>
            </div>
            
            {/* Step 5 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-16">
                <h3 className="font-display text-xl text-navy mb-4">Dispute Resolution</h3>
                <p className="text-charcoal">We provide representation in negotiations and disputes that arise throughout the content lifecycle, protecting your interests while seeking business-focused resolutions.</p>
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

export default EntertainmentProcess;
