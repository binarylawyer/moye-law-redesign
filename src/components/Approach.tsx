
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach: React.FC = () => {
  return (
    <section className="py-48 md:py-72 bg-gradient-to-br from-pastel-blue/20 to-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-12">
            Our Approach
          </h2>
          
          <p className="reveal text-xl md:text-2xl text-charcoal mb-16 leading-relaxed"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions 
            that are both traditional in values and forward-thinking in execution.
          </p>
        </div>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 max-w-5xl mx-auto"
             style={{ transitionDelay: '0.2s' }}>
          {/* Traditional column */}
          <div className="bg-white p-12 rounded-lg shadow-sm border border-navy/5">
            <h3 className="font-serif text-3xl mb-10 text-navy text-center">Traditional</h3>
            <ul className="space-y-10 text-charcoal/80 text-lg">
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">01</span>
                <span>Personal relationships built on trust and multi-generational commitment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">02</span>
                <span>Family values at the core of our practice, guiding every recommendation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">03</span>
                <span>Attentive, personalized service from professionals who truly understand your goals</span>
              </li>
            </ul>
          </div>
          
          {/* Innovative column */}
          <div className="bg-white p-12 rounded-lg shadow-sm border border-navy/5">
            <h3 className="font-serif text-3xl mb-10 text-navy text-center">Innovative</h3>
            <ul className="space-y-10 text-charcoal/80 text-lg">
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">01</span>
                <span>Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">02</span>
                <span>Secure, modern client processes designed for today's digital environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-6 text-base font-semibold text-ocean-blue">03</span>
                <span>Data-driven, efficient solutions that save time while improving outcomes</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="reveal border-t border-navy/10 pt-8 text-center" style={{ transitionDelay: '0.3s' }}>
          <Link to="/how-we-work" className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors text-lg">
            Learn more about how we work <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Approach;
