
import React from 'react';

const EmergingTechOverview: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-3xl text-navy mb-6">Navigating the Future of Technology</h2>
            <p className="text-lg mb-6">
              Emerging technologies are rapidly transforming industries and creating new legal challenges. Businesses need forward-thinking legal guidance to navigate this complex landscape.
            </p>
            <p className="text-lg mb-6">
              Our Emerging Technology Law practice provides comprehensive legal support for companies developing and deploying cutting-edge technologies.
            </p>
            <p className="text-lg">
              We work with startups, established companies, and investors to address the unique legal issues presented by artificial intelligence, blockchain, the Internet of Things, and other emerging technologies.
            </p>
          </div>
          <div className="bg-gray-50 p-8">
            <h3 className="font-serif text-xl text-navy mb-4">We Advise On:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>AI and machine learning ethics and compliance</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Blockchain and digital asset regulation</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Data privacy and security for IoT devices</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Quantum computing intellectual property strategies</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Cross-border data transfer compliance</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                  <span className="text-gold font-medium">✓</span>
                </div>
                <span>Liability and risk management for autonomous systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergingTechOverview;
