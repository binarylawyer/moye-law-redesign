import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { standardizeServicePaths } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

// Principles sections that match the screenshot
const ipPrinciples = [
  {
    number: "1",
    title: "Proactive Protection",
    description: "We believe in anticipating potential IP challenges before they arise. Our team develops comprehensive strategies to protect your intellectual assets at every stage of development.",
    color: "mondrian-red"
  },
  {
    number: "2",
    title: "Global Perspective",
    description: "In today's interconnected world, IP protection must transcend borders. We implement worldwide protection strategies that secure your innovations across all relevant jurisdictions.",
    color: "mondrian-blue"
  },
  {
    number: "3",
    title: "Value-Driven Approach",
    description: "Beyond protection, we focus on maximizing the value of your intellectual property through strategic licensing, partnerships, and commercialization opportunities.",
    color: "mondrian-yellow"
  }
];

// Process steps from the screenshot
const ipProcess = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We conduct a comprehensive review of your intellectual property assets, identifying strengths, vulnerabilities, and untapped opportunities.",
    color: "mondrian-red"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our assessment, we develop a customized protection strategy that aligns with your business objectives and resource constraints.",
    color: "mondrian-blue"
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team executes your IP strategy, handling registrations, agreements, and other legal procedures with meticulous attention to detail.",
    color: "mondrian-red"
  },
  {
    number: "04",
    title: "Monitoring & Enforcement",
    description: "We vigilantly monitor for potential infringements and take swift, appropriate action to protect your intellectual property rights.",
    color: "mondrian-blue"
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Licensing",
    path: "ip-licensing",
    description: "Strategic frameworks for monetizing and leveraging intellectual property."
  },
  {
    title: "Digital Asset Protection",
    path: "digital-asset-protection",
    description: "Comprehensive protection for digital intellectual property assets."
  },
  {
    title: "IP Consulting",
    path: "ip-consulting",
    description: "Expert guidance on intellectual property strategy and management."
  }
];

const DirectIntellectualProperty: React.FC = () => {
  logger.debug('DirectIntellectualProperty component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="Intellectual Property"
      serviceId="intellectual-property"
    >
      <PracticeAreaHero
        title="Intellectual Property"
        description="Our intellectual property practice safeguards your creative assets through strategic protection, enforcement, and monetization strategies tailored to your unique needs."
        imagePath="/images/intellectual-property.jpg"
      />
      
      {/* Custom Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h2 className="font-serif text-black text-3xl mb-8">Our Principles</h2>
            </div>
            <div className="col-span-3 mondrian-yellow"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {ipPrinciples.map((principle, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                {/* Number block with corresponding Mondrian color */}
                <div className={`${principle.color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-serif text-white text-3xl font-bold">{principle.number}</span>
                </div>
                
                {/* Content block */}
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{principle.title}</h3>
                  <p className="text-black/80 text-lg">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-blue"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h2 className="font-serif text-black text-3xl mb-8">Our Process</h2>
            </div>
            <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Process step 1 - Red left */}
            <div className="flex flex-col md:flex-row">
              <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                <span className="font-serif text-white text-3xl font-bold">{ipProcess[0].number}</span>
              </div>
              <div className="bg-white p-6 border-4 border-black flex-grow">
                <h3 className="font-serif text-black text-2xl mb-4">{ipProcess[0].title}</h3>
                <p className="text-black/80 text-lg">{ipProcess[0].description}</p>
              </div>
            </div>
            
            {/* Process step 2 - Blue right */}
            <div className="flex flex-col md:flex-row-reverse">
              <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                <span className="font-serif text-white text-3xl font-bold">{ipProcess[1].number}</span>
              </div>
              <div className="bg-white p-6 border-4 border-black flex-grow">
                <h3 className="font-serif text-black text-2xl mb-4">{ipProcess[1].title}</h3>
                <p className="text-black/80 text-lg">{ipProcess[1].description}</p>
              </div>
            </div>
            
            {/* Process step 3 - Red left */}
            <div className="flex flex-col md:flex-row">
              <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                <span className="font-serif text-white text-3xl font-bold">{ipProcess[2].number}</span>
              </div>
              <div className="bg-white p-6 border-4 border-black flex-grow">
                <h3 className="font-serif text-black text-2xl mb-4">{ipProcess[2].title}</h3>
                <p className="text-black/80 text-lg">{ipProcess[2].description}</p>
              </div>
            </div>
            
            {/* Process step 4 - Blue right with Mondrian decoration */}
            <div className="flex flex-col md:flex-row-reverse">
              <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                <span className="font-serif text-white text-3xl font-bold">{ipProcess[3].number}</span>
              </div>
              <div className="bg-white p-6 border-4 border-black flex-grow relative">
                <h3 className="font-serif text-black text-2xl mb-4">{ipProcess[3].title}</h3>
                <p className="text-black/80 text-lg">{ipProcess[3].description}</p>
                
                {/* Small Mondrian decoration in bottom right */}
                <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1">
                  <div className="mondrian-red"></div>
                  <div className="bg-white border border-black"></div>
                  <div className="bg-white border border-black"></div>
                  <div className="mondrian-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action button */}
      <section className="py-8">
        <div className="container mx-auto px-8 flex justify-center">
          <div className="mondrian-divider flex items-center w-full max-w-4xl">
            <div className="mondrian-red h-8 w-16 flex-shrink-0"></div>
            <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
              <span className="text-xl">Ask us about Intellectual Property services: (212) 555-0123</span>
            </div>
            <div className="mondrian-yellow h-8 w-32 flex-shrink-0"></div>
          </div>
        </div>
      </section>
      
      <PracticeAreaRelated
        title="Related Intellectual Property Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectIntellectualProperty; 