"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Database, Cpu, Award, BarChart } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

const EmergingTechnologyHub = () => {
    // Refs for scroll animations
    const galleryRef = useRef<HTMLDivElement>(null);
    const personaRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animations
    useEffect(() => {
        const sections = [galleryRef.current, personaRef.current, caseStudiesRef.current, servicesRef.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.filter(Boolean).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.filter(Boolean).forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Emerging Tech Practice Areas
    const practiceAreas = [
        {
            id: "ai-machine-learning",
            title: "AI & Machine Learning",
            description: "Legal frameworks for artificial intelligence development, deployment, and governance, addressing intellectual property, regulatory compliance, and ethical considerations.",
            icon: <Cpu className="h-10 w-10 text-[#4D80D4]" />,
            path: "/practice/ai-machine-learning",
            color: "border-[#4D80D4]",
            bgcolor: "bg-[#4D80D4]/5",
            textColor: "text-[#4D80D4]"
        },
        {
            id: "blockchain-digital-assets",
            title: "Blockchain & Digital Assets",
            description: "Comprehensive legal guidance for blockchain technologies, cryptocurrencies, NFTs, and decentralized applications, addressing regulatory, security, and transactional considerations.",
            icon: <Database className="h-10 w-10 text-[#D6001C]" />,
            path: "/practice/blockchain-digital-assets",
            color: "border-[#D6001C]",
            bgcolor: "bg-[#D6001C]/5",
            textColor: "text-[#D6001C]"
        },
        {
            id: "innovation-patent-law",
            title: "Innovation & Patent Law",
            description: "Strategic approaches to securing patent protection for novel technologies, balancing technical disclosure with appropriate scope of protection and commercial objectives.",
            icon: <Award className="h-10 w-10 text-[#FFEB80]" />,
            path: "/practice/innovation-patent-law",
            color: "border-[#FFEB80]",
            bgcolor: "bg-[#FFEB80]/5",
            textColor: "text-black"
        }
    ];

    // Related Services
    const relatedServices = [
        {
            id: "digital-asset-tech-protection",
            title: "Digital Asset & Emerging Technology",
            description: "Structured services for protecting technological innovation through strategic utilization of intellectual property mechanisms.",
            path: "/services/digital-asset-tech-protection",
            color: "border-[#00A650]",
            bgcolor: "bg-[#00A650]/5"
        },
        {
            id: "ip-consulting-strategy",
            title: "IP Consulting & Strategy",
            description: "Strategic planning for maximizing the value and protection of intellectual property in emerging technology sectors.",
            path: "/services/ip-consulting-strategy",
            color: "border-[#4D80D4]",
            bgcolor: "bg-[#4D80D4]/5"
        },
        {
            id: "licensing-transactions",
            title: "Licensing & Transactions",
            description: "Specialized services for negotiating and structuring technology licensing agreements and partnerships in emerging fields.",
            path: "/services/licensing-transactions",
            color: "border-[#D6001C]",
            bgcolor: "bg-[#D6001C]/5"
        }
    ];

    // Persona pathways
    const personaPathways = [
        {
            persona: "For Tech Innovators",
            heading: "Protection & Deployment",
            description: "Legal frameworks that balance robust protection for your innovations with efficient paths to market adoption and scalability.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]"
        },
        {
            persona: "For Established Enterprises",
            heading: "Integration & Compliance",
            description: "Strategic approaches to incorporating emerging technologies within existing business structures while managing regulatory considerations.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]"
        },
        {
            persona: "For Investors",
            heading: "Risk Management",
            description: "Due diligence frameworks and investment structures that address the unique risk profiles of emerging technology ventures.",
            color: "border-[#00A650]",
            textColor: "text-[#00A650]"
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
                                Emerging Technology
                            </h1>
                            <p className="text-xl text-black/80">
                                Sophisticated legal guidance at the frontier of innovation—where visionary technology meets strategic protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Gallery */}
            <section
                ref={galleryRef}
                className="py-24 bg-gray-50 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Practice Specializations</h2>
                        <p className="text-gray-700">Explore our specialized emerging technology practice areas, each addressing distinct aspects of innovation protection and deployment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {practiceAreas.map((area) => (
                            <div
                                key={area.id}
                                className={`border-2 ${area.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${area.bgcolor} flex flex-col h-full`}
                            >
                                <div className="mb-6">
                                    {area.icon}
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{area.title}</h3>
                                <p className="text-gray-700 mb-6 flex-grow">{area.description}</p>
                                <Link
                                    href={area.path}
                                    className={`mt-auto inline-flex items-center text-black hover:${area.textColor || 'text-[#D6001C]'} transition-colors font-medium`}
                                >
                                    Explore practice <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Journey Pathways */}
            <section
                ref={personaRef}
                className="py-24 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Client Pathways</h2>
                        <p className="text-gray-700">Our emerging technology expertise adapts to your specific innovation context and objectives.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personaPathways.map((pathway, index) => (
                            <div
                                key={index}
                                className={`border-l-4 ${pathway.color} p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                <p className={`${pathway.textColor} font-medium mb-4`}>{pathway.persona}</p>
                                <h3 className="font-display text-2xl text-black mb-4">{pathway.heading}</h3>
                                <p className="text-gray-700">{pathway.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies - MOMA-style exhibition */}
            <section
                ref={caseStudiesRef}
                className="py-24 bg-gray-50 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Work</h2>
                        <p className="text-gray-700">Explore how our emerging technology expertise translates into tangible outcomes for innovative clients.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Case Study 1 */}
                        <div className="bg-white border-t-4 border-[#4D80D4] p-8 shadow-sm">
                            <h3 className="font-display text-2xl text-black mb-4">AI Model Governance Framework</h3>
                            <p className="text-sm text-gray-500 mb-6">Machine Learning Venture</p>
                            <p className="text-gray-700 mb-6">
                                Developed a comprehensive governance framework for an AI enterprise, addressing data usage, model transparency, bias mitigation, and compliance with emerging regulations.
                            </p>
                            <div className="border-l-4 border-gray-200 pl-4">
                                <p className="italic text-gray-600">
                                    &quot;The framework allowed us to develop responsibly while maintaining the agility needed in a rapidly evolving technological landscape.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-white border-t-4 border-[#D6001C] p-8 shadow-sm">
                            <h3 className="font-display text-2xl text-black mb-4">Blockchain Platform Regulatory Strategy</h3>
                            <p className="text-sm text-gray-500 mb-6">Fintech Startup</p>
                            <p className="text-gray-700 mb-6">
                                Crafted a multi-jurisdictional regulatory strategy for a blockchain-based financial platform, enabling compliant operation while maintaining the technological advantages of distributed architecture.
                            </p>
                            <div className="border-l-4 border-gray-200 pl-4">
                                <p className="italic text-gray-600">
                                    &quot;The approach allowed us to navigate the complex regulatory landscape while preserving our core innovation and competitive advantage.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Section */}
            <section
                ref={servicesRef}
                className="py-24 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Related Services</h2>
                        <p className="text-gray-700">Explore our specialized service offerings that complement our emerging technology practice areas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedServices.map((service) => (
                            <div
                                key={service.id}
                                className={`border-2 ${service.color} p-8 rounded-md transition-all duration-300 hover:shadow-md ${service.bgcolor}`}
                            >
                                <h3 className="font-display text-2xl text-black mb-4">{service.title}</h3>
                                <p className="text-gray-700 mb-6">{service.description}</p>
                                <Link
                                    href={service.path}
                                    className="inline-flex items-center text-black hover:text-[#D6001C] transition-colors font-medium"
                                >
                                    View service <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Mondrian-inspired design */}
            <section className="py-24 bg-gray-50 relative">
                <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#D6001C] z-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>

                <div className="container mx-auto px-6 max-w-4xl text-center relative">
                    <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Advance Your Innovation</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Begin a conversation about securing your technological innovations with legal strategies that protect while enabling growth and adoption.
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
};

export default EmergingTechnologyHub;
