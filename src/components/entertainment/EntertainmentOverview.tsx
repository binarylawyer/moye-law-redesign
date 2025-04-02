
import React from 'react';

const EntertainmentOverview: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-3xl text-navy mb-6">Protecting Creative Visions</h2>
            <p className="text-lg mb-6">
              The entertainment industry continues to undergo rapid transformation as new technologies reshape how content is created, distributed, and monetized. This evolution creates both opportunities and challenges for creators and businesses.
            </p>
            <p className="text-lg mb-6">
              Our Entertainment Law practice provides strategic guidance on navigating the complex legal landscape of entertainment, helping clients protect their creative works while maximizing their commercial potential.
            </p>
            <p className="text-lg">
              We work with individual creators, production companies, publishers, distributors, and platforms across traditional and digital media to develop legal frameworks that support creative and business success.
            </p>
          </div>
          <div className="bg-gray-50 p-8">
            <h3 className="font-display text-xl text-navy mb-4">Our Entertainment Expertise:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Rights acquisition and management</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Production and financing agreements</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Talent contracts and negotiations</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Distribution and licensing agreements</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Copyright registration and enforcement</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Royalty and profit participation structures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentOverview;
