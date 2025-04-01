import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MondrianIntro = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Authentic Mondrian-style grid container with thick black lines */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto border-4 border-black">
          {/* Main grid layout with pure Mondrian design - fewer, larger blocks */}
          <div className="grid grid-cols-12 gap-0">
            {/* Large title box with full red background */}
            <div className="reveal col-span-12 md:col-span-8 bg-[#D6001C] border-r-4 border-b-4 border-black p-8 relative">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Creative Legal Solutions for Modern Challenges
              </h2>
              <p className="text-white/90 max-w-2xl">
                Blending artistic vision with technical precision, we craft innovative legal strategies for high-net-worth individuals and forward-thinking businesses.
              </p>
            </div>

            {/* Yellow box highlighting 30 years of experience */}
            <div className="reveal col-span-12 md:col-span-4 bg-[#FFD500] border-b-4 border-black p-8 flex flex-col justify-center" style={{ transitionDelay: '0.1s' }}>
              <span className="font-serif text-7xl text-black font-light">30</span>
              <p className="text-black font-medium">Years of creative legal excellence</p>
            </div>

            {/* Pure white space - Mondrian uses white extensively */}
            <div className="reveal col-span-12 md:col-span-3 lg:col-span-2 bg-white border-r-4 border-b-4 border-black p-6" style={{ transitionDelay: '0.15s' }}>
            </div>

            {/* Blue rectangle - one of Mondrian's primary colors */}
            <div className="reveal col-span-12 md:col-span-3 lg:col-span-2 bg-[#003B98] border-r-4 border-b-4 border-black" style={{ transitionDelay: '0.2s' }}>
            </div>

            {/* Key differentiator - Tech expertise */}
            <div className="reveal col-span-12 md:col-span-4 lg:col-span-4 border-r-4 border-b-4 border-black p-6 bg-white" style={{ transitionDelay: '0.25s' }}>
              <h3 className="font-serif text-2xl text-black mb-3">Tech Forward</h3>
              <p className="text-black/80">Our lawyers bring software engineering expertise to legal challenges, creating innovative solutions for IP and technology law.</p>
            </div>

            {/* White space - Mondrian uses more white than color */}
            <div className="reveal col-span-12 md:col-span-2 lg:col-span-4 border-b-4 border-black p-6 bg-white" style={{ transitionDelay: '0.3s' }}>
            </div>

            {/* Red rectangle - pure color block */}
            <div className="reveal col-span-12 md:col-span-3 border-r-4 border-b-4 border-black bg-[#D6001C]" style={{ transitionDelay: '0.35s' }}></div>

            {/* Key differentiator - Art expertise in white area */}
            <div className="reveal col-span-12 md:col-span-9 border-b-4 border-black p-6 bg-white" style={{ transitionDelay: '0.4s' }}>
              <h3 className="font-serif text-2xl text-black mb-3">Art Appreciation</h3>
              <p className="text-black/80">With deep expertise in art law, we understand the unique needs of artists, collectors, and galleries in protecting creative legacies.</p>
            </div>

            {/* Estate planning in white area */}
            <div className="reveal col-span-12 md:col-span-8 border-r-4 border-black p-6 bg-white" style={{ transitionDelay: '0.45s' }}>
              <h3 className="font-serif text-2xl text-black mb-3">Estate Innovation</h3>
              <p className="text-black/80">Disrupting traditional estate planning with creative approaches that protect digital assets and intellectual property for future generations.</p>
            </div>

            {/* CTA with yellow background */}
            <div className="reveal col-span-12 md:col-span-4 bg-[#FFD500] p-6" style={{ transitionDelay: '0.5s' }}>
              <Link to="/experience" className="inline-flex items-center group">
                <span className="text-black font-medium group-hover:underline transition-colors">Experience the Difference</span>
                <ArrowRight className="ml-2 h-5 w-5 text-black group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MondrianIntro; 