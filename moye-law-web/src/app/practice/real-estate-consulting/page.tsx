"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Building, Home, LineChart, MapPin, Target, Calculator, Layers, PieChart, Briefcase, Users } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function RealEstateConsultingPage() {
    // Refs for scroll animations
    const servicesRef = useRef<HTMLDivElement>(null);
    const expertiseRef = useRef<HTMLDivElement>(null);
    const personaPathwaysRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animations
    useEffect(() => {
        // Make all sections visible initially, then apply animations
        const sections = [
            servicesRef.current,
            expertiseRef.current,
            personaPathwaysRef.current,
            caseStudiesRef.current,
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

    // Consulting Services
    const consultingServices = [
        {
            icon: <Target className="h-8 w-8 text-[#4D80D4]" />,
            title: "Investment Strategy",
            description: "Strategic guidance on real estate portfolio development, property selection, and investment timing to optimize returns while mitigating risks.",
            color: "border-[#4D80D4]",
            bgColor: "bg-[#4D80D4]/5"
        },
        {
            icon: <Calculator className="h-8 w-8 text-[#D6001C]" />,
            title: "Financial Modeling",
            description: "Sophisticated financial analysis of potential acquisitions, developments, and portfolio performance with scenario planning.",
            color: "border-[#D6001C]",
            bgColor: "bg-[#D6001C]/5"
        },
        {
            icon: <Layers className="h-8 w-8 text-[#FFEB80]" />,
            title: "Development Advisory",
            description: "Comprehensive guidance on project feasibility, entitlement strategy, and development implementation to maximize project value.",
            color: "border-[#FFEB80]",
            bgColor: "bg-[#FFEB80]/5"
        },
        {
            icon: <PieChart className="h-8 w-8 text-[#00A650]" />,
            title: "Portfolio Optimization",
            description: "Strategic assessment and restructuring of real estate holdings to enhance performance, diversification, and alignment with investment objectives.",
            color: "border-[#00A650]",
            bgColor: "bg-[#00A650]/5"
        }
    ];

    // Areas of Expertise
    const expertiseAreas = [
        {
            icon: <Building className="h-8 w-8 text-[#D6001C]" />,
            title: "Commercial Properties",
            items: ["Office buildings", "Retail centers", "Industrial facilities", "Mixed-use developments"],
            color: "border-[#D6001C]"
        },
        {
            icon: <Home className="h-8 w-8 text-[#4D80D4]" />,
            title: "Residential Investments",
            items: ["Multi-family complexes", "Luxury developments", "Build-to-rent communities", "Residential portfolios"],
            color: "border-[#4D80D4]"
        },
        {
            icon: <MapPin className="h-8 w-8 text-[#FFEB80]" />,
            title: "Land & Development",
            items: ["Development sites", "Land entitlement", "Master-planned communities", "Redevelopment opportunities"],
            color: "border-[#FFEB80]"
        }
    ];

    // Client-specific pathways
    const personaPathways = [
        {
            persona: "For Institutional Investors",
            icon: <Briefcase className="h-8 w-8 text-[#4D80D4]" />,
            heading: "Portfolio Strategy",
            description: "We provide sophisticated analysis and strategic guidance for institutional investors seeking to optimize large-scale real estate portfolios.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]",
            checks: [
                "Market cycle positioning",
                "Sector allocation optimization",
                "Risk-adjusted return enhancement",
                "ESG integration strategies"
            ]
        },
        {
            persona: "For Developers",
            icon: <LineChart className="h-8 w-8 text-[#D6001C]" />,
            heading: "Project Viability",
            description: "We deliver critical insights on project feasibility, market positioning, and development strategies to maximize project success.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]",
            checks: [
                "Market demand assessment",
                "Financial feasibility analysis",
                "Entitlement strategy",
                "Development phasing optimization"
            ]
        },
        {
            persona: "For Family Offices",
            icon: <Users className="h-8 w-8 text-[#FFEB80]" />,
            heading: "Legacy Planning",
            description: "We guide family offices in creating real estate investment strategies that align with multigenerational wealth preservation goals.",
            color: "border-[#FFEB80]",
            textColor: "text-black",
            checks: [
                "Long-term value creation",
                "Tax-efficient structuring",
                "Generational transfer planning",
                "Portfolio diversification"
            ]
        }
    ];

    // Case Studies
    const caseStudies = [
        {
            title: "Urban Office Portfolio Optimization",
            sector: "Commercial Real Estate",
            description: "Conducted comprehensive analysis of a 12-property office portfolio in three major markets to identify value enhancement opportunities and repositioning strategies.",
            outcome: "The implemented recommendations resulted in a 22% increase in portfolio value over 36 months through strategic renovations, tenant repositioning, and selective dispositions.",
            color: "border-t-[#4D80D4]"
        },
        {
            title: "Mixed-Use Development Strategy",
            sector: "Development",
            description: "Provided extensive pre-development consulting for a 15-acre mixed-use project, including market analysis, financial modeling, and phasing recommendations.",
            outcome: "The optimized development strategy increased projected returns by 18% while reducing capital requirements through strategic phasing and partnership structures.",
            color: "border-t-[#D6001C]"
        },
        {
            title: "Multifamily Investment Program",
            sector: "Residential",
            description: "Developed a comprehensive multifamily acquisition strategy for a family office seeking to diversify from commercial holdings into residential investments.",
            outcome: "The program resulted in the successful acquisition of 1,200 units across strategic growth markets, achieving target returns while reducing portfolio volatility.",
            color: "border-t-[#FFEB80]"
        }
    ];

    // Consulting Approach Steps
    const approachSteps = [
        {
            number: "01",
            title: "Objective Definition",
            description: "Clearly establishing investment goals, risk parameters, and performance expectations to guide the consulting engagement.",
            color: "bg-[#D6001C]"
        },
        {
            number: "02",
            title: "Data Analysis",
            description: "Comprehensive review of property, market, and financial data to establish a factual foundation for strategic recommendations.",
            color: "bg-[#4D80D4]"
        },
        {
            number: "03",
            title: "Strategy Development",
            description: "Creation of tailored strategic options with detailed financial modeling and implementation requirements.",
            color: "bg-[#FFEB80]"
        },
        {
            number: "04",
            title: "Implementation Support",
            description: "Ongoing guidance during strategy execution, including refinement based on evolving conditions and opportunities.",
            color: "bg-[#00A650]"
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
                                Real Estate Consulting
                            </h1>
                            <p className="text-xl text-black/80">
                                Strategic advisory services for complex real estate investments, development projects, and portfolio optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Services Grid */}
            <section
                ref={servicesRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Consulting Services</h2>
                        <p className="text-gray-700">Our real estate consulting practice provides sophisticated analysis and strategic guidance across the full spectrum of property types and investment objectives.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {consultingServices.map((service, index) => (
                            <div
                                key={index}
                                className={`border-2 ${service.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${service.bgColor} flex flex-col h-full`}
                            >
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{service.title}</h3>
                                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section
                ref={expertiseRef}
                className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Areas of Expertise</h2>
                        <p className="text-gray-700">Our consulting capabilities span all major property types and investment scenarios, with specialized expertise in high-value and complex situations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {expertiseAreas.map((area, index) => (
                            <div
                                key={index}
                                className={`${area.color} border-2 rounded-md overflow-hidden bg-white`}
                            >
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex items-center mb-4">
                                        {area.icon}
                                        <h3 className="font-display text-xl text-black ml-3">{area.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-2">
                                        {area.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <ArrowRight className="h-4 w-4 text-black mr-2 flex-shrink-0 mt-1" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Pathways */}
            <section
                ref={personaPathwaysRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Client Pathways</h2>
                        <p className="text-gray-700">Our consulting approach is tailored to address the specific needs and objectives of different real estate stakeholders.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personaPathways.map((pathway, index) => (
                            <div
                                key={index}
                                className={`border-t-4 ${pathway.color} p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-10 h-10 rounded-full ${pathway.color.replace('border-', 'bg-')}/10 flex items-center justify-center`}>
                                        {pathway.icon}
                                    </div>
                                    <p className={`${pathway.textColor} font-medium ml-3`}>{pathway.persona}</p>
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{pathway.heading}</h3>
                                <p className="text-gray-700 mb-6">{pathway.description}</p>
                                <ul className="space-y-2">
                                    {pathway.checks.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <ArrowRight className="h-4 w-4 text-black mr-2 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Case Studies</h2>
                        <p className="text-gray-700">Explore how our consulting expertise has created tangible value for real estate investors and developers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className={`${study.color} bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-4">
                                    {study.sector}
                                </span>
                                <h3 className="font-display text-2xl text-black mb-4">{study.title}</h3>
                                <p className="text-gray-700 mb-6">{study.description}</p>
                                <div className="border-l-4 border-gray-200 pl-4">
                                    <p className="italic text-gray-600 text-sm">
                                        <span className="font-medium text-black">Outcome:</span> {study.outcome}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consulting Approach */}
            <section
                ref={approachRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Consulting Approach</h2>
                        <p className="text-gray-700">We employ a structured methodology that balances analytical rigor with practical implementation to deliver actionable real estate strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {approachSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-8 flex flex-col"
                            >
                                <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-display text-xl mb-6`}>
                                    {step.number}
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-black text-black font-medium hover:bg-[#FFEB80] transition-colors"
                        >
                            Discuss Your Real Estate Strategy <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Related Services</h2>
                        <p className="text-gray-700">Explore our complementary real estate legal services that work alongside our consulting expertise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="border-2 border-[#4D80D4] p-8 rounded-md bg-[#4D80D4]/5">
                            <h3 className="font-display text-2xl text-black mb-4">Real Estate Transactions</h3>
                            <p className="text-gray-700 mb-6">Comprehensive legal guidance for buying, selling, and leasing commercial and high-value residential properties.</p>
                            <Link
                                href="/practice/real-estate-transactions"
                                className="inline-flex items-center text-black hover:text-[#4D80D4] transition-colors font-medium"
                            >
                                View service <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        <div className="border-2 border-[#D6001C] p-8 rounded-md bg-[#D6001C]/5">
                            <h3 className="font-display text-2xl text-black mb-4">Real Estate</h3>
                            <p className="text-gray-700 mb-6">Our main real estate practice covering all aspects of property law, ownership structures, and development.</p>
                            <Link
                                href="/practice/real-estate"
                                className="inline-flex items-center text-black hover:text-[#D6001C] transition-colors font-medium"
                            >
                                View practice <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        <div className="border-2 border-[#FFEB80] p-8 rounded-md bg-[#FFEB80]/5">
                            <h3 className="font-display text-2xl text-black mb-4">Estate Planning</h3>
                            <p className="text-gray-700 mb-6">Strategic planning for real estate assets within comprehensive estate and wealth transfer structures.</p>
                            <Link
                                href="/services/estate-planning"
                                className="inline-flex items-center text-black hover:text-black transition-colors font-medium"
                            >
                                View service <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
