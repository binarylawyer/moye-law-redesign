import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal font-display text-3xl md:text-4xl text-navy mb-16 text-center tracking-tight">
            Trusted Legal Counsel
          </h2>
          
          <div className="reveal flex flex-col items-center">
            <div className="w-20 h-1 bg-gold/50 mb-16"></div>
            
            <div className="max-w-3xl text-center">
              <p className="text-charcoal/80 italic text-xl md:text-2xl mb-8 leading-relaxed font-display">
                "Moye Law gave our family peace of mind – they combined old-fashioned personal care with modern efficiency. Their attention to detail and innovative approach made our estate planning experience seamless."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy/10 mb-4 flex items-center justify-center text-navy font-display font-bold text-xl">
                  C
                </div>
                <p className="text-navy/60 font-medium">Client from Westchester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 