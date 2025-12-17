import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const realEstateData = {
    title: "Real Estate Law",
    description: "Our Real Estate practice provides sophisticated legal guidance for complex property transactions, development projects, and real estate investments. We help clients navigate regulatory requirements, financing structures, and risk management considerations.",
    phoneNumber: "(212) 555-0127",
    phoneLabel: "Real Estate Law Support",
    ctaTitle: "Strengthen Your Real Estate Position",
    ctaDescription: "Schedule a consultation to discuss your real estate legal needs, from transaction support and financing to development planning and regulatory compliance.",
    ctaButtonText: "Request Real Estate Consultation",
    ctaTagline: "STRATEGIC COUNSEL FOR PROPERTY TRANSACTIONS & INVESTMENTS",

    // Principles based on the Mondrian aesthetic
    principles: [
        {
            number: "1",
            title: "Transaction Precision",
            description: "We structure real estate transactions with meticulous attention to detail, ensuring clear documentation, proper due diligence, and protection against future contingencies.",
            color: "mondrian-blue"
        },
        {
            number: "2",
            title: "Regulatory Navigation",
            description: "Our team guides clients through complex zoning, environmental, and land use regulations, anticipating compliance challenges and securing necessary approvals.",
            color: "mondrian-yellow"
        },
        {
            number: "3",
            title: "Risk Mitigation",
            description: "We identify and address potential risks in real estate ventures, from title issues and environmental concerns to financing contingencies and construction liabilities.",
            color: "mondrian-red"
        }
    ] as PrincipleType[],

    // Key Considerations with expanded descriptions (aim for ~25 words for visual balance)
    keyConsiderations: [
        {
            title: "Investment Structure Optimization",
            description: "Design real estate investment structures maximizing returns and minimizing taxes. We evaluate LLCs, partnerships, and REITs, considering liability protection, transfers, and exit strategies.",
            personaTags: ['David Rodriguez']
        },
        {
            title: "Development Project Management",
            description: "Navigate complex real estate development with comprehensive planning. We address zoning, environmental compliance, construction contracts, financing, and potential disputes with an integrated approach.",
            personaTags: ['David Rodriguez', 'Barbara Miller']
        },
        {
            title: "Property Portfolio Diversification",
            description: "Structure legal frameworks for diverse real estate portfolios balancing risk and opportunity. Our strategies account for market timing, geography, property types, tenants, and alternatives.",
            personaTags: ['David Rodriguez']
        }
    ] as KeyConsiderationType[],

    // Process steps
    process: [
        {
            number: "01",
            title: "Strategic Analysis",
            description: "We conduct a thorough analysis of your real estate objectives, existing properties, and potential opportunities to develop a strategic approach.",
            color: "mondrian-blue"
        },
        {
            number: "02",
            title: "Due Diligence",
            description: "Our team performs comprehensive due diligence on properties and projects, investigating title, zoning, environmental factors, and potential liabilities.",
            color: "mondrian-red"
        },
        {
            number: "03",
            title: "Transaction Structuring",
            description: "We structure real estate transactions to optimize financial outcomes, minimize tax implications, and address regulatory considerations.",
            color: "mondrian-yellow"
        },
        {
            number: "04",
            title: "Implementation & Closing",
            description: "Our team manages all aspects of transaction execution, from negotiation and documentation to closing and post-closing requirements.",
            color: "mondrian-blue"
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
            description: "Integration of real estate assets into comprehensive estate plans."
        },
        {
            title: "Tax Planning",
            path: "tax-planning",
            description: "Strategies to minimize tax implications of real estate transactions."
        },
        {
            title: "Business Formation",
            path: "business-formation",
            description: "Entity structuring for real estate investments and developments."
        }
    ]
};
