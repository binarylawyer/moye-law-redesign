"use client";

import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { ServiceData } from '@/types/services';

const probateData: ServiceData = {
    title: "Probate & Estate Administration",
    description: "Guiding your family through the probate process with care, efficiency, and meticulous attention to detail.",

    featuredContent: {
        title: "Settling Estates Smoothly in NY & Westchester",
        content: [
            "Losing a loved one is hard enough – handling the legal estate process shouldn't add more stress. We understand you need a steady hand to navigate probate while you focus on your family.",
            "Moye Law helps executors and families through every step of estate administration in New York, explaining each step in plain English so you're never left in the dark.",
            "Our firm leverages modern tools to streamline probate, using secure online document sharing and software to track deadlines and filings, aiming for quicker resolution and less hassle for you."
        ],
        callToAction: "Ease the burden of probate",
        imageSrc: "/images/services/probate-administration-document.jpg",
        imageAlt: "Professional reviewing estate documents and probate paperwork"
    },

    features: [
        {
            title: "Probate Filing & Court Representation",
            description: "Preparing and filing all required documents in Surrogate's Court and representing you in hearings.",
            icon: "scale"
        },
        {
            title: "Executor Guidance & Support",
            description: "Assisting executors with inventorying assets, paying debts/taxes, and fulfilling their fiduciary duties properly.",
            icon: "check-circle"
        },
        {
            title: "Estate Asset Management & Transfer",
            description: "Helping manage or transfer complex assets like businesses, real estate, and investments during administration.",
            icon: "building"
        },
        {
            title: "Post-Probate Transitions",
            description: "Facilitating asset transfer to beneficiaries and advising on trust funding or continuing administration.",
            icon: "clipboard"
        },
        {
            title: "Multi-State & Ancillary Probate",
            description: "Coordinating the efficient resolution of estates with properties or interests in other states (including Virginia).",
            icon: "globe"
        }
    ],

    considerations: [
        {
            title: "Understanding Probate Necessity",
            description: "Probate is required for assets solely in the deceased's name, while properly structured trusts, joint ownership, and beneficiary designations can avoid probate. Our flat-fee probate assessment evaluates whether simplified proceedings are possible. For tech entrepreneurs with digital assets, we provide specialized guidance. For family-focused clients, we explain how family property transfers work. For wealth preservationists, we analyze tax implications of various transfer methods."
        },
        {
            title: "Probate Timeline & Efficiency",
            description: "While traditional probate in New York can take 6-18 months depending on complexity, our streamlined process using digital document management typically reduces delays by 30%. Our flat-fee probate service includes all court filings with no hidden costs. For busy professionals, we prioritize virtual proceedings. For family stewards, we expedite family home transfers. For legacy-focused clients, we coordinate business continuity during administration."
        },
        {
            title: "Executor Responsibilities & Support",
            description: "An executor must inventory assets, pay debts and taxes, manage estate property, and distribute assets according to the will. Our subscription support service provides ongoing guidance, deadline management, and document preparation throughout your term as executor. This eliminates hourly billing concerns during a lengthy administration and provides peace of mind regardless of your experience level."
        },
        {
            title: "Digital Asset Administration",
            description: "Modern estates increasingly include digital assets like cryptocurrency, online accounts, and digital intellectual property. Our specialized flat-fee digital asset administration service includes identification, access recovery, valuation, and proper transfer of these assets. This service addresses the unique needs of tech-savvy clients while ensuring all beneficiaries receive their proper digital inheritance."
        },
        {
            title: "Multi-Jurisdictional Estate Coordination",
            description: "For estates with assets in multiple states or countries, our multi-jurisdiction service coordinates ancillary probate proceedings at predictable flat rates. This prevents delays often experienced when different attorneys handle different jurisdictions without coordination. The service includes documentation standardization, simultaneous filings, and consolidated reporting to beneficiaries."
        }
    ],

    process: {
        title: "Our Probate Administration Process",
        steps: [
            { title: "Initial Consultation", description: "We meet with the executor/family to review the will, understand the estate, and outline the probate steps." },
            { title: "Court Filing", description: "We prepare and file the necessary petition and supporting documents with the appropriate Surrogate's Court." },
            { title: "Asset Management", description: "We assist the executor in identifying, valuing, and managing estate assets throughout the process." },
            { title: "Debt & Tax Resolution", description: "We guide the executor in notifying creditors, paying valid debts, and filing final tax returns." },
            { title: "Final Distribution & Closing", description: "We oversee the final accounting, distribution of assets to beneficiaries, and formal closing of the estate." }
        ]
    },

    relatedServices: [
        {
            title: "Estate Planning",
            path: "/services/estate-planning",
            description: "Proactive planning to potentially simplify or avoid the probate process for your own estate."
        },
        {
            title: "Elder Law",
            path: "/services/elder-law",
            description: "Addressing issues that may arise during probate related to prior long-term care or Medicaid planning."
        },
        {
            title: "IP Consulting & Strategy",
            path: "/services/ip-consulting-strategy",
            description: "Managing intellectual property assets and digital legacy as part of estate administration."
        }
    ],

    ctaTitle: "Navigate Probate with Clarity and Care",
    ctaDescription: "Our goal is to shoulder the legal burdens of probate so you can focus on healing. We handle the details with precision, keeping you informed and supported.",
    ctaButtonText: "Discuss Estate Administration Needs",
    phoneNumber: "(555) 555-PRBT"
};

export default function ProbatePage() {
    return (
        <ServiceTemplate
            serviceName={probateData.title}
            serviceId="probate-administration"
            description={probateData.description}
            featuredContent={probateData.featuredContent}
            features={probateData.features}
            considerations={probateData.considerations}
            process={probateData.process}
            relatedServices={probateData.relatedServices}
            ctaTitle={probateData.ctaTitle}
            ctaDescription={probateData.ctaDescription}
            ctaButtonText={probateData.ctaButtonText}
            phoneNumber={probateData.phoneNumber}
        />
    );
}
