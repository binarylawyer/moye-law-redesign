import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { 
  validatePracticeArea, 
  standardizeServicePaths, 
  ContentSection, 
  RelatedService 
} from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';
import { Button } from '@/components/ui/button';
import { Link, Navigate } from 'react-router-dom';

const Licensing: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'ip-licensing';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('Licensing', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for Licensing component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const licensingAreas: ContentSection[] = [
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

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
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
  ]);

  return (
    <PracticeAreaTemplate
      areaName="IP Licensing"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="IP Licensing"
        description="Our IP licensing practice helps businesses leverage their innovations, creative works, and brands through strategic licensing programs."
        imagePath="/images/ip-licensing.jpg"
      />
      
      <PracticeAreaContent 
        title="IP Licensing Services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {licensingAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <ServiceWithFeatureImage
        serviceTitle="Strategic IP Monetization"
        serviceDescription="We develop customized licensing strategies to help you monetize your intellectual property portfolio through traditional licensing, franchise models, or innovative cross-industry collaborations."
        imagePath="/images/ip-monetization.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our IP Licensing Process"
        steps={licensingProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default Licensing; 