import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';

const EmergingTech: React.FC = () => {
  const techAreas = [
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

  const processSteps = [
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
      path: "/ip-consulting",
      description: "Strategic guidance for managing and maximizing the value of your intellectual property assets."
    },
    {
      title: "Digital Asset Protection",
      path: "/digital-asset-protection",
      description: "Comprehensive legal protection for digital assets, from NFTs to domain names and digital IP."
    },
    {
      title: "Entertainment Law",
      path: "/entertainment-law",
      description: "Legal counsel for digital content creators, gaming companies, and interactive entertainment ventures."
    }
  ];

  return (
    <PracticeAreaTemplate areaName="Emerging Technology">
      <PracticeAreaHero 
        title="Emerging Technology Law"
        description="Forward-looking legal solutions for pioneers at the frontier of technological innovation."
      />
      
      <PracticeAreaContent 
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
      </PracticeAreaContent>
      
      <PracticeAreaContent 
        title="Technology Focus Areas" 
        variant="alternate"
        decorationPosition="right"
        decorationVariant={1}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaProcess
        title="Our Approach to Emerging Tech"
        steps={processSteps}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default EmergingTech;
