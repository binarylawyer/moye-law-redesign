import React from 'react';
// Lucide icons might need updating/replacing if not used by ServiceTemplate features
// import { FileText, Lightbulb, Scale, Globe } from 'lucide-react'; 
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types

// Enhanced data with persona-focused content
const ipConsultingStrategyData: Partial<ServiceData> = {
  title: "IP Consulting & Strategy", 
  description: "Strategic intellectual property guidance for innovators, family enterprises, and wealth preservation—where vision meets protection.", 
  
  features: [
    {
      icon: 'FileText',
      title: "IP Portfolio Architecture",
      description: "Comprehensive evaluation and strategic design of intellectual property frameworks that align with both immediate innovation goals and long-term legacy planning."
    },
    {
      icon: 'Lightbulb',
      title: "Strategic IP Monetization",
      description: "Crafting sophisticated pathways for intellectual property value extraction through licensing frameworks, strategic partnerships, and market positioning."
    },
    {
      icon: 'Scale',
      title: "IP Valuation & Transaction Intelligence",
      description: "Precision analysis of intellectual property value across contexts, with discreet assessment of acquisition opportunities and risk profiles."
    },
    {
      icon: 'Globe',
      title: "Global IP Portfolio Governance",
      description: "Orchestrating cohesive international strategies to secure intellectual assets across jurisdictions while navigating cultural and regulatory landscapes."
    }
  ], 

  process: {
    title: "Our Strategic Consulting Process", 
    steps: [
      { title: "Discovery & Contextual Assessment", description: "Beginning with a nuanced evaluation of your intellectual property landscape within the context of your industry position, growth trajectory, and long-term vision." },
      { title: "Strategic Framework Development", description: "Architecting a comprehensive intellectual property strategy that balances protection, monetization potential, and competitive positioning while considering both market evolution and succession planning." },
      { title: "Implementation Architecture", description: "Creating a detailed execution framework with clear milestones, responsibility allocation, and resource requirements, prioritized by strategic importance and time sensitivity." },
      { title: "Strategic Advisory Partnership", description: "Providing ongoing counsel during implementation, serving as the orchestrating intelligence between legal counsel, technical teams, and executive stakeholders." },
      { title: "Continuous Refinement", description: "Conducting periodic strategic reviews with sophisticated analysis of outcomes against objectives, ensuring the strategy evolves with emerging technologies and market shifts." }
    ]
  },

  relatedServices: [
    {
      title: "Licensing & Strategic Transactions",
      path: "/services/licensing-transactions",
      description: "Crafting sophisticated frameworks for intellectual property monetization while preserving control and future optionality."
    },
    {
      title: "Digital Asset & Emerging Technology",
      path: "/services/digital-asset-tech-protection",
      description: "Developing protection mechanisms for innovations at the forefront of digital transformation and technological evolution."
    },
    {
      title: "Art & Entertainment Law",
      path: "/services/art-entertainment-law",
      description: "Creating bespoke intellectual property strategies for creative works that honor artistic integrity while establishing enduring value."
    }
  ],

  featuredContent: { 
      title: "Intellectual Property as Strategic Architecture",
      content: [
            "In a landscape where innovation increasingly defines enterprise value, intellectual property transcends legal designation to become the structural framework of organizational worth. Our approach recognizes IP not merely as assets to protect, but as strategic instruments to deploy with precision.",
            "The IP Consulting & Strategy practice serves visionaries across the spectrum—from technology pioneers redefining industries to family enterprises preserving multi-generational innovation legacies. We understand that behind each patent, trademark, or trade secret lies both market opportunity and heritage significance.",
            "Through decades navigating the evolving IP landscape, we've developed methodologies that balance aggressive protection with strategic deployment. This measured approach allows our clients to extract immediate value while preserving long-term optionality in markets yet to emerge.",
            "Whether you're architecting an IP portfolio to secure investment, transitioning intellectual assets to the next generation, or positioning for acquisition, we provide counsel that respects both the technical complexity and the human dimension of innovation protection."
          ],
      callToAction: "Architect Your IP Strategy", 
      imageSrc: "/videos/4 men staring at computer screen.mp4",
      imageAlt: "Innovation team analyzing intellectual property strategy and digital assets"
  },
  
  considerations: [
    {
      title: "AI-Generated Innovation & IP Rights",
      description: "Navigating the complex intersection of artificial intelligence and intellectual property creation. We help establish clear frameworks for ownership, attribution, and protection of AI-assisted innovations while developing strategies that anticipate regulatory evolution. Our approach balances maximizing protection with maintaining the flexibility required in this rapidly developing space."
    },
    {
      title: "IP Portfolio Succession Planning",
      description: "Architecting robust transitions of intellectual property across generations. We develop governance frameworks that preserve innovation value while ensuring appropriate stewardship of technical knowledge and market positioning. Our solutions address both legal mechanics and the nuanced considerations of maintaining innovation culture through succession events."
    },
    {
      title: "Strategic IP Acquisition & Integration",
      description: "Orchestrating intellectual property acquisitions that enhance portfolio coherence and market position. We conduct sophisticated due diligence that evaluates not only legal standing but strategic fit and cultural alignment. Our integration methodologies ensure smooth absorption of acquired IP into existing frameworks without disruption to innovation momentum."
    },
    {
      title: "Competitive Intelligence Through IP Analysis",
      description: "Deriving strategic insights from competitors' intellectual property activities. We transform technical patent information into actionable business intelligence, identifying emerging threats, potential partnerships, and market trajectory indicators. This intelligence informs not only defensive positioning but proactive innovation direction."
    },
    {
      title: "Global IP Harmonization Strategy",
      description: "Creating unified intellectual property protection that transcends jurisdictional boundaries. We architect global strategies that maintain consistent protection while adapting to local nuances in law, business practice, and enforcement realities. Our approach balances comprehensive coverage with resource efficiency."
    },
    {
      title: "Licensing Architecture & Governance",
      description: "Designing sophisticated licensing frameworks that balance revenue generation with strategic control. We develop structures that extract appropriate value while maintaining future optionality and preventing market cannibalization. Our governance models ensure ongoing alignment between licensing activities and evolving business objectives."
    },
    {
      title: "IP Valuation Beyond Metrics",
      description: "Developing nuanced understanding of intellectual property value that transcends standard valuation methodologies. We incorporate strategic positioning, optionality value, and defensive worth alongside traditional metrics. This comprehensive approach ensures decisions reflect true intellectual asset value rather than merely quantifiable measures."
    },
    {
      title: "Open Innovation & Collaborative IP",
      description: "Crafting frameworks for innovation partnerships that balance knowledge sharing with appropriate protection. We design contribution and ownership structures that encourage collaboration while maintaining clear rights allocation. Our models adapt to varied partnership contexts from research institutions to joint ventures."
    },
    {
      title: "IP Risk Mitigation Architecture",
      description: "Building comprehensive risk management systems for intellectual property assets and activities. We develop protocols for monitoring, assessing, and addressing infringement threats, validity challenges, and regulatory shifts. Our frameworks incorporate both preventative measures and response strategies calibrated to risk levels."
    }
  ],
  
  ctaTitle: "Elevate Your Intellectual Property Strategy",
  ctaDescription: "Engage with advisors who understand that effective IP strategy balances technical protection, market positioning, and legacy preservation. Our approach harmonizes innovation protection with your broader vision.",
  ctaButtonText: "Arrange a Confidential Consultation",
  phoneNumber: "(555) 555-IPST"
};

const IPConsultingStrategy: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={ipConsultingStrategyData.title!} 
      serviceId="ip-consulting-strategy"
      description={ipConsultingStrategyData.description!}
      featuredContent={ipConsultingStrategyData.featuredContent!}
      features={ipConsultingStrategyData.features as ServiceFeature[]}
      considerations={ipConsultingStrategyData.considerations as ServiceConsideration[]}
      process={ipConsultingStrategyData.process as Process}
      relatedServices={ipConsultingStrategyData.relatedServices as RelatedService[]}
      ctaTitle={ipConsultingStrategyData.ctaTitle!}
      ctaDescription={ipConsultingStrategyData.ctaDescription!}
      ctaButtonText={ipConsultingStrategyData.ctaButtonText!}
      phoneNumber={ipConsultingStrategyData.phoneNumber}
    />
  );
};

export default IPConsultingStrategy; 