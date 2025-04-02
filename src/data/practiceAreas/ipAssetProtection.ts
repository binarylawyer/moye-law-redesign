import { PrincipleType, ProcessStepType } from '@/components/practice/PracticeTemplate';

export const ipAssetProtectionData = {
  title: "IP Asset Protection",
  description: "Our IP Asset Protection practice safeguards your intellectual property through strategic planning, robust documentation, and vigilant enforcement. We secure the foundation of your creative and innovative work against unauthorized use and infringement.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about IP Asset Protection",
  ctaTitle: "Protect Your Innovations — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your IP protection needs and discover how our strategic approach can safeguard your valuable intellectual assets.",
  ctaButtonText: "Request Your IP Protection Consultation",
  ctaTagline: "PROTECTING INNOVATION FOR OVER 30 YEARS",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Strategic Defense",
      description: "We develop robust protection strategies that secure your intellectual property assets against infringement and unauthorized use in today's complex digital landscape.",
      color: "mondrian-blue"
    },
    {
      number: "2",
      title: "Proactive Monitoring",
      description: "Our approach integrates proactive monitoring systems that identify potential infringements early, allowing for swift and decisive action before significant damage occurs.",
      color: "mondrian-red"
    },
    {
      number: "3",
      title: "Global Perspective",
      description: "We implement protection strategies that function effectively across international borders, ensuring your intellectual assets receive appropriate protection in all relevant markets.",
      color: "mondrian-yellow"
    }
  ] as PrincipleType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Asset Inventory",
      description: "We conduct a comprehensive inventory of your intellectual property assets, including patents, trademarks, copyrights, and trade secrets.",
      color: "mondrian-red"
    },
    {
      number: "02",
      title: "Vulnerability Assessment",
      description: "Our team identifies potential vulnerabilities in your current IP protection strategy and areas that require immediate attention.",
      color: "mondrian-blue"
    },
    {
      number: "03",
      title: "Protection Implementation",
      description: "We implement customized protection mechanisms, including registrations, contracts, and monitoring systems tailored to your specific assets.",
      color: "mondrian-yellow"
    },
    {
      number: "04",
      title: "Ongoing Enforcement",
      description: "We establish continuous monitoring and enforcement protocols to ensure long-term protection of your intellectual property portfolio.",
      color: "mondrian-red"
    }
  ] as ProcessStepType[],

  // Related areas
  ipAssetProtectionAreas: [
    {
      title: "IP Audit & Assessment",
      description: "Comprehensive review of intellectual property assets to identify strengths, weaknesses, and opportunities."
    },
    {
      title: "IP Documentation",
      description: "Thorough documentation of intellectual property assets, including registration and proper record-keeping."
    },
    {
      title: "Global IP Protection",
      description: "Strategic protection of IP assets across multiple jurisdictions and international markets."
    },
    {
      title: "IP Infringement Defense",
      description: "Legal defense against unauthorized use, copying, or infringement of protected intellectual property."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Strategic licensing arrangements to monetize intellectual property assets."
    },
    {
      title: "IP Consulting",
      path: "ip-consulting",
      description: "Expert consultation on intellectual property strategy and portfolio management."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Protection strategies for digital assets in the modern technology landscape."
    }
  ]
}; 