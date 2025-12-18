"use client";

import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService } from '@/types/services';

const estatePlanningData: ServiceData = {
    title: "Estate Planning",
    description: "Comprehensive wills & trusts with a modern, AI-enhanced approach to safeguard your legacy.",

    featuredContent: {
        title: "Protect Your Family's Future",
        content: [
            "Whether you're building a business, growing your family, or planning for retirement, a solid estate plan is essential to protect what you've earned and the people you love.",
            "Moye Law offers high-net-worth families and entrepreneurs sophisticated estate planning solutions – from wills and trusts to advanced tax strategies – all delivered with the personal touch of a family firm.",
            "Our firm employs cutting-edge tools to enhance our estate planning process. We use AI-assisted document drafting and review, ensuring exceptional accuracy and efficiency.",
            "This technology, combined with our attorneys' meticulous oversight, ensures your plan is airtight and up-to-date."
        ],
        callToAction: "Secure your legacy today",
        imageSrc: "/videos/white-haired-white-jacket-couple.mp4",
        imageAlt: "Senior couple discussing estate planning with their attorney"
    },

    features: [
        {
            title: "Wills & Trusts",
            description: "Custom drafting to ensure your assets pass to heirs according to your wishes, minimizing taxes and hassles.",
            icon: "file-text"
        },
        {
            title: "High-Net-Worth Strategies",
            description: "Advanced techniques like GRATs, FLPs, and dynasty trusts to preserve wealth over generations.",
            icon: "trending-up"
        },
        {
            title: "Business Succession Planning",
            description: "Seamless transition strategies for family businesses or startups – protecting equity and leadership continuity.",
            icon: "briefcase"
        },
        {
            title: "Digital Asset & IP Planning",
            description: "Ensuring cryptocurrencies, online accounts, and intellectual property are secured for your heirs.",
            icon: "cube"
        },
        {
            title: "Charitable & Legacy Planning",
            description: "Structuring philanthropic gifts or foundations as part of your legacy.",
            icon: "heart"
        },
        {
            title: "Multi-State Coordination",
            description: "Licensed in New York and Virginia, we coordinate complex multi-state estate plans seamlessly.",
            icon: "globe"
        }
    ],

    considerations: [
        {
            title: "When To Begin Estate Planning",
            description: "Estate planning should begin the moment you acquire significant assets or have dependents, regardless of age. For tech entrepreneurs, this means addressing equity considerations early. For family stewards, planning should coincide with key life milestones. For wealth preservationists, comprehensive planning should be reviewed annually as tax laws evolve. Our flat-fee model makes it accessible to begin this process without concern for mounting hourly costs."
        },
        {
            title: "Wills vs. Trusts in Modern Planning",
            description: "While a will designates asset distribution through probate, trusts offer additional privacy, control, and probate avoidance. For digital asset holders, specialized trusts can address cryptocurrency and online accounts. For family-focused clients, trusts provide enhanced protection for children and vulnerable beneficiaries. For legacy-minded clients, dynasty trusts and other sophisticated vehicles preserve wealth across generations. Our flat-fee service includes both will and trust options at transparent pricing."
        },
        {
            title: "Technology-Enhanced Documentation",
            description: "Our firm employs advanced technology to draft and analyze estate planning documents with exceptional precision while maintaining the human oversight essential for personalized planning. This approach allows us to offer premium-quality documentation at flat-fee rates that traditional firms cannot match. Digital document management also enables secure, immediate access to your estate plans when needed, ensuring your representatives are never without critical information."
        },
        {
            title: "Digital Asset Protection Strategies",
            description: "Digital assets require specialized planning approaches beyond traditional estate planning. We incorporate provisions for cryptocurrency wallets, NFTs, domain names, social media accounts, and intellectual property. Our subscription service includes regular updates to your digital asset inventory and access protocols, ensuring these valuable assets remain protected as technologies evolve."
        },
        {
            title: "Annual Plan Review & Updates",
            description: "Estate plans require regular review as laws change and life circumstances evolve. Our subscription service includes annual reviews, unlimited minor updates, and priority scheduling for major revisions. This proactive maintenance ensures your plan remains current without unpredictable hourly billing concerns."
        }
    ],

    process: {
        title: "Our Estate Planning Process",
        steps: [
            { title: "Goal Discovery", description: "We start by deeply understanding your family dynamics, financial situation, and legacy aspirations." },
            { title: "Strategy Design", description: "We design a customized estate plan incorporating wills, trusts, and tax strategies tailored to your unique goals." },
            { title: "Document Drafting", description: "Our attorneys draft precise legal documents, enhanced by AI review for maximum accuracy." },
            { title: "Implementation & Funding", description: "We guide you through signing documents and transferring assets to ensure your plan is properly funded." },
            { title: "Regular Review", description: "We establish a schedule for reviewing and updating your plan as laws and your circumstances change." }
        ]
    },

    relatedServices: [
        {
            title: "Elder Law",
            path: "/services/elder-law",
            description: "Guidance on long-term care, Medicaid planning, and healthcare directives for seniors."
        },
        {
            title: "Probate & Administration",
            path: "/services/probate-administration",
            description: "Assisting families with the court process of settling an estate after a loved one passes."
        },
        {
            title: "IP Consulting & Strategy",
            path: "/services/ip-consulting-strategy",
            description: "Protecting and managing intellectual property assets within your overall plan."
        }
    ],

    ctaTitle: "Secure Your Family's Future",
    ctaDescription: "Estate planning can feel daunting, but with Moye Law, you gain peace of mind knowing your legacy is protected. Let's create your plan.",
    ctaButtonText: "Schedule Your Estate Planning Consultation",
    phoneNumber: "(555) 555-PLAN"
};

export default function EstatePlanningPage() {
    return (
        <ServiceTemplate
            serviceName={estatePlanningData.title}
            serviceId="estate-planning"
            description={estatePlanningData.description}
            featuredContent={estatePlanningData.featuredContent}
            features={estatePlanningData.features}
            considerations={estatePlanningData.considerations}
            process={estatePlanningData.process}
            relatedServices={estatePlanningData.relatedServices}
            ctaTitle={estatePlanningData.ctaTitle}
            ctaDescription={estatePlanningData.ctaDescription}
            ctaButtonText={estatePlanningData.ctaButtonText}
            phoneNumber={estatePlanningData.phoneNumber}
        />
    );
}
