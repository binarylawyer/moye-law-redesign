import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Approach = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6 tracking-tight">
            Our Approach
          </h2>
          
          <p className="reveal text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed"
             style={{ transitionDelay: '0.1s' }}>
            We blend personalized attention with technological innovation to deliver legal solutions 
            that are both traditional in values and forward-thinking in execution.
          </p>
        </div>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
             style={{ transitionDelay: '0.2s' }}>
          {/* Traditional column */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-navy/5 hover:shadow-md transition-all">
            <h3 className="font-serif text-2xl mb-6 text-navy">Traditional</h3>
            <ul className="space-y-6 text-charcoal/70">
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">01</span>
                <span>Personal relationships built on trust and multi-generational commitment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">02</span>
                <span>Family values at the core of our practice, guiding every recommendation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">03</span>
                <span>Attentive, personalized service from professionals who truly understand your goals</span>
              </li>
            </ul>
          </div>
          
          {/* Innovative column */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-navy/5 hover:shadow-md transition-all">
            <h3 className="font-serif text-2xl mb-6 text-navy">Innovative</h3>
            <ul className="space-y-6 text-charcoal/70">
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">01</span>
                <span>Advanced AI/ML technology integration that enhances accuracy and efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">02</span>
                <span>Secure, modern client processes designed for today's digital environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-sm font-medium text-ocean-blue">03</span>
                <span>Data-driven, efficient solutions that save time while improving outcomes</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
          <Link to="/how-we-work" className="inline-flex items-center text-ocean-blue hover:text-navy transition-colors font-medium">
            Learn more about how we work <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Approach;
