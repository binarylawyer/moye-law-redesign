
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="container mx-auto px-8">
        {/* Main headline with minimalist design */}
        <div className="max-w-4xl mx-auto">
          <h1 className="reveal font-serif text-navy text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Family Values, <br />Future-Forward Legal Solutions
          </h1>
          <p className="reveal text-lg max-w-2xl mb-12 text-charcoal/80"
             style={{ transitionDelay: '0.1s' }}>
            We combine time-honored legal expertise with innovative approaches to protect what matters most to you and your family.
          </p>

          {/* CTA Buttons with outlign-like spacing */}
          <div className="reveal flex flex-col sm:flex-row gap-4 max-w-md"
               style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full bg-gold hover:bg-gold/90 text-white font-normal">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/practice" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-navy/20 text-navy hover:bg-navy/5 font-normal">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust indicators - simplified like outlign */}
        <div className="reveal flex flex-col md:flex-row justify-start gap-6 md:gap-12 text-sm text-charcoal/60 mt-24"
             style={{ transitionDelay: '0.4s' }}>
          <p>Family-owned since 1985</p>
          <div className="hidden md:block h-px w-1 bg-charcoal/20"></div>
          <p>Serving New York & Virginia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
