import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MondrianIntro = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Mondrian-style grid container */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main grid layout with Mondrian-inspired design */}
          <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            {/* Large title box with red background */}
            <div className="reveal col-span-12 md:col-span-8 bg-white border-2 border-black p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-[#D6001C] -z-10"></div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 z-10 mix-blend-difference">
                Creative Legal Solutions for Modern Challenges
              </h2>
              <p className="text-lg text-navy/80 max-w-2xl">
                Blending artistic vision with technical precision, we craft innovative legal strategies for high-net-worth individuals and forward-thinking businesses.
              </p>
            </div>

            {/* Yellow box highlighting 30 years of experience */}
            <div className="reveal col-span-12 md:col-span-4 bg-[#FFD500] border-2 border-black p-6 flex flex-col justify-center relative" style={{ transitionDelay: '0.1s' }}>
              <span className="font-serif text-6xl text-navy font-light">30</span>
              <p className="text-navy/80 font-medium">Years of creative legal excellence</p>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-black bg-white"></div>
            </div>

            {/* White space with black border */}
            <div className="reveal col-span-12 md:col-span-3 lg:col-span-2 border-2 border-black p-5" style={{ transitionDelay: '0.15s' }}>
              <div className="h-full flex flex-col justify-end">
                <div className="h-8 w-full bg-[#003B98]/90"></div>
              </div>
            </div>

            {/* Key differentiator - Tech expertise */}
            <div className="reveal col-span-12 md:col-span-5 lg:col-span-4 border-2 border-black p-6 bg-white relative" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-[#003B98]/10 -z-10"></div>
              <h3 className="font-serif text-2xl text-navy mb-3">Tech Forward</h3>
              <p className="text-navy/70">Our lawyers bring software engineering expertise to legal challenges, creating innovative solutions for IP and technology law.</p>
            </div>

            {/* Key differentiator - Art expertise */}
            <div className="reveal col-span-12 md:col-span-4 lg:col-span-6 border-2 border-black p-6 bg-[#D6001C]/10 relative" style={{ transitionDelay: '0.25s' }}>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white border-2 border-black -z-10"></div>
              <h3 className="font-serif text-2xl text-navy mb-3">Art Appreciation</h3>
              <p className="text-navy/70">With deep expertise in art law, we understand the unique needs of artists, collectors, and galleries in protecting creative legacies.</p>
            </div>

            {/* Large blue rectangle */}
            <div className="reveal col-span-12 md:col-span-2 border-2 border-black bg-[#003B98]" style={{ transitionDelay: '0.3s' }}></div>
            
            {/* White space with black border */}
            <div className="reveal col-span-12 md:col-span-3 border-2 border-black p-4" style={{ transitionDelay: '0.35s' }}></div>

            {/* Estate planning with red accent */}
            <div className="reveal col-span-12 md:col-span-5 lg:col-span-4 border-2 border-black p-6 bg-white relative" style={{ transitionDelay: '0.4s' }}>
              <div className="absolute top-0 left-0 h-full w-1 bg-[#D6001C] -z-10"></div>
              <h3 className="font-serif text-2xl text-navy mb-3">Estate Innovation</h3>
              <p className="text-navy/70">Disrupting traditional estate planning with creative approaches that protect digital assets and intellectual property for future generations.</p>
            </div>

            {/* CTA with yellow accent */}
            <div className="reveal col-span-12 md:col-span-4 lg:col-span-3 border-2 border-black p-6 bg-white relative" style={{ transitionDelay: '0.45s' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-[#FFD500]/10 -z-10"></div>
              <Link to="/experience" className="inline-flex items-center group">
                <span className="text-navy font-medium group-hover:text-[#D6001C] transition-colors">Experience the Difference</span>
                <ArrowRight className="ml-2 h-5 w-5 text-navy group-hover:text-[#D6001C] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MondrianIntro; 