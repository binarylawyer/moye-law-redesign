import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* More subtle vertical lines inspired by Mondrian */}
      <div className="absolute top-0 left-1/5 w-px h-1/3 bg-black/5"></div>
      <div className="absolute top-1/3 left-1/3 w-px h-1/3 bg-black/5"></div>
      <div className="absolute top-2/3 left-1/2 w-px h-1/3 bg-black/5"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-black/5"></div>
      
      {/* Mondrian-inspired horizontal line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="w-3/12 bg-[#FFD500]"></div>
        <div className="w-4/12 bg-white"></div>
        <div className="w-1/12 bg-[#003B98]"></div>
        <div className="w-4/12 bg-white"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-6 tracking-tight relative inline-block">
            Our Approach
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#FFD500]"></span>
          </h2>
          
          <p className="reveal text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed mt-6"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions 
            that are both traditional in values and forward-thinking in execution.
          </p>
          
          {/* 30 Year Timeline Element */}
          <div className="mt-12 mb-4 relative reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="h-px w-full bg-black/10 absolute top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              <div className="text-center">
                <div className="w-3 h-3 bg-[#D6001C] mx-auto mb-2"></div>
                <span className="bg-white px-2 text-xs font-medium">1994</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-[#003B98] mx-auto mb-2"></div>
                <span className="bg-white px-2 text-xs font-medium">2004</span>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-[#FFD500] mx-auto mb-2"></div>
                <span className="bg-white px-2 text-xs font-medium">2014</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-navy mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-[8px]">30</span>
                </div>
                <span className="bg-white px-2 text-xs font-medium">2024</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 relative"
             style={{ transitionDelay: '0.2s' }}>
          {/* Thin line dividing the columns */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/10 hidden md:block"></div>
             
          {/* Traditional column */}
          <div className="relative">
            <div className="p-6 h-full relative border-t border-black/20">
              {/* Accent color element */}
              <div className="absolute top-0 left-0 h-px w-1/3 bg-[#D6001C]"></div>
              
              <h3 className="font-serif text-2xl text-navy mb-8">Traditional</h3>
              
              <ul className="space-y-8 text-navy/70">
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]/10">01</span>
                  <span className="pt-1">Personal relationships built on trust and multi-generational commitment</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]/10">02</span>
                  <span className="pt-1">Family values at the core of our practice, guiding every recommendation</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#FFD500]/10">03</span>
                  <span className="pt-1">Attentive, personalized service from professionals who truly understand your goals</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Innovative column */}
          <div className="relative">
            <div className="p-6 h-full relative border-t border-black/20">
              {/* Accent color element */}
              <div className="absolute top-0 left-0 h-px w-1/3 bg-[#003B98]"></div>
              
              <h3 className="font-serif text-2xl text-navy mb-8">Innovative</h3>
              
              <ul className="space-y-8 text-navy/70">
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]/10">01</span>
                  <span className="pt-1">Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]/10">02</span>
                  <span className="pt-1">Secure, modern client processes designed for today's digital environment</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-8 h-8 bg-navy/5 border border-black/20 flex items-center justify-center mr-5 flex-shrink-0 text-navy font-medium text-sm transition-colors group-hover:bg-[#003B98]/10">03</span>
                  <span className="pt-1">Data-driven, efficient solutions that save time while improving outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer link with subtle Mondrian accent */}
        <div className="reveal relative text-center" style={{ transitionDelay: '0.3s' }}>
          <div className="inline-block relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-[#D6001C]"></div>
            <Link to="/how-we-work" className="inline-flex items-center text-navy group font-serif font-medium text-xl">
              Learn more about how we work <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-[#FFD500]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
