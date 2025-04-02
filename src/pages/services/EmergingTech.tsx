import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRelated from '@/components/services/ServiceRelated';
import ServiceFeatureImage from '@/components/services/ServiceFeatureImage';

const EmergingTech: React.FC = () => {
  const techServices = [
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

  const serviceSteps = [
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
  ];

  const relatedServices = [
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
  ];

  return (
    <ServiceTemplate serviceName="Emerging Technology Law" serviceId="emerging-tech">
      <ServiceHero 
        title="Emerging Technology Law"
        description="Forward-looking legal solutions for pioneers at the frontier of technological innovation."
      />
      
      <ServiceContent 
        title="Legal Guidance for the Digital Frontier" 
        variant="default"
        decorationPosition="left"
        decorationVariant={4}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              The rapid pace of technological innovation creates new legal challenges that traditional frameworks struggle to address. Our Emerging Technology practice bridges this gap, providing forward-thinking legal guidance for businesses operating at the cutting edge.
            </p>
            <p className="text-lg mb-6">
              We combine deep technical understanding with legal expertise to help innovative companies navigate uncertain regulatory waters, protect their intellectual assets, and structure their operations for sustainable growth.
            </p>
            <p className="text-lg">
              Our team stays at the forefront of both technological developments and legal trends, ensuring that our clients receive advice that is not just current but anticipatory of future changes in this dynamic landscape.
            </p>
          </div>
        </div>
      </ServiceContent>
      
      <ServiceFeatureImage
        featureTitle="Navigate the Future with Confidence"
        featureDescription="Emerging technologies require forward-thinking legal strategies that anticipate regulatory developments and address novel legal questions. Our technology law experts help innovators navigate complex legal frameworks while maintaining their competitive edge."
        callToActionText="Future-proof your innovation"
        variant="tertiary"
      />
      
      <ServiceContent 
        title="Technology Focus Areas" 
        variant="alternate"
        decorationPosition="right"
        decorationVariant={1}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techServices.map((service, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{service.title}</h3>
              <p className="text-black/80">{service.description}</p>
            </div>
          ))}
        </div>
      </ServiceContent>
      
      <ServiceProcess
        title="Our Approach to Emerging Tech"
        steps={serviceSteps}
      />
      
      <ServiceRelated
        title="Related Services"
        items={relatedServices}
      />
    </ServiceTemplate>
  );
};

export default EmergingTech; 