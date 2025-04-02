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
const digitalAssetAreas = [
  {
    title: "Cryptocurrency & NFT Protection",
    description: "Legal frameworks for securing digital currencies, NFTs, and blockchain-based assets."
  },
  {
    title: "Digital IP Rights Management",
    description: "Strategies for establishing, monitoring, and enforcing digital intellectual property rights."
  },
  {
    title: "Online Content Protection",
    description: "Legal tools to prevent unauthorized use of digital content and creative works."
  },
  {
    title: "Digital Estate Planning",
    description: "Solutions for managing digital asset succession and ensuring long-term protection."
  }
];

// Process steps
const digitalAssetProcess = [
  {
    number: "01",
    title: "Digital Asset Audit",
    description: "We thoroughly inventory and assess your digital assets and current protection measures."
  },
  {
    number: "02",
    title: "Risk Assessment",
    description: "We identify vulnerabilities and potential legal challenges to your digital property."
  },
  {
    number: "03",
    title: "Protection Strategy",
    description: "We develop a comprehensive legal framework to protect your digital assets."
  },
  {
    number: "04",
    title: "Implementation & Monitoring",
    description: "We put protection measures in place and establish ongoing monitoring systems."
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Consulting",
    path: "ip-consulting",
    description: "Strategic consulting for intellectual property in digital environments."
  },
  {
    title: "Estate Planning",
    path: "estate-planning",
    description: "Ensuring your digital assets are included in comprehensive estate plans."
  },
  {
    title: "Emerging Tech Law",
    path: "emerging-tech",
    description: "Legal frameworks for cutting-edge digital technologies and platforms."
  }
];

const DirectDigitalAssetProtection: React.FC = () => {
  logger.debug('DirectDigitalAssetProtection component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="Digital Asset Protection"
      serviceId="digital-asset-protection"
    >
      <PracticeAreaHero
        title="Digital Asset Protection"
        subtitle="Safeguarding Your Digital Portfolio"
        description="Comprehensive legal strategies to safeguard your digital assets and intellectual property in an increasingly virtual world."
        imagePath="/images/digital-assets.jpg"
      />
      
      <PracticeAreaContent 
        title="Digital Asset Protection Services"
        sections={digitalAssetAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Proactive Digital Rights Management"
        serviceDescription="We implement forward-thinking strategies that protect your digital assets before problems arise, combining preventative legal measures with responsive enforcement frameworks."
        imagePath="/images/digital-protection.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Digital Protection Process"
        description="Our structured approach ensures your digital assets receive comprehensive legal protection in today's rapidly evolving digital landscape."
        steps={digitalAssetProcess}
      />
      
      <PracticeAreaRelated
        title="Related Digital Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectDigitalAssetProtection; 