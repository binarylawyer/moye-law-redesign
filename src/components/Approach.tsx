import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6 tracking-tight">
            Our Approach
          </h2>
          
          <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
          
          <p className="reveal text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions 
            that are both traditional in values and forward-thinking in execution.
          </p>
        </div>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto"
             style={{ transitionDelay: '0.2s' }}>
          {/* Traditional column */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-navy/5 hover:shadow-md transition-all relative">
            <div className="absolute -top-5 left-10 bg-navy/10 text-navy font-serif px-4 py-2 rounded-full text-sm font-medium">
              Traditional
            </div>
            <div className="pt-4">
              <ul className="space-y-8 text-charcoal/70">
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">01</span>
                  <span className="pt-1">Personal relationships built on trust and multi-generational commitment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">02</span>
                  <span className="pt-1">Family values at the core of our practice, guiding every recommendation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">03</span>
                  <span className="pt-1">Attentive, personalized service from professionals who truly understand your goals</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Innovative column */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-navy/5 hover:shadow-md transition-all relative">
            <div className="absolute -top-5 left-10 bg-navy/10 text-navy font-serif px-4 py-2 rounded-full text-sm font-medium">
              Innovative
            </div>
            <div className="pt-4">
              <ul className="space-y-8 text-charcoal/70">
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">01</span>
                  <span className="pt-1">Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">02</span>
                  <span className="pt-1">Secure, modern client processes designed for today's digital environment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mr-4 flex-shrink-0 text-navy font-medium text-sm">03</span>
                  <span className="pt-1">Data-driven, efficient solutions that save time while improving outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
          <Link to="/how-we-work" className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors font-medium group">
            Learn more about how we work <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Approach;
