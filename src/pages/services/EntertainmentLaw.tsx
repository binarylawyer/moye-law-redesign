import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRelated from '@/components/services/ServiceRelated';
import ServiceFeatureImage from '@/components/services/ServiceFeatureImage';

const EntertainmentLaw: React.FC = () => {
  const entertainmentServices = [
    {
      title: "Film & Television",
      description: "Production agreements, talent contracts, distribution rights, and financing structures for audiovisual projects."
    },
    {
      title: "Music & Recording",
      description: "Artist deals, publishing rights, royalty structures, and licensing agreements for music industry clients."
    },
    {
      title: "Gaming & Interactive Media",
      description: "Development contracts, player agreements, streaming rights, and content monetization strategies."
    },
    {
      title: "Digital Content & Influencers",
      description: "Content creator agreements, sponsorship deals, platform terms, and revenue sharing arrangements."
    }
  ];

  const serviceSteps = [
    {
      title: "Project Analysis",
      description: "We evaluate your entertainment project or business to identify specific legal needs, opportunities, and potential challenges."
    },
    {
      title: "Rights Clearance",
      description: "We conduct thorough due diligence to ensure all intellectual property rights are properly secured and cleared for your intended use."
    },
    {
      title: "Contract Development",
      description: "We craft customized agreements that protect your interests while facilitating productive creative and business relationships."
    },
    {
      title: "Deal Negotiation",
      description: "We represent your interests in negotiations with studios, labels, platforms, talent, and other stakeholders in the entertainment ecosystem."
    },
    {
      title: "Ongoing Guidance",
      description: "We provide continuing legal support through project development, production, distribution, and monetization phases."
    }
  ];

  const relatedServices = [
    {
      title: "IP Licensing",
      path: "/services/ip-licensing",
      description: "Comprehensive solutions for intellectual property licensing across industries and applications."
    },
    {
      title: "Digital Asset Protection",
      path: "/services/digital-asset-protection",
      description: "Comprehensive legal protection for digital assets, from NFTs to domain names and digital IP."
    },
    {
      title: "IP Consulting",
      path: "/services/ip-consulting",
      description: "Strategic guidance for managing and maximizing the value of your intellectual property assets."
    }
  ];

  return (
    <ServiceTemplate serviceName="Entertainment Law" serviceId="entertainment-law">
      <ServiceHero 
        title="Entertainment Law"
        description="Sophisticated legal counsel for the business of creativity."
      />
      
      <ServiceContent 
        title="Navigating the Entertainment Industry's Legal Landscape" 
        variant="default"
        decorationPosition="right"
        decorationVariant={2}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              The entertainment industry combines creative expression with complex business structures, requiring legal guidance that understands both dimensions. Our Entertainment Law practice provides comprehensive legal support for creators, producers, talent, and businesses throughout the entertainment ecosystem.
            </p>
            <p className="text-lg mb-6">
              We offer specialized counsel on project development, financing, production, distribution, and rights management across traditional and emerging entertainment formats. Our attorneys have deep industry knowledge that allows them to navigate the evolving legal challenges in this dynamic sector.
            </p>
            <p className="text-lg">
              From independent creators to established media companies, we tailor our approach to each client's specific needs while maintaining a focus on maximizing creative and commercial opportunities.
            </p>
          </div>
        </div>
      </ServiceContent>
      
      <ServiceFeatureImage
        featureTitle="Protecting Creative Vision"
        featureDescription="Entertainment ventures require legal frameworks that protect creative work while enabling commercial success. Our entertainment attorneys combine industry expertise with legal acumen to help clients navigate complex media landscapes."
        callToActionText="Secure your creative assets"
        variant="secondary"
      />
      
      <ServiceContent 
        title="Entertainment Sectors" 
        variant="alternate"
        decorationPosition="left"
        decorationVariant={3}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entertainmentServices.map((service, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{service.title}</h3>
              <p className="text-black/80">{service.description}</p>
            </div>
          ))}
        </div>
      </ServiceContent>
      
      <ServiceProcess
        title="Our Entertainment Law Process"
        steps={serviceSteps}
      />
      
      <ServiceRelated
        title="Related Services"
        items={relatedServices}
      />
    </ServiceTemplate>
  );
};

export default EntertainmentLaw; 