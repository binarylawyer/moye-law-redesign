import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const trustsEstatesData = {
  title: "Trusts & Estates",
  description: "Our Trusts & Estates practice provides comprehensive planning to protect your legacy, minimize taxes, and ensure the smooth transfer of assets. We create customized strategies that address your unique family dynamics and financial goals.",
  phoneNumber: "(212) 555-0123",
  phoneLabel: "Ask us about Trusts & Estates",
  ctaTitle: "Protect Your Legacy — Contact Us Today",
  ctaDescription: "Schedule a consultation to discuss your estate planning needs and discover how our strategic approach can help secure your family's future.",
  ctaButtonText: "Request Your Estate Planning Consultation",
  ctaTagline: "LEGACY PLANNING EXPERTISE FOR OVER 30 YEARS",

  // Principles based on the Mondrian aesthetic
  principles: [
    {
      number: "1",
      title: "Legacy Preservation",
      description: "We safeguard your legacy through careful planning and precise documentation, ensuring your wishes are honored and your values continue to influence future generations.",
      color: "mondrian-blue"
    },
    {
      number: "2",
      title: "Tax Efficiency",
      description: "Our estate planning approach incorporates sophisticated tax minimization strategies that help preserve wealth and maximize the assets that pass to your beneficiaries.",
      color: "mondrian-yellow"
    },
    {
      number: "3",
      title: "Family Harmony",
      description: "We develop clear, thoughtful plans that reduce potential conflicts among family members while creating mechanisms for successful wealth transfer and management.",
      color: "mondrian-red"
    }
  ] as PrincipleType[],

  // Key Considerations with expanded descriptions (aim for ~25 words for visual balance)
  keyConsiderations: [
    {
      title: "Securing Your Family's Future",
      description: "Proactive planning ensures family protection during unexpected life events. Clear directives minimize disputes and provide stability, addressing concerns important to caregivers like Barbara.",
      personaTags: ['Barbara Miller']
    },
    {
      title: "Protecting Diverse Assets",
      description: "Modern estates often include digital assets, IP, and business interests. We create comprehensive plans that integrate these diverse holdings alongside traditional wealth components.",
      personaTags: ['Alex Chen', 'David Rodriguez']
    },
    {
      title: "Advanced Wealth Preservation",
      description: "For UHNW individuals, we utilize sophisticated trusts and tax strategies. These techniques preserve wealth across generations and shield assets from unforeseen liabilities or challenges.",
      personaTags: ['David Rodriguez']
    }
  ] as KeyConsiderationType[],

  // Process steps
  process: [
    {
      number: "01",
      title: "Personal Assessment",
      description: "We conduct a thorough assessment of your assets, family dynamics, and long-term goals to understand your complete estate planning needs.",
      color: "mondrian-blue"
    },
    {
      number: "02",
      title: "Strategy Design",
      description: "Our team develops a customized estate plan that addresses your specific circumstances, incorporating appropriate trusts, wills, and other planning instruments.",
      color: "mondrian-red"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We prepare all necessary legal documentation and guide you through the execution process, ensuring all instruments are properly signed and authenticated.",
      color: "mondrian-yellow"
    },
    {
      number: "04",
      title: "Periodic Review",
      description: "We provide ongoing review and updates to your estate plan as your circumstances change, ensuring your plan remains aligned with your goals and current law.",
      color: "mondrian-blue"
    }
  ] as ProcessStepType[],

  // Related areas
  trustsEstatesAreas: [
    {
      title: "Estate Planning",
      description: "Comprehensive planning for the distribution of assets and wealth preservation, including wills and trusts."
    },
    {
      title: "Trust Formation",
      description: "Creation of various trust structures to protect assets, minimize taxes, and ensure proper asset distribution."
    },
    {
      title: "Probate Administration",
      description: "Guidance through the probate process, representation in probate court, and estate administration."
    },
    {
      title: "Succession Planning",
      description: "Strategic planning for business succession and wealth transfer across generations."
    }
  ],

  // Related services
  relatedServices: [
    {
      title: "Elder Law",
      path: "elder-law",
      description: "Legal planning for the unique needs of seniors and their families."
    },
    {
      title: "Real Estate",
      path: "real-estate",
      description: "Legal counsel for real property transactions and management."
    },
    {
      title: "Tax Planning",
      path: "tax-planning",
      description: "Strategic planning to minimize tax burden on estates and inheritances."
    }
  ]
}; 