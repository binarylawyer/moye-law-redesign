import React from 'react';
// Lucide icons might need updating/replacing if not used by ServiceTemplate features
// import { FileText, Lightbulb, Scale, Globe } from 'lucide-react'; 
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types

// Rename data structure and adjust title/content for Strategy focus
const ipConsultingStrategyData: Partial<ServiceData> = {
  title: "IP Consulting & Strategy", // Updated Title
  description: "Strategic intellectual property guidance to maximize asset value and align with business objectives.", // Updated Description
  
  // Update features if needed to reflect strategy focus
  features: [
    {
      icon: 'FileText', // Keep icons as placeholders or update if needed
      title: "IP Audit & Portfolio Strategy", // Updated feature title
      description: "Comprehensive evaluation and strategic planning for managing IP assets effectively."
    },
    {
      icon: 'Lightbulb',
      title: "IP Commercialization Strategy", // Updated feature title
      description: "Developing pathways for monetization, including licensing and strategic partnerships."
    },
    {
      icon: 'Scale',
      title: "IP Due Diligence & Valuation", // Updated feature title
      description: "Expert analysis of IP value and risk assessment for transactions or investments."
    },
    {
      icon: 'Globe',
      title: "Global IP Strategy & Protection", // Updated feature title
      description: "Formulating international strategies to secure and defend intellectual property across key markets."
    }
  ], 

  // Keep process steps or adjust if strategy process differs
  process: {
    title: "Our Strategic Consulting Process", // Updated process title
    steps: [
      // Steps seem generally applicable, keeping them
      { title: "Discovery & Assessment", description: "We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape." },
      { title: "Strategy Formulation", description: "Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs, focusing on protection, monetization, and competitive positioning." }, // Slightly rephrased
      { title: "Implementation Roadmap", description: "We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements, prioritizing actions based on impact." }, // Slightly rephrased
      { title: "Execution & Advisory", description: "We provide ongoing strategic advice during implementation, coordinating with counsel and stakeholders." }, // Slightly rephrased
      { title: "Performance Review & Optimization", description: "We conduct regular reviews of your IP strategy, measuring results against objectives and recommending adjustments." } // Slightly rephrased
    ]
  },

  // Update related services paths based on new naming convention
  relatedServices: [
    {
      title: "Licensing & Transactions",
      path: "/services/licensing-transactions", // Updated path
      description: "Structuring frameworks and negotiating deals for monetizing intellectual property."
    },
    {
      title: "Digital Asset & Tech Protection",
      path: "/services/digital-asset-tech-protection", // Updated path
      description: "Protecting digital innovations, data, and technology assets."
    },
    {
      title: "Art & Entertainment Law",
      path: "/services/art-entertainment-law", // Updated path
      description: "Specialized IP strategies for creative works and entertainment properties."
    }
  ],

  // Update other fields if needed
  featuredContent: { 
      title: "Strategic IP for Business Growth", // Updated title
      content: [
            "Intellectual property represents critical value, yet it often remains underleveraged strategically.",
            "Our IP Consulting & Strategy practice helps clients identify, protect, and deploy IP to create competitive advantages and drive revenue.",
            "We develop bespoke IP strategies aligned with broader business objectives for companies of all sizes."
          ],
      callToAction: "Develop Your IP Strategy", 
      imageSrc: "/images/services/ip-consulting-workspace.jpg",
      imageAlt: "Creative professional workspace with intellectual property visualization"
  },
  considerations: [], // Add relevant Q&As if possible
  ctaTitle: "Elevate Your IP Strategy", // Updated CTA title
  ctaDescription: "Contact us today to discuss how strategic IP consulting can benefit your business.", 
  ctaButtonText: "Schedule Strategy Session", // Updated button text
  phoneNumber: "(555) 555-IPST" // Updated placeholder phone
};

// Rename component
const IPConsultingStrategy: React.FC = () => {

  return (
    <ServiceTemplate 
      serviceName={ipConsultingStrategyData.title!} 
      serviceId="ip-consulting-strategy" // Updated serviceId
      description={ipConsultingStrategyData.description!}
      featuredContent={ipConsultingStrategyData.featuredContent!}
      features={ipConsultingStrategyData.features as ServiceFeature[]}
      considerations={ipConsultingStrategyData.considerations!}
      process={ipConsultingStrategyData.process as Process}
      relatedServices={ipConsultingStrategyData.relatedServices as RelatedService[]}
      ctaTitle={ipConsultingStrategyData.ctaTitle!}
      ctaDescription={ipConsultingStrategyData.ctaDescription!}
      ctaButtonText={ipConsultingStrategyData.ctaButtonText!}
      phoneNumber={ipConsultingStrategyData.phoneNumber}
    />
  );
};

// Update export name
export default IPConsultingStrategy; 