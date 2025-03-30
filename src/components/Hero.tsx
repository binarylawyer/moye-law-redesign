
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-64 lg:py-96">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          {/* Content - Takes more space on desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-serif font-bold text-navy mb-16">
              Family Values, Future-Forward Legal Solutions
            </h1>
            <p className="text-lg md:text-xl mb-32 max-w-2xl">
              We combine time-honored legal expertise with innovative approaches to protect what matters most to you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-16">
              <Button className="bg-gold hover:bg-gold/90 font-medium text-white px-32 py-24">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 font-medium px-32 py-24">
                Explore Our Services
              </Button>
            </div>
          </div>
          
          {/* Abstract Imagery - Smaller on desktop */}
          <div className="lg:col-span-5 mt-32 lg:mt-0 flex items-center justify-center">
            <div className="relative">
              {/* Abstract shape representing both tradition (left) and innovation (right) */}
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                <div className="absolute left-0 top-0 h-4/5 w-1/2 bg-light-gray rounded-l-lg border-l border-t border-b border-navy/10"></div>
                <div className="absolute right-0 top-1/5 h-4/5 w-1/2 bg-white rounded-r-lg border-r border-t border-b border-gold/20 shadow-md"></div>
                <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 bg-white rounded-full border border-navy/10 shadow-sm"></div>
                <div className="absolute right-1/3 bottom-1/3 h-1/4 w-1/4 bg-gold/10 rounded-sm"></div>
                <div className="absolute left-1/5 bottom-1/5 h-1/5 w-3/5 border-t border-navy/20"></div>
                {/* Minimalist line illustrating digital/AI for Tech persona */}
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-px bg-gold"></div>
                <div className="absolute bottom-1/4 right-1/4 w-px h-1/4 bg-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="absolute bottom-16 left-0 w-full">
        <div className="container mx-auto px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-start md:justify-between text-sm text-charcoal/70">
            <p className="mb-8 md:mb-0">Family-owned since 1985</p>
            <p>Serving New York & Virginia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
