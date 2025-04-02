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
  const [validationResult, setValidationResult] = useState<{ 
    isValid: boolean; 
    message?: string;
  }>({ isValid: true });
  
  // Validate that this service ID exists in specialized services
  useEffect(() => {
    const result = validatePracticeArea('Licensing', SERVICE_ID);
    setValidationResult(result);
    
    if (!result.isValid) {
      logger.warn(`Invalid practice area: ${result.message}`);
    }
  }, []);

  // If the service ID is invalid, show a helpful error state
  if (!validationResult.isValid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-serif text-navy mb-4">Practice Area Not Found</h1>
          <p className="text-charcoal/70 mb-8">
            {validationResult.message || "The requested practice area does not exist or is unavailable."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/practice">View All Practice Areas</Link>
            </Button>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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

  const licenseProcess = [
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
      title: "IP Litigation",
      path: "ip-litigation",
      description: "Resolving disputes related to intellectual property rights."
    },
    {
      title: "Emerging Technologies",
      path: "emerging-tech",
      description: "Legal guidance for blockchain, AI, and other emerging technologies."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Intellectual Property Licensing"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="IP Licensing"
        subtitle="Maximizing the Value of Intellectual Property Assets"
        description="Our intellectual property licensing practice helps businesses leverage their innovations, creative works, and brands through strategic licensing programs."
        imagePath="/images/intellectual-property.jpg"
      />
      
      <PracticeAreaContent 
        title="Licensing Solutions Across Industry Sectors"
        sections={licensingAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Strategic IP Monetization"
        serviceDescription="Our licensing team develops customized strategies to monetize your intellectual property portfolio, whether through traditional licensing, franchise models, or innovative cross-industry collaborations."
        imagePath="/images/licensing-strategy.jpg"
        variant="secondary"
      />
      
      <PracticeAreaProcess
        title="Our IP Licensing Process"
        description="We implement a methodical approach to licensing that maximizes value while protecting your intellectual property."
        steps={licenseProcess}
      />
      
      <PracticeAreaRelated
        title="Related Intellectual Property Services"
        services={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default Licensing; 