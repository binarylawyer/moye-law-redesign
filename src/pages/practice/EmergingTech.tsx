import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { validatePracticeArea, standardizeServicePaths, ContentSection, RelatedService } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

const EmergingTech: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'emerging-tech';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('EmergingTech', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for EmergingTech component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const techAreas: ContentSection[] = [
    {
      title: "Blockchain & Cryptocurrency",
      description: "Legal frameworks for blockchain applications, token offerings, smart contracts, and cryptocurrency ventures."
    },
    {
      title: "Artificial Intelligence",
      description: "Navigating the complex legal landscape of AI development, data usage, liability, and intellectual property protection."
    },
    {
      title: "Internet of Things (IoT)",
      description: "Addressing privacy, security, and regulatory compliance for connected devices and systems."
    },
    {
      title: "Automated Systems",
      description: "Legal guidance for robotic process automation, autonomous vehicles, and other automated technologies."
    }
  ];

  const techProcess = [
    {
      number: "01",
      title: "Technology Assessment",
      description: "We begin with a comprehensive assessment of your technology and its unique legal considerations."
    },
    {
      number: "02",
      title: "Regulatory Mapping",
      description: "We identify applicable regulatory frameworks across all relevant jurisdictions."
    },
    {
      number: "03",
      title: "Risk Mitigation",
      description: "We develop tailored strategies to address identified legal risks while enabling innovation."
    },
    {
      number: "04",
      title: "Ongoing Advisory",
      description: "We provide continuous guidance as your technology evolves and regulatory landscapes change."
    }
  ];

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
    {
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Strategic frameworks for technology licensing and intellectual property monetization."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Comprehensive protection for digital assets, from NFTs to digital IP."
    },
    {
      title: "Data Privacy",
      path: "data-privacy",
      description: "Ensuring compliance with evolving global data protection regulations."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Emerging Technology Law"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="Emerging Technology Law"
        subtitle="Legal Solutions for Tomorrow's Innovations"
        description="Our emerging technology practice provides forward-thinking legal guidance for innovators at the frontier of technological development."
        imagePath="/images/emerging-tech.jpg"
      />
      
      <PracticeAreaContent 
        title="Navigating the Legal Frontier of Innovation"
        sections={techAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Future-Proof Legal Frameworks"
        serviceDescription="We develop adaptable legal frameworks that protect your innovations today while accommodating the rapid pace of technological evolution."
        imagePath="/images/tech-innovation.jpg"
        variant="tertiary"
      />
      
      <PracticeAreaProcess
        title="Our Emerging Tech Legal Process"
        description="We implement a methodical approach to addressing the novel legal challenges presented by emerging technologies."
        steps={techProcess}
      />
      
      <PracticeAreaRelated
        title="Related Technology Services"
        services={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default EmergingTech; 