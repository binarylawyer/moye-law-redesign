export interface PracticePrinciple {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  introduction: string;
  category: 'business' | 'personal' | 'litigation';
  featured: boolean;
  principles: PracticePrinciple[];
  process: ProcessStep[];
}

export const specializedServiceData = [
  {
    id: 'ip-consulting',
    title: 'IP Consulting Services',
    description: 'Strategic intellectual property guidance for businesses seeking to maximize value and competitive advantage.'
  },
  {
    id: 'ip-licensing',
    title: 'IP Licensing Solutions',
    description: 'Structured frameworks for monetizing and leveraging intellectual property through strategic licensing arrangements.'
  },
  {
    id: 'digital-asset-protection',
    title: 'Digital Asset Protection',
    description: 'Comprehensive legal protection for valuable digital assets, from cryptocurrencies and NFTs to domain names and digital intellectual property.'
  },
  {
    id: 'entertainment-law',
    title: 'Entertainment Law',
    description: 'Expert legal guidance for creators, producers, and businesses across the evolving entertainment landscape.'
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technology Law',
    description: 'Forward-looking legal solutions for pioneers at the frontier of technological innovation.'
  }
];

export const practiceAreasData: PracticeArea[] = [
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription: 'Protecting innovative ideas and creative works in a digital age',
    introduction: 'Our intellectual property practice safeguards your creative assets through strategic protection, enforcement, and monetization strategies tailored to your unique needs.',
    category: 'business',
    featured: true,
    principles: [
      {
        title: 'Proactive Protection',
        description: 'We believe in anticipating potential IP challenges before they arise. Our team develops comprehensive strategies to protect your intellectual assets at every stage of development.'
      },
      {
        title: 'Global Perspective',
        description: 'In today\'s interconnected world, IP protection must transcend borders. We implement worldwide protection strategies that secure your innovations across all relevant jurisdictions.'
      },
      {
        title: 'Value-Driven Approach',
        description: 'Beyond protection, we focus on maximizing the value of your intellectual property through strategic licensing, partnerships, and commercialization opportunities.'
      }
    ],
    process: [
      {
        title: 'Discovery & Assessment',
        description: 'We conduct a comprehensive review of your intellectual property assets, identifying strengths, vulnerabilities, and untapped opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Based on our assessment, we develop a customized protection strategy that aligns with your business objectives and resource constraints.'
      },
      {
        title: 'Implementation',
        description: 'Our team executes your IP strategy, handling registrations, agreements, and other legal procedures with meticulous attention to detail.'
      },
      {
        title: 'Monitoring & Enforcement',
        description: 'We vigilantly monitor for potential infringements and take swift, appropriate action to protect your intellectual property rights.'
      }
    ]
  },
  {
    id: 'art-law',
    title: 'Art Law',
    shortDescription: 'Specialized legal counsel for artists, galleries, collectors, and museums',
    introduction: 'Our art law practice navigates the unique legal challenges of the art world, from acquisition and authentication to exhibition and legacy planning.',
    category: 'business',
    featured: true,
    principles: [
      {
        title: 'Cultural Sensitivity',
        description: 'We understand that art transcends mere commercial value. Our approach honors the cultural significance of artistic works while addressing complex legal realities.'
      },
      {
        title: 'Interdisciplinary Expertise',
        description: 'Our team combines legal acumen with deep knowledge of the art world, allowing us to bridge legal, artistic, and commercial considerations.'
      },
      {
        title: 'Discrete Representation',
        description: 'We recognize the often sensitive nature of art-related matters and maintain strict confidentiality throughout our representation.'
      }
    ],
    process: [
      {
        title: 'Artistic Context',
        description: 'We begin by understanding the artistic, historical, and cultural context of your matter, ensuring our legal approach aligns with these dimensions.'
      },
      {
        title: 'Legal Framework',
        description: 'We identify the relevant legal frameworks, which often span multiple areas of law from intellectual property to tax and international regulations.'
      },
      {
        title: 'Strategic Counsel',
        description: 'We provide clear guidance that balances legal protection with your artistic or collecting objectives.'
      },
      {
        title: 'Documentation & Implementation',
        description: 'We meticulously prepare all necessary documentation and oversee implementation to ensure your artistic interests are protected.'
      }
    ]
  },
  {
    id: 'tech-startups',
    title: 'Technology Startups',
    shortDescription: 'Guiding innovative ventures from formation to exit',
    introduction: 'Our technology startup practice provides comprehensive legal support through every phase of growth, from initial formation to funding rounds and potential acquisitions.',
    category: 'business',
    featured: false,
    principles: [
      {
        title: 'Growth-Oriented Counsel',
        description: 'We structure our legal advice to facilitate rather than hinder growth, balancing necessary protection with entrepreneurial agility.'
      },
      {
        title: 'Future-Focused Strategy',
        description: 'We anticipate your future legal needs and structure agreements and entities to accommodate growth, investment, and potential exit scenarios.'
      },
      {
        title: 'Ecosystem Integration',
        description: 'Our deep connections within the technology ecosystem provide added value beyond legal services, helping connect you with potential investors, partners, and talent.'
      }
    ],
    process: [
      {
        title: 'Formation & Foundation',
        description: 'We establish the optimal legal structure for your venture, addressing entity formation, founder agreements, and initial IP protection.'
      },
      {
        title: 'Operational Framework',
        description: 'We develop the essential legal infrastructure for your operations, including employment agreements, privacy policies, and terms of service.'
      },
      {
        title: 'Funding Preparation',
        description: 'We prepare your company for investment, structuring terms and conducting due diligence to facilitate smooth funding rounds.'
      },
      {
        title: 'Growth & Governance',
        description: 'As you scale, we ensure your legal framework evolves appropriately, addressing corporate governance, compliance, and expanded operations.'
      }
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    shortDescription: 'Securing your legacy and protecting your family\'s future',
    introduction: 'Our estate planning practice creates comprehensive strategies to preserve wealth, minimize tax burdens, and ensure your assets are distributed according to your wishes.',
    category: 'personal',
    featured: false,
    principles: [
      {
        title: 'Personalized Planning',
        description: 'We recognize that every family and estate is unique. Our approach is highly personalized, reflecting your specific circumstances, values, and objectives.'
      },
      {
        title: 'Multigenerational Vision',
        description: 'We develop strategies that consider the needs and interests of multiple generations, helping create lasting family legacies.'
      },
      {
        title: 'Regular Adaptation',
        description: 'We view estate planning as an ongoing process, regularly reviewing and updating your plan to reflect changes in your life, family, and the legal landscape.'
      }
    ],
    process: [
      {
        title: 'Discovery & Assessment',
        description: 'We conduct a thorough review of your assets, family structure, and objectives to understand your complete estate planning needs.'
      },
      {
        title: 'Strategy Development',
        description: 'Based on our assessment, we develop a comprehensive estate plan, identifying appropriate tools and structures to achieve your goals.'
      },
      {
        title: 'Documentation',
        description: 'We prepare all necessary legal documents, from wills and trusts to powers of attorney and healthcare directives.'
      },
      {
        title: 'Implementation & Review',
        description: 'We assist with implementing your plan, including asset transfers and beneficiary designations, and establish a schedule for regular reviews and updates.'
      }
    ]
  },
  {
    id: 'corporate-litigation',
    title: 'Corporate Litigation',
    shortDescription: 'Resolving complex business disputes with strategic precision',
    introduction: 'Our corporate litigation practice represents businesses in high-stakes disputes, delivering strategic solutions that protect your interests while minimizing disruption to your operations.',
    category: 'litigation',
    featured: true,
    principles: [
      {
        title: 'Business-First Approach',
        description: 'We evaluate every litigation strategy through the lens of your business objectives, ensuring legal tactics advance rather than undermine your commercial goals.'
      },
      {
        title: 'Strategic Resolution',
        description: 'While prepared for aggressive litigation when necessary, we continuously explore opportunities for efficient, advantageous resolution through negotiation, mediation, or settlement.'
      },
      {
        title: 'Resource Optimization',
        description: 'We deploy resources judiciously, utilizing advanced technology and efficient processes to deliver cost-effective representation without compromising quality.'
      }
    ],
    process: [
      {
        title: 'Case Evaluation',
        description: 'We conduct a thorough analysis of your case, assessing legal merits, potential damages, and strategic considerations to develop an initial recommendation.'
      },
      {
        title: 'Strategy Development',
        description: 'We create a comprehensive litigation strategy aligned with your business objectives, identifying key leverage points and potential resolution paths.'
      },
      {
        title: 'Execution',
        description: 'Our team implements the strategy with precision, managing all aspects of the litigation process from discovery to trial preparation.'
      },
      {
        title: 'Resolution',
        description: 'Whether through negotiated settlement or courtroom victory, we pursue the optimal resolution for your business, measuring success by your commercial outcomes.'
      }
    ]
  },
  {
    id: 'privacy-data-security',
    title: 'Privacy & Data Security',
    shortDescription: 'Navigating complex regulatory requirements in a data-driven world',
    introduction: 'Our privacy and data security practice helps organizations comply with evolving regulations while implementing practical data governance frameworks that balance protection with business utility.',
    category: 'business',
    featured: false,
    principles: [
      {
        title: 'Preventive Protection',
        description: 'We focus on preventing breaches and compliance issues through proactive legal strategy rather than merely responding to incidents after they occur.'
      },
      {
        title: 'Practical Compliance',
        description: 'We translate complex regulatory requirements into workable business procedures, finding the balance between rigorous compliance and operational efficiency.'
      },
      {
        title: 'Global Perspective',
        description: 'Our approach addresses the increasingly global nature of privacy regulation, helping you navigate cross-border data flows and multinational compliance obligations.'
      }
    ],
    process: [
      {
        title: 'Risk Assessment',
        description: 'We evaluate your current data practices, identifying compliance gaps and security vulnerabilities across your organization.'
      },
      {
        title: 'Compliance Framework',
        description: 'We develop a tailored compliance program that addresses relevant regulations while integrating smoothly with your business operations.'
      },
      {
        title: 'Implementation Support',
        description: 'We assist with implementing your program, including policy development, vendor management strategies, and employee training frameworks.'
      },
      {
        title: 'Ongoing Compliance',
        description: 'We provide continued support to maintain compliance amid regulatory changes and evolving business practices, including incident response planning.'
      }
    ]
  },
  {
    id: 'employment-law',
    title: 'Employment Law',
    shortDescription: 'Creating productive, compliant workplaces while mitigating risks',
    introduction: 'Our employment law practice partners with employers to develop legally sound workplace policies, navigate complex personnel matters, and defend against employment-related claims.',
    category: 'business',
    featured: false,
    principles: [
      {
        title: 'Preventive Guidance',
        description: 'We emphasize preventive strategies that reduce the likelihood of disputes and claims, creating legally compliant frameworks for employment decisions.'
      },
      {
        title: 'Practical Solutions',
        description: 'We provide advice that works in the real world, balancing legal considerations with operational needs and company culture.'
      },
      {
        title: 'Strategic Defense',
        description: 'When disputes arise, we develop defense strategies that protect your legal interests while considering reputational impacts and business relationships.'
      }
    ],
    process: [
      {
        title: 'Compliance Review',
        description: 'We assess your current employment practices, policies, and documentation, identifying areas of legal risk and opportunities for improvement.'
      },
      {
        title: 'Policy Development',
        description: 'We create or refine employment policies and handbooks that reflect current law while supporting your organizational culture and objectives.'
      },
      {
        title: 'Ongoing Counsel',
        description: 'We provide day-to-day advice on employee relations matters, helping you navigate discipline, accommodation, leave, and other complex issues.'
      },
      {
        title: 'Claim Defense',
        description: 'When claims arise, we provide vigorous representation before agencies and courts, pursuing the most advantageous resolution for your organization.'
      }
    ]
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    shortDescription: 'Guiding companies through transformative transactions',
    introduction: 'Our M&A practice provides comprehensive support through every phase of the transaction lifecycle, from initial structure and due diligence to closing and post-closing integration.',
    category: 'business',
    featured: false,
    principles: [
      {
        title: 'Strategic Alignment',
        description: 'We ensure that transaction structures and terms align with your strategic objectives, focusing on the business purpose driving the deal.'
      },
      {
        title: 'Comprehensive Diligence',
        description: 'We conduct thorough due diligence that goes beyond mere compliance, identifying material risks and opportunities that impact valuation and terms.'
      },
      {
        title: 'Post-Closing Foresight',
        description: 'We negotiate with an eye toward post-closing operations and integration, addressing potential obstacles before they impact the combined business.'
      }
    ],
    process: [
      {
        title: 'Transaction Planning',
        description: 'We help structure the transaction to achieve your business and tax objectives while addressing regulatory requirements and third-party constraints.'
      },
      {
        title: 'Due Diligence',
        description: 'Our team conducts or manages comprehensive due diligence, methodically examining legal, financial, and operational aspects of the target business.'
      },
      {
        title: 'Negotiation & Documentation',
        description: 'We negotiate and draft all transaction documents, from letters of intent to definitive agreements, protecting your interests at every stage.'
      },
      {
        title: 'Closing & Integration',
        description: 'We manage the closing process and advise on post-closing matters, helping ensure a smooth transition and effective integration.'
      }
    ]
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    shortDescription: 'Advocating for fair compensation for injury victims',
    introduction: 'Our personal injury practice fights for the rights of those injured through negligence, securing the compensation needed for recovery and future security.',
    category: 'personal',
    featured: false,
    principles: [
      {
        title: 'Client-Centered Representation',
        description: 'We place your needs and wellbeing at the center of our approach, tailoring our representation to your specific circumstances and objectives.'
      },
      {
        title: 'Thorough Investigation',
        description: 'We conduct comprehensive investigations to establish liability, building the strongest possible foundation for your claim.'
      },
      {
        title: 'Full Compensation',
        description: 'We pursue compensation for all applicable damages, including medical expenses, lost income, pain and suffering, and future impacts of your injury.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We begin with a detailed discussion of your case, gathering essential information and explaining your legal options and our approach.'
      },
      {
        title: 'Investigation & Documentation',
        description: 'Our team collects and preserves evidence, interviews witnesses, reviews records, and consults with experts to build your case.'
      },
      {
        title: 'Claim Development',
        description: 'We prepare and submit a comprehensive claim that documents liability and fully accounts for all your damages, current and future.'
      },
      {
        title: 'Negotiation & Resolution',
        description: 'We negotiate aggressively on your behalf, and if a fair settlement cannot be reached, we are fully prepared to take your case to trial.'
      }
    ]
  },
  {
    id: 'family-law',
    title: 'Family Law',
    shortDescription: 'Guiding families through legal transitions with dignity',
    introduction: 'Our family law practice provides compassionate, solution-focused representation in divorce, custody, and other family matters, protecting your interests while minimizing conflict.',
    category: 'personal',
    featured: false,
    principles: [
      {
        title: 'Child-Centered Approach',
        description: 'In matters involving children, we prioritize their wellbeing, seeking arrangements that provide stability and support healthy parent-child relationships.'
      },
      {
        title: 'Resolution-Oriented Strategy',
        description: 'While prepared for litigation when necessary, we emphasize negotiated solutions that reduce emotional and financial costs while meeting your core objectives.'
      },
      {
        title: 'Long-Term Perspective',
        description: 'We help you make decisions that serve your interests not just today but in the years ahead, particularly regarding financial arrangements and co-parenting relationships.'
      }
    ],
    process: [
      {
        title: 'Consultation & Planning',
        description: 'We begin with a thorough discussion of your situation, objectives, and concerns, developing an initial strategy tailored to your specific circumstances.'
      },
      {
        title: 'Information Gathering',
        description: 'We collect and organize all relevant financial, property, and parenting information to ensure informed decision-making and appropriate settlements.'
      },
      {
        title: 'Negotiation & Resolution',
        description: 'We pursue resolution through appropriate channels, from direct negotiation to mediation or collaborative law, resorting to litigation only when necessary.'
      },
      {
        title: 'Implementation',
        description: 'We ensure all agreements are properly documented and implemented, addressing any issues that arise during the transition to new arrangements.'
      }
    ]
  }
];

export const getServiceByName = (serviceId: string): SpecializedService | undefined => {
  return specializedServices.find(service => 
    service.id === serviceId || 
    service.id.replace(/-/g, '') === serviceId.replace(/-/g, '') || // Handle with or without hyphens
    service.title.toLowerCase().replace(/\s+/g, '-') === serviceId.toLowerCase() || // Handle title matching
    service.shortTitle?.toLowerCase().replace(/\s+/g, '-') === serviceId.toLowerCase() // Handle shortTitle matching
  );
};

export const specializedServicePathMap: Record<string, string> = {
  'digital-asset-protection': '/services/digital-asset-protection',
  'ip-consulting': '/services/ip-consulting',
  'ip-licensing': '/services/ip-licensing',
  'entertainment-law': '/services/entertainment-law',
  'emerging-tech': '/services/emerging-tech',
};
