import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const emergingTechData = {
  title: "Emerging Technology Law",
  description: "Our Emerging Technology practice sits at the intersection of innovation and regulation. We help clients navigate the complex legal landscape of blockchain, AI, IoT, and other cutting-edge technologies with forward-thinking solutions.",
  phoneNumber: "(212) 555-0124",
  phoneLabel: "Emerging Tech Legal Support",
  ctaTitle: "Lead the Innovation Curve with Solid Legal Backing",
  ctaDescription: "Schedule a consultation to discuss how our specialized legal expertise can help your emerging technology venture thrive while navigating regulatory challenges.",
  ctaButtonText: "Book Your Tech Law Consultation",
  ctaTagline: "LEGAL SOLUTIONS FOR TOMORROW'S TECHNOLOGY",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Regulatory Foresight",
      description: "We anticipate regulatory developments in emerging technologies, positioning clients to adapt proactively rather than reactively to changing legal landscapes.",
      color: "mondrian-blue"
    },
    {
      number: "2",
      title: "Technical Fluency",
      description: "Our attorneys combine legal expertise with deep understanding of emerging technologies, enabling us to craft solutions that address both technical realities and legal requirements.",
      color: "mondrian-yellow"
    },
    {
      number: "3",
      title: "Risk Calibration",
      description: "We help innovative companies balance appropriate risk-taking with legal protection, creating frameworks that enable growth while establishing necessary safeguards.",
      color: "mondrian-red"
    }
  ] as PrincipleType[],

  // Key Considerations with expanded descriptions for better visual fill
  keyConsiderations: [
    {
      title: "Blockchain & Cryptocurrency Compliance",
      description: "Navigate the evolving regulatory landscape for digital assets and blockchain applications. Our frameworks address securities laws, KYC/AML requirements, smart contract governance, and jurisdictional considerations for decentralized technologies.",
      personaTags: ['Alex Chen']
    },
    {
      title: "AI Governance & Ethics",
      description: "Develop robust legal frameworks for artificial intelligence applications that balance innovation with responsibility. We address algorithmic transparency, data bias mitigation, liability frameworks, and compliance with emerging AI regulations.",
      personaTags: ['Alex Chen', 'David Rodriguez']
    },
    {
      title: "IoT Security & Privacy",
      description: "Implement comprehensive legal strategies for connected device ecosystems that protect both companies and consumers. Our approach covers data protection, cross-border compliance, security standards, and product liability considerations.",
      personaTags: ['Alex Chen', 'Barbara Miller']
    }
  ] as KeyConsiderationType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Technology Assessment",
      description: "We conduct a deep evaluation of your technology, identifying unique legal considerations, regulatory touchpoints, and potential compliance challenges.",
      color: "mondrian-blue"
    },
    {
      number: "02",
      title: "Risk Mapping",
      description: "Our team maps potential legal and regulatory risks specific to your technology, prioritizing them based on likelihood, impact, and your business objectives.",
      color: "mondrian-red"
    },
    {
      number: "03",
      title: "Compliance Framework",
      description: "We develop a customized legal and compliance framework that addresses current regulations while building in flexibility for evolving legal landscapes.",
      color: "mondrian-yellow"
    },
    {
      number: "04",
      title: "Implementation & Monitoring",
      description: "Our team helps implement the legal framework and establishes ongoing monitoring systems to track regulatory developments and adapt strategies accordingly.",
      color: "mondrian-blue"
    }
  ] as ProcessStepType[],

  // Related areas
  techAreas: [
    {
      title: "Blockchain & Cryptocurrency",
      description: "Legal frameworks for blockchain applications, token offerings, smart contracts, and cryptocurrency ventures."
    },
    {
      title: "Artificial Intelligence",
      description: "Navigating the complex legal landscape of AI development, data usage, liability, and intellectual property protection."
    },
    {
      title: "Internet of Things (IoT)",
      description: "Addressing privacy, security, and regulatory compliance for connected devices and systems."
    },
    {
      title: "Automated Systems",
      description: "Legal guidance for robotic process automation, autonomous vehicles, and other automated technologies."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "IP Asset Protection",
      path: "ip-asset-protection",
      description: "Protection for your technology innovations and intellectual property."
    },
    {
      title: "Data Privacy",
      path: "data-privacy",
      description: "Compliance strategies for data protection regulations worldwide."
    },
    {
      title: "Regulatory Compliance",
      path: "regulatory-compliance",
      description: "Navigation of complex regulatory environments for emerging tech."
    }
  ]
}; 