import React from 'react';
import { Award, Shield, Users, Star } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-12 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Trustworthiness indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-navy" />
              </div>
              <h3 className="text-navy font-display text-3xl mb-1">10+</h3>
              <p className="text-navy/70">Years of Experience</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-navy" />
              </div>
              <h3 className="text-navy font-display text-3xl mb-1">500+</h3>
              <p className="text-navy/70">Satisfied Clients</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-navy" />
              </div>
              <h3 className="text-navy font-display text-3xl mb-1">4.9/5</h3>
              <p className="text-navy/70">Client Satisfaction</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-navy" />
              </div>
              <h3 className="text-navy font-display text-3xl mb-1">DoD-Grade</h3>
              <p className="text-navy/70">Security Standards</p>
            </div>
          </div>
          
          {/* Recognition badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="py-3 px-5 bg-white border border-navy/10 rounded-md text-navy/80 text-sm font-medium">
              Super Lawyers™ Recognition
            </div>
            <div className="py-3 px-5 bg-white border border-navy/10 rounded-md text-navy/80 text-sm font-medium">
              AV Preeminent® Rated
            </div>
            <div className="py-3 px-5 bg-white border border-navy/10 rounded-md text-navy/80 text-sm font-medium">
              Best Law Firms® 2023
            </div>
            <div className="py-3 px-5 bg-white border border-navy/10 rounded-md text-navy/80 text-sm font-medium">
              Top Tech-Forward Firm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators; 