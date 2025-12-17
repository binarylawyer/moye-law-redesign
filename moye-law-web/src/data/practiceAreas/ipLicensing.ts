import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const ipLicensingData = {
    title: "IP Licensing",
    description: "Our IP Licensing practice helps clients maximize the value of their intellectual property through strategic licensing agreements. We develop customized solutions for technology transfer, brand licensing, content distribution, and joint development ventures.",
    phoneNumber: "(212) 555-0126",
    phoneLabel: "IP Licensing Consultation",
    ctaTitle: "Unlock the Value of Your Intellectual Property",
    ctaDescription: "Schedule a consultation to explore licensing opportunities that can generate revenue, expand market reach, and create strategic partnerships through your intellectual assets.",
    ctaButtonText: "Request IP Licensing Strategy Session",
    ctaTagline: "MAXIMIZING IP VALUE THROUGH STRATEGIC LICENSING",

    // Principles based on the Mondrian aesthetic
    principles: [
        {
            number: "1",
            title: "Value Optimization",
            description: "We structure licensing arrangements that maximize financial returns while protecting the long-term value and integrity of your intellectual property assets.",
            color: "mondrian-blue"
        },
        {
            number: "2",
            title: "Strategic Alignment",
            description: "Our licensing agreements advance your broader business objectives, whether expanding into new markets, establishing industry standards, or creating strategic partnerships.",
            color: "mondrian-yellow"
        },
        {
            number: "3",
            title: "Rights Protection",
            description: "We include robust protections in every licensing arrangement to maintain control over your intellectual property and prevent unauthorized use or exploitation.",
            color: "mondrian-red"
        }
    ] as PrincipleType[],

    // Key Considerations with expanded descriptions (aim for ~25 words for visual balance)
    keyConsiderations: [
        {
            title: "Royalty Structure Optimization",
            description: "Develop sophisticated compensation frameworks aligning incentives and maximizing returns. We balance upfronts, royalties, minimums, milestones, and sub-licensing fees for true market value.",
            personaTags: ['David Rodriguez', 'Alex Chen']
        },
        {
            title: "Technology Transfer Strategy",
            description: "Structure comprehensive agreements for complex tech licensing. We protect core IP while enabling implementation, addressing knowledge transfer, support, improvements ownership, and usage restrictions.",
            personaTags: ['Alex Chen']
        },
        {
            title: "International Licensing Compliance",
            description: "Navigate multi-jurisdictional licensing with consistent frameworks addressing regional needs. Our global approach considers territories, local regulations, currency, and cross-border enforcement mechanisms.",
            personaTags: ['David Rodriguez']
        }
    ] as KeyConsiderationType[],

    // Process steps
    process: [
        {
            number: "01",
            title: "Opportunity Assessment",
            description: "We evaluate your intellectual property portfolio to identify assets with licensing potential and determine optimal licensing strategies for each.",
            color: "mondrian-blue"
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Our team creates a customized licensing strategy that aligns with your business objectives, market position, and the specific characteristics of your IP assets.",
            color: "mondrian-red"
        },
        {
            number: "03",
            title: "Agreement Structuring",
            description: "We draft comprehensive licensing agreements that clearly define rights, obligations, compensation structures, and protections for your intellectual property.",
            color: "mondrian-yellow"
        },
        {
            number: "04",
            title: "Management & Enforcement",
            description: "Our team helps establish systems for ongoing management of licensing relationships, including compliance monitoring, royalty auditing, and dispute resolution.",
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
            title: "IP Asset Protection",
            path: "ip-asset-protection",
            description: "Strategies to protect intellectual property from infringement."
        },
        {
            title: "Technology Transactions",
            path: "technology-transactions",
            description: "Legal support for complex technology transfers and acquisitions."
        },
        {
            title: "Entertainment Law",
            path: "entertainment-law",
            description: "Specialized licensing for media, content, and entertainment properties."
        }
    ]
};
