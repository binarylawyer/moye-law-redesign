import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { validatePracticeArea, standardizeServicePaths, ContentSection, RelatedService } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

const SoftwareLicensing: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'software-licensing';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('SoftwareLicensing', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for SoftwareLicensing component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const softwareLicensingAreas: ContentSection[] = [
    {
      title: "Open Source Compliance",
      description: "Navigating the complexities of open source license obligations and integration with proprietary software."
    },
    {
      title: "SaaS Agreements",
      description: "Structured agreements for cloud-based software, addressing access rights, data ownership, and service levels."
    },
    {
      title: "Enterprise Licensing",
      description: "Comprehensive frameworks for licensing software across large organizations with multiple divisions and users."
    },
    {
      title: "Mobile App Licensing",
      description: "Specialized licensing solutions for mobile applications across various platforms and distribution channels."
    }
  ];

  const softwareLicensingProcess = [
    {
      number: "01",
      title: "License Analysis",
      description: "We analyze your software business model and distribution needs to determine optimal licensing structures."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We craft a licensing strategy that protects your intellectual property while facilitating distribution and revenue."
    },
    {
      number: "03",
      title: "Agreement Drafting",
      description: "We create customized licensing agreements that address your specific technology and business requirements."
    },
    {
      number: "04",
      title: "Compliance Monitoring",
      description: "We establish systems to monitor compliance with licensing terms and enforce your rights when necessary."
    }
  ];

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
    {
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Broader intellectual property licensing strategies beyond software."
    },
    {
      title: "Emerging Tech",
      path: "emerging-tech",
      description: "Legal solutions for frontier technologies and innovative software applications."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Comprehensive protection for your valuable digital and software assets."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Software Licensing"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="Software Licensing"
        description="Our software licensing practice helps developers and companies maximize value while protecting their code through optimal licensing structures."
      />
      
      <PracticeAreaContent 
        title="Software Licensing Services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareLicensingAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <ServiceWithFeatureImage
        serviceTitle="Value-Maximizing License Frameworks"
        serviceDescription="We develop licensing frameworks that balance protection with distribution, enabling you to monetize your software while maintaining appropriate control."
        imagePath="/images/software-code.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Software Licensing Process"
        steps={softwareLicensingProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default SoftwareLicensing; 