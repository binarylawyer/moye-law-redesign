import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

// Define the data structure matching ServiceData
const licensingData: Partial<ServiceData> = {
  title: "Licensing Solutions",
  description: "Strategic licensing frameworks to unlock the value of intellectual property and proprietary assets.",

  featuredContent: { 
      title: "Monetizing Your Assets Through Licensing", 
      content: [
        "Intellectual property and other proprietary assets often hold significant untapped commercial potential. Our Licensing Solutions practice helps businesses structure and negotiate agreements that unlock this value through strategic licensing.",
        "We work with licensors and licensees across diverse industries to create frameworks that facilitate technology transfer, brand extension, content distribution, and other commercial arrangements.",
        "Our approach combines deep legal expertise in intellectual property and contract law with a keen understanding of business strategy, ensuring licensing deals align with our clients' broader commercial objectives."
      ],
      callToAction: "Explore licensing opportunities", 
      imageSrc: "/images/placeholder-licensing.jpg", // Placeholder
      imageAlt: "Licensing Solutions Placeholder" // Placeholder
  },

  // Map licensingServices to features structure
  features: [
    {
      title: "Technology Licensing",
      description: "Structuring agreements for the transfer and use of patented technologies and technical know-how.",
      icon: "Code" 
    },
    {
      title: "Brand Licensing",
      description: "Developing frameworks for trademark and brand extensions into new product categories or markets.",
      icon: "Tag"
    },
    {
      title: "Content Licensing",
      description: "Negotiating agreements for the distribution and use of creative works across various media platforms.",
      icon: "DocumentText"
    },
    {
      title: "Franchise Agreements",
      description: "Comprehensive legal support for structuring, negotiating, and managing franchise systems.",
      icon: "OfficeBuilding"
    }
  ],

  considerations: [], // Placeholder

  process: {
    title: "Our Licensing Process",
    steps: [
      {
        title: "Asset Identification & Valuation",
        description: "We identify licensable assets (IP, technology, data, brand elements) and assess their commercial potential and market value to inform licensing strategy."
      },
      {
        title: "Strategy Development",
        description: "We collaborate to define clear licensing objectives, target markets or partners, and key deal parameters (scope, territory, exclusivity, financial terms)."
      },
      {
        title: "Partner Sourcing & Due Diligence",
        description: "We assist in identifying potential licensing partners and conduct thorough due diligence to assess their capabilities, financial stability, and strategic fit."
      },
      {
        title: "Negotiation & Agreement Drafting",
        description: "Our attorneys lead negotiations and draft comprehensive licensing agreements that protect client interests while fostering productive partnerships."
      },
      {
        title: "Ongoing Relationship Management",
        description: "We provide guidance on managing the licensing relationship, including compliance monitoring, royalty tracking, and dispute resolution support."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting",
      path: "/services/ip-consulting",
      description: "Strategic advice on managing and leveraging intellectual property portfolios for licensing success."
    },
    {
      title: "Intellectual Property",
      path: "/services/intellectual-property", // Assuming path
      description: "Core legal services for securing and enforcing the IP assets that underpin licensing deals."
    },
    {
      title: "Emerging Tech",
      path: "/services/emerging-tech",
      description: "Specialized licensing guidance for technologies like AI, blockchain, and IoT software."
    }
  ],

  ctaTitle: "Unlock Your Asset Value", // Placeholder
  ctaDescription: "Leverage strategic licensing to generate new revenue streams and expand market reach.", // Placeholder
  ctaButtonText: "Discuss Licensing Strategies", // Placeholder
  phoneNumber: "(555) 555-LICN" // Placeholder
};

const Licensing: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={licensingData.title!}
      serviceId="licensing"
      description={licensingData.description!}
      featuredContent={licensingData.featuredContent!}
      features={licensingData.features as ServiceFeature[]}
      considerations={licensingData.considerations!}
      process={licensingData.process as Process}
      relatedServices={licensingData.relatedServices as RelatedService[]}
      ctaTitle={licensingData.ctaTitle!}
      ctaDescription={licensingData.ctaDescription!}
      ctaButtonText={licensingData.ctaButtonText!}
      phoneNumber={licensingData.phoneNumber}
    >
      {/* Remove children previously rendered here manually */}
    </ServiceTemplate>
  );
};

export default Licensing; 