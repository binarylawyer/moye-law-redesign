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
const licensingAreas = [
  {
    title: "Technology Licensing",
    description: "Strategic agreements for software, patents, and technical innovations that maximize value while protecting intellectual assets."
  },
  {
    title: "Content & Media Licensing",
    description: "Structured frameworks for licensing creative works, from digital content to entertainment properties."
  },
  {
    title: "Trademark & Brand Licensing",
    description: "Brand extension and merchandising agreements that protect brand integrity while opening new revenue streams."
  },
  {
    title: "Cross-Border Licensing",
    description: "International licensing strategies that navigate complex jurisdictional requirements and maximize global opportunities."
  }
];

// Process steps
const licensingProcess = [
  {
    number: "01",
    title: "Strategy Development",
    description: "We analyze your intellectual property portfolio and business objectives to develop a licensing strategy that maximizes value."
  },
  {
    number: "02",
    title: "Agreement Structuring",
    description: "Our team crafts licensing agreements with precise terms on usage rights, territories, duration, and compensation structures."
  },
  {
    number: "03",
    title: "Negotiation & Execution",
    description: "We negotiate favorable terms and complete all documentation required to formalize the licensing relationship."
  },
  {
    number: "04",
    title: "Ongoing Management",
    description: "We help monitor compliance, manage royalty calculations, and address any issues that arise during the license term."
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Portfolio Management",
    path: "ip-portfolio-management",
    description: "Comprehensive management of intellectual property assets."
  },
  {
    title: "Digital Asset Protection",
    path: "digital-asset-protection",
    description: "Protecting digital IP and creative works in the digital economy."
  },
  {
    title: "Emerging Technologies",
    path: "emerging-tech",
    description: "Legal guidance for blockchain, AI, and other emerging technologies."
  }
];

const DirectIPLicensing: React.FC = () => {
  logger.debug('DirectIPLicensing component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="IP Licensing"
      serviceId="ip-licensing"
    >
      <PracticeAreaHero
        title="IP Licensing"
        subtitle="Strategic IP Monetization"
        description="Our IP licensing practice helps businesses leverage their innovations, creative works, and brands through strategic licensing programs."
      />
      
      <PracticeAreaContent 
        title="IP Licensing Services"
        sections={licensingAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Strategic IP Monetization"
        serviceDescription="We develop customized licensing strategies to help you monetize your intellectual property portfolio through traditional licensing, franchise models, or innovative cross-industry collaborations."
        imagePath="/images/ip-monetization.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our IP Licensing Process"
        description="Our structured approach ensures your licensing agreements are optimized for success and protection."
        steps={licensingProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectIPLicensing; 