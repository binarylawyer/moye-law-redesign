import React from 'react';
import { FileText, Lightbulb, Scale, Globe } from 'lucide-react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService } from '@/types/services';

const ipConsultingData: Partial<ServiceData> = {
  title: "IP Consulting Services",
  description: "Strategic intellectual property guidance for businesses seeking to maximize value and competitive advantage.",
  
  features: [
    {
      icon: 'FileText',
      title: "IP Audit & Portfolio Management",
      description: "Comprehensive evaluation and strategic management of intellectual property assets."
    },
    {
      icon: 'Lightbulb',
      title: "IP Strategy Development",
      description: "Forward-looking IP strategies aligned with business objectives and market opportunities."
    },
    {
      icon: 'Scale',
      title: "IP Valuation & Monetization",
      description: "Expert analysis of IP value and development of strategic monetization pathways."
    },
    {
      icon: 'Globe',
      title: "Global IP Protection",
      description: "International strategies to secure and defend intellectual property across borders."
    }
  ],

  process: {
    title: "Our Consulting Process",
    steps: [
      {
        title: "Discovery & Assessment",
        description: "We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape. This phase includes identifying registered and unregistered IP, assessing protection status, and uncovering untapped opportunities."
      },
      {
        title: "Strategy Development",
        description: "Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs and goals. This includes recommendations for protection measures, monetization opportunities, and competitive positioning."
      },
      {
        title: "Implementation Planning",
        description: "We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements. This includes prioritization of actions based on business impact and resource constraints."
      },
      {
        title: "Execution Support",
        description: "We provide ongoing support during the implementation of your IP strategy, including coordination with specialized counsel for registrations, documentation development, and team training."
      },
      {
        title: "Review & Optimization",
        description: "We conduct regular reviews of your IP strategy implementation, measuring results against objectives and recommending adjustments as business needs and market conditions evolve."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Licensing",
      path: "/services/ip-licensing",
      description: "Structured frameworks for monetizing and leveraging intellectual property through strategic licensing arrangements."
    },
    {
      title: "Intellectual Property",
      path: "/services/intellectual-property",
      description: "Comprehensive legal services for identifying, protecting, and enforcing intellectual property rights."
    },
    {
      title: "Emerging Tech",
      path: "/services/emerging-tech",
      description: "Legal frameworks for businesses leveraging emerging technologies like blockchain, AI, and IoT."
    }
  ],

  featuredContent: { 
      title: "Unlocking IP Value", 
      content: [
            "Intellectual property represents one of the most valuable assets for modern businesses, yet it often remains underdeveloped and underutilized.",
            "Our IP Consulting practice helps clients identify, protect, and leverage intellectual property to create competitive advantages and generate revenue.",
            "We work with businesses of all sizes, from startups to established enterprises, to develop and implement intellectual property strategies that support broader business objectives."
          ],
      callToAction: "Learn More", 
      imageSrc: "/images/placeholder.jpg", 
      imageAlt: "Placeholder" 
  },
  considerations: [],
  ctaTitle: "Maximize Your IP Value",
  ctaDescription: "Contact us today to discuss your IP consulting needs.",
  ctaButtonText: "Schedule Consultation",
  phoneNumber: "(555) 555-IPCS"
};

const IPConsulting: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={ipConsultingData.title!}
      serviceId="ip-consulting"
      description={ipConsultingData.description!}
      featuredContent={ipConsultingData.featuredContent!}
      features={ipConsultingData.features as ServiceFeature[]}
      considerations={ipConsultingData.considerations!}
      process={ipConsultingData.process as Process}
      relatedServices={ipConsultingData.relatedServices as RelatedService[]}
      ctaTitle={ipConsultingData.ctaTitle!}
      ctaDescription={ipConsultingData.ctaDescription!}
      ctaButtonText={ipConsultingData.ctaButtonText!}
      phoneNumber={ipConsultingData.phoneNumber}
    >
    </ServiceTemplate>
  );
};

export default IPConsulting; 