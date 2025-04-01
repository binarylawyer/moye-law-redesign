import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-48 pb-40 bg-white relative overflow-hidden">
      {/* Abstract background pattern - more organic shapes */}
      <div className="absolute right-0 top-40 w-1/2 h-3/4 bg-navy/3 rounded-l-[200px] -z-10 opacity-70 transform rotate-6"></div>
      <div className="absolute left-0 bottom-20 w-1/3 h-1/2 bg-gold/3 rounded-r-[300px] -z-10 opacity-70 transform -rotate-3"></div>
      <div className="absolute right-1/4 top-1/3 w-24 h-24 bg-navy/5 rounded-full -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-16 items-center">
          {/* Content column - taking 7/12 of the space */}
          <div className="md:col-span-7">
            <div className="max-w-2xl">
              <h1 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight text-navy">
                Cutting-Edge Estate Planning with a Personal Touch
              </h1>
              <p className="reveal text-xl md:text-2xl mb-12 text-charcoal/80 leading-relaxed"
                 style={{ transitionDelay: '0.1s' }}>
                Family Values, Future-Forward Legal Solutions for New York and Westchester
              </p>

              {/* CTA Button with more organic styling */}
              <div className="reveal mb-16" style={{ transitionDelay: '0.2s' }}>
                <Link to="/contact">
                  <Button className="bg-gold hover:bg-gold/90 text-white font-medium py-5 px-10 text-lg shadow-sm rounded-lg">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators - more minimal styling */}
              <div className="reveal flex flex-col md:flex-row justify-start gap-8 md:gap-12 text-base text-charcoal/60 mb-8"
                   style={{ transitionDelay: '0.3s' }}>
                <p className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-navy/10 mr-2 flex-shrink-0"></span>
                  Family-Run Boutique Law Firm
                </p>
                <p className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-navy/10 mr-2 flex-shrink-0"></span>
                  20+ Years Serving NY Families
                </p>
              </div>
            </div>
          </div>
          
          {/* Image column - taking 5/12 of the space with offset positioning */}
          <div className="md:col-span-5 reveal relative" style={{ transitionDelay: '0.3s' }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform md:translate-y-6 md:-translate-x-4">
              <img 
                src="/images/family.jpg" 
                alt="Family planning for their future with Moye Law" 
                className="object-cover w-full h-auto aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Decorative element behind image */}
            <div className="absolute top-8 right-8 w-full h-full bg-gold/10 rounded-2xl -z-0 transform md:translate-y-6 md:translate-x-4 hidden md:block"></div>
          </div>
        </div>

        {/* Value Proposition - More organic spacing and layout */}
        <div className="reveal max-w-3xl mt-40 mb-0 md:ml-16" style={{ transitionDelay: '0.25s' }}>
          <div className="w-16 h-1 bg-gold/40 mb-10"></div>
          <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
            Moye Law is a family-owned firm blending decades of trust with AI-driven efficiency. We specialize in estate planning, elder law, probate, intellectual property, art law, and emergent tech law – delivering modern solutions rooted in family values.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Serving New York City and Westchester, we treat clients like family and leverage cutting-edge tools to protect what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

