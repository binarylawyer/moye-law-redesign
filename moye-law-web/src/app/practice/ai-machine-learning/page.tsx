"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Code, Cpu, Database, Layout, Lightbulb, Scale, Check, FileText, Book, Briefcase } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function AIMachineLearningPage() {
    // Refs for scroll animations
    const technologiesRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const personaPathwaysRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const regulatoryRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animations
    useEffect(() => {
        // Make all sections visible initially, then apply animations
        const sections = [
            technologiesRef.current,
            servicesRef.current,
            personaPathwaysRef.current,
            caseStudiesRef.current,
            regulatoryRef.current,
            approachRef.current
        ];

        sections.filter(Boolean).forEach((section) => {
            if (section) {
                // First make sure it's visible
                section.classList.remove('opacity-0');
                section.classList.add('opacity-100');

                // Then add animation class
                setTimeout(() => {
                    section.classList.add('animate-fade-in-slow');
                }, 100);
            }
        });

        // Original animation logic with IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-slow');
                }
            });
        }, { threshold: 0.15 });

        sections.filter(Boolean).forEach((section) => section && observer.observe(section));

        return () => {
            sections.filter(Boolean).forEach((section) => section && observer.unobserve(section));
        };
    }, []);

    // AI Technologies we cover
    const technologies = [
        {
            icon: <Cpu className="h-8 w-8 text-[#003B98]" />,
            title: "Machine Learning Models",
            description: "Legal guidance for development, training, and deployment of ML systems, including IP protection and data rights management.",
            color: "border-[#003B98]",
            bgColor: "bg-[#003B98]/5"
        },
        {
            icon: <Database className="h-8 w-8 text-[#D6001C]" />,
            title: "Data Processing & Analytics",
            description: "Compliance frameworks for data collection, processing, and monetization strategies in AI applications.",
            color: "border-[#D6001C]",
            bgColor: "bg-[#D6001C]/5"
        },
        {
            icon: <Code className="h-8 w-8 text-[#FFEB80]" />,
            title: "AI Software & Infrastructure",
            description: "Legal structures for AI platforms, development environments, and deployment infrastructures.",
            color: "border-[#FFEB80]",
            bgColor: "bg-[#FFEB80]/5"
        },
        {
            icon: <Layout className="h-8 w-8 text-[#4D80D4]" />,
            title: "Generative AI Systems",
            description: "Specialized guidance on intellectual property issues, output ownership, and licensing for generative AI technologies.",
            color: "border-[#4D80D4]",
            bgColor: "bg-[#4D80D4]/5"
        }
    ];

    // Specialized Services
    const services = [
        {
            icon: <Shield className="h-8 w-8 text-[#D6001C]" />,
            title: "AI Governance Frameworks",
            description: "Comprehensive governance structures that balance innovation with appropriate oversight, compliance, and risk management for AI systems.",
            color: "border-[#D6001C]"
        },
        {
            icon: <FileText className="h-8 w-8 text-[#003B98]" />,
            title: "Model Licensing & IP",
            description: "Sophisticated licensing frameworks that protect AI assets while enabling strategic deployment, integration, and monetization.",
            color: "border-[#003B98]"
        },
        {
            icon: <Scale className="h-8 w-8 text-[#FFEB80]" />,
            title: "Regulatory Compliance",
            description: "Navigation of evolving AI regulations across jurisdictions, with emphasis on proactive compliance and engagement with regulatory stakeholders.",
            color: "border-[#FFEB80]"
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-[#4D80D4]" />,
            title: "AI Risk Assessment",
            description: "Methodical evaluation of technical, legal, and ethical risks associated with AI deployment, with tailored mitigation strategies.",
            color: "border-[#4D80D4]"
        }
    ];

    // Persona-specific pathways
    const personaPathways = [
        {
            persona: "For Tech Innovators",
            icon: <Code className="h-8 w-8 text-[#4D80D4]" />,
            heading: "Innovation Protection",
            description: "We craft legal frameworks that secure your AI innovations while enabling efficient development and deployment cycles. Our approach balances IP protection with practical development needs.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]",
            checks: [
                "Agile-friendly IP protocols",
                "Developer-oriented licensing",
                "Open source compliance strategies",
                "Technical due diligence support"
            ]
        },
        {
            persona: "For Enterprise Executives",
            icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
            heading: "Strategic Implementation",
            description: "We develop comprehensive legal structures for enterprise AI adoption that address risk management, compliance obligations, and integration with existing systems and processes.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]",
            checks: [
                "Board-level governance frameworks",
                "Cross-departmental compliance",
                "Vendor management protocols",
                "Risk-calibrated implementation"
            ]
        },
        {
            persona: "For Legacy Planners",
            icon: <Book className="h-8 w-8 text-[#FFEB80]" />,
            heading: "Future-Proof Strategies",
            description: "We design sophisticated approaches to AI implementation that prioritize long-term stability, governance, and multi-generational planning for family offices and wealth preservation.",
            color: "border-[#FFEB80]",
            textColor: "text-black",
            checks: [
                "Institutional knowledge preservation",
                "Multi-generational governance",
                "Legacy integration frameworks",
                "Privacy-first implementation"
            ]
        }
    ];

    // Case Studies
    const caseStudies = [
        {
            title: "AI Governance Framework for FinTech Platform",
            sector: "Financial Technology",
            description: "Developed a comprehensive governance structure for an AI-driven investment analytics platform, addressing model validation, explainability, compliance reporting, and ethical considerations.",
            outcome: "The framework enabled clear delineation of responsibilities, systematic risk management, and provided a foundation for compliance with emerging AI regulations.",
            color: "border-t-[#D6001C]"
        },
        {
            title: "Machine Learning Model Licensing Program",
            sector: "Healthcare Technology",
            description: "Designed a specialized licensing framework for proprietary diagnostic algorithms that balanced IP protection with healthcare provider implementation needs and regulatory requirements.",
            outcome: "The program created a scalable monetization structure while addressing the unique needs of healthcare implementation and patient data protection.",
            color: "border-t-[#4D80D4]"
        }
    ];

    // Regulatory Focus Areas
    const regulatoryAreas = [
        {
            title: "Bias & Fairness",
            description: "Legal frameworks addressing algorithmic bias, fairness metrics, and testing protocols for AI systems.",
            icon: <Scale className="h-8 w-8 text-[#D6001C]" />,
            color: "text-[#D6001C]"
        },
        {
            title: "Transparency & Explainability",
            description: "Compliance approaches for AI transparency regulations, focusing on appropriate disclosure and explanation mechanisms.",
            icon: <Lightbulb className="h-8 w-8 text-[#003B98]" />,
            color: "text-[#003B98]"
        },
        {
            title: "Privacy & Data Protection",
            description: "Structured methodologies for ensuring AI systems comply with evolving data protection regulations globally.",
            icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
            color: "text-black"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Mondrian-inspired design */}
            <section className="pt-32 md:pt-40 pb-16">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row">
                        {/* Mondrian composition on left */}
                        <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                            <MondrianClassicComposition />
                        </div>

                        {/* Added spacing between Mondrian and content */}
                        <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>

                        {/* White content block */}
                        <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
                            <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">
                                AI & Machine Learning
                            </h1>
                            <p className="text-xl text-black/80">
                                Legal frameworks for artificial intelligence that balance innovation with responsible governance and regulatory compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Technologies Section */}
            <section
                ref={technologiesRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">AI Technologies We Cover</h2>
                        <p className="text-gray-700">Our expertise spans the full spectrum of artificial intelligence and machine learning technologies, with specialized legal approaches for each domain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`border-2 ${tech.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${tech.bgColor} h-full`}
                            >
                                <div className="mb-6">
                                    {tech.icon}
                                </div>
                                <h3 className="font-display text-xl text-black mb-4">{tech.title}</h3>
                                <p className="text-gray-700">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services Section */}
            <section
                ref={servicesRef}
                className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Specialized AI Legal Services</h2>
                        <p className="text-gray-700">Our practice offers tailored legal services designed specifically for the unique challenges of artificial intelligence development, deployment, and governance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex gap-6 p-6 rounded-md hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div className={`flex-shrink-0 p-3 rounded-md ${service.color} bg-white`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-black mb-2">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Persona Pathways */}
            <section
                ref={personaPathwaysRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your AI Journey</h2>
                        <p className="text-gray-700">Our approach adapts to your specific relationship with artificial intelligence technology, providing tailored guidance that aligns with your objectives.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {personaPathways.map((path, index) => (
                            <div
                                key={index}
                                className={`border-l-4 ${path.color} p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex-shrink-0">
                                        {path.icon}
                                    </div>
                                    <p className={`${path.textColor} font-medium`}>{path.persona}</p>
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{path.heading}</h3>
                                <p className="text-gray-700 mb-6">{path.description}</p>
                                <div className="mt-auto">
                                    <h4 className="font-medium text-black mb-4">Strategic Elements:</h4>
                                    <ul className="space-y-2">
                                        {path.checks.map((check, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{check}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section
                ref={caseStudiesRef}
                className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured AI Work</h2>
                        <p className="text-gray-700">Examples of our specialized legal approach to artificial intelligence challenges and opportunities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className={`bg-white ${study.color} p-8 shadow-sm border-t-4`}
                            >
                                <h3 className="font-display text-2xl text-black mb-3">{study.title}</h3>
                                <p className="text-sm text-gray-500 mb-6">{study.sector}</p>
                                <p className="text-gray-700 mb-6">{study.description}</p>
                                <div className="border-l-4 border-gray-200 pl-4">
                                    <p className="italic text-gray-600">{study.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regulatory Focus Areas */}
            <section
                ref={regulatoryRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">AI Regulatory Focus</h2>
                        <p className="text-gray-700">We provide sophisticated guidance for navigating the complex and evolving regulatory landscape for artificial intelligence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {regulatoryAreas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 shadow-sm text-center"
                            >
                                <div className="flex justify-center mb-6">
                                    {area.icon}
                                </div>
                                <h3 className={`font-display text-xl mb-4 ${area.color}`}>{area.title}</h3>
                                <p className="text-gray-700">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section
                ref={approachRef}
                className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our AI Law Approach</h2>
                        <p className="text-gray-700">We balance technical understanding with legal expertise to address the unique challenges of artificial intelligence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Technical Depth</h3>
                            <p className="text-gray-700 mb-4">
                                Our practice maintains substantive technical understanding of AI technologies, enabling us to address legal issues with appropriate technical context and practical relevance.
                            </p>
                            <p className="text-gray-700">
                                This foundation allows us to craft legal solutions that align with engineering realities while protecting your strategic interests.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Forward-Looking Guidance</h3>
                            <p className="text-gray-700 mb-4">
                                We maintain close engagement with evolving AI regulations and ethical frameworks to provide guidance that addresses current compliance while positioning you for future developments.
                            </p>
                            <p className="text-gray-700">
                                This proactive approach helps minimize regulatory disruption to your AI initiatives while demonstrating responsible innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50 relative">
                <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#4D80D4] z-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>

                <div className="container mx-auto px-6 max-w-4xl text-center relative">
                    <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your AI Legal Strategy</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Schedule a consultation to discuss how we can address your specific artificial intelligence legal needs with sophisticated, tailored guidance.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#FFEB80] border-4 border-black text-black font-display text-lg hover:bg-[#D6001C] hover:text-white transition-colors mondrian-button"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
