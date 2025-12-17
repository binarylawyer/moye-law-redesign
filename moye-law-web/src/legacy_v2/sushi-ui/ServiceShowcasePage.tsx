import React from 'react';
import SushiServiceTemplate from './templates/SushiServiceTemplate';
import { Shield, Code, Lock } from 'lucide-react';

const ServiceShowcasePage: React.FC = () => {
    // MOCK DATA FOR PREVIEW
    const mockData = {
        title: "Digital Asset Protection",
        description: "A tighter, more efficient layout for the Sushi OS service pages. Less whitespace, more focus.",
        features: [
            { title: "Smart Contracts", description: "Automated legal agreements.", icon: "Code" }, // Icon string logic depends on component
            { title: "Asset Security", description: "Protecting your digital legacy.", icon: "Shield" },
            { title: "Privacy Ops", description: "gdpr compliance systems.", icon: "Lock" }
        ],
        process: {
            title: "Our Process",
            steps: [
                { title: "Audit", description: "We check your code." },
                { title: "Secure", description: "We lock it down." },
                { title: "Monitor", description: "We watch it run." }
            ]
        },
        considerations: [
            { question: "What about Crypto?", answer: "We handle that too." },
            { question: "Jurisdiction?", answer: "Global coverage." }
        ],
        related: [
            { title: "IP Law", description: "Classic protection.", path: "#" },
            { title: "Startup General Counsel", description: "For founders.", path: "#" }
        ]
    };

    return (
        <SushiServiceTemplate
            serviceName={mockData.title}
            description={mockData.description}
            features={mockData.features as any}
            considerations={mockData.considerations}
            process={mockData.process}
            relatedServices={mockData.related}
            // VIDEO HERO DEMO
            useVideoHero={true}
            videoData={{
                ctaText: "Schedule Consultation",
                ctaLink: "/contact"
            }}
        />
    );
};

export default ServiceShowcasePage;
