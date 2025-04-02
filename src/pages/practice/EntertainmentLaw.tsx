import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { validatePracticeArea, standardizeServicePaths, ContentSection, RelatedService } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

const EntertainmentLaw: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'entertainment-law';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('EntertainmentLaw', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for EntertainmentLaw component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const entertainmentAreas: ContentSection[] = [
    {
      title: "Film & Television",
      description: "Contract negotiation, intellectual property protection, and production legal services for content creators and studios."
    },
    {
      title: "Music & Performing Arts",
      description: "Rights management, licensing agreements, and career strategy for artists, labels, and production companies."
    },
    {
      title: "Digital Entertainment",
      description: "Legal frameworks for podcasts, streaming platforms, gaming, and other digital entertainment ventures."
    },
    {
      title: "Talent Representation",
      description: "Comprehensive representation services for performers, creators, and influencers in traditional and digital media."
    }
  ];

  const entertainmentProcess = [
    {
      number: "01",
      title: "Rights Assessment",
      description: "We evaluate existing intellectual property rights and development needs for your entertainment project."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "We develop tailored legal strategies that align with your creative and business objectives."
    },
    {
      number: "03",
      title: "Documentation & Negotiation",
      description: "We create and negotiate agreements that protect your interests while facilitating successful collaborations."
    },
    {
      number: "04",
      title: "Rights Management",
      description: "We establish systems for ongoing rights management, compliance, and monetization."
    }
  ];

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
    {
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Strategic frameworks for content licensing and intellectual property monetization."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Protecting digital creative works and entertainment properties."
    },
    {
      title: "Contract Law",
      path: "contract-law",
      description: "Expert guidance on entertainment industry agreements and negotiations."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Entertainment Law"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="Entertainment Law"
        subtitle="Legal Strategy for Creative Industries"
        description="Our entertainment law practice provides expert legal guidance for creators, producers, and businesses across the evolving media landscape."
        imagePath="/images/entertainment-law.jpg"
      />
      
      <PracticeAreaContent 
        title="Specialized Entertainment Industry Services"
        sections={entertainmentAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Creative Rights Protection"
        serviceDescription="We safeguard the legal interests of creative professionals and entertainment companies with sophisticated rights management strategies designed for today's complex media environment."
        imagePath="/images/creative-rights.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Entertainment Law Approach"
        description="We implement a structured methodology that protects creative works while enabling successful commercial ventures."
        steps={entertainmentProcess}
      />
      
      <PracticeAreaRelated
        title="Related Media & Entertainment Services"
        services={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default EntertainmentLaw; 