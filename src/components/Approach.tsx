import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Mondrian-style grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/6 h-40 border-r-2 border-b-2 border-black"></div>
        <div className="absolute top-0 right-0 w-1/5 h-full border-l-2 border-black"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 border-t-2 border-l-2 border-black"></div>
      </div>
      
      {/* Mondrian-inspired colored blocks */}
      <div className="absolute top-0 left-0 w-1/6 h-40 bg-[#D6001C] opacity-80"></div>
      <div className="absolute bottom-0 right-1/4 w-1/6 h-1/4 bg-[#FFD500] opacity-80"></div>
      <div className="absolute top-40 right-1/5 w-1/12 h-80 bg-[#003B98] opacity-80"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="p-8 pb-12 border-2 border-black relative bg-white">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD500] border-2 border-black -z-10"></div>
            
            <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-6 tracking-tight">
              Our Approach
            </h2>
            
            <p className="reveal text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed mt-6"
               style={{ transitionDelay: '0.1s' }}>
              We blend personalized attention with technological innovation to deliver legal solutions 
              that are both traditional in values and forward-thinking in execution.
            </p>
            
            {/* 30 Year Timeline Element - Enhanced Mondrian style */}
            <div className="mt-8 relative reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="border-t-2 border-b-2 border-black py-4">
                <div className="flex justify-between relative">
                  <div className="text-center px-4">
                    <div className="w-12 h-12 bg-[#D6001C] border-2 border-black mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-medium">1994</span>
                    </div>
                    <span className="text-xs font-medium">Founded</span>
                  </div>
                  <div className="text-center px-4">
                    <div className="w-12 h-12 bg-white border-2 border-black mx-auto mb-2 flex items-center justify-center">
                      <span className="text-navy font-medium">2004</span>
                    </div>
                    <span className="text-xs font-medium">Expanded</span>
                  </div>
                  <div className="text-center px-4">
                    <div className="w-12 h-12 bg-[#003B98] border-2 border-black mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-medium">2014</span>
                    </div>
                    <span className="text-xs font-medium">Innovated</span>
                  </div>
                  <div className="text-center px-4">
                    <div className="w-16 h-16 bg-[#FFD500] border-2 border-black mx-auto mb-2 flex items-center justify-center">
                      <span className="text-navy font-bold text-xl">30</span>
                    </div>
                    <span className="text-xs font-medium">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal mb-20 relative" style={{ transitionDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Traditional column - red accent */}
            <div className="relative border-2 border-black">
              <div className="absolute top-0 left-0 w-full h-20 bg-[#D6001C]"></div>
              <div className="p-8 pt-24 h-full relative">
                <h3 className="font-serif text-2xl text-navy mb-8 inline-block relative">
                  Traditional
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#D6001C]/80"></span>
                </h3>
                
                <ul className="space-y-8 text-navy/70">
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]">01</span>
                    <span className="pt-1">Personal relationships built on trust and multi-generational commitment</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]">02</span>
                    <span className="pt-1">Family values at the core of our practice, guiding every recommendation</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]">03</span>
                    <span className="pt-1">Attentive, personalized service from professionals who truly understand your goals</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Innovative column - blue accent */}
            <div className="relative border-2 border-black mt-12 md:mt-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#003B98] border-2 border-l-2 border-b-2 border-black"></div>
              <div className="p-8 h-full relative">
                <h3 className="font-serif text-2xl text-navy mb-8 inline-block relative">
                  Innovative
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#003B98]/80"></span>
                </h3>
                
                <ul className="space-y-8 text-navy/70">
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]">01</span>
                    <span className="pt-1">Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]">02</span>
                    <span className="pt-1">Secure, modern client processes designed for today's digital environment</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]">03</span>
                    <span className="pt-1">Data-driven, efficient solutions that save time while improving outcomes</span>
                  </li>
                </ul>
                
                {/* Yellow accent box */}
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#FFD500] border-2 border-black -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer link with enhanced Mondrian styling */}
        <div className="reveal relative text-center" style={{ transitionDelay: '0.3s' }}>
          <div className="inline-block relative border-2 border-black p-6 bg-white">
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#D6001C] border-2 border-black -z-10"></div>
            <Link to="/how-we-work" className="inline-flex items-center group">
              <span className="font-serif font-medium text-xl text-navy group-hover:text-[#D6001C] transition-colors">Learn more about how we work</span>
              <ArrowRight className="ml-3 h-5 w-5 text-navy group-hover:text-[#D6001C] group-hover:translate-x-1 transition-all" />
            </Link>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#FFD500] border-2 border-black -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
