
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main headline with minimalist design */}
        <div className="max-w-4xl mx-auto mb-24 md:mb-40">
          <h1 className="reveal font-serif text-navy text-4xl md:text-5xl lg:text-6xl mb-8 text-center leading-tight">
            Family Values, <br className="hidden md:block" />Future-Forward Legal Solutions
          </h1>
          <p className="reveal text-lg text-center max-w-2xl mx-auto mb-12 text-charcoal/80"
             style={{ transitionDelay: '0.1s' }}>
            We combine time-honored legal expertise with innovative approaches to protect what matters most to you and your family.
          </p>

          {/* CTA Buttons with outlign-like spacing */}
          <div className="reveal flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
               style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/practice" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-navy/20 text-navy hover:bg-navy/5">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract visualization - simplified like outlign */}
        <div className="reveal max-w-5xl mx-auto mb-16 md:mb-32 relative aspect-[21/9] hidden md:block"
             style={{ transitionDelay: '0.3s' }}>
          <div className="absolute inset-0 rounded-lg overflow-hidden bg-light-gray">
            {/* Subtle abstract elements */}
            <div className="absolute left-1/4 top-1/2 w-1/3 h-1/4 bg-pastel-blue/30 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute right-1/4 top-1/3 w-1/5 h-2/5 bg-pastel-cream/30 rounded-full"></div>
            <div className="absolute right-1/3 bottom-1/4 w-1/6 h-1/5 border border-navy/10 rounded-full"></div>
            <div className="absolute left-1/3 bottom-1/3 w-1/5 h-px bg-gold/30"></div>
          </div>
        </div>

        {/* Trust indicators - simplified like outlign */}
        <div className="reveal flex flex-col md:flex-row justify-center gap-6 md:gap-16 items-center text-sm text-charcoal/60 mt-12"
             style={{ transitionDelay: '0.4s' }}>
          <p>Family-owned since 1985</p>
          <div className="hidden md:block h-1 w-1 bg-charcoal/20 rounded-full"></div>
          <p>Serving New York & Virginia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
