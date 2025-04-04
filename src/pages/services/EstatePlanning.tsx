import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types

// Define the data structure matching ServiceData using content from the planning document
const estatePlanningData: Partial<ServiceData> = {
  title: "Estate Planning", // Simplified title for the page component name
  description: "Comprehensive wills & trusts with a modern, AI-enhanced approach to safeguard your legacy.", // Subheader from doc
  
  featuredContent: { 
      title: "Protect Your Family's Future", // Adapted from doc headline
      content: [
          "Whether you're building a business, growing your family, or planning for retirement, a solid estate plan is essential to protect what you've earned and the people you love.",
          "Moye Law offers high-net-worth families and entrepreneurs sophisticated estate planning solutions – from wills and trusts to advanced tax strategies – all delivered with the personal touch of a family firm.",
          "Our firm employs cutting-edge tools to enhance our estate planning process. We use AI-assisted document drafting and review, ensuring exceptional accuracy and efficiency.",
          "This technology, combined with our attorneys' meticulous oversight, ensures your plan is airtight and up-to-date."
      ],
      callToAction: "Secure your legacy today", // Placeholder or refined CTA
      imageSrc: "/images/services/family reviewing trust with attorney.jpg", // Updated to use the actual image
      imageAlt: "Family reviewing trust documents with attorney in elegant office setting" // More descriptive alt text
  },

  // Define features based on scope of services from doc
  features: [
    {
      title: "Wills & Trusts",
      description: "Custom drafting to ensure your assets pass to heirs according to your wishes, minimizing taxes and hassles.",
      icon: "DocumentText" // Example icon
    },
    {
      title: "High-Net-Worth Strategies",
      description: "Advanced techniques like GRATs, FLPs, and dynasty trusts to preserve wealth over generations.",
      icon: "TrendingUp" 
    },
    {
      title: "Business Succession Planning",
      description: "Seamless transition strategies for family businesses or startups – protecting equity and leadership continuity.",
      icon: "Briefcase"
    },
    {
      title: "Digital Asset & IP Planning",
      description: "Ensuring cryptocurrencies, online accounts, and intellectual property are secured for your heirs.",
       icon: "CubeTransparent"
    },
     {
      title: "Charitable & Legacy Planning",
      description: "Structuring philanthropic gifts or foundations as part of your legacy.",
       icon: "Heart"
    },
     {
      title: "Multi-State Coordination",
      description: "Licensed in New York and Virginia, we coordinate complex multi-state estate plans seamlessly.",
       icon: "GlobeAlt"
    }
  ],
  
  // Enhanced considerations with correct property names and persona-focused content
  considerations: [
    {
      title: "When To Begin Estate Planning",
      description: "Estate planning should begin the moment you acquire significant assets or have dependents, regardless of age. For tech entrepreneurs, this means addressing equity considerations early. For family stewards, planning should coincide with key life milestones. For wealth preservationists, comprehensive planning should be reviewed annually as tax laws evolve. Our flat-fee model makes it accessible to begin this process without concern for mounting hourly costs."
    },
    {
      title: "Wills vs. Trusts in Modern Planning",
      description: "While a will designates asset distribution through probate, trusts offer additional privacy, control, and probate avoidance. For digital asset holders, specialized trusts can address cryptocurrency and online accounts. For family-focused clients, trusts provide enhanced protection for children and vulnerable beneficiaries. For legacy-minded clients, dynasty trusts and other sophisticated vehicles preserve wealth across generations. Our flat-fee service includes both will and trust options at transparent pricing."
    },
    {
      title: "Technology-Enhanced Documentation",
      description: "Our firm employs advanced technology to draft and analyze estate planning documents with exceptional precision while maintaining the human oversight essential for personalized planning. This approach allows us to offer premium-quality documentation at flat-fee rates that traditional firms cannot match. Digital document management also enables secure, immediate access to your estate plans when needed, ensuring your representatives are never without critical information."
    },
    {
      title: "Digital Asset Protection Strategies",
      description: "Digital assets require specialized planning approaches beyond traditional estate planning. We incorporate provisions for cryptocurrency wallets, NFTs, domain names, social media accounts, and intellectual property. Our subscription service includes regular updates to your digital asset inventory and access protocols, ensuring these valuable assets remain protected as technologies evolve."
    },
    {
      title: "Family Business Succession Planning",
      description: "Transitioning family businesses requires balancing operational continuity with equitable distribution among heirs. Our planning process addresses leadership transition, equity distribution, buy-sell provisions, and tax-efficient transfer strategies. The flat-fee approach includes all necessary documentation and coordination with business counsel to ensure seamless implementation."
    },
    {
      title: "Multi-Jurisdictional Estate Considerations",
      description: "For clients with assets in multiple states or countries, coordination between jurisdictions is essential. Our estate planning packages include property assignment strategies that minimize multi-state probate and navigate competing tax regimes. The subscription model provides ongoing monitoring of changing state laws that might affect your plan's effectiveness."
    },
    {
      title: "Charitable Planning & Legacy Design",
      description: "Strategic philanthropy can both reduce tax burdens and create meaningful legacy impact. We structure charitable vehicles including foundations, donor-advised funds, and charitable trusts as part of comprehensive estate plans. Our flat-fee charitable planning service includes all documentation and initial registration requirements for these entities."
    },
    {
      title: "Healthcare Directives & Medical Planning",
      description: "Comprehensive estate planning addresses not only asset distribution but healthcare decision-making. Our packages include advanced healthcare directives, HIPAA authorizations, and medical powers of attorney customized to your specific wishes. These critical documents are provided within our transparent flat-fee structure, ensuring complete protection."
    },
    {
      title: "Annual Plan Review & Updates",
      description: "Estate plans require regular review as laws change and life circumstances evolve. Our subscription service includes annual reviews, unlimited minor updates, and priority scheduling for major revisions. This proactive maintenance ensures your plan remains current without unpredictable hourly billing concerns."
    }
  ],

  // Define process steps (can be adapted from other services or created specific to EP)
  process: {
    title: "Our Estate Planning Process",
    steps: [
      { title: "Goal Discovery", description: "We start by deeply understanding your family dynamics, financial situation, and legacy aspirations." },
      { title: "Strategy Design", description: "We design a customized estate plan incorporating wills, trusts, and tax strategies tailored to your unique goals." },
      { title: "Document Drafting", description: "Our attorneys draft precise legal documents, enhanced by AI review for maximum accuracy." },
      { title: "Implementation & Funding", description: "We guide you through signing documents and transferring assets to ensure your plan is properly funded." },
      { title: "Regular Review", description: "We establish a schedule for reviewing and updating your plan as laws and your circumstances change." }
    ]
  },

  // Define relatedServices (adjust paths/content as needed)
  relatedServices: [
    {
      title: "Elder Law",
      path: "/services/elder-law", // Assuming this path will exist
      description: "Guidance on long-term care, Medicaid planning, and healthcare directives for seniors."
    },
    {
      title: "Probate Administration",
      path: "/services/probate-administration", // Assuming this path will exist
      description: "Assisting families with the court process of settling an estate after a loved one passes."
    },
    {
      title: "IP Consulting & Strategy", // Keep as per Option 1 list
      path: "/services/ip-consulting-strategy", // Assuming new path
      description: "Protecting and managing intellectual property assets within your overall plan."
    }
  ],
  
  // Define CTA content
  ctaTitle: "Secure Your Family's Future", // Placeholder
  ctaDescription: "Estate planning can feel daunting, but with Moye Law, you gain peace of mind knowing your legacy is protected. Let's create your plan.", // Adapted from doc
  ctaButtonText: "Schedule Your Estate Planning Consultation", // Placeholder
  phoneNumber: "(555) 555-PLAN" // Placeholder
};


const EstatePlanning: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={estatePlanningData.title!} 
      serviceId="estate-planning" // Use slug for ID
      description={estatePlanningData.description!}
      featuredContent={estatePlanningData.featuredContent!}
      features={estatePlanningData.features as ServiceFeature[]}
      considerations={estatePlanningData.considerations!}
      process={estatePlanningData.process as Process}
      relatedServices={estatePlanningData.relatedServices as RelatedService[]}
      ctaTitle={estatePlanningData.ctaTitle!}
      ctaDescription={estatePlanningData.ctaDescription!}
      ctaButtonText={estatePlanningData.ctaButtonText!}
      phoneNumber={estatePlanningData.phoneNumber}
    />
  );
};

export default EstatePlanning; 