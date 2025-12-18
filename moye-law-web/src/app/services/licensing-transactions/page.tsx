"use client";

import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { ServiceData } from '@/types/services';
import { FileCheck, BarChart2, Network, Briefcase } from 'lucide-react';

const licensingTransactionsData: ServiceData = {
    title: "Licensing & Transactions",
    description: "Structuring and negotiating strategic licensing agreements and technology transactions.",

    featuredContent: {
        title: "Monetizing Assets Through Deals",
        content: [
            "Intellectual property and proprietary assets hold significant commercial potential unlocked through strategic deals.",
            "Our Licensing & Transactions practice helps businesses structure, negotiate, and close agreements that capture this value, facilitating technology transfer, brand extension, and commercial partnerships.",
            "We combine deep legal expertise in IP and contract law with business acumen to ensure deals align with broader commercial objectives."
        ],
        callToAction: "Structure your next deal",
        imageSrc: "/videos/monetizing-assets.mp4",
        imageAlt: "Strategic business transaction and asset monetization process visualized"
    },

    features: [
        {
            title: "Technology Licensing Deals",
            description: "Structuring and negotiating agreements for software, patents, data, and technical know-how transfer.",
            icon: "code"
        },
        {
            title: "Brand & Content Licensing",
            description: "Developing frameworks and negotiating deals for trademark, brand, and creative content licensing.",
            icon: "tag"
        },
        {
            title: "Strategic Tech Transactions",
            description: "Legal support for joint ventures, R&D agreements, tech acquisitions, and complex commercial contracts.",
            icon: "file-text"
        },
        {
            title: "Franchise & Distribution Agreements",
            description: "Comprehensive legal support for structuring, negotiating, and managing franchise and distribution systems.",
            icon: "building"
        }
    ],

    considerations: [
        {
            title: "Strategic Licensing Value Maximization",
            description: "Effective licensing programs balance immediate revenue with long-term strategic value. Our flat-fee licensing structure assessment helps identify optimal pricing models, exclusivity parameters, and term structures. For tech entrepreneurs, we emphasize scalability."
        },
        {
            title: "IP Due Diligence in Transactions",
            description: "Thorough intellectual property due diligence is critical to successful technology transactions. Our subscription-based transaction support includes comprehensive IP portfolio verification, freedom-to-operate analysis, and infringement risk assessment."
        },
        {
            title: "Cross-Border Licensing Considerations",
            description: "International licensing agreements must navigate complex jurisdictional differences. Our fixed-fee international licensing service addresses these challenges through carefully structured choice of law provisions and dispute resolution frameworks."
        },
        {
            title: "Technology Transfer & Integration",
            description: "Successful technology transfer extends beyond legal documentation to practical implementation considerations. Our packages include knowledge transfer protocols and performance verification standards."
        },
        {
            title: "Open Source Compliance",
            description: "Commercial agreements involving software must carefully address open source components. Our open source compliance service includes comprehensive inventory assessment and obligation mapping."
        }
    ],

    process: {
        title: "Our Licensing & Transaction Process",
        steps: [
            { title: "Deal Strategy", description: "Identifying licensable assets, assessing commercial potential, and defining strategic deal objectives." },
            { title: "Due Diligence", description: "Assisting in identifying potential partners and conducting thorough due diligence." },
            { title: "Negotiation", description: "Developing key deal terms and negotiating the structure of the licensing agreement." },
            { title: "Drafting", description: "Drafting comprehensive agreements and leading negotiations to protect client interests." },
            { title: "Closing", description: "Managing the closing process and providing guidance on post-transaction integration." }
        ]
    },

    relatedServices: [
        {
            title: "IP Consulting & Strategy",
            path: "/services/ip-consulting-strategy",
            description: "Aligning licensing and transaction activities with overall intellectual property strategy."
        },
        {
            title: "Digital Asset & Emerging Technology",
            path: "/services/digital-asset-tech-protection",
            description: "Ensuring underlying digital assets and technology are properly protected before transacting."
        },
        {
            title: "Art & Entertainment Law",
            path: "/services/art-entertainment-law",
            description: "Specialized transaction support for creative works, media rights, and entertainment properties."
        }
    ],

    ctaTitle: "Close Your Next Strategic Deal",
    ctaDescription: "Leverage strategic licensing and transactions to generate revenue, acquire technology, or expand market reach.",
    ctaButtonText: "Discuss Your Deal Needs",
    phoneNumber: "(555) 555-DEAL",

    technicalInnovation: {
        title: "Technical Innovation in Deal Structures",
        description: "Our approach to licensing and transactions employs advanced deal engineering techniques.",
        leftContent: [
            {
                title: "Deal Analytics Engine",
                description: "We employ proprietary data analytics to optimize deal structures based on market conditions."
            },
            {
                title: "Advanced Contract Architecture",
                description: "Our transaction team builds sophisticated agreement structures that protect IP while enabling strategic deployment."
            },
            {
                title: "Value Capture Frameworks",
                description: "We design innovative royalty structures and value sharing mechanisms maximize returns."
            }
        ],
        rightContent: [
            {
                icon: <FileCheck className="h-8 w-8" />,
                label: "Smart Contract Integration",
                color: "bg-green-600"
            },
            {
                icon: <BarChart2 className="h-8 w-8" />,
                label: "Deal Analytics",
                color: "bg-blue-500"
            },
            {
                icon: <Network className="h-8 w-8" />,
                label: "Cross-Border Frameworks",
                color: "bg-purple-600"
            },
            {
                icon: <Briefcase className="h-8 w-8" />,
                label: "Value-Based Structuring",
                color: "bg-red-500"
            }
        ]
    }
};

export default function LicensingPage() {
    return (
        <ServiceTemplate
            serviceName={licensingTransactionsData.title}
            serviceId="licensing-transactions"
            description={licensingTransactionsData.description}
            featuredContent={licensingTransactionsData.featuredContent}
            features={licensingTransactionsData.features}
            considerations={licensingTransactionsData.considerations}
            process={licensingTransactionsData.process}
            relatedServices={licensingTransactionsData.relatedServices}
            ctaTitle={licensingTransactionsData.ctaTitle}
            ctaDescription={licensingTransactionsData.ctaDescription}
            ctaButtonText={licensingTransactionsData.ctaButtonText}
            phoneNumber={licensingTransactionsData.phoneNumber}
            technicalInnovation={licensingTransactionsData.technicalInnovation}
        />
    );
}
