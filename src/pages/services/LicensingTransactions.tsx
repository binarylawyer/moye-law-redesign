import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';
import { Briefcase, FileCheck, BarChart2, Network, Code, Tag, FileText, Building } from 'lucide-react';

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
      imageSrc: "/videos/monetizing-assets.mp4",
      imageAlt: "Strategic business transaction and asset monetization process visualized"
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
      icon: "FileText"
    },
    {
      title: "Franchise & Distribution Agreements",
      description: "Comprehensive legal support for structuring, negotiating, and managing franchise and distribution systems.",
      icon: "Building"
    }
  ],

  // Add considerations for the FAQ section
  considerations: [
    {
      title: "Strategic Licensing Value Maximization",
      description: "Effective licensing programs balance immediate revenue with long-term strategic value. Our flat-fee licensing structure assessment helps identify optimal pricing models, exclusivity parameters, and term structures. For tech entrepreneurs, we emphasize scalability and integration flexibility. For family-focused clients, we prioritize relationship preservation in collaborative agreements. For wealth-minded clients, we structure tiered royalty frameworks that maximize long-term returns."
    },
    {
      title: "IP Due Diligence in Transactions",
      description: "Thorough intellectual property due diligence is critical to successful technology transactions. Our subscription-based transaction support includes comprehensive IP portfolio verification, freedom-to-operate analysis, and infringement risk assessment. This approach provides predictable costs for complex transactions while ensuring no hidden IP issues compromise deal value. The service includes regular updates as transaction parameters evolve."
    },
    {
      title: "Cross-Border Licensing Considerations",
      description: "International licensing agreements must navigate complex jurisdictional differences in IP protection, enforcement mechanisms, and contract interpretation. Our fixed-fee international licensing service addresses these challenges through carefully structured choice of law provisions, dispute resolution frameworks, and territory-specific compliance mechanisms tailored to each client's global footprint and risk tolerance."
    },
    {
      title: "Technology Transfer & Integration",
      description: "Successful technology transfer extends beyond legal documentation to practical implementation considerations. Our technology transfer packages include not only comprehensive legal agreements but also knowledge transfer protocols, integration milestone frameworks, and performance verification standards. This approach ensures that licensed technology delivers anticipated value across organizational boundaries."
    },
    {
      title: "Revenue Recognition & Licensing Structure",
      description: "Licensing structures significantly impact financial reporting and revenue recognition. Our licensing financial impact analysis provides transparent guidance on structuring agreements to optimize accounting treatment while maintaining legal protections. For entrepreneurs seeking investment, we emphasize structures that enhance company valuation. For established enterprises, we focus on frameworks that provide reporting consistency."
    },
    {
      title: "Open Source Compliance in Commercial Agreements",
      description: "Commercial agreements involving software must carefully address open source components and their corresponding license obligations. Our open source compliance service includes comprehensive inventory assessment, obligation mapping, and integration guidance for commercial deployments. This flat-fee service helps prevent costly compliance issues while maintaining the benefits of open source resources."
    },
    {
      title: "Transaction Negotiation Strategies",
      description: "Effective negotiation strategies balance leverage utilization with relationship preservation. Our transaction preparation service provides comprehensive assessment of negotiation positions, prioritization frameworks for deal terms, and fallback positions that protect core interests. For all personas, we emphasize approaches that secure favorable terms without compromising long-term partnership potential."
    },
    {
      title: "Post-Transaction Relationship Management",
      description: "The period immediately following transaction completion is critical to long-term success. Our post-transaction support subscription includes implementation monitoring, compliance verification, and relationship management protocols. This service ensures that agreements translate into successful operational relationships that deliver anticipated value for all parties."
    }
  ],

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
      title: "Digital Asset & Emerging Technology",
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
  phoneNumber: "(555) 555-DEAL",
  
  technicalInnovation: {
    title: "Technical Innovation in Deal Structures",
    description: "Our approach to licensing and transactions employs advanced deal engineering techniques and leverages data analytics to create optimal agreements for our clients.",
    leftContent: [
      {
        title: "Deal Analytics Engine",
        description: "We employ proprietary data analytics to benchmark key terms, identify leverage points, and optimize deal structures based on market conditions and precedent transactions."
      },
      {
        title: "Advanced Contract Architecture",
        description: "Our transaction team builds sophisticated agreement structures that protect intellectual property while enabling strategic deployment across diverse business models and territories."
      },
      {
        title: "Value Capture Frameworks",
        description: "We design innovative royalty structures, milestone payments, and value sharing mechanisms that align incentives and maximize returns from licensed intellectual property."
      }
    ],
    rightContent: [
      {
        icon: <FileCheck className="h-8 w-8" />,
        label: "Smart Contract Integration",
        color: "bg-green-600"
      },
      {
        icon: <BarChart2 className="h-8 w-8" />,
        label: "Deal Analytics",
        color: "bg-blue-500"
      },
      {
        icon: <Network className="h-8 w-8" />,
        label: "Cross-Border Frameworks",
        color: "bg-purple-600"
      },
      {
        icon: <Briefcase className="h-8 w-8" />,
        label: "Value-Based Structuring",
        color: "bg-red-500"
      }
    ]
  }
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
      technicalInnovation={licensingTransactionsData.technicalInnovation}
    />
  );
};

export default LicensingTransactions; 