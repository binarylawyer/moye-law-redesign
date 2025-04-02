import React, { useEffect, useState } from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { validatePracticeArea, standardizeServicePaths, ContentSection, RelatedService } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

const ElderLaw: React.FC = () => {
  // Define service ID consistently
  const SERVICE_ID = 'elder-law';
  const [isValidatingService, setIsValidatingService] = useState(true);
  
  // Validate that this service ID exists in specialized services, but don't block rendering
  useEffect(() => {
    try {
      const result = validatePracticeArea('ElderLaw', SERVICE_ID);
      
      if (!result.isValid) {
        logger.warn(`Service validation warning: ${result.message}`);
      } else {
        logger.debug('Service validation successful for ElderLaw component');
      }
    } catch (error) {
      logger.error('Error validating service:', error);
    } finally {
      setIsValidatingService(false);
    }
  }, []);

  const elderLawAreas: ContentSection[] = [
    {
      title: "Estate Planning for Seniors",
      description: "Comprehensive planning for the management and distribution of assets, including wills, trusts, and powers of attorney."
    },
    {
      title: "Long-Term Care Planning",
      description: "Strategic planning for future care needs, including Medicaid planning and asset protection strategies."
    },
    {
      title: "Guardianship & Conservatorship",
      description: "Legal arrangements for managing the affairs of individuals who can no longer make decisions for themselves."
    },
    {
      title: "Elder Abuse Protection",
      description: "Legal protection against financial exploitation, physical abuse, and neglect of seniors."
    }
  ];

  const elderLawProcess = [
    {
      number: "01",
      title: "Needs Assessment",
      description: "We conduct a thorough assessment of your current situation and future needs."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We develop a comprehensive legal strategy tailored to your specific circumstances."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We handle all necessary documentation and filings to put your plan into action."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "We provide continued guidance as needs evolve and laws change."
    }
  ];

  // Related services with standardized paths for consistency
  const relatedServices: RelatedService[] = standardizeServicePaths([
    {
      title: "Estate Planning",
      path: "estate-planning",
      description: "Comprehensive planning for wealth preservation and asset distribution."
    },
    {
      title: "Healthcare Law",
      path: "healthcare-law",
      description: "Legal guidance on healthcare decisions and medical directives."
    },
    {
      title: "Asset Protection",
      path: "digital-asset-protection",
      description: "Strategies to protect assets while ensuring eligibility for needed benefits."
    }
  ]);

  return (
    <PracticeAreaTemplate
      areaName="Elder Law"
      serviceId={SERVICE_ID}
    >
      <PracticeAreaHero
        title="Elder Law"
        description="Our elder law practice provides comprehensive legal services to seniors and their families, addressing the unique challenges that come with aging."
      />
      
      <PracticeAreaContent 
        title="Elder Law Services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {elderLawAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <ServiceWithFeatureImage
        serviceTitle="Dignity-Focused Legal Support"
        serviceDescription="We prioritize the dignity and independence of our senior clients while providing the legal protection they need for security and peace of mind."
        imagePath="/images/elder-care.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Elder Law Process"
        steps={elderLawProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default ElderLaw; 