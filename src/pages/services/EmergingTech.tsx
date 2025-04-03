import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

const emergingTechData: Partial<ServiceData> = {
  title: "Emerging Technology Law",
  description: "Forward-looking legal solutions for pioneers at the frontier of technological innovation.",

  featuredContent: { 
      title: "Legal Guidance for the Digital Frontier", 
      content: [
          "The rapid pace of technological innovation creates new legal challenges that traditional frameworks struggle to address. Our Emerging Technology practice bridges this gap, providing forward-thinking legal guidance for businesses operating at the cutting edge.",
          "We combine deep technical understanding with legal expertise to help innovative companies navigate uncertain regulatory waters, protect their intellectual assets, and structure their operations for sustainable growth.",
          "Our team stays at the forefront of both technological developments and legal trends, ensuring that our clients receive advice that is not just current but anticipatory of future changes in this dynamic landscape."
      ],
      callToAction: "Future-proof your innovation", 
      imageSrc: "/images/placeholder-tech.jpg",
      imageAlt: "Emerging Tech Placeholder"
  },

  features: [
    {
      title: "Blockchain & Cryptocurrency",
      description: "Legal frameworks for blockchain applications, token offerings, smart contracts, and cryptocurrency ventures.",
      icon: "CubeTransparent"
    },
    {
      title: "Artificial Intelligence",
      description: "Navigating the complex legal landscape of AI development, data usage, liability, and intellectual property protection.",
       icon: "Chip"
    },
    {
      title: "Internet of Things (IoT)",
      description: "Addressing privacy, security, and regulatory compliance for connected devices and systems.",
       icon: "Wifi"
    },
    {
      title: "Automated Systems",
      description: "Legal guidance for robotic process automation, autonomous vehicles, and other automated technologies.",
      icon: "Cog"
    }
  ],
  
  considerations: [],

  process: {
    title: "Our Approach to Emerging Tech",
    steps: [
      {
        title: "Technology Assessment",
        description: "We begin by thoroughly understanding your technology, its applications, and the specific legal challenges it presents in current and future regulatory environments."
      },
      {
        title: "Risk Mapping",
        description: "We identify and map potential legal and regulatory risks specific to emerging technologies, from privacy concerns to liability frameworks and intellectual property protection."
      },
      {
        title: "Compliance Framework",
        description: "We develop a tailored compliance strategy that addresses current regulations while anticipating forthcoming legal developments in this rapidly evolving space."
      },
      {
        title: "Implementation Support",
        description: "We provide practical guidance on implementing legal safeguards, including contract structures, terms of service, privacy policies, and operational protocols."
      },
      {
        title: "Ongoing Monitoring",
        description: "We continuously track regulatory developments and evolving case law to ensure your legal framework remains current with the rapidly changing landscape of technology law."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting",
      path: "/services/ip-consulting",
      description: "Strategic guidance for managing and maximizing the value of your intellectual property assets."
    },
    {
      title: "Digital Asset Protection",
      path: "/services/digital-asset-protection",
      description: "Comprehensive legal protection for digital assets, from NFTs to domain names and digital IP."
    },
    {
      title: "Entertainment Law",
      path: "/services/entertainment-law",
      description: "Legal counsel for entertainment properties, content licensing, and media ventures."
    }
  ],

  ctaTitle: "Navigate the Future",
  ctaDescription: "Partner with us to address the legal complexities of your innovations.",
  ctaButtonText: "Discuss Your Tech Venture",
  phoneNumber: "(555) 555-TECH"
};

const EmergingTech: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={emergingTechData.title!} 
      serviceId="emerging-tech"
      description={emergingTechData.description!}
      featuredContent={emergingTechData.featuredContent!}
      features={emergingTechData.features as ServiceFeature[]}
      considerations={emergingTechData.considerations!}
      process={emergingTechData.process as Process}
      relatedServices={emergingTechData.relatedServices as RelatedService[]}
      ctaTitle={emergingTechData.ctaTitle!}
      ctaDescription={emergingTechData.ctaDescription!}
      ctaButtonText={emergingTechData.ctaButtonText!}
      phoneNumber={emergingTechData.phoneNumber}
    >
    </ServiceTemplate>
  );
};

export default EmergingTech; 