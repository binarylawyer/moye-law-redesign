import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';

// Rename data structure and adjust title/content
const licensingTransactionsData: Partial<ServiceData> = {
  title: "Licensing & Transactions",
  description: "Structuring and negotiating strategic licensing agreements and technology transactions.",

  featuredContent: { 
      title: "Monetizing Assets Through Deals",
      content: [
        "Intellectual property and proprietary assets hold significant commercial potential unlocked through strategic deals.",
        "Our Licensing & Transactions practice helps businesses structure, negotiate, and close agreements that capture this value, facilitating technology transfer, brand extension, and commercial partnerships.",
        "We combine deep legal expertise in IP and contract law with business acumen to ensure deals align with broader commercial objectives."
      ],
      callToAction: "Structure your next deal", 
      imageSrc: "/images/services/licensing-transactions-featured.jpg",
      imageAlt: "Negotiating licensing and transaction agreements"
  },

  // Update features for Licensing & Transactions focus
  features: [
    {
      title: "Technology Licensing Deals",
      description: "Structuring and negotiating agreements for software, patents, data, and technical know-how transfer.",
      icon: "Code" 
    },
    {
      title: "Brand & Content Licensing",
      description: "Developing frameworks and negotiating deals for trademark, brand, and creative content licensing.",
      icon: "Tag"
    },
    {
      title: "Strategic Tech Transactions",
      description: "Legal support for joint ventures, R&D agreements, tech acquisitions, and complex commercial contracts.",
      icon: "DocumentText"
    },
    {
      title: "Franchise & Distribution Agreements",
      description: "Comprehensive legal support for structuring, negotiating, and managing franchise and distribution systems.",
      icon: "OfficeBuilding"
    }
  ],

  considerations: [],

  // Adjust process steps for deal focus
  process: {
    title: "Our Licensing & Transaction Process",
    steps: [
      { title: "Deal Strategy & Valuation", description: "Identifying licensable/transactable assets, assessing commercial potential, and defining strategic deal objectives." },
      { title: "Partner Identification & Due Diligence", description: "Assisting in identifying potential partners/counterparties and conducting thorough due diligence." },
      { title: "Term Sheet & Structure Negotiation", description: "Developing key deal terms and negotiating the structure of the licensing agreement or transaction." },
      { title: "Agreement Drafting & Negotiation", description: "Drafting comprehensive agreements and leading negotiations to protect client interests and achieve goals." },
      { title: "Closing & Post-Deal Support", description: "Managing the closing process and providing guidance on post-transaction integration or relationship management." }
    ]
  },

  // Update related services paths
  relatedServices: [
    {
      title: "IP Consulting & Strategy",
      path: "/services/ip-consulting-strategy",
      description: "Aligning licensing and transaction activities with overall intellectual property strategy."
    },
    {
      title: "Digital Asset & Tech Protection",
      path: "/services/digital-asset-tech-protection",
      description: "Ensuring underlying digital assets and technology are properly protected before transacting."
    },
    {
      title: "Art & Entertainment Law",
      path: "/services/art-entertainment-law",
      description: "Specialized transaction support for creative works, media rights, and entertainment properties."
    }
  ],

  ctaTitle: "Close Your Next Strategic Deal",
  ctaDescription: "Leverage strategic licensing and transactions to generate revenue, acquire technology, or expand market reach.",
  ctaButtonText: "Discuss Your Deal Needs",
  phoneNumber: "(555) 555-DEAL"
};

// Rename component
const LicensingTransactions: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={licensingTransactionsData.title!}
      serviceId="licensing-transactions"
      description={licensingTransactionsData.description!}
      featuredContent={licensingTransactionsData.featuredContent!}
      features={licensingTransactionsData.features as ServiceFeature[]}
      considerations={licensingTransactionsData.considerations!}
      process={licensingTransactionsData.process as Process}
      relatedServices={licensingTransactionsData.relatedServices as RelatedService[]}
      ctaTitle={licensingTransactionsData.ctaTitle!}
      ctaDescription={licensingTransactionsData.ctaDescription!}
      ctaButtonText={licensingTransactionsData.ctaButtonText!}
      phoneNumber={licensingTransactionsData.phoneNumber}
    />
  );
};

export default LicensingTransactions; 