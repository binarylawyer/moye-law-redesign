import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

const digitalAssetTechData: Partial<ServiceData> = {
  title: "Digital Asset & Tech Protection",
  description: "Comprehensive legal frameworks to safeguard digital assets and mitigate risks in emerging technologies.",

  featuredContent: { 
      title: "Protecting Value in the Digital & Tech Frontier", 
      content: [
          "As assets become increasingly digital and technologies rapidly evolve, specialized protection strategies are crucial.",
          "We combine deep technical understanding with legal expertise to help innovators and businesses secure digital assets (NFTs, crypto, data) and navigate the legal complexities of AI, blockchain, and IoT.",
          "Our proactive approach identifies risks early and establishes robust legal frameworks for protection and compliance."
      ],
      callToAction: "Secure your digital & tech assets", 
      imageSrc: "/images/services/digital-tech-featured.jpg",
      imageAlt: "Digital assets and technology protection concept"
  },

  features: [
    {
      title: "Digital Asset Security (NFTs, Crypto)",
      description: "Legal frameworks for securing cryptocurrencies, NFTs, wallet security protocols, and smart contract audits.",
      icon: "ShieldCheck"
    },
    {
      title: "Emerging Tech Compliance (AI, Blockchain)",
      description: "Navigating the legal landscape of AI ethics, data usage, liability, blockchain regulations, and IoT compliance.",
       icon: "Chip"
    },
    {
      title: "Technology IP Protection",
      description: "Safeguarding intellectual property for algorithms, software, databases, and other tech innovations.",
       icon: "Code"
    },
    {
      title: "Data Privacy & Security",
      description: "Implementing legal safeguards for data assets, including GDPR/CCPA compliance and secure data handling protocols.",
      icon: "LockClosed"
    }
  ],
  
  considerations: [],

  process: {
    title: "Our Protection & Compliance Process",
    steps: [
      {
        title: "Asset & Technology Audit",
        description: "Comprehensive inventory and assessment of your digital assets and technology stack to identify vulnerabilities and legal needs."
      },
      {
        title: "Risk & Compliance Mapping",
        description: "We identify potential legal, regulatory, and security risks specific to your assets and technologies."
      },
      {
        title: "Protection Strategy Design",
        description: "Developing tailored legal and technical safeguard strategies, including IP protection and compliance frameworks."
      },
      {
        title: "Implementation & Documentation",
        description: "Guiding the implementation of safeguards, drafting necessary policies (privacy, terms) and legal documents."
      },
      {
        title: "Ongoing Monitoring & Adaptation",
        description: "Continuously tracking regulatory changes and evolving threats to maintain robust protection."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting & Strategy",
      path: "/services/ip-consulting-strategy",
      description: "Strategic guidance on the intellectual property aspects of your digital assets and technology."
    },
    {
      title: "Licensing & Transactions",
      path: "/services/licensing-transactions",
      description: "Structuring deals for licensing technology, data, or digital assets."
    },
    {
      title: "Art & Entertainment Law",
      path: "/services/art-entertainment-law",
      description: "Addressing legal issues for digital art, NFTs, and technology use in creative industries."
    }
  ],

  ctaTitle: "Safeguard Your Digital Future",
  ctaDescription: "Partner with us to implement forward-thinking legal protections for your valuable digital assets and technological innovations.",
  ctaButtonText: "Discuss Protection Strategies",
  phoneNumber: "(555) 555-DAPR"
};

const DigitalAssetTechProtection: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={digitalAssetTechData.title!} 
      serviceId="digital-asset-tech-protection"
      description={digitalAssetTechData.description!}
      featuredContent={digitalAssetTechData.featuredContent!}
      features={digitalAssetTechData.features as ServiceFeature[]}
      considerations={digitalAssetTechData.considerations!}
      process={digitalAssetTechData.process as Process}
      relatedServices={digitalAssetTechData.relatedServices as RelatedService[]}
      ctaTitle={digitalAssetTechData.ctaTitle!}
      ctaDescription={digitalAssetTechData.ctaDescription!}
      ctaButtonText={digitalAssetTechData.ctaButtonText!}
      phoneNumber={digitalAssetTechData.phoneNumber}
    >
    </ServiceTemplate>
  );
};

export default DigitalAssetTechProtection; 