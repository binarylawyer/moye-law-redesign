import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRelated from '@/components/services/ServiceRelated';
import ServiceFeatureImage from '@/components/services/ServiceFeatureImage';

const DigitalAssetProtection: React.FC = () => {
  const protectionServices = [
    {
      title: "Cryptocurrency Security",
      description: "Legal frameworks for securing cryptocurrency assets, wallet security protocols, and exchange transaction protections."
    },
    {
      title: "NFT Protection",
      description: "Comprehensive protection strategies for non-fungible tokens, including smart contract audits and metadata security."
    },
    {
      title: "Digital IP Defense",
      description: "Protecting intellectual property in digital formats through blockchain verification, watermarking, and anti-piracy measures."
    },
    {
      title: "Data Asset Management",
      description: "Securing valuable data assets through proper legal structures, access controls, and compliance frameworks."
    }
  ];

  const serviceSteps = [
    {
      title: "Asset Inventory",
      description: "We begin with a comprehensive inventory of your digital assets, categorizing them by type, value, vulnerability, and current protection status."
    },
    {
      title: "Risk Assessment",
      description: "We identify potential threats and vulnerabilities specific to each digital asset class, from technical exploits to legal challenges to ownership disputes."
    },
    {
      title: "Protection Strategy",
      description: "We develop a tailored digital asset protection strategy that addresses your specific assets, utilizing the appropriate legal frameworks, technical safeguards, and documentation."
    },
    {
      title: "Implementation",
      description: "We guide the implementation of your protection strategy, including drafting necessary legal documentation, establishing verification systems, and setting up monitoring protocols."
    },
    {
      title: "Ongoing Maintenance",
      description: "We provide continuous support to ensure your digital assets remain protected as technologies evolve and new threats emerge in the digital landscape."
    }
  ];

  const relatedServices = [
    {
      title: "IP Consulting",
      path: "/services/ip-consulting",
      description: "Strategic guidance for managing and maximizing the value of your intellectual property assets."
    },
    {
      title: "Emerging Tech",
      path: "/services/emerging-tech",
      description: "Legal frameworks for emerging technologies like AI, blockchain, and IoT."
    },
    {
      title: "IP Licensing",
      path: "/services/ip-licensing",
      description: "Structured frameworks for monetizing intellectual property through strategic licensing arrangements."
    }
  ];

  return (
    <ServiceTemplate serviceName="Digital Asset Protection" serviceId="digital-asset-protection">
      <ServiceHero 
        title="Digital Asset Protection"
        description="Comprehensive legal protection for your valuable digital assets, from cryptocurrencies and NFTs to domain names and digital intellectual property."
      />
      
      <ServiceContent 
        title="Safeguarding Your Digital Value" 
        variant="default"
        decorationPosition="right"
        decorationVariant={2}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              In today's digital economy, assets increasingly exist as code, tokens, and digital files rather than physical property. These digital assets—from cryptocurrencies and NFTs to domain names and digital intellectual property—require specialized legal protection strategies.
            </p>
            <p className="text-lg mb-6">
              Our Digital Asset Protection practice combines cutting-edge technical knowledge with sophisticated legal expertise to help clients secure, manage, and defend their valuable digital assets.
            </p>
            <p className="text-lg">
              We work with individuals, startups, and established businesses to develop comprehensive protection frameworks that address the unique challenges of digital ownership, transfer, and monetization in an evolving regulatory landscape.
            </p>
          </div>
        </div>
      </ServiceContent>
      
      <ServiceFeatureImage
        featureTitle="Secure Your Digital Future"
        featureDescription="The value of digital assets continues to grow exponentially. Our specialized legal frameworks help you protect cryptocurrency holdings, NFT collections, and digital intellectual property with comprehensive strategies designed for the digital economy."
        callToActionText="Protect your digital assets"
        variant="primary"
      />
      
      <ServiceContent 
        title="Protection Strategies" 
        variant="alternate"
        decorationPosition="left"
        decorationVariant={5}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {protectionServices.map((service, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-display text-xl text-black mb-4">{service.title}</h3>
              <p className="text-black/80">{service.description}</p>
            </div>
          ))}
        </div>
      </ServiceContent>
      
      <ServiceProcess
        title="Our Protection Process"
        steps={serviceSteps}
      />
      
      <ServiceRelated
        title="Related Services"
        items={relatedServices}
      />
    </ServiceTemplate>
  );
};

export default DigitalAssetProtection; 