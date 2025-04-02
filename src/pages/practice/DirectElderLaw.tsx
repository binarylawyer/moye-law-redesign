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
const elderLawAreas = [
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

// Process steps
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

// Related services
const relatedServices = [
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
];

const DirectElderLaw: React.FC = () => {
  logger.debug('DirectElderLaw component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="Elder Law"
      serviceId="elder-law"
    >
      <PracticeAreaHero
        title="Elder Law"
        subtitle="Compassionate Senior Legal Support"
        description="Our elder law practice provides comprehensive legal services to seniors and their families, addressing the unique challenges that come with aging."
      />
      
      <PracticeAreaContent 
        title="Elder Law Services"
        sections={elderLawAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Dignity-Focused Legal Support"
        serviceDescription="We prioritize the dignity and independence of our senior clients while providing the legal protection they need for security and peace of mind."
        imagePath="/images/elder-care.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Elder Law Process"
        description="Our compassionate approach to elder law ensures seniors and their families receive the legal protection and guidance they need during life transitions."
        steps={elderLawProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectElderLaw; 