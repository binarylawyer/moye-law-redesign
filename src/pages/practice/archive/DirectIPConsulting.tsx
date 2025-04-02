import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { standardizeServicePaths } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

// Content sections
const consultingAreas = [
  {
    title: "IP Audit & Portfolio Management",
    description: "Comprehensive evaluation and strategic management of intellectual property assets."
  },
  {
    title: "IP Strategy Development",
    description: "Forward-looking IP strategies aligned with business objectives and market opportunities."
  },
  {
    title: "IP Valuation & Monetization",
    description: "Expert analysis of IP value and development of strategic monetization pathways."
  },
  {
    title: "Global IP Protection",
    description: "International strategies to secure and defend intellectual property across borders."
  }
];

// Process steps
const consultingProcess = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs and goals."
  },
  {
    number: "03",
    title: "Implementation Planning",
    description: "We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements."
  },
  {
    number: "04",
    title: "Execution Support",
    description: "We provide ongoing support during the implementation of your IP strategy, including coordination with specialized counsel."
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Licensing",
    path: "ip-licensing",
    description: "Structured frameworks for monetizing and leveraging intellectual property through strategic licensing arrangements."
  },
  {
    title: "Emerging Tech",
    path: "emerging-tech",
    description: "Legal frameworks for businesses leveraging emerging technologies like blockchain, AI, and IoT."
  },
  {
    title: "Digital Asset Protection",
    path: "digital-asset-protection",
    description: "Comprehensive protection strategies for digital intellectual property."
  }
];

const DirectIPConsulting: React.FC = () => {
  logger.debug('DirectIPConsulting component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="IP Consulting"
      serviceId="ip-consulting"
    >
      <PracticeAreaHero
        title="IP Consulting Services"
        subtitle="Strategic IP Management"
        description="Strategic intellectual property guidance for businesses seeking to maximize value and competitive advantage."
        imagePath="/images/ip-consulting.jpg"
      />
      
      <PracticeAreaContent 
        title="Our Consulting Services"
        sections={consultingAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Strategic IP Management Solutions"
        serviceDescription="Our IP consulting services help businesses identify, protect, and leverage their intellectual property assets. We provide tailored strategies that align with your business goals and enhance your competitive position in the market."
        imagePath="/images/ip-strategy.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our IP Consulting Process"
        description="Our systematic approach ensures your intellectual property strategy supports business objectives while maximizing asset value."
        steps={consultingProcess}
      />
      
      <PracticeAreaRelated
        title="Related IP Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectIPConsulting; 