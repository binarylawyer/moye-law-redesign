import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';
import { Cpu, Database, Lock, Zap, Code, ShieldCheck } from 'lucide-react';

const digitalAssetTechData: Partial<ServiceData> = {
  title: "Digital Asset & Emerging Technology",
  description: "Sophisticated legal frameworks that safeguard digital innovation while enabling strategic growth in an evolving technological landscape.",

  featuredContent: { 
      title: "Navigating the Frontier of Digital Value", 
      content: [
          "As technology continually redefines the nature of assets and innovation, the intersection of legal protection and technological advancement demands a nuanced approach that balances security with opportunity.",
          "Our practice combines technical fluency with legal precision to serve clients navigating complex digital landscapes—from established enterprises integrating AI to family offices securing digital wealth across generations. We understand that behind each innovation lies both immediate opportunity and long-term legacy implications.",
          "Through years at the forefront of technology law, we've developed frameworks that protect digital assets while enabling their strategic deployment. This balanced approach ensures protection without constraining the very innovation that creates value.",
          "Whether you're implementing AI systems that require ethical governance, preserving digital wealth for future generations, or navigating regulatory complexities of emerging technologies, we provide counsel that respects both technical sophistication and human context."
      ],
      callToAction: "Secure your digital future", 
      imageSrc: "/videos/dancing-robots.mp4",
      imageAlt: "Advanced robotics demonstrating the intersection of AI and choreographed movement in emerging technology"
  },

  features: [
    {
      title: "AI Governance & Ethical Implementation",
      description: "Sophisticated frameworks for artificial intelligence deployment that balance innovation with responsibility, addressing bias mitigation, transparency requirements, and liability considerations.",
      icon: "Chip"
    },
    {
      title: "Digital Asset Security Architecture",
      description: "Comprehensive protection systems for digital wealth including cryptocurrencies, tokenized assets, and digital collections, with emphasis on multi-generational security and access protocols.",
      icon: "ShieldCheck"
    },
    {
      title: "Technological Innovation Protection",
      description: "Strategic safeguarding of proprietary algorithms, software architectures, and data structures through sophisticated intellectual property frameworks and confidentiality systems.",
      icon: "Code"
    },
    {
      title: "Data Governance & Privacy Engineering",
      description: "Architecting privacy-centric data frameworks that ensure regulatory compliance while enabling strategic data utilization across global operations and partnerships.",
      icon: "LockClosed"
    }
  ],
  
  considerations: [
    {
      title: "AI Liability & Risk Distribution",
      description: "Structuring frameworks that appropriately allocate responsibility within AI implementation. We develop governance models that address questions of causation, transparency, and accountability in automated decision systems. Our approach balances innovation enablement with appropriate risk management across the AI development and deployment lifecycle."
    },
    {
      title: "Digital Asset Succession Planning",
      description: "Creating secure transitions for digital wealth and assets across generations. We design protocols that balance robust security with practical accessibility, ensuring digital assets remain protected yet available to designated successors. Our frameworks address both technical mechanisms and legal structures for seamless transition of digital property."
    },
    {
      title: "Regulatory Navigation for Emerging Technologies",
      description: "Developing strategic approaches to evolving regulatory landscapes. We create compliance architectures that adapt to regulatory evolution while maintaining operational continuity. Our methodologies anticipate directional shifts in governance, positioning clients to respond efficiently to emerging requirements while maintaining competitive advantage."
    },
    {
      title: "Cross-Border Data Architecture",
      description: "Designing global data frameworks that respect jurisdictional requirements while enabling unified operations. We create sophisticated data governance systems that navigate the complexities of international data transfer restrictions, localization requirements, and privacy regulations while supporting seamless business functions across borders."
    },
    {
      title: "Technology Implementation Due Diligence",
      description: "Conducting comprehensive risk assessment for significant technology adoption. We evaluate intellectual property, regulatory compliance, security vulnerabilities, and contractual implications before implementation. This thorough examination ensures technology integration proceeds with full awareness of potential issues and appropriate mitigation strategies."
    },
    {
      title: "AI Training Data Governance",
      description: "Establishing frameworks for the legitimate acquisition and use of AI training data. We develop protocols for data sourcing, licensing, anonymization, and usage limitation that respect intellectual property rights and privacy considerations. Our approach addresses both current requirements and anticipated regulatory developments in this evolving area."
    },
    {
      title: "Open Source Risk Management",
      description: "Creating governance systems for open source software integration that balance innovation with protection. We develop compliance protocols that address license obligations while preserving proprietary elements. Our frameworks include automated detection, obligation tracking, and strategic decision support for open source usage."
    },
    {
      title: "Digital Identity & Authentication Systems",
      description: "Architecting robust identity frameworks that balance security with usability. We design authentication protocols that protect digital assets while enabling appropriate access across organizational boundaries. Our approach incorporates emerging standards and technologies while maintaining resilience against evolving threats."
    },
    {
      title: "Technology Vendor Risk Management",
      description: "Developing comprehensive frameworks for managing third-party technology relationships. We create systems for vendor assessment, contractual protection, and ongoing monitoring that address security, reliability, and compliance considerations. Our approach ensures technology dependencies remain assets rather than vulnerabilities."
    }
  ],

  process: {
    title: "Our Technology Protection Process",
    steps: [
      {
        title: "Technical & Asset Assessment",
        description: "Conducting a comprehensive evaluation of your digital portfolio and technology ecosystem, identifying value concentrations, dependency relationships, and vulnerability surfaces requiring protection."
      },
      {
        title: "Risk Landscape Mapping",
        description: "Developing a detailed analysis of potential threat vectors, regulatory requirements, and liability exposures specific to your technological context and operational environment."
      },
      {
        title: "Protection Architecture Design",
        description: "Creating a sophisticated, multi-layered protection framework that addresses legal, technical, and operational dimensions while enabling continued innovation and strategic flexibility."
      },
      {
        title: "Implementation & Documentation Orchestration",
        description: "Guiding the execution of protection systems with meticulous attention to documentation, policy articulation, and procedural clarity to ensure defensibility and operational consistency."
      },
      {
        title: "Adaptive Governance & Evolution",
        description: "Establishing ongoing monitoring systems and review protocols that continuously refine protection frameworks in response to technological advancement and regulatory evolution."
      }
    ]
  },

  relatedServices: [
    {
      title: "IP Consulting & Strategy",
      path: "/services/ip-consulting-strategy",
      description: "Developing sophisticated intellectual property strategies for technological innovations and digital assets that balance protection with strategic deployment."
    },
    {
      title: "Licensing & Strategic Transactions",
      path: "/services/licensing-transactions",
      description: "Crafting nuanced agreement structures for technology licensing, data sharing, and digital asset transactions that preserve control while enabling collaboration."
    },
    {
      title: "Art & Entertainment Law",
      path: "/services/art-entertainment-law",
      description: "Creating protection frameworks for digital creative works that respect artistic vision while addressing the technological complexities of digital distribution and monetization."
    }
  ],

  ctaTitle: "Secure Your Technological Future",
  ctaDescription: "Engage with counsel that understands both the technical complexity and strategic implications of digital innovation. Our approach balances robust protection with the flexibility required for technological evolution.",
  ctaButtonText: "Arrange a Confidential Consultation",
  phoneNumber: "(555) 555-TECH",
  
  technicalInnovation: {
    title: "Technical Innovation at the Frontier",
    description: "Our approach to digital assets and emerging technologies combines deep technical understanding with pioneering legal frameworks, ensuring protection without limiting innovation potential.",
    leftContent: [
      {
        title: "Algorithmic Protection Architecture",
        description: "We develop sophisticated legal frameworks that protect proprietary algorithms and AI systems while enabling their strategic deployment and evolution in competitive environments."
      },
      {
        title: "Digital Asset Security Engineering",
        description: "Our methodologies secure digital assets through layered protection systems that address both technical vulnerabilities and legal exposure points across multiple jurisdictions."
      },
      {
        title: "Emerging Technology Governance",
        description: "We architect adaptive governance frameworks for blockchain, AI, and other emerging technologies that maintain compliance while positioning for competitive advantage."
      }
    ],
    rightContent: [
      {
        icon: <Cpu className="h-8 w-8" />,
        label: "AI & Machine Learning",
        color: "bg-blue-600"
      },
      {
        icon: <Database className="h-8 w-8" />,
        label: "Blockchain & Distributed Ledger",
        color: "bg-purple-600"
      },
      {
        icon: <Lock className="h-8 w-8" />,
        label: "Cryptography & Security",
        color: "bg-red-600"
      },
      {
        icon: <Zap className="h-8 w-8" />,
        label: "Quantum Computing",
        color: "bg-yellow-500"
      }
    ]
  }
};

const DigitalAssetTechProtection: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={digitalAssetTechData.title!} 
      serviceId="digital-asset-tech-protection"
      description={digitalAssetTechData.description!}
      featuredContent={digitalAssetTechData.featuredContent!}
      features={digitalAssetTechData.features as ServiceFeature[]}
      considerations={digitalAssetTechData.considerations as ServiceConsideration[]}
      process={digitalAssetTechData.process as Process}
      relatedServices={digitalAssetTechData.relatedServices as RelatedService[]}
      ctaTitle={digitalAssetTechData.ctaTitle!}
      ctaDescription={digitalAssetTechData.ctaDescription!}
      ctaButtonText={digitalAssetTechData.ctaButtonText!}
      phoneNumber={digitalAssetTechData.phoneNumber}
      technicalInnovation={digitalAssetTechData.technicalInnovation}
    >
    </ServiceTemplate>
  );
};

export default DigitalAssetTechProtection; 