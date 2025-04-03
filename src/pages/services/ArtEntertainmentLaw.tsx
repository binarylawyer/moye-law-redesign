import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

// Rename data structure and adjust title/content for combined focus
const artEntertainmentLawData: Partial<ServiceData> = {
  title: "Art & Entertainment Law",
  description: "Specialized legal counsel for artists, creators, collectors, and businesses in the art and entertainment industries.",

  featuredContent: { 
      title: "Navigating the Creative Industries",
      content: [
        "The art and entertainment worlds operate under unique legal rules and business practices. Our practice provides specialized counsel to help clients navigate complex deals, protect creative assets, and manage industry relationships.",
        "We represent a diverse range of clients, including visual artists, collectors, galleries, filmmakers, musicians, and digital media ventures.",
        "Our attorneys combine deep industry knowledge with legal expertise to provide practical, results-oriented advice tailored to the specific needs of creative professionals and businesses."
      ],
      callToAction: "Protect your creative vision", 
      imageSrc: "/images/services/art-entertainment-featured.jpg",
      imageAlt: "Art gallery display and film set collage"
  },

  // Update features combining Art and Entertainment elements
  features: [
    {
      title: "Fine Art Transactions & Advisory",
      description: "Counsel for art sales, commissions, consignments, authentication, provenance, and collection management.",
      icon: "ColorSwatch"
    },
    {
      title: "Film, Television & Music Law",
      description: "Legal services for financing, production, distribution, talent agreements, and music licensing.",
      icon: "Film" 
    },
    {
      title: "Intellectual Property for Creatives",
      description: "Protecting copyrights, trademarks, and licensing for artwork, music, scripts, and digital creations (including NFTs).",
      icon: "Sparkles"
    },
    {
      title: "Talent & Gallery Representation",
      description: "Negotiating and drafting agreements for artists, actors, directors, writers, and gallery representation.",
      icon: "UserGroup"
    }
  ],

  considerations: [],

  process: {
    title: "Our Art & Entertainment Law Process",
    steps: [
      {
        title: "Project & Portfolio Review",
        description: "Understanding your specific creative work, collection, project, or business venture and identifying legal needs."
      },
      {
        title: "Rights Analysis & Strategy",
        description: "Analyzing IP rights (copyright, trademark, moral rights, publicity) and developing clearance, protection, and licensing strategies."
      },
      {
        title: "Deal Structuring & Negotiation",
        description: "Negotiating and drafting key agreements (commissions, talent, distribution, gallery, licensing) ensuring favorable terms."
      },
      {
        title: "Production & Transaction Counsel",
        description: "Providing ongoing legal support during production, transactions, or collection management."
      },
      {
        title: "Dispute Resolution & Advocacy",
        description: "Representing clients in resolving art or entertainment-related disputes through negotiation or litigation."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting & Strategy",
      path: "/services/ip-consulting-strategy",
      description: "Strategic advice for managing intellectual property portfolios within the creative industries."
    },
    {
      title: "Digital Asset & Tech Protection",
      path: "/services/digital-asset-tech-protection",
      description: "Protecting digital art, NFTs, and addressing technology use in creative fields."
    },
    {
      title: "Licensing & Transactions",
      path: "/services/licensing-transactions",
      description: "Developing and negotiating licensing agreements for creative properties and content."
    }
  ],
  
  ctaTitle: "Protect Your Creative Legacy",
  ctaDescription: "Get expert legal guidance tailored for the unique demands of the art and entertainment sectors. Secure your work and navigate the industry with confidence.",
  ctaButtonText: "Consult Our Creative Industries Lawyers",
  phoneNumber: "(555) 555-ARTS"
};

// Rename component
const ArtEntertainmentLaw: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={artEntertainmentLawData.title!}
      serviceId="art-entertainment-law"
      description={artEntertainmentLawData.description!}
      featuredContent={artEntertainmentLawData.featuredContent!}
      features={artEntertainmentLawData.features as ServiceFeature[]}
      considerations={artEntertainmentLawData.considerations!}
      process={artEntertainmentLawData.process as Process}
      relatedServices={artEntertainmentLawData.relatedServices as RelatedService[]}
      ctaTitle={artEntertainmentLawData.ctaTitle!}
      ctaDescription={artEntertainmentLawData.ctaDescription!}
      ctaButtonText={artEntertainmentLawData.ctaButtonText!}
      phoneNumber={artEntertainmentLawData.phoneNumber}
    />
  );
};

export default ArtEntertainmentLaw; 