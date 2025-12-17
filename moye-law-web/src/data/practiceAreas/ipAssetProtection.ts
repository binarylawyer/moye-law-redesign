import { PrincipleType, ProcessStepType, KeyConsiderationType } from '@/components/practice/PracticeTemplate';

export const ipAssetProtectionData = {
    title: "IP Asset Protection",
    description: "Our IP Asset Protection practice helps companies safeguard their intellectual property across global markets. We develop comprehensive strategies to protect patents, trademarks, copyrights, and trade secrets from infringement, dilution, and misappropriation.",
    phoneNumber: "(212) 555-0125",
    phoneLabel: "IP Protection Hotline",
    ctaTitle: "Secure Your Innovation Portfolio",
    ctaDescription: "Schedule a consultation to assess your intellectual property protection needs and develop a customized strategy to safeguard your company's most valuable assets.",
    ctaButtonText: "Request IP Protection Consultation",
    ctaTagline: "COMPREHENSIVE IP PROTECTION STRATEGIES",

    // Principles based on the Mondrian aesthetic
    principles: [
        {
            number: "1",
            title: "Proactive Monitoring",
            description: "We implement vigilant monitoring systems to detect potential infringement early, allowing for swift and decisive action before significant damage occurs.",
            color: "mondrian-blue"
        },
        {
            number: "2",
            title: "Global Enforcement",
            description: "Our international network enables cohesive IP protection strategies across jurisdictions, ensuring consistent enforcement of your rights in all relevant markets.",
            color: "mondrian-yellow"
        },
        {
            number: "3",
            title: "Strategic Valuation",
            description: "We help quantify the value of your intellectual property assets, informing protection priorities and creating leverage for licensing, partnerships, and transactions.",
            color: "mondrian-red"
        }
    ] as PrincipleType[],

    // Key Considerations with expanded descriptions (aim for ~25 words for visual balance)
    keyConsiderations: [
        {
            title: "Digital Rights Management",
            description: "Implement sophisticated legal protections for digital IP. Our integrated approach combines watermarking, encryption, monitoring, and enforcement to prevent unauthorized use across digital platforms.",
            personaTags: ['Alex Chen', 'David Rodriguez']
        },
        {
            title: "Cross-Border IP Defense",
            description: "Navigate international IP protection with coordinated global strategies. We develop comprehensive protection plans spanning jurisdictions, accounting for regional differences while ensuring consistent enforcement.",
            personaTags: ['David Rodriguez']
        },
        {
            title: "Trade Secret Safeguards",
            description: "Establish robust systems to protect valuable non-patented innovations. Our approach includes security protocols, confidentiality agreements, access controls, and response plans for potential misappropriation.",
            personaTags: ['Alex Chen']
        }
    ] as KeyConsiderationType[],

    // Process steps
    process: [
        {
            number: "01",
            title: "IP Audit & Assessment",
            description: "We conduct a comprehensive audit of your intellectual property assets, identifying strengths, vulnerabilities, and gaps in your current protection strategy.",
            color: "mondrian-blue"
        },
        {
            number: "02",
            title: "Protection Strategy",
            description: "Our team develops a tailored protection strategy that prioritizes your most valuable IP assets and addresses specific risks in your industry and markets.",
            color: "mondrian-red"
        },
        {
            number: "03",
            title: "Implementation",
            description: "We execute the protection strategy, filing necessary registrations, establishing monitoring systems, and creating enforcement protocols.",
            color: "mondrian-yellow"
        },
        {
            number: "04",
            title: "Enforcement & Maintenance",
            description: "Our team continuously monitors for potential infringement and takes swift action when necessary, while maintaining and renewing IP protections.",
            color: "mondrian-blue"
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
            description: "Strategic monetization of intellectual property assets."
        },
        {
            title: "Emerging Technologies",
            path: "emerging-tech",
            description: "IP protection for blockchain, AI, and other cutting-edge innovations."
        },
        {
            title: "IP Litigation",
            path: "ip-litigation",
            description: "Robust defense of intellectual property rights in court proceedings."
        }
    ]
};
