import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceContent from '@/components/services/ServiceContent';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRelated from '@/components/services/ServiceRelated';
import ServiceFeatureImage from '@/components/services/ServiceFeatureImage';

const Licensing: React.FC = () => {
  const licensingServices = [
    {
      title: "Technology Licensing",
      description: "Strategic agreements for software, patents, and technical innovations that maximize value while protecting intellectual assets."
    },
    {
      title: "Content & Media Licensing",
      description: "Structured frameworks for licensing creative works, from digital content to entertainment properties."
    },
    {
      title: "Trademark & Brand Licensing",
      description: "Brand extension and merchandising agreements that protect brand integrity while opening new revenue streams."
    },
    {
      title: "Cross-Border Licensing",
      description: "International licensing strategies that navigate complex jurisdictional requirements and maximize global opportunities."
    }
  ];

  const serviceSteps = [
    {
      title: "Asset Assessment",
      description: "We begin with a thorough evaluation of your licensable intellectual property, identifying the most valuable assets and optimal licensing strategies for each."
    },
    {
      title: "Market Analysis",
      description: "We research potential licensing partners, markets, and opportunities, evaluating competitive offerings and identifying the most promising licensing avenues."
    },
    {
      title: "Strategic Planning",
      description: "We develop a comprehensive licensing strategy aligned with your business objectives, from revenue generation to market expansion or technology adoption."
    },
    {
      title: "Agreement Development",
      description: "We craft customized licensing agreements that protect your intellectual property while establishing clear terms for usage, compensation, quality control, and compliance."
    },
    {
      title: "Ongoing Management",
      description: "We provide continuous support to monitor compliance, manage renewals, and optimize your licensing program as market conditions and business objectives evolve."
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
    <ServiceTemplate serviceName="IP Licensing" serviceId="ip-licensing">
      <ServiceHero 
        title="IP Licensing Solutions"
        description="Structured frameworks for monetizing and leveraging intellectual property through strategic licensing arrangements."
      />
      
      <ServiceContent 
        title="Unlocking IP Value Through Strategic Licensing" 
        variant="default"
        decorationPosition="right"
        decorationVariant={2}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              Intellectual property licensing transforms static IP assets into dynamic revenue streams and strategic advantages. Our IP Licensing practice helps clients leverage their intellectual property through carefully structured licensing arrangements.
            </p>
            <p className="text-lg mb-6">
              We work with innovators, creators, and businesses to develop licensing strategies that extend market reach, generate revenue, and maintain control over valuable intellectual assets.
            </p>
            <p className="text-lg">
              Our expertise spans technology, content, and brand licensing across multiple industries, enabling us to craft licensing solutions tailored to your specific intellectual property portfolio and business objectives.
            </p>
          </div>
        </div>
      </ServiceContent>
      
      <ServiceFeatureImage
        featureTitle="Transform Your IP into Revenue"
        featureDescription="Our licensing expertise helps you develop strategic frameworks that maximize the value of your intellectual property while maintaining control and protecting your core assets. We'll help you navigate complex licensing arrangements to create sustainable revenue streams."
        callToActionText="Explore licensing opportunities"
        variant="secondary"
      />
      
      <ServiceContent 
        title="Licensing Solutions" 
        variant="alternate"
        decorationPosition="left"
        decorationVariant={5}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {licensingServices.map((service, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-display text-xl text-black mb-4">{service.title}</h3>
              <p className="text-black/80">{service.description}</p>
            </div>
          ))}
        </div>
      </ServiceContent>
      
      <ServiceProcess
        title="Our Licensing Process"
        steps={serviceSteps}
      />
      
      <ServiceRelated
        title="Related Services"
        items={relatedServices}
      />
    </ServiceTemplate>
  );
};

export default Licensing; 