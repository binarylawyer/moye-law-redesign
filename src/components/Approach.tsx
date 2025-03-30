
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-8 text-center">
            Our Approach
          </h2>
          
          <p className="reveal text-lg md:text-xl font-serif text-charcoal mb-8 text-center leading-relaxed"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions that are both traditional in values and forward-thinking in execution.
          </p>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 mb-16"
               style={{ transitionDelay: '0.2s' }}>
            {/* Traditional column */}
            <div className="border-t border-navy/10 pt-6">
              <h3 className="font-serif text-xl mb-4 text-navy">Traditional</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Personal relationships built on trust</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Family values at the core of our practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Attentive, personalized service</span>
                </li>
              </ul>
            </div>
            
            {/* Innovative column */}
            <div className="border-t border-navy/10 pt-6">
              <h3 className="font-serif text-xl mb-4 text-navy">Innovative</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Advanced AI/ML technology integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Secure, modern client processes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gold">•</span>
                  <span>Data-driven, efficient solutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="reveal text-center mt-12" style={{ transitionDelay: '0.3s' }}>
            <Link to="/how-we-work" className="inline-flex items-center text-navy hover:text-gold transition-colors">
              Learn more about how we work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
