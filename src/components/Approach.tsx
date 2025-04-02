import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use useEffect to apply the !important styles
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty('display', 'block', 'important');
      sectionRef.current.style.setProperty('visibility', 'visible', 'important');
      sectionRef.current.style.setProperty('opacity', '1', 'important');
      sectionRef.current.style.setProperty('z-index', '10', 'important');
      
      // Log that the component mounted for debugging
      console.log("Approach component mounted and styled");
    }
    
    return () => {
      console.log("Approach component unmounted");
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="our-approach-section"
      className="py-24 bg-white relative moye-approach-section" 
    >
      {/* Pure Mondrian-style grid structure */}
      <div className="container mx-auto px-8 max-w-7xl relative">
        {/* Title section - more asymmetrical now */}
        <div className="mondrian-grid mb-16">
          {/* Asymmetrical left blocks */}
          <div className="col-span-2 mondrian-red"></div>
          <div className="col-span-1 mondrian-light-blue"></div>
          
          {/* Title area */}
          <div className="col-span-6 mondrian-grid-item bg-white p-8">
            <h2 className="reveal font-display text-4xl md:text-5xl text-black mb-6 tracking-tight">
              Our Approach
            </h2>
            
            <p className="reveal text-lg text-black/80 max-w-3xl mx-auto leading-relaxed"
               style={{ transitionDelay: '0.1s' }}>
              We blend personalized attention with technological innovation to deliver legal solutions 
              that are both traditional in values and forward-thinking in execution.
            </p>
          </div>
          
          {/* Asymmetrical right blocks */}
          <div className="col-span-2 mondrian-light-yellow"></div>
          <div className="col-span-1 mondrian-yellow"></div>
        </div>
          
        {/* Timeline element - improved design with stronger borders */}
        <div className="mondrian-grid mb-16">
          <div className="col-span-12 mondrian-grid-item bg-white p-4">
            <div className="flex flex-wrap md:flex-nowrap mb-8 border-4 border-black">
              <div className="w-full md:w-1/4 text-center p-6 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
                <div className="w-20 h-20 mondrian-red border-4 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">1994</span>
                </div>
                <span className="text-lg font-medium">Founded</span>
              </div>
              <div className="w-full md:w-1/4 text-center p-6 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
                <div className="w-20 h-20 mondrian-light-blue border-4 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2004</span>
                </div>
                <span className="text-lg font-medium">Expanded</span>
              </div>
              <div className="w-full md:w-1/4 text-center p-6 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white">
                <div className="w-20 h-20 mondrian-blue border-4 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2014</span>
                </div>
                <span className="text-lg font-medium">Innovated</span>
              </div>
              <div className="w-full md:w-1/4 text-center p-6 bg-white">
                <div className="w-28 h-28 mondrian-light-yellow border-4 border-black mx-auto mb-2 flex items-center justify-center overflow-visible">
                  <span className="text-black font-bold text-5xl">30</span>
                </div>
                <span className="text-lg font-medium">Years</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Approach columns in pure Mondrian style - more asymmetrical now */}
        <div className="mondrian-grid mb-16">
          {/* Traditional column - left side */}
          <div className="col-span-6 mondrian-grid-item bg-white">
            {/* Asymmetrical top blocks */}
            <div className="flex h-12 border-b-4 border-black">
              <div className="w-1/3 mondrian-red"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 mondrian-light-yellow"></div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl text-black mb-8">
                Traditional
              </h3>
              
              <ul className="space-y-8">
                <li className="flex items-start">
                  <span className="w-12 h-12 border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-black font-medium">01</span>
                  <span className="pt-1 text-black/80">Personal relationships built on trust and multi-generational commitment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-12 h-12 mondrian-light-yellow border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-black font-medium">02</span>
                  <span className="pt-1 text-black/80">Family values at the core of our practice, guiding every recommendation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-12 h-12 border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-black font-medium">03</span>
                  <span className="pt-1 text-black/80">Attentive, personalized service from professionals who truly understand your goals</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Innovative column - right side */}
          <div className="col-span-6 mondrian-grid-item bg-white">
            {/* Asymmetrical top blocks */}
            <div className="flex h-12 border-b-4 border-black">
              <div className="w-1/4 mondrian-light-blue"></div>
              <div className="w-2/4 bg-white"></div>
              <div className="w-1/4 mondrian-blue"></div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl text-black mb-8">
                Innovative
              </h3>
              
              <ul className="space-y-8">
                <li className="flex items-start">
                  <span className="w-12 h-12 mondrian-blue border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-white font-medium">01</span>
                  <span className="pt-1 text-black/80">Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-12 h-12 border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-black font-medium">02</span>
                  <span className="pt-1 text-black/80">Secure, modern client processes designed for today\'s digital environment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-12 h-12 mondrian-light-blue border-4 border-black flex items-center justify-center mr-5 flex-shrink-0 text-white font-medium">03</span>
                  <span className="pt-1 text-black/80">Data-driven, efficient solutions that save time while improving outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer link in pure Mondrian style - more asymmetrical grid */}
        <div className="mondrian-grid">
          <div className="col-span-1 mondrian-red"></div>
          <div className="col-span-2 mondrian-light-blue"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <Link to="/how-we-work" className="mondrian-button inline-flex items-center font-medium text-xl">
              Learn more about how we work
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
          <div className="col-span-2 mondrian-light-yellow"></div>
          <div className="col-span-1 mondrian-yellow"></div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
