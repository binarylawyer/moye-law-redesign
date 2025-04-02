import { PrincipleType, ProcessStepType } from '@/components/practice/PracticeTemplate';

export const emergingTechData = {
  title: "Emerging Technology",
  description: "Our emerging technology practice provides forward-thinking legal guidance for innovators at the frontier of technological development, addressing novel legal challenges while enabling continued innovation.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about Emerging Technology Law",
  ctaTitle: "Navigate the Future of Tech Law — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your emerging technology legal needs and discover how our innovative approach can help secure your technological future.",
  ctaButtonText: "Request Your Technology Law Consultation",
  ctaTagline: "TECH-FORWARD LEGAL SOLUTIONS",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Future-Oriented Approach",
      description: "We stay ahead of evolving legal frameworks for emerging technologies, anticipating regulatory developments before they impact your business operations.",
      color: "mondrian-blue"
    },
    {
      number: "2",
      title: "Technical Fluency",
      description: "Our team combines deep legal expertise with genuine understanding of technical concepts, enabling meaningful guidance that bridges legal and technical considerations.",
      color: "mondrian-red"
    },
    {
      number: "3",
      title: "Adaptable Frameworks",
      description: "We create legal structures that accommodate rapid technological change, providing necessary protection while maintaining flexibility for innovation and growth.",
      color: "mondrian-yellow"
    }
  ] as PrincipleType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Technology Assessment",
      description: "We begin with a comprehensive assessment of your technology and its unique legal considerations to identify specific compliance needs and risks.",
      color: "mondrian-blue"
    },
    {
      number: "02",
      title: "Regulatory Mapping",
      description: "We identify applicable regulatory frameworks across all relevant jurisdictions, creating a clear compliance roadmap for your technology.",
      color: "mondrian-yellow"
    },
    {
      number: "03",
      title: "Risk Mitigation",
      description: "We develop tailored strategies to address identified legal risks while enabling innovation and technology development.",
      color: "mondrian-red"
    },
    {
      number: "04",
      title: "Ongoing Advisory",
      description: "We provide continuous guidance as your technology evolves and regulatory landscapes change, ensuring consistent legal protection.",
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
      title: "IP Licensing",
      path: "ip-licensing",
      description: "Strategic frameworks for technology licensing and intellectual property monetization."
    },
    {
      title: "Digital Asset Protection",
      path: "digital-asset-protection",
      description: "Comprehensive protection for digital assets, from NFTs to digital IP."
    },
    {
      title: "IP Consulting",
      path: "ip-consulting",
      description: "Strategic guidance for intellectual property in emerging technology contexts."
    }
  ]
}; 