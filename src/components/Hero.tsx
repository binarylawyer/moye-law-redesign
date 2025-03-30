
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="pt-64 pb-48 md:pt-80 md:pb-64 bg-gradient-to-br from-pastel-blue/30 to-white">
      <div className="container mx-auto px-8">
        {/* Main headline with minimalist design */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="reveal font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16 leading-tight">
            Family Values, <br />Future-Forward Legal Solutions
          </h1>
          <p className="reveal text-xl md:text-2xl max-w-3xl mx-auto mb-20 text-charcoal/90"
             style={{ transitionDelay: '0.1s' }}>
            We combine time-honored legal expertise with innovative approaches to protect what matters most to you and your family.
            Our boutique practice delivers sophisticated strategies with the personal attention you deserve.
          </p>

          {/* Persona-targeted copy */}
          <div className="reveal mb-20 grid md:grid-cols-3 gap-12 text-left"
               style={{ transitionDelay: '0.15s' }}>
            <div className="p-8 rounded-lg bg-white shadow-sm border border-navy/5">
              <h3 className="font-serif text-ocean-blue text-xl mb-4">For Innovators</h3>
              <p className="text-charcoal/80">Sophisticated estate planning for founders and tech leaders protecting digital assets and IP.</p>
            </div>
            <div className="p-8 rounded-lg bg-white shadow-sm border border-navy/5">
              <h3 className="font-serif text-ocean-blue text-xl mb-4">For Executives</h3>
              <p className="text-charcoal/80">Comprehensive solutions for caring for aging parents while managing your complex financial portfolio.</p>
            </div>
            <div className="p-8 rounded-lg bg-white shadow-sm border border-navy/5">
              <h3 className="font-serif text-ocean-blue text-xl mb-4">For Family Patriarchs</h3>
              <p className="text-charcoal/80">Strategic wealth preservation and governance frameworks for multi-generational legacy planning.</p>
            </div>
          </div>

          {/* CTA Buttons with outlign-like spacing */}
          <div className="reveal flex flex-col sm:flex-row justify-center gap-8 max-w-xl mx-auto"
               style={{ transitionDelay: '0.2s' }}>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full bg-gold hover:bg-gold/90 text-white font-normal py-8 px-10 rounded-none text-lg">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/practice" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-navy/20 text-navy hover:bg-navy/5 font-normal py-8 px-10 rounded-none text-lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust indicators - simplified like outlign */}
        <div className="reveal flex flex-col md:flex-row justify-center gap-8 md:gap-20 text-base md:text-lg text-charcoal/70 mt-40"
             style={{ transitionDelay: '0.4s' }}>
          <p>Family-owned since 1985</p>
          <div className="hidden md:block h-px w-1 bg-charcoal/20"></div>
          <p>Serving New York & Virginia</p>
          <div className="hidden md:block h-px w-1 bg-charcoal/20"></div>
          <p>Confidential and Discreet</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
