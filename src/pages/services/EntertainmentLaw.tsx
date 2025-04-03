import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

// Define the data structure matching ServiceData
const entertainmentLawData: Partial<ServiceData> = {
  title: "Entertainment Law",
  description: "Comprehensive legal counsel for creators, talent, and businesses in the entertainment industry.",

  featuredContent: { 
      title: "Navigating the Entertainment Landscape", 
      content: [
        "The entertainment industry operates under a unique set of legal rules and business practices. Our Entertainment Law practice provides specialized counsel to help clients navigate complex deals, protect creative assets, and manage industry relationships.",
        "We represent a diverse range of clients, including filmmakers, musicians, actors, writers, production companies, and digital media ventures.",
        "Our attorneys combine deep industry knowledge with legal expertise to provide practical, results-oriented advice tailored to the specific needs of entertainment professionals and businesses."
      ],
      callToAction: "Protect your creative work", 
      imageSrc: "/images/placeholder-entertainment.jpg", // Placeholder
      imageAlt: "Entertainment Law Placeholder" // Placeholder
  },

  // Map entertainmentServices to features structure
  features: [
    {
      title: "Film & Television",
      description: "Legal services for financing, production, distribution, and talent agreements.",
      icon: "Film" 
    },
    {
      title: "Music Law",
      description: "Counsel for recording contracts, publishing deals, licensing, and live performance agreements.",
      icon: "Music"
    },
    {
      title: "Talent Representation",
      description: "Negotiating and drafting agreements for actors, directors, writers, and other talent.",
      icon: "User"
    },
    {
      title: "Digital Media & Content Licensing",
      description: "Legal frameworks for online content distribution, streaming rights, and digital platform deals.",
      icon: "GlobeAlt"
    }
  ],

  considerations: [], // Placeholder

  process: {
    title: "Our Entertainment Law Process",
    steps: [
      {
        title: "Project Assessment",
        description: "We begin by understanding the specific creative project or business venture, including its goals, participants, and potential legal issues. We review existing agreements and identify key legal needs."
      },
      {
        title: "Rights Clearance & Strategy",
        description: "We analyze intellectual property rights involved (copyright, trademark, publicity rights) and develop strategies for clearance, protection, and licensing to mitigate risks and maximize value."
      },
      {
        title: "Deal Negotiation & Structuring",
        description: "We negotiate and draft key agreements, such as financing, production, distribution, talent, and licensing contracts, ensuring favorable terms aligned with client objectives."
      },
      {
        title: "Production Legal Support",
        description: "We provide ongoing legal counsel during production, addressing issues related to contracts, labor, insurance, and regulatory compliance specific to the entertainment industry."
      },
      {
        title: "Dispute Resolution",
        description: "We represent clients in resolving entertainment-related disputes, whether through negotiation, mediation, arbitration, or litigation, always seeking practical and efficient outcomes."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting",
      path: "/services/ip-consulting",
      description: "Strategic advice for managing intellectual property portfolios within the entertainment sector."
    },
    {
      title: "Digital Asset Protection",
      path: "/services/digital-asset-protection",
      description: "Protecting digital content, NFTs, and other digital assets prevalent in modern entertainment."
    },
    {
      title: "Licensing Solutions",
      path: "/services/licensing",
      description: "Developing and negotiating licensing agreements for entertainment properties and content."
    }
  ],
  
  ctaTitle: "Empower Your Creative Vision", // Placeholder
  ctaDescription: "Get expert legal guidance tailored for the unique demands of the entertainment industry.", // Placeholder
  ctaButtonText: "Consult Our Entertainment Lawyers", // Placeholder
  phoneNumber: "(555) 555-ENTLAW" // Placeholder
};

const EntertainmentLaw: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={entertainmentLawData.title!}
      serviceId="entertainment-law"
      description={entertainmentLawData.description!}
      featuredContent={entertainmentLawData.featuredContent!}
      features={entertainmentLawData.features as ServiceFeature[]}
      considerations={entertainmentLawData.considerations!}
      process={entertainmentLawData.process as Process}
      relatedServices={entertainmentLawData.relatedServices as RelatedService[]}
      ctaTitle={entertainmentLawData.ctaTitle!}
      ctaDescription={entertainmentLawData.ctaDescription!}
      ctaButtonText={entertainmentLawData.ctaButtonText!}
      phoneNumber={entertainmentLawData.phoneNumber}
    >
      {/* Remove children previously rendered here manually */}
    </ServiceTemplate>
  );
};

export default EntertainmentLaw; 