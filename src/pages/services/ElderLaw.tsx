import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types

// Define the data structure matching ServiceData using content from the planning document
const elderLawData: Partial<ServiceData> = {
  title: "Elder Law", 
  description: "Guiding your family through healthcare planning, asset protection, and caregiving decisions with empathy and expertise.", // Subheader from doc
  
  featuredContent: { 
      title: "Caring for Seniors in New York and Westchester", // Adapted from doc headline
      content: [
          "Making decisions for an aging parent or loved one is never easy. You're balancing their healthcare, finances, and well-being all at once.",
          "At Moye Law, we stand by your family through this journey. As a family-run firm, we treat your family as our own – providing clear, patient legal guidance on elder law matters so you never feel alone.",
          "Our innovative approach means we stay on top of changing elder care laws and use modern tools to keep documents organized and accessible, ensuring you're always one step ahead."
      ],
      callToAction: "Find compassionate guidance",
      imageSrc: "/images/services/elder-law-consultation.jpg",
      imageAlt: "Professional senior care consultation with multigenerational family"
  },

  // Define features based on scope of services from doc
  features: [
    {
      title: "Medicaid & Long-Term Care Planning",
      description: "Strategies to qualify for Medicaid, protect assets from nursing home costs, and ensure quality care.",
      icon: "ShieldCheck" // Example icon
    },
    {
      title: "Estate Planning for Seniors",
      description: "Wills, powers of attorney, and health care directives to make sure your loved one's wishes are honored.",
      icon: "DocumentText" 
    },
    {
      title: "Guardianship & Capacity Planning",
      description: "Assistance with guardianship proceedings or proactive planning (like trusts) to manage affairs if incapacity strikes.",
      icon: "Users"
    },
    {
      title: "Elder Abuse Protection",
      description: "Legal remedies and counsel if you suspect financial exploitation or elder abuse.",
       icon: "Exclamation"
    },
     {
      title: "Coordinating Care Teams",
      description: "We work closely with your financial advisors, care managers, and family members to create a united plan.",
       icon: "UserGroup"
    }
  ],
  
  // Placeholder considerations
  considerations: [
    { question: "What is the difference between Medicare and Medicaid?", answer: "Medicare is federal health insurance primarily for those 65+, while Medicaid is a state/federal program providing health coverage for low-income individuals, often used for long-term care costs." },
    { question: "How can we protect assets from nursing home costs?", answer: "Strategies often involve specific types of trusts (like Medicaid Asset Protection Trusts), strategic gifting, and careful timing based on look-back periods. Planning early is key." },
    { question: "What is a health care proxy or directive?", answer: "These legal documents allow you to appoint someone to make healthcare decisions for you if you become unable to do so yourself, and can outline your wishes regarding medical treatment." }
  ],

  // Define process steps
  process: {
    title: "Our Elder Law Approach",
    steps: [
      { title: "Family Consultation", description: "We listen compassionately to understand your family's unique situation, concerns, and goals for your loved one." },
      { title: "Needs Assessment", description: "We evaluate healthcare needs, financial resources, and existing legal documents to identify planning priorities." },
      { title: "Solution Strategy", description: "We develop a tailored strategy addressing Medicaid eligibility, asset protection, and care coordination." },
      { title: "Document Preparation", description: "We draft necessary legal documents like trusts, powers of attorney, and healthcare directives with precision." },
      { title: "Application & Support", description: "We guide you through Medicaid applications or other processes, coordinating with involved parties." }
    ]
  },

  // Define relatedServices
  relatedServices: [
    {
      title: "Estate Planning",
      path: "/services/estate-planning", 
      description: "Ensuring wills, trusts, and overall estate plans align with elder care needs."
    },
    {
      title: "Probate Administration",
      path: "/services/probate-administration", 
      description: "Handling estate matters after a loved one passes, often linked to elder law planning."
    },
    {
      title: "Real Estate Services", // Assuming a Real Estate service page might exist
      path: "/services/real-estate", 
      description: "Assistance with property transfers or sales related to elder care planning."
    }
  ],
  
  // Define CTA content
  ctaTitle: "Navigate Elder Care with Confidence",
  ctaDescription: "Making decisions for an aging loved one is challenging. Let our family help yours. Contact us for compassionate guidance and expert legal solutions.",
  ctaButtonText: "Request an Elder Law Consultation", 
  phoneNumber: "(555) 555-ELDR" // Placeholder
};


const ElderLaw: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={elderLawData.title!}
      serviceId="elder-law" 
      description={elderLawData.description!}
      featuredContent={elderLawData.featuredContent!}
      features={elderLawData.features as ServiceFeature[]}
      considerations={elderLawData.considerations!}
      process={elderLawData.process as Process}
      relatedServices={elderLawData.relatedServices as RelatedService[]}
      ctaTitle={elderLawData.ctaTitle!}
      ctaDescription={elderLawData.ctaDescription!}
      ctaButtonText={elderLawData.ctaButtonText!}
      phoneNumber={elderLawData.phoneNumber}
    />
  );
};

export default ElderLaw; 