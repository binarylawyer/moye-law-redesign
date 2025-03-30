
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-light-gray">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6">
            Our Approach
          </h2>
          
          <p className="reveal text-lg text-charcoal mb-12 leading-relaxed"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions 
            that are both traditional in values and forward-thinking in execution.
          </p>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
               style={{ transitionDelay: '0.2s' }}>
            {/* Traditional column */}
            <div>
              <h3 className="font-serif text-2xl mb-6 text-navy">Traditional</h3>
              <ul className="space-y-4 text-charcoal/80">
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">01</span>
                  <span>Personal relationships built on trust</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">02</span>
                  <span>Family values at the core of our practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">03</span>
                  <span>Attentive, personalized service</span>
                </li>
              </ul>
            </div>
            
            {/* Innovative column */}
            <div>
              <h3 className="font-serif text-2xl mb-6 text-navy">Innovative</h3>
              <ul className="space-y-4 text-charcoal/80">
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">01</span>
                  <span>Advanced AI/ML technology integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">02</span>
                  <span>Secure, modern client processes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-sm text-navy/50">03</span>
                  <span>Data-driven, efficient solutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="reveal border-t border-navy/10 pt-6" style={{ transitionDelay: '0.3s' }}>
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
