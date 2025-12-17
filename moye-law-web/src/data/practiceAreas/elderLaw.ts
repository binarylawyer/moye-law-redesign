import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const elderLawData = {
    title: "Elder Law",
    description: "Our Elder Law practice provides comprehensive legal solutions for older adults and their families. We address the unique needs of aging clients, including advance healthcare planning, estate management, and protection from elder abuse.",
    phoneNumber: "(212) 555-0122",
    phoneLabel: "Elder Care Legal Support",
    ctaTitle: "Plan for the Future with Confidence",
    ctaDescription: "Schedule a consultation with our compassionate elder law attorneys to explore solutions that protect dignity, assets, and peace of mind.",
    ctaButtonText: "Schedule Elder Law Consultation",
    ctaTagline: "CARING LEGAL GUIDANCE FOR SENIORS AND FAMILIES",

    // Principles based on the Mondrian aesthetic
    principles: [
        {
            number: "1",
            title: "Dignity Preservation",
            description: "We prioritize the dignity and autonomy of our elderly clients, ensuring their wishes are respected and their voice remains central to all legal decisions affecting their lives.",
            color: "mondrian-blue"
        },
        {
            number: "2",
            title: "Asset Protection",
            description: "Our strategies help shield assets from potential healthcare costs while maintaining eligibility for essential benefits and preserving the legacy our clients have built.",
            color: "mondrian-yellow"
        },
        {
            number: "3",
            title: "Family Support",
            description: "We provide legal frameworks that empower families to make decisions and provide care for elderly loved ones while minimizing conflict and administrative burden.",
            color: "mondrian-red"
        }
    ] as PrincipleType[],

    // Key Considerations with expanded descriptions (aim for ~25 words for visual balance)
    keyConsiderations: [
        {
            title: "Advance Health Planning",
            description: "Comprehensive advance health directives provide clarity and peace of mind. They ensure medical wishes are respected, minimize family stress, and are regularly reviewed.",
            personaTags: ['Barbara Miller']
        },
        {
            title: "Long-Term Care Strategies",
            description: "Navigating complex long-term care options requires legal planning. We develop strategies protecting assets while ensuring access to quality care, including Medicaid and insurance.",
            personaTags: ['Barbara Miller', 'David Rodriguez']
        },
        {
            title: "Preventing Elder Exploitation",
            description: "Our legal frameworks safeguard vulnerable seniors from financial exploitation. We implement monitoring and safeguards that maintain independence while providing necessary oversight against predatory actions.",
            personaTags: ['David Rodriguez', 'Barbara Miller']
        }
    ] as KeyConsiderationType[],

    // Process steps
    process: [
        {
            number: "01",
            title: "Needs Assessment",
            description: "We conduct a thorough evaluation of your current situation, including health status, financial resources, family dynamics, and personal goals for aging.",
            color: "mondrian-blue"
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Our team creates a comprehensive plan addressing healthcare directives, powers of attorney, estate planning, and long-term care considerations tailored to your needs.",
            color: "mondrian-red"
        },
        {
            number: "03",
            title: "Documentation",
            description: "We prepare and execute all necessary legal documents to implement your plan, ensuring they comply with current laws and clearly express your wishes.",
            color: "mondrian-yellow"
        },
        {
            number: "04",
            title: "Ongoing Support",
            description: "Our relationship continues with regular reviews and updates as your health, family circumstances, or applicable laws change over time.",
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
            title: "Estate Planning",
            path: "trusts-estates",
            description: "Comprehensive planning to protect assets and direct their distribution."
        },
        {
            title: "Healthcare Advocacy",
            path: "healthcare-advocacy",
            description: "Legal representation in healthcare decisions and disputes."
        },
        {
            title: "Guardianship",
            path: "guardianship",
            description: "Legal authority to make decisions for incapacitated individuals."
        }
    ]
};
