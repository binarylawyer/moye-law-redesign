"use client";

import React from 'react';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { ServiceData } from '@/types/services';
import { Brain, Target, TrendingUp, Compass } from 'lucide-react';

const ipConsultingStrategyData: ServiceData = {
    title: "IP Consulting & Strategy",
    description: "Strategic intellectual property guidance for innovators, family enterprises, and wealth preservation—where vision meets protection.",

    features: [
        {
            icon: 'file-text',
            title: "IP Portfolio Architecture",
            description: "Comprehensive evaluation and strategic design of intellectual property frameworks that align with both immediate innovation goals and long-term legacy planning."
        },
        {
            icon: 'lightbulb',
            title: "Strategic IP Monetization",
            description: "Crafting sophisticated pathways for intellectual property value extraction through licensing frameworks, strategic partnerships, and market positioning."
        },
        {
            icon: 'scale',
            title: "IP Valuation & Transaction Intelligence",
            description: "Precision analysis of intellectual property value across contexts, with discreet assessment of acquisition opportunities and risk profiles."
        },
        {
            icon: 'globe',
            title: "Global IP Portfolio Governance",
            description: "Orchestrating cohesive international strategies to secure intellectual assets across jurisdictions while navigating cultural and regulatory landscapes."
        }
    ],

    process: {
        title: "Our Strategic Consulting Process",
        steps: [
            { title: "Discovery", description: "Beginning with a nuanced evaluation of your intellectual property landscape within the context of your industry position." },
            { title: "Strategy", description: "Architecting a comprehensive intellectual property strategy that balances protection and monetization potential." },
            { title: "Architecture", description: "Creating a detailed execution framework with clear milestones and responsibility allocation." },
            { title: "Advisory", description: "Providing ongoing counsel during implementation, serving as the orchestrating intelligence between stakeholders." },
            { title: "Refinement", description: "Conducting periodic strategic reviews ensuring the strategy evolves with emerging technologies." }
        ]
    },

    relatedServices: [
        {
            title: "Licensing & Strategic Transactions",
            path: "/services/licensing-transactions",
            description: "Crafting sophisticated frameworks for intellectual property monetization."
        },
        {
            title: "Digital Asset & Emerging Technology",
            path: "/services/digital-asset-tech-protection",
            description: "Implementing protection mechanisms for digital assets based on strategic IP guidance."
        },
        {
            title: "Art & Entertainment Law",
            path: "/services/art-entertainment-law",
            description: "Creating bespoke intellectual property strategies for creative works."
        }
    ],

    featuredContent: {
        title: "Intellectual Property as Strategic Architecture",
        content: [
            "In a landscape where innovation increasingly defines enterprise value, intellectual property transcends legal designation to become the structural framework of organizational worth. Our approach recognizes IP not merely as assets to protect, but as strategic instruments to deploy with precision.",
            "The IP Consulting & Strategy practice serves visionaries across the spectrum—from technology pioneers redefining industries to family enterprises preserving multi-generational innovation legacies.",
            "Through decades navigating the evolving IP landscape, we've developed methodologies that balance aggressive protection with strategic deployment. This measured approach allows our clients to extract immediate value while preserving long-term optionality."
        ],
        callToAction: "Architect Your IP Strategy",
        imageSrc: "/videos/4 men staring at computer screen.mp4",
        imageAlt: "Innovation team analyzing intellectual property strategy and digital assets"
    },

    considerations: [
        {
            title: "AI-Generated Innovation & IP Rights",
            description: "Navigating the complex intersection of artificial intelligence and intellectual property creation. We help establish clear frameworks for ownership, attribution, and protection of AI-assisted innovations while developing strategies that anticipate regulatory evolution."
        },
        {
            title: "IP Portfolio Succession Planning",
            description: "Architecting robust transitions of intellectual property across generations. We develop governance frameworks that preserve innovation value while ensuring appropriate stewardship of technical knowledge and market positioning."
        },
        {
            title: "Strategic IP Acquisition & Integration",
            description: "Orchestrating intellectual property acquisitions that enhance portfolio coherence and market position. We conduct sophisticated due diligence that evaluates not only legal standing but strategic fit and cultural alignment."
        },
        {
            title: "Global IP Harmonization Strategy",
            description: "Creating unified intellectual property protection that transcends jurisdictional boundaries. We architect global strategies that maintain consistent protection while adapting to local nuances in law, business practice, and enforcement realities."
        },
        {
            title: "IP Risk Mitigation Architecture",
            description: "Building comprehensive risk management systems for intellectual property assets. We develop protocols for monitoring, assessing, and addressing infringement threats, validity challenges, and regulatory shifts."
        }
    ],

    ctaTitle: "Elevate Your Intellectual Property Strategy",
    ctaDescription: "Engage with advisors who understand that effective IP strategy balances technical protection, market positioning, and legacy preservation.",
    ctaButtonText: "Arrange a Confidential Consultation",
    phoneNumber: "(555) 555-IPST",

    technicalInnovation: {
        title: "Technical Innovation in IP Strategy",
        description: "Our approach to intellectual property consulting employs advanced analytical models and proprietary methodologies to maximize the strategic value of your innovations.",
        leftContent: [
            {
                title: "Predictive IP Landscape Analysis",
                description: "We utilize advanced data analytics and machine learning algorithms to forecast intellectual property trends, anticipate competitor movements, and identify emerging technology whitespace."
            },
            {
                title: "Strategic IP Modeling",
                description: "Our proprietary modeling frameworks provide quantitative assessments of portfolio strength, competitive positioning, and market coverage, enabling precision-guided IP investment decisions."
            },
            {
                title: "Innovation Trajectory Mapping",
                description: "We employ sophisticated visualization tools to map innovation pathways, identify critical protection points, and develop comprehensive IP strategies that safeguard future developments."
            }
        ],
        rightContent: [
            {
                icon: <Brain className="h-8 w-8" />,
                label: "AI-Enhanced Analysis",
                color: "bg-indigo-600"
            },
            {
                icon: <Target className="h-8 w-8" />,
                label: "Strategic Mapping",
                color: "bg-teal-600"
            },
            {
                icon: <TrendingUp className="h-8 w-8" />,
                label: "Predictive Analytics",
                color: "bg-amber-500"
            },
            {
                icon: <Compass className="h-8 w-8" />,
                label: "Portfolio Optimization",
                color: "bg-rose-600"
            }
        ]
    }
};

export default function IPPage() {
    return (
        <ServiceTemplate
            serviceName={ipConsultingStrategyData.title}
            serviceId="ip-consulting-strategy"
            description={ipConsultingStrategyData.description}
            featuredContent={ipConsultingStrategyData.featuredContent}
            features={ipConsultingStrategyData.features}
            considerations={ipConsultingStrategyData.considerations}
            process={ipConsultingStrategyData.process}
            relatedServices={ipConsultingStrategyData.relatedServices}
            ctaTitle={ipConsultingStrategyData.ctaTitle}
            ctaDescription={ipConsultingStrategyData.ctaDescription}
            ctaButtonText={ipConsultingStrategyData.ctaButtonText}
            phoneNumber={ipConsultingStrategyData.phoneNumber}
            technicalInnovation={ipConsultingStrategyData.technicalInnovation}
        />
    );
}
