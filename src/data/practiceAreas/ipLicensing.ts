import { PrincipleType, ProcessStepType } from '@/components/practice/PracticeTemplate';

export const ipLicensingData = {
  title: "IP Licensing",
  description: "Our IP licensing practice helps businesses leverage their innovations, creative works, and brands through strategic licensing programs that generate revenue while maintaining appropriate control over intellectual assets.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about IP Licensing",
  ctaTitle: "Maximize Your IP Value — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your IP licensing needs and discover how our strategic approach can help you generate new revenue from your intellectual assets.",
  ctaButtonText: "Request Your IP Licensing Consultation",
  ctaTagline: "STRATEGIC IP MONETIZATION",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Value Maximization",
      description: "We structure licensing agreements to extract maximum value from your intellectual property while maintaining appropriate control and protection of your core assets.",
      color: "mondrian-red"
    },
    {
      number: "2",
      title: "Strategic Alignment",
      description: "Our licensing frameworks align with your broader business objectives, ensuring that IP monetization supports rather than constrains your overall growth strategy.",
      color: "mondrian-blue"
    },
    {
      number: "3",
      title: "Risk-Balanced Approach",
      description: "We balance opportunity with protection, creating licensing structures that open new revenue streams while safeguarding against unauthorized use and dilution.",
      color: "mondrian-yellow"
    }
  ] as PrincipleType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Strategy Development",
      description: "We analyze your intellectual property portfolio and business objectives to develop a licensing strategy that maximizes value and aligns with your goals.",
      color: "mondrian-blue"
    },
    {
      number: "02",
      title: "Agreement Structuring",
      description: "Our team crafts licensing agreements with precise terms on usage rights, territories, duration, and compensation structures to protect your interests.",
      color: "mondrian-red"
    },
    {
      number: "03",
      title: "Negotiation & Execution",
      description: "We negotiate favorable terms and complete all documentation required to formalize the licensing relationship, ensuring clarity and enforceability.",
      color: "mondrian-yellow"
    },
    {
      number: "04",
      title: "Ongoing Management",
      description: "We help monitor compliance, manage royalty calculations, and address any issues that arise during the license term to maintain successful relationships.",
      color: "mondrian-blue"
    }
  ] as ProcessStepType[],

  // Related areas
  licensingAreas: [
    {
      title: "Technology Licensing",
      description: "Strategic agreements for software, patents, and technical innovations that maximize value while protecting intellectual assets."
    },
    {
      title: "Content & Media Licensing",
      description: "Structured frameworks for licensing creative works, from digital content to entertainment properties."
    },
    {
      title: "Trademark & Brand Licensing",
      description: "Brand extension and merchandising agreements that protect brand integrity while opening new revenue streams."
    },
    {
      title: "Cross-Border Licensing",
      description: "International licensing strategies that navigate complex jurisdictional requirements and maximize global opportunities."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "IP Consulting",
      path: "ip-consulting",
      description: "Strategic guidance for intellectual property portfolio management and monetization."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Protecting digital IP and creative works in the digital economy."
    },
    {
      title: "Emerging Technologies",
      path: "emerging-tech",
      description: "Legal guidance for blockchain, AI, and other emerging technologies."
    }
  ]
}; 