import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { validatePracticeArea, standardizeServicePaths, ContentSection, RelatedService } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

const DigitalAssetProtection: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'digital-asset-protection';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('DigitalAssetProtection', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for DigitalAssetProtection component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const digitalAreas: ContentSection[] = [
    {
      title: "Cryptocurrency & Digital Tokens",
      description: "Comprehensive legal protection for crypto assets, NFTs, and tokenized investments."
    },
    {
      title: "Digital Intellectual Property",
      description: "Strategic protection for digital creations, software, algorithms, and other intangible assets."
    },
    {
      title: "Domain Names & Web Assets",
      description: "Ownership protection, dispute resolution, and strategic acquisition of digital property."
    },
    {
      title: "Data & Privacy Protection",
      description: "Compliance frameworks and protective measures for valuable corporate and customer data."
    }
  ];

  const digitalProcess = [
    {
      number: "01",
      title: "Asset Inventory",
      description: "We conduct a comprehensive audit of your digital assets to identify protection needs."
    },
    {
      number: "02",
      title: "Risk Assessment",
      description: "We identify vulnerabilities and potential threats to your digital asset portfolio."
    },
    {
      number: "03",
      title: "Protection Strategy",
      description: "We develop a tailored legal protection framework for each category of digital asset."
    },
    {
      number: "04",
      title: "Implementation & Monitoring",
      description: "We deploy protection measures and establish ongoing monitoring protocols."
    }
  ];

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
    {
      title: "Emerging Technologies",
      path: "emerging-tech",
      description: "Forward-looking legal solutions for blockchain, AI, and other digital innovations."
    },
    {
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Strategic frameworks for licensing and monetizing digital assets and IP."
    },
    {
      title: "Data Privacy",
      path: "data-privacy",
      description: "Compliance frameworks for data protection and privacy regulations."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Digital Asset Protection"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="Digital Asset Protection"
        subtitle="Safeguarding Your Digital Portfolio"
        description="Our digital asset protection practice provides comprehensive legal strategies to secure and maximize the value of your digital holdings."
        imagePath="/images/digital-assets.jpg"
      />
      
      <PracticeAreaContent 
        title="Digital Asset Protection Services"
        sections={digitalAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Future-Proof Digital Security"
        serviceDescription="We develop adaptive protection strategies that safeguard your digital assets in an evolving technological and regulatory landscape."
        imagePath="/images/digital-security.jpg"
        variant="secondary"
      />
      
      <PracticeAreaProcess
        title="Our Digital Protection Process"
        description="We implement a methodical approach to identifying, securing, and managing your valuable digital assets."
        steps={digitalProcess}
      />
      
      <PracticeAreaRelated
        title="Related Digital Services"
        services={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default DigitalAssetProtection; 