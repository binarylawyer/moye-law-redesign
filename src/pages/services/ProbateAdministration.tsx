import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types

// Define the data structure matching ServiceData using content from the planning document
const probateData: Partial<ServiceData> = {
  title: "Probate & Estate Administration", 
  description: "Guiding your family through the probate process with care, efficiency, and meticulous attention to detail.", // Subheader from doc
  
  featuredContent: { 
      title: "Settling Estates Smoothly in NY & Westchester", // Adapted from doc headline
      content: [
          "Losing a loved one is hard enough – handling the legal estate process shouldn't add more stress. We understand you need a steady hand to navigate probate while you focus on your family.",
          "Moye Law helps executors and families through every step of estate administration in New York, explaining each step in plain English so you're never left in the dark.",
          "Our firm leverages modern tools to streamline probate, using secure online document sharing and software to track deadlines and filings, aiming for quicker resolution and less hassle for you."
      ],
      callToAction: "Ease the burden of probate", // Placeholder CTA
      imageSrc: "/images/services/probate-featured.jpg", // Placeholder image
      imageAlt: "Hands signing legal documents for estate administration" // Placeholder alt text
  },

  // Define features based on scope of services from doc
  features: [
    {
      title: "Probate Filing & Court Representation",
      description: "Preparing and filing all required documents in Surrogate's Court and representing you in hearings.",
      icon: "Scale" // Example icon
    },
    {
      title: "Executor Guidance & Support",
      description: "Assisting executors with inventorying assets, paying debts/taxes, and fulfilling their fiduciary duties properly.",
      icon: "UserCheck" 
    },
    {
      title: "Estate Asset Management & Transfer",
      description: "Helping manage or transfer complex assets like businesses, real estate, and investments during administration.",
      icon: "OfficeBuilding"
    },
    {
      title: "Post-Probate Transitions",
      description: "Facilitating asset transfer to beneficiaries and advising on trust funding or continuing administration.",
       icon: "ClipboardCheck"
    },
     {
      title: "Multi-State & Ancillary Probate",
      description: "Coordinating the efficient resolution of estates with properties or interests in other states (including Virginia).",
       icon: "GlobeAlt"
    }
  ],
  
  // Placeholder considerations
  considerations: [
    { question: "What is probate and is it always required?", answer: "Probate is the court-supervised process of validating a will and distributing assets. It's often required if assets are solely in the deceased's name, but assets in trusts or with beneficiary designations may avoid it." },
    { question: "How long does probate take in New York?", answer: "The timeline varies greatly depending on estate complexity, court schedules, and potential disputes. Simple estates might take 6-9 months, while complex ones can take over a year." },
    { question: "What are the duties of an executor?", answer: "An executor gathers assets, pays debts and taxes, manages estate property, communicates with beneficiaries, and distributes remaining assets according to the will, all under court oversight." }
  ],

  // Define process steps
  process: {
    title: "Our Probate Administration Process",
    steps: [
      { title: "Initial Consultation", description: "We meet with the executor/family to review the will, understand the estate, and outline the probate steps." },
      { title: "Court Filing", description: "We prepare and file the necessary petition and supporting documents with the appropriate Surrogate's Court." },
      { title: "Asset Management", description: "We assist the executor in identifying, valuing, and managing estate assets throughout the process." },
      { title: "Debt & Tax Resolution", description: "We guide the executor in notifying creditors, paying valid debts, and filing final tax returns." },
      { title: "Final Distribution & Closing", description: "We oversee the final accounting, distribution of assets to beneficiaries, and formal closing of the estate." }
    ]
  },

  // Define relatedServices
  relatedServices: [
    {
      title: "Estate Planning",
      path: "/services/estate-planning", 
      description: "Proactive planning to potentially simplify or avoid the probate process for your own estate."
    },
    {
      title: "Elder Law",
      path: "/services/elder-law", 
      description: "Addressing issues that may arise during probate related to prior long-term care or Medicaid planning."
    },
    {
      title: "Real Estate Services",
      path: "/services/real-estate", 
      description: "Handling the sale or transfer of real property held within the estate."
    }
  ],
  
  // Define CTA content
  ctaTitle: "Navigate Probate with Clarity and Care",
  ctaDescription: "Our goal is to shoulder the legal burdens of probate so you can focus on healing. We handle the details with precision, keeping you informed and supported.",
  ctaButtonText: "Discuss Estate Administration Needs", 
  phoneNumber: "(555) 555-PRBT" // Placeholder
};


const ProbateAdministration: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={probateData.title!}
      serviceId="probate-administration" 
      description={probateData.description!}
      featuredContent={probateData.featuredContent!}
      features={probateData.features as ServiceFeature[]}
      considerations={probateData.considerations!}
      process={probateData.process as Process}
      relatedServices={probateData.relatedServices as RelatedService[]}
      ctaTitle={probateData.ctaTitle!}
      ctaDescription={probateData.ctaDescription!}
      ctaButtonText={probateData.ctaButtonText!}
      phoneNumber={probateData.phoneNumber}
    />
  );
};

export default ProbateAdministration; 