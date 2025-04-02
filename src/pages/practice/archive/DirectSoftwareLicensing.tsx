import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { standardizeServicePaths } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';

// The content sections to display
const softwareLicensingAreas = [
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

// The process steps to display
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

// Related services
const relatedServices = [
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
];

const DirectSoftwareLicensing: React.FC = () => {
  logger.debug('DirectSoftwareLicensing component rendered');
  
  return (
    <PracticeAreaTemplate
      areaName="Software Licensing"
      serviceId="software-licensing"
    >
      <PracticeAreaHero
        title="Software Licensing"
        subtitle="Strategic Code Protection"
        description="Our software licensing practice helps developers and companies maximize value while protecting their code through optimal licensing structures."
      />
      
      <PracticeAreaContent 
        title="Software Licensing Services"
        sections={softwareLicensingAreas}
      />
      
      <ServiceWithFeatureImage
        serviceTitle="Value-Maximizing License Frameworks"
        serviceDescription="We develop licensing frameworks that balance protection with distribution, enabling you to monetize your software while maintaining appropriate control."
        imagePath="/images/software-code.jpg"
        variant="primary"
      />
      
      <PracticeAreaProcess
        title="Our Software Licensing Process"
        description="Our methodical approach ensures your software licensing strategy supports both protection and business growth."
        steps={softwareLicensingProcess}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        services={standardizeServicePaths(relatedServices)}
      />
    </PracticeAreaTemplate>
  );
};

export default DirectSoftwareLicensing; 