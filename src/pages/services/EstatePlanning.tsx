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
  
  // Placeholder considerations - these should be specific Q&As
  considerations: [
    { question: "When should I start estate planning?", answer: "It's generally advisable to start planning as soon as you have assets or dependents, regardless of age. Major life events like marriage, children, or starting a business are also key times to plan or update." },
    { question: "What's the difference between a will and a trust?", answer: "A will outlines asset distribution after death and goes through probate court. A trust can manage assets during your lifetime and after death, often avoiding probate." },
    { question: "How does AI help in estate planning?", answer: "AI assists with accuracy in document review, identifies potential planning opportunities based on data, and helps streamline the process, allowing us more time for personalized counsel." }
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