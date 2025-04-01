import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';

const DigitalAssetProtection: React.FC = () => {
  const strategies = [
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

  const processSteps = [
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
      path: "/practice/ip-consulting",
      description: "Strategic guidance for managing and maximizing the value of your intellectual property assets."
    },
    {
      title: "Emerging Tech",
      path: "/practice/emerging-tech",
      description: "Legal solutions for businesses leveraging cutting-edge technologies like blockchain, AI, and IoT."
    },
    {
      title: "IP Licensing",
      path: "/practice/ip-licensing",
      description: "Structured frameworks for licensing digital assets and intellectual property in the digital economy."
    }
  ];

  return (
    <PracticeAreaTemplate areaName="Digital Asset Protection" serviceId="digital-asset-protection">
      <PracticeAreaHero 
        title="Digital Asset Protection"
        description="Comprehensive legal protection for your valuable digital assets, from cryptocurrencies and NFTs to domain names and digital intellectual property."
      />
      
      <PracticeAreaContent 
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
      </PracticeAreaContent>
      
      <PracticeAreaContent 
        title="Protection Strategies" 
        variant="alternate"
        decorationPosition="left"
        decorationVariant={5}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{strategy.title}</h3>
              <p className="text-black/80">{strategy.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaProcess
        title="Our Protection Process"
        steps={processSteps}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default DigitalAssetProtection; 