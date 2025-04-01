import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-40 pb-40 bg-white relative overflow-hidden">
      {/* Abstract background pattern - subtle design element */}
      <div className="absolute right-0 top-32 w-1/3 h-1/2 bg-navy/5 rounded-l-full -z-10 opacity-70"></div>
      <div className="absolute left-0 bottom-20 w-1/4 h-1/3 bg-gold/5 rounded-r-full -z-10 opacity-70"></div>
      
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Content column - taking 3/5 of the space */}
          <div className="md:col-span-3">
            <div className="max-w-2xl">
              <h1 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight text-navy">
                Cutting-Edge Estate Planning with a Personal Touch
              </h1>
              <p className="reveal text-xl md:text-2xl mb-12 text-charcoal/80 leading-relaxed"
                 style={{ transitionDelay: '0.1s' }}>
                Family Values, Future-Forward Legal Solutions for New York and Westchester
              </p>

              {/* CTA Button with clean styling */}
              <div className="reveal mb-16" style={{ transitionDelay: '0.2s' }}>
                <Link to="/contact">
                  <Button className="bg-gold hover:bg-gold/90 text-white font-medium py-5 px-10 text-lg shadow-sm">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators - moved here for better layout */}
              <div className="reveal flex flex-col md:flex-row justify-start gap-8 md:gap-12 text-base text-charcoal/60 mb-8"
                   style={{ transitionDelay: '0.3s' }}>
                <p className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-navy/10 mr-2 flex-shrink-0"></span>
                  Family-Run Boutique Law Firm
                </p>
                <p className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-navy/10 mr-2 flex-shrink-0"></span>
                  20+ Years Serving NY Families
                </p>
              </div>
            </div>
          </div>
          
          {/* Image column - taking 2/5 of the space */}
          <div className="md:col-span-2 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/family.jpg" 
                alt="Family planning for their future with Moye Law" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        {/* Value Proposition - Added according to plan - now moved below the hero image/text section */}
        <div className="reveal max-w-3xl mt-32 mb-0" style={{ transitionDelay: '0.25s' }}>
          <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
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

