import { PrincipleType, ProcessStepType } from '@/components/practice/PracticeTemplate';

export const realEstateData = {
  title: "Real Estate",
  description: "Our Real Estate practice provides strategic legal guidance across all aspects of property transactions, development, and management. We navigate complex regulatory environments while protecting your investments and facilitating successful deals.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about Real Estate services",
  ctaTitle: "Secure Your Property Investment — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your real estate needs and discover how our strategic approach can help you navigate complex property transactions.",
  ctaButtonText: "Request Your Real Estate Consultation",
  ctaTagline: "TRUSTED REAL ESTATE COUNSEL FOR 30+ YEARS",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Thorough Due Diligence",
      description: "We conduct exhaustive property investigations to identify potential issues early, examining title history, environmental concerns, and regulatory compliance to prevent future complications.",
      color: "mondrian-red"
    },
    {
      number: "2",
      title: "Strategic Negotiation",
      description: "Our approach to contract negotiation balances firmness with flexibility, securing favorable terms while maintaining constructive relationships essential to successful real estate transactions.",
      color: "mondrian-blue"
    },
    {
      number: "3",
      title: "Comprehensive Documentation",
      description: "We prepare meticulous legal documentation that clearly defines all parties' rights and responsibilities, creating a solid foundation for property transactions and ongoing relationships.",
      color: "mondrian-yellow"
    }
  ] as PrincipleType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We evaluate your real estate goals, existing documentation, and property details to create a customized legal strategy for your transaction.",
      color: "mondrian-yellow"
    },
    {
      number: "02",
      title: "Document Review & Preparation",
      description: "Our team conducts thorough due diligence while preparing or reviewing all necessary legal documents to protect your interests.",
      color: "mondrian-red"
    },
    {
      number: "03",
      title: "Negotiation & Resolution",
      description: "We handle all negotiations with counterparties, addressing contingencies and resolving potential obstacles to closing.",
      color: "mondrian-blue"
    },
    {
      number: "04",
      title: "Closing & Implementation",
      description: "We oversee the closing process and provide guidance on implementing all post-closing obligations and transition matters.",
      color: "mondrian-yellow"
    }
  ] as ProcessStepType[],

  // Related areas
  realEstateAreas: [
    {
      title: "Commercial Real Estate",
      description: "Legal counsel for acquisition, development, leasing, and disposition of commercial properties."
    },
    {
      title: "Residential Real Estate",
      description: "Guidance for homebuyers, sellers, and investors in residential property transactions."
    },
    {
      title: "Real Estate Finance",
      description: "Legal support for financing strategies, loan documentation, and securitization structures."
    },
    {
      title: "Land Use & Zoning",
      description: "Navigation of complex regulatory frameworks affecting property development and usage."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "Trusts & Estates",
      path: "trusts-estates",
      description: "Estate planning strategies for real property assets and succession planning."
    },
    {
      title: "Business Law",
      path: "business-law",
      description: "Legal support for business entities involved in real estate ventures."
    },
    {
      title: "Tax Planning",
      path: "tax-planning",
      description: "Strategic tax planning for real estate investments and transactions."
    }
  ]
}; 