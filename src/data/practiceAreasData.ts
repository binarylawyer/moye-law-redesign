export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  shortTitle?: string;
}

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
    shortTitle: 'IP Consulting',
    areaOfPractice: 'Intellectual Property',
    description: 'Strategic intellectual property guidance for businesses seeking to maximize value and competitive advantage.',
    content: [
      {
        title: "IP Audit & Portfolio Management",
        description: "Comprehensive evaluation and strategic management of intellectual property assets."
      },
      {
        title: "IP Strategy Development",
        description: "Forward-looking IP strategies aligned with business objectives and market opportunities."
      },
      {
        title: "IP Valuation & Monetization",
        description: "Expert analysis of IP value and development of strategic monetization pathways."
      },
      {
        title: "Global IP Protection",
        description: "International strategies to secure and defend intellectual property across borders."
      }
    ],
    featureContent: {
      title: "Strategic IP Management Solutions",
      description: "Our IP consulting services help businesses identify, protect, and leverage their intellectual property assets. We provide tailored strategies that align with your business goals and enhance your competitive position in the market.",
      imagePath: "/images/ip-consulting.jpg"
    },
    process: [
      {
        number: "01",
        title: "Discovery & Assessment",
        description: "We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape."
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs and goals."
      },
      {
        number: "03",
        title: "Implementation Planning",
        description: "We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements."
      },
      {
        number: "04",
        title: "Execution Support",
        description: "We provide ongoing support during the implementation of your IP strategy, including coordination with specialized counsel."
      }
    ],
    processDescription: "Our systematic approach ensures your intellectual property strategy supports business objectives while maximizing asset value.",
    relatedServices: [
      {
        title: "IP Licensing",
        path: "ip-licensing",
        description: "Structured frameworks for monetizing and leveraging intellectual property through strategic licensing arrangements."
      },
      {
        title: "Emerging Tech",
        path: "emerging-tech",
        description: "Legal frameworks for businesses leveraging emerging technologies like blockchain, AI, and IoT."
      },
      {
        title: "Digital Asset Protection",
        path: "digital-asset-protection",
        description: "Comprehensive protection strategies for digital intellectual property."
      }
    ]
  },
  {
    id: 'digital-asset-protection',
    title: 'Digital Asset Protection',
    shortTitle: 'Digital Assets',
    areaOfPractice: 'Digital Asset Protection',
    description: 'Comprehensive legal strategies to safeguard your digital assets and intellectual property in an increasingly virtual world.',
    content: [
      {
        title: "Cryptocurrency & NFT Protection",
        description: "Legal frameworks for securing digital currencies, NFTs, and blockchain-based assets."
      },
      {
        title: "Digital IP Rights Management",
        description: "Strategies for establishing, monitoring, and enforcing digital intellectual property rights."
      },
      {
        title: "Online Content Protection",
        description: "Legal tools to prevent unauthorized use of digital content and creative works."
      },
      {
        title: "Digital Estate Planning",
        description: "Solutions for managing digital asset succession and ensuring long-term protection."
      }
    ],
    featureContent: {
      title: "Proactive Digital Rights Management",
      description: "We implement forward-thinking strategies that protect your digital assets before problems arise, combining preventative legal measures with responsive enforcement frameworks.",
      imagePath: "/images/digital-protection.jpg"
    },
    process: [
      {
        number: "01",
        title: "Digital Asset Audit",
        description: "We thoroughly inventory and assess your digital assets and current protection measures."
      },
      {
        number: "02",
        title: "Risk Assessment",
        description: "We identify vulnerabilities and potential legal challenges to your digital property."
      },
      {
        number: "03",
        title: "Protection Strategy",
        description: "We develop a comprehensive legal framework to protect your digital assets."
      },
      {
        number: "04",
        title: "Implementation & Monitoring",
        description: "We put protection measures in place and establish ongoing monitoring systems."
      }
    ],
    processDescription: "Our structured approach ensures your digital assets receive comprehensive legal protection in today's rapidly evolving digital landscape.",
    relatedServices: [
      {
        title: "IP Consulting",
        path: "ip-consulting",
        description: "Strategic consulting for intellectual property in digital environments."
      },
      {
        title: "Estate Planning",
        path: "estate-planning",
        description: "Ensuring your digital assets are included in comprehensive estate plans."
      },
      {
        title: "Emerging Tech Law",
        path: "emerging-tech",
        description: "Legal frameworks for cutting-edge digital technologies and platforms."
      }
    ]
  },
  {
    id: 'entertainment-law',
    title: 'Entertainment Law',
    shortTitle: 'Entertainment Law',
    areaOfPractice: 'Entertainment',
    description: 'Our entertainment law practice provides expert legal guidance for creators, producers, and businesses across the evolving media landscape.',
    content: [
      {
        title: "Film & Television",
        description: "Contract negotiation, intellectual property protection, and production legal services for content creators and studios."
      },
      {
        title: "Music & Performing Arts",
        description: "Rights management, licensing agreements, and career strategy for artists, labels, and production companies."
      },
      {
        title: "Digital Entertainment",
        description: "Legal frameworks for podcasts, streaming platforms, gaming, and other digital entertainment ventures."
      },
      {
        title: "Talent Representation",
        description: "Comprehensive representation services for performers, creators, and influencers in traditional and digital media."
      }
    ],
    featureContent: {
      title: "Creative Rights Protection",
      description: "We safeguard the legal interests of creative professionals and entertainment companies with sophisticated rights management strategies designed for today's complex media environment.",
      imagePath: "/images/creative-rights.jpg"
    },
    process: [
      {
        number: "01",
        title: "Rights Assessment",
        description: "We evaluate existing intellectual property rights and development needs for your entertainment project."
      },
      {
        number: "02",
        title: "Strategic Planning",
        description: "We develop tailored legal strategies that align with your creative and business objectives."
      },
      {
        number: "03",
        title: "Documentation & Negotiation",
        description: "We create and negotiate agreements that protect your interests while facilitating successful collaborations."
      },
      {
        number: "04",
        title: "Rights Management",
        description: "We establish systems for ongoing rights management, compliance, and monetization."
      }
    ],
    processDescription: "We implement a structured methodology that protects creative works while enabling successful commercial ventures.",
    relatedServices: [
      {
        title: "IP Licensing",
        path: "ip-licensing",
        description: "Strategic frameworks for content licensing and intellectual property monetization."
      },
      {
        title: "Digital Asset Protection",
        path: "digital-asset-protection",
        description: "Protecting digital creative works and entertainment properties."
      },
      {
        title: "Contract Law",
        path: "contract-law",
        description: "Expert guidance on entertainment industry agreements and negotiations."
      }
    ]
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technology Law',
    shortTitle: 'Emerging Tech',
    areaOfPractice: 'Emerging Technology',
    description: 'Our emerging technology practice provides forward-thinking legal guidance for innovators at the frontier of technological development.',
    content: [
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
    featureContent: {
      title: "Future-Proof Legal Frameworks",
      description: "We develop adaptable legal frameworks that protect your innovations today while accommodating the rapid pace of technological evolution.",
      imagePath: "/images/tech-innovation.jpg"
    },
    process: [
      {
        number: "01",
        title: "Technology Assessment",
        description: "We begin with a comprehensive assessment of your technology and its unique legal considerations."
      },
      {
        number: "02",
        title: "Regulatory Mapping",
        description: "We identify applicable regulatory frameworks across all relevant jurisdictions."
      },
      {
        number: "03",
        title: "Risk Mitigation",
        description: "We develop tailored strategies to address identified legal risks while enabling innovation."
      },
      {
        number: "04",
        title: "Ongoing Advisory",
        description: "We provide continuous guidance as your technology evolves and regulatory landscapes change."
      }
    ],
    processDescription: "We implement a methodical approach to addressing the novel legal challenges presented by emerging technologies.",
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
        title: "Data Privacy",
        path: "data-privacy",
        description: "Ensuring compliance with evolving global data protection regulations."
      }
    ]
  },
  {
    id: 'software-licensing',
    title: 'Software Licensing',
    shortTitle: 'Software Licensing',
    areaOfPractice: 'Software Law',
    description: 'Our software licensing practice helps developers and companies maximize value while protecting their code through optimal licensing structures.',
    content: [
      {
        title: "Open Source Compliance",
        description: "Navigating the complexities of open source license obligations and integration with proprietary software."
      },
      {
        title: "SaaS Agreements",
        description: "Structured agreements for cloud-based software, addressing access rights, data ownership, and service levels."
      },
      {
        title: "Enterprise Licensing",
        description: "Comprehensive frameworks for licensing software across large organizations with multiple divisions and users."
      },
      {
        title: "Mobile App Licensing",
        description: "Specialized licensing solutions for mobile applications across various platforms and distribution channels."
      }
    ],
    featureContent: {
      title: "Value-Maximizing License Frameworks",
      description: "We develop licensing frameworks that balance protection with distribution, enabling you to monetize your software while maintaining appropriate control.",
      imagePath: "/images/software-code.jpg"
    },
    process: [
      {
        number: "01",
        title: "License Analysis",
        description: "We analyze your software business model and distribution needs to determine optimal licensing structures."
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "We craft a licensing strategy that protects your intellectual property while facilitating distribution and revenue."
      },
      {
        number: "03",
        title: "Agreement Drafting",
        description: "We create customized licensing agreements that address your specific technology and business requirements."
      },
      {
        number: "04",
        title: "Compliance Monitoring",
        description: "We establish systems to monitor compliance with licensing terms and enforce your rights when necessary."
      }
    ],
    processDescription: "Our methodical approach ensures your software licensing strategy supports both protection and business growth.",
    relatedServices: [
      {
        title: "IP Licensing",
        path: "ip-licensing",
        description: "Broader intellectual property licensing strategies beyond software."
      },
      {
        title: "Emerging Tech",
        path: "emerging-tech",
        description: "Legal solutions for frontier technologies and innovative software applications."
      },
      {
        title: "Digital Asset Protection",
        path: "digital-asset-protection",
        description: "Comprehensive protection for your valuable digital and software assets."
      }
    ]
  },
  {
    id: 'elder-law',
    title: 'Elder Law',
    shortTitle: 'Elder Law',
    areaOfPractice: 'Elder Care',
    description: 'Our elder law practice provides comprehensive legal services to seniors and their families, addressing the unique challenges that come with aging.',
    content: [
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
    featureContent: {
      title: "Dignity-Focused Legal Support",
      description: "We prioritize the dignity and independence of our senior clients while providing the legal protection they need for security and peace of mind.",
      imagePath: "/images/elder-care.jpg"
    },
    process: [
      {
        number: "01",
        title: "Needs Assessment",
        description: "We conduct a thorough assessment of your current situation and future needs."
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "We develop a comprehensive legal strategy tailored to your specific circumstances."
      },
      {
        number: "03",
        title: "Implementation",
        description: "We handle all necessary documentation and filings to put your plan into action."
      },
      {
        number: "04",
        title: "Ongoing Support",
        description: "We provide continued guidance as needs evolve and laws change."
      }
    ],
    processDescription: "Our compassionate approach to elder law ensures seniors and their families receive the legal protection and guidance they need during life transitions.",
    relatedServices: [
      {
        title: "Estate Planning",
        path: "estate-planning",
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
  },
  {
    id: 'trusts-estates',
    title: 'Trusts & Estates',
    shortTitle: 'Trusts & Estates',
    areaOfPractice: 'Estate Law',
    description: 'Comprehensive estate planning services to protect your assets, provide for your loved ones, and secure your legacy.',
    content: [
      {
        title: "Wills & Trusts",
        description: "Customized legal documents to ensure your assets are distributed according to your wishes."
      },
      {
        title: "Asset Protection",
        description: "Strategic planning to safeguard your assets from potential creditors and liabilities."
      },
      {
        title: "Business Succession",
        description: "Comprehensive plans for the seamless transition of business ownership and management."
      },
      {
        title: "Tax Planning",
        description: "Strategies to minimize estate, gift, and income taxes while maximizing wealth preservation."
      }
    ],
    featureContent: {
      title: "Future-Focused Estate Solutions",
      description: "We develop comprehensive estate plans that address your current needs while anticipating future circumstances, ensuring your legacy is preserved and your loved ones are protected.",
      imagePath: "/images/estate-planning.jpg"
    },
    process: [
      {
        number: "01",
        title: "Personal Assessment",
        description: "We conduct a thorough evaluation of your assets, family structure, and estate planning goals."
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "We create a tailored estate plan that addresses your specific needs and objectives."
      },
      {
        number: "03",
        title: "Documentation",
        description: "We prepare all necessary legal documents to implement your estate plan."
      },
      {
        number: "04",
        title: "Regular Review",
        description: "We provide ongoing support and periodic reviews to ensure your estate plan remains current."
      }
    ],
    processDescription: "Our methodical estate planning process ensures all aspects of your legacy and asset protection are addressed with precision and care.",
    relatedServices: [
      {
        title: "Elder Law",
        path: "elder-law",
        description: "Legal services addressing the unique needs of older adults and their families."
      },
      {
        title: "Business Planning",
        path: "business-planning",
        description: "Legal strategies for business formation, operation, and succession."
      },
      {
        title: "Digital Asset Protection",
        path: "digital-asset-protection",
        description: "Protection strategies for digital assets and online accounts as part of your estate."
      }
    ]
  },
  {
    id: 'ip-licensing',
    title: 'IP Licensing',
    shortTitle: 'IP Licensing',
    areaOfPractice: 'Intellectual Property',
    description: 'Our IP licensing practice helps businesses leverage their innovations, creative works, and brands through strategic licensing programs.',
    content: [
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
    featureContent: {
      title: "Strategic IP Monetization",
      description: "We develop customized licensing strategies to help you monetize your intellectual property portfolio through traditional licensing, franchise models, or innovative cross-industry collaborations.",
      imagePath: "/images/ip-monetization.jpg"
    },
    process: [
      {
        number: "01",
        title: "Strategy Development",
        description: "We analyze your intellectual property portfolio and business objectives to develop a licensing strategy that maximizes value."
      },
      {
        number: "02",
        title: "Agreement Structuring",
        description: "Our team crafts licensing agreements with precise terms on usage rights, territories, duration, and compensation structures."
      },
      {
        number: "03",
        title: "Negotiation & Execution",
        description: "We negotiate favorable terms and complete all documentation required to formalize the licensing relationship."
      },
      {
        number: "04",
        title: "Ongoing Management",
        description: "We help monitor compliance, manage royalty calculations, and address any issues that arise during the license term."
      }
    ],
    processDescription: "Our structured approach ensures your licensing agreements are optimized for success and protection.",
    relatedServices: [
      {
        title: "IP Portfolio Management",
        path: "ip-portfolio-management",
        description: "Comprehensive management of intellectual property assets."
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
    id: 'trusts-estates',
    title: 'Trusts & Estates',
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
  console.log('Looking up service by ID:', serviceId);
  
  // Try exact match first
  const exactMatch = specializedServiceData.find(service => service.id === serviceId);
  if (exactMatch) {
    console.log('Found exact match:', exactMatch.id);
    return exactMatch;
  }
  
  // Try with or without hyphens
  const hyphenNormalizedMatch = specializedServiceData.find(service => 
    service.id.replace(/-/g, '') === serviceId.replace(/-/g, '')
  );
  if (hyphenNormalizedMatch) {
    console.log('Found match after normalizing hyphens:', hyphenNormalizedMatch.id);
    return hyphenNormalizedMatch;
  }
  
  // Try by title
  const titleMatch = specializedServiceData.find(service => 
    service.title.toLowerCase().replace(/\s+/g, '-') === serviceId.toLowerCase()
  );
  if (titleMatch) {
    console.log('Found match by title:', titleMatch.id);
    return titleMatch;
  }
  
  // Try by shortTitle if available
  const shortTitleMatch = specializedServiceData.find(service => 
    service.shortTitle?.toLowerCase().replace(/\s+/g, '-') === serviceId.toLowerCase()
  );
  if (shortTitleMatch) {
    console.log('Found match by shortTitle:', shortTitleMatch.id);
    return shortTitleMatch;
  }
  
  console.log('No service found for ID:', serviceId);
  return undefined;
};

export const specializedServicePathMap: Record<string, string> = {
  'digital-asset-protection': '/practice/digital-asset-protection',
  'ip-consulting': '/practice/ip-consulting',
  'ip-licensing': '/practice/ip-licensing',
  'entertainment-law': '/practice/entertainment-law',
  'emerging-tech': '/practice/emerging-tech',
};

// Helper function to ensure we have data for known problematic services
export const getServiceDataByExactId = (id: string): any => {
  // Handle specific cases that might have issues
  switch (id) {
    case 'ip-licensing':
      return specializedServiceData.find(s => s.id === 'ip-licensing');
    case 'software-licensing':
      return specializedServiceData.find(s => s.id === 'software-licensing');
    case 'elder-law':
      return specializedServiceData.find(s => s.id === 'elder-law');
    default:
      return null;
  }
};
