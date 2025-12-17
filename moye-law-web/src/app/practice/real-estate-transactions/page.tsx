"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Building, Home, FileText, BarChart, MapPin, Key, Scale, Check, Briefcase, DollarSign, Users } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function RealEstateTransactionsPage() {
    // Refs for scroll animations
    const transactionTypesRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const personaPathwaysRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);
    const documentationRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animations
    useEffect(() => {
        // Make all sections visible initially, then apply animations
        const sections = [
            transactionTypesRef.current,
            servicesRef.current,
            personaPathwaysRef.current,
            caseStudiesRef.current,
            approachRef.current,
            documentationRef.current
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

    // Transaction Types
    const transactionTypes = [
        {
            icon: <Building className="h-8 w-8 text-[#003B98]" />,
            title: "Commercial Acquisitions",
            description: "Comprehensive legal guidance for purchasing commercial properties, including office buildings, retail centers, and industrial facilities.",
            color: "border-[#003B98]",
            bgColor: "bg-[#003B98]/5"
        },
        {
            icon: <Home className="h-8 w-8 text-[#D6001C]" />,
            title: "High-Value Residential",
            description: "Specialized transaction support for luxury residences, multi-family properties, and high-value residential assets.",
            color: "border-[#D6001C]",
            bgColor: "bg-[#D6001C]/5"
        },
        {
            icon: <MapPin className="h-8 w-8 text-[#FFEB80]" />,
            title: "Development Projects",
            description: "Transaction structuring for land acquisition, entitlement processes, and development project implementation.",
            color: "border-[#FFEB80]",
            bgColor: "bg-[#FFEB80]/5"
        },
        {
            icon: <BarChart className="h-8 w-8 text-[#4D80D4]" />,
            title: "Investment Properties",
            description: "Strategic guidance for acquiring income-producing properties, REITs, and real estate investment structures.",
            color: "border-[#4D80D4]",
            bgColor: "bg-[#4D80D4]/5"
        }
    ];

    // Specialized Services
    const services = [
        {
            icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
            title: "Transaction Due Diligence",
            description: "Comprehensive property investigation, title review, survey analysis, and environmental assessment to identify and mitigate risks.",
            color: "border-[#D6001C]"
        },
        {
            icon: <Scale className="h-8 w-8 text-[#003B98]" />,
            title: "Contract Negotiation",
            description: "Strategic negotiation of purchase agreements, leases, and transaction documents that protect client interests while facilitating successful closings.",
            color: "border-[#003B98]"
        },
        {
            icon: <Key className="h-8 w-8 text-[#FFEB80]" />,
            title: "Closing Coordination",
            description: "Meticulous management of the closing process, including document preparation, escrow coordination, and resolution of last-minute issues.",
            color: "border-[#FFEB80]"
        },
        {
            icon: <Building className="h-8 w-8 text-[#4D80D4]" />,
            title: "Entity Structuring",
            description: "Strategic creation of ownership entities, joint ventures, and investment vehicles optimized for liability protection and tax efficiency.",
            color: "border-[#4D80D4]"
        }
    ];

    // Documentation Focus Areas
    const documentationAreas = [
        {
            title: "Purchase & Sale Agreements",
            description: "Precisely crafted agreements that address property-specific considerations, contingencies, and risk allocation.",
            icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
            color: "text-[#D6001C]"
        },
        {
            title: "Financing Documentation",
            description: "Strategic review and negotiation of loan agreements, mortgages, and security instruments that align with transaction objectives.",
            icon: <DollarSign className="h-8 w-8 text-[#003B98]" />,
            color: "text-[#003B98]"
        },
        {
            title: "Title & Survey Analysis",
            description: "Detailed examination of title issues, easements, restrictions, and survey matters affecting property rights and usage.",
            icon: <MapPin className="h-8 w-8 text-[#FFEB80]" />,
            color: "text-black"
        }
    ];

    // Persona-specific pathways
    const personaPathways = [
        {
            persona: "For Investors",
            icon: <DollarSign className="h-8 w-8 text-[#4D80D4]" />,
            heading: "Investment Protection",
            description: "We structure real estate transactions that optimize your investment objectives while providing robust protection against legal and operational risks.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]",
            checks: [
                "Due diligence prioritization",
                "Investment entity optimization",
                "Contingency protection",
                "Exit strategy planning"
            ]
        },
        {
            persona: "For Business Owners",
            icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
            heading: "Operational Success",
            description: "We manage property acquisitions with a focus on your business operations, ensuring the transaction supports your long-term business objectives.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]",
            checks: [
                "Operational continuity planning",
                "Zoning and use verification",
                "Tenant relationship management",
                "Expansion capability assessment"
            ]
        },
        {
            persona: "For Family Offices",
            icon: <Users className="h-8 w-8 text-[#FFEB80]" />,
            heading: "Legacy Property Acquisition",
            description: "We guide family offices through sophisticated real estate transactions with attention to multi-generational planning, governance, and value preservation.",
            color: "border-[#FFEB80]",
            textColor: "text-black",
            checks: [
                "Family governance integration",
                "Privacy-preserving structures",
                "Tax-efficient acquisition",
                "Long-term management planning"
            ]
        }
    ];

    // Case Studies
    const caseStudies = [
        {
            title: "Mixed-Use Development Acquisition",
            sector: "Commercial Real Estate",
            description: "Structured and negotiated the acquisition of a complex mixed-use development project with multiple sellers, complicated entitlements, and substantial development potential.",
            outcome: "The transaction successfully closed with optimized risk allocation, preserved development rights, and strategic phasing that enhanced the investment returns.",
            color: "border-t-[#D6001C]"
        },
        {
            title: "Multi-Property Portfolio Transaction",
            sector: "Investment Properties",
            description: "Coordinated the simultaneous acquisition of a 12-property portfolio across 5 states, involving complex financing, multiple tenant relationships, and varying local regulations.",
            outcome: "The transaction closed on schedule with a streamlined approach that maintained consistency while addressing jurisdiction-specific requirements and tenant concerns.",
            color: "border-t-[#4D80D4]"
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
                                Real Estate Transactions
                            </h1>
                            <p className="text-xl text-black/80">
                                Sophisticated legal guidance for property acquisitions, dispositions, and financing—where precision meets strategic vision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transaction Types Section */}
            <section
                ref={transactionTypesRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Transaction Types</h2>
                        <p className="text-gray-700">Our expertise spans diverse real estate transaction categories, with tailored approaches for each property type and acquisition context.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transactionTypes.map((type, index) => (
                            <div
                                key={index}
                                className={`border-2 ${type.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${type.bgColor} h-full`}
                            >
                                <div className="mb-6">
                                    {type.icon}
                                </div>
                                <h3 className="font-display text-xl text-black mb-4">{type.title}</h3>
                                <p className="text-gray-700">{type.description}</p>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Transaction Services</h2>
                        <p className="text-gray-700">Our practice offers comprehensive legal services designed specifically for all phases of real estate transactions.</p>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Transaction Journey</h2>
                        <p className="text-gray-700">Our approach adapts to your specific real estate objectives, providing tailored transaction guidance that aligns with your goals.</p>
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
                                    <h4 className="font-medium text-black mb-4">Focus Areas:</h4>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Transactions</h2>
                        <p className="text-gray-700">Examples of our sophisticated approach to complex real estate acquisitions and dispositions.</p>
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

            {/* Documentation Focus */}
            <section
                ref={documentationRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Documentation Focus</h2>
                        <p className="text-gray-700">We provide sophisticated guidance for developing and negotiating critical transaction documents.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {documentationAreas.map((area, index) => (
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Transaction Approach</h2>
                        <p className="text-gray-700">We blend attention to detail with strategic thinking to address the unique challenges of real estate transactions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Thoroughness</h3>
                            <p className="text-gray-700 mb-4">
                                Our transaction practice prioritizes exhaustive due diligence and meticulous documentation that anticipates potential issues and protects against future complications.
                            </p>
                            <p className="text-gray-700">
                                This comprehensive approach minimizes post-closing surprises and provides a solid foundation for property ownership and operation.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Strategic Perspective</h3>
                            <p className="text-gray-700 mb-4">
                                We approach each transaction with attention to your broader objectives, ensuring the legal structure and terms support your long-term plans for the property.
                            </p>
                            <p className="text-gray-700">
                                This strategic focus leads to transactions that not only close successfully but also create lasting value for your real estate portfolio.
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
                    <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your Transaction</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Schedule a consultation to discuss how we can address your specific real estate transaction needs with sophisticated, tailored guidance.
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
