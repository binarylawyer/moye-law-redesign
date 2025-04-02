import { PrincipleType, ProcessStepType } from '@/components/practice/PracticeTemplate';

export const elderLawData = {
  title: "Elder Law",
  description: "Our elder law practice provides comprehensive legal services to seniors and their families, addressing the unique challenges that come with aging through strategic protection, thoughtful planning, and compassionate guidance.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about Elder Law services",
  ctaTitle: "Protect Your Future — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your legal needs and discover how our firm's vision and forward-thinking approach can help you.",
  ctaButtonText: "Request Your Free Consultation",
  ctaTagline: "30 YEARS OF TRUSTED COUNSEL",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Compassionate Guidance",
      description: "We believe in providing compassionate legal guidance to seniors and their families. Our team develops thoughtful strategies to protect elderly clients at every stage of life.",
      color: "mondrian-red"
    },
    {
      number: "2",
      title: "Family-First Approach",
      description: "In elder law, family considerations must be prioritized. We implement a family-first approach that ensures your loved ones' needs are addressed with dignity and respect.",
      color: "mondrian-blue"
    },
    {
      number: "3",
      title: "Future-Oriented Planning",
      description: "Beyond immediate concerns, we focus on creating plans that adapt to changing health and financial needs, integrating both immediate care and long-term provisions.",
      color: "mondrian-yellow"
    }
  ] as PrincipleType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Needs Assessment",
      description: "We conduct a thorough evaluation of your elderly loved one's current situation, identifying immediate concerns, legal needs, and areas requiring protection.",
      color: "mondrian-red"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on our assessment, we develop a customized elder care plan that aligns with your family's goals, values, and financial resources.",
      color: "mondrian-blue"
    },
    {
      number: "03",
      title: "Documentation",
      description: "Our team handles all legal documentation with meticulous attention to detail, ensuring all directives, powers of attorney, and healthcare documents are properly executed.",
      color: "mondrian-red"
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "We provide continuous legal guidance as your loved one's needs evolve, helping you navigate changing healthcare requirements and financial situations.",
      color: "mondrian-blue"
    }
  ] as ProcessStepType[],

  // Related areas
  elderLawAreas: [
    {
      title: "Estate Planning for Seniors",
      description: "Comprehensive planning for the management and distribution of assets, including wills, trusts, and powers of attorney."
    },
    {
      title: "Long-Term Care Planning",
      description: "Strategic planning for future care needs, including Medicaid planning and asset protection strategies."
    },
    {
      title: "Guardianship & Conservatorship",
      description: "Legal arrangements for managing the affairs of individuals who can no longer make decisions for themselves."
    },
    {
      title: "Elder Abuse Protection",
      description: "Legal protection against financial exploitation, physical abuse, and neglect of seniors."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "Trusts & Estates",
      path: "trusts-estates",
      description: "Comprehensive planning for wealth preservation and asset distribution."
    },
    {
      title: "Healthcare Law",
      path: "healthcare-law",
      description: "Legal guidance on healthcare decisions and medical directives."
    },
    {
      title: "Asset Protection",
      path: "digital-asset-protection",
      description: "Strategies to protect assets while ensuring eligibility for needed benefits."
    }
  ]
}; 