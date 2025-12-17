"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Landmark, History, FileText, Briefcase, Database, Laptop, Home, Users, TrendingUp, Check, ChevronDown, ChevronUp, Award, BarChart } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

// Helper for scroll animations
const EstateLegacy = () => {
    // Refs for scroll animations
    const galleryRef = useRef<HTMLDivElement>(null);
    const personaRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const taxPlanningRef = useRef<HTMLDivElement>(null);
    const digitalEstateRef = useRef<HTMLDivElement>(null);
    const successionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // State for expandable timeline sections
    const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
        early: false,
        mid: false,
        late: false,
        legacy: false
    });

    const togglePhase = (phase: string) => {
        setExpandedPhases(prev => ({
            ...prev,
            [phase]: !prev[phase]
        }));
    };

    // Intersection Observer for reveal animations
    useEffect(() => {
        const sections = [
            galleryRef.current,
            personaRef.current,
            caseStudiesRef.current,
            servicesRef.current,
            taxPlanningRef.current,
            digitalEstateRef.current,
            successionRef.current,
            timelineRef.current
        ];

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

    // Estate & Legacy Practice Areas
    const practiceAreas = [
        {
            id: "trusts-estates",
            title: "Trusts & Estates",
            description: "Sophisticated estate planning frameworks that preserve wealth, protect assets, and create enduring legacies through trusts, wills, and other strategic vehicles.",
            icon: <Landmark className="h-10 w-10 text-[#4D80D4]" />,
            path: "/practice/trusts-estates",
            color: "border-[#4D80D4]",
            bgcolor: "bg-[#4D80D4]/5",
            textColor: "text-[#4D80D4]"
        },
        {
            id: "elder-law",
            title: "Elder Law",
            description: "Specialized legal guidance addressing the unique needs of aging clients, including healthcare planning, asset protection, and caregiver considerations.",
            icon: <History className="h-10 w-10 text-[#D6001C]" />,
            path: "/practice/elder-law",
            color: "border-[#D6001C]",
            bgcolor: "bg-[#D6001C]/5",
            textColor: "text-[#D6001C]"
        },
        {
            id: "probate-administration",
            title: "Probate & Administration",
            description: "Expert navigation of the probate process, including estate administration, executor guidance, and efficient resolution of complex succession matters.",
            icon: <FileText className="h-10 w-10 text-[#00A650]" />,
            path: "/practice/probate-administration",
            color: "border-[#00A650]",
            bgcolor: "bg-[#00A650]/5",
            textColor: "text-[#00A650]"
        }
    ];

    // Related Services
    const relatedServices = [
        {
            id: "estate-planning",
            title: "Estate Planning",
            description: "Comprehensive planning services with fixed-fee options for wills, trusts, and complete estate documentation.",
            path: "/services/estate-planning",
            color: "border-[#4D80D4]",
            bgcolor: "bg-[#4D80D4]/5"
        },
        {
            id: "elder-law-services",
            title: "Elder Law",
            description: "Specialized services for aging clients and their families, including long-term care planning and asset protection strategies.",
            path: "/services/elder-law",
            color: "border-[#D6001C]",
            bgcolor: "bg-[#D6001C]/5"
        },
        {
            id: "probate-services",
            title: "Probate & Estate Administration",
            description: "Structured services for navigating probate proceedings and administering estates with predictable costs.",
            path: "/services/probate-administration",
            color: "border-[#00A650]",
            bgcolor: "bg-[#00A650]/5"
        }
    ];

    // Persona pathways
    const personaPathways = [
        {
            persona: "For Family Stewards",
            heading: "Generational Security",
            description: "Estate planning frameworks that ensure your family's financial security while preserving your values and intentions for future generations.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]"
        },
        {
            persona: "For Entrepreneurs",
            heading: "Business Succession",
            description: "Strategic integration of business assets within your estate plan, ensuring smooth transitions and continued prosperity for your ventures.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]"
        },
        {
            persona: "For Legacy Builders",
            heading: "Enduring Impact",
            description: "Sophisticated planning tools that extend your influence beyond your lifetime, from charitable structures to multi-generational wealth preservation.",
            color: "border-[#00A650]",
            textColor: "text-[#00A650]"
        }
    ];

    // Tax planning strategies
    const taxPlanningStrategies = [
        {
            title: "Estate Tax Minimization",
            description: "Strategic approaches to reduce estate tax exposure through lifetime gifting, asset valuation techniques, and trust structures.",
            icon: <TrendingUp className="h-10 w-10 text-[#D6001C]" />,
            details: [
                "Annual exclusion gifting programs",
                "Grantor Retained Annuity Trusts (GRATs)",
                "Intentionally Defective Grantor Trusts (IDGTs)",
                "Charitable remainder trusts",
                "Family limited partnerships"
            ]
        },
        {
            title: "Income Tax Planning",
            description: "Integration of income tax considerations within estate plans, leveraging step-up in basis opportunities and strategic timing of asset transfers.",
            icon: <Briefcase className="h-10 w-10 text-[#4D80D4]" />,
            details: [
                "Basis management strategies",
                "Charitable income tax planning",
                "Trust income tax planning",
                "Strategic Roth conversions",
                "Qualified Small Business Stock planning"
            ]
        },
        {
            title: "State Tax Considerations",
            description: "Multi-jurisdictional planning approaches that address varying state tax regimes and optimize property locations for state tax purposes.",
            icon: <Home className="h-10 w-10 text-[#FFEB80]" />,
            details: [
                "Domicile planning strategies",
                "Incomplete non-grantor trust planning",
                "State-specific marital deduction planning",
                "Estate tax situs planning",
                "Intangible property location strategies"
            ]
        }
    ];

    // Digital estate components
    const digitalEstateComponents = [
        {
            title: "Digital Asset Inventory",
            description: "Comprehensive documentation of digital assets across categories, including financial, personal, social, and intellectual property.",
            icon: <Database className="h-10 w-10 text-[#D6001C]" />,
            color: "border-[#D6001C]",
            bgcolor: "bg-[#D6001C]/5"
        },
        {
            title: "Access Protocols",
            description: "Secure frameworks for providing fiduciaries with appropriate access to digital accounts and assets when needed.",
            icon: <Laptop className="h-10 w-10 text-[#4D80D4]" />,
            color: "border-[#4D80D4]",
            bgcolor: "bg-[#4D80D4]/5"
        },
        {
            title: "Digital Legacy Instructions",
            description: "Explicit guidance regarding the disposition, archiving, or deletion of digital content and accounts after death.",
            icon: <Users className="h-10 w-10 text-[#00A650]" />,
            color: "border-[#00A650]",
            bgcolor: "bg-[#00A650]/5"
        }
    ];

    // Succession planning steps
    const successionSteps = [
        {
            phase: "Assessment",
            description: "Evaluation of business structure, ownership, governance, and key stakeholders",
            tasks: [
                "Business valuation and financial analysis",
                "Leadership capability assessment",
                "Stakeholder interview and alignment",
                "Current governance review"
            ]
        },
        {
            phase: "Strategy Development",
            description: "Creation of succession framework addressing ownership, leadership, and tax considerations",
            tasks: [
                "Ownership transition structure design",
                "Leadership development planning",
                "Management transition timeline",
                "Tax optimization framework"
            ]
        },
        {
            phase: "Implementation",
            description: "Execution of legal, financial, and operational components of the succession plan",
            tasks: [
                "Entity restructuring execution",
                "Trust and estate documentation",
                "Leadership training and transition",
                "Stakeholder communication"
            ]
        },
        {
            phase: "Governance",
            description: "Establishment of ongoing structures for business management and family involvement",
            tasks: [
                "Board of directors formation",
                "Family council development",
                "Communication protocols",
                "Conflict resolution frameworks"
            ]
        }
    ];

    // Legacy planning timeline phases
    const timelinePhases = [
        {
            id: "early",
            name: "Early Career Phase",
            age: "25-40",
            description: "Establishing foundational planning elements with future growth in mind.",
            priorities: [
                "Will & essential documents",
                "Term life insurance",
                "Guardian designations for minor children",
                "Retirement account beneficiary designations",
                "Emergency fund and disability planning"
            ]
        },
        {
            id: "mid",
            name: "Mid-Career Phase",
            age: "40-55",
            description: "Expanding planning to address growing assets and evolving family dynamics.",
            priorities: [
                "Revocable living trust",
                "Education funding structures",
                "Long-term care insurance evaluation",
                "Business succession planning",
                "Charitable giving strategy"
            ]
        },
        {
            id: "late",
            name: "Late Career Phase",
            age: "55-70",
            description: "Optimizing wealth transfer strategies and tax efficiency approaches.",
            priorities: [
                "Advanced trust strategies",
                "Estate tax minimization planning",
                "Roth conversion analysis",
                "Retirement income planning",
                "Legacy letter preparation"
            ]
        },
        {
            id: "legacy",
            name: "Legacy Planning Phase",
            age: "70+",
            description: "Focusing on efficient wealth transfer and values-based legacy planning.",
            priorities: [
                "Multi-generational trust planning",
                "Healthcare directive updates",
                "Charitable remainder trusts",
                "Family governance frameworks",
                "Legacy recording and preservation"
            ]
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
                                Estate & Legacy
                            </h1>
                            <p className="text-xl text-black/80">
                                Sophisticated planning that preserves wealth, protects assets, and creates enduring legacies across generations.
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
                        <p className="text-gray-700">Explore our specialized estate and legacy planning practice areas, each addressing distinct aspects of wealth preservation and succession planning.</p>
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

            {/* Legacy Planning Timeline - New Section */}
            <section
                ref={timelineRef}
                className="py-24 bg-gray-50 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Legacy Planning Timeline</h2>
                        <p className="text-gray-700">Estate planning evolves throughout your life stages. Our approach adapts to your changing priorities and circumstances.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {timelinePhases.map((phase) => (
                            <div
                                key={phase.id}
                                className="mb-6 border-2 border-black rounded-md overflow-hidden"
                            >
                                <div
                                    className="bg-white p-6 flex justify-between items-center cursor-pointer"
                                    onClick={() => togglePhase(phase.id)}
                                >
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#FFEB80] text-black text-sm font-medium mr-3">
                                            {phase.age}
                                        </span>
                                        <h3 className="inline-block font-display text-2xl text-black">{phase.name}</h3>
                                    </div>
                                    <button className="flex-shrink-0">
                                        {expandedPhases[phase.id] ? (
                                            <ChevronUp className="h-6 w-6 text-black" />
                                        ) : (
                                            <ChevronDown className="h-6 w-6 text-black" />
                                        )}
                                    </button>
                                </div>

                                {expandedPhases[phase.id] && (
                                    <div className="p-6 border-t border-black bg-gray-50">
                                        <p className="text-gray-700 mb-4">{phase.description}</p>
                                        <h4 className="font-medium text-lg mb-3">Key Planning Priorities:</h4>
                                        <ul className="space-y-2">
                                            {phase.priorities.map((priority, index) => (
                                                <li key={index} className="flex items-start">
                                                    <Check className="h-5 w-5 text-[#D6001C] mr-2 flex-shrink-0" />
                                                    <span>{priority}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tax Planning Strategies - New Section */}
            <section
                ref={taxPlanningRef}
                className="py-24 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Tax-Efficient Estate Planning</h2>
                        <p className="text-gray-700">Strategic approaches to preserving wealth across generations through sophisticated tax planning integration.</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {taxPlanningStrategies.map((strategy, index) => (
                            <div
                                key={index}
                                className="mb-8 border-2 border-black rounded-md overflow-hidden"
                            >
                                <div className="p-6 bg-white flex items-start">
                                    <div className="mr-6 mt-1 flex-shrink-0">
                                        {strategy.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl text-black mb-2">{strategy.title}</h3>
                                        <p className="text-gray-700 mb-4">{strategy.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {strategy.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#D6001C] mr-2"></div>
                                                    <span className="text-sm text-gray-700">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Family Business Succession - New Section */}
            <section
                ref={successionRef}
                className="py-24 bg-gray-50 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Family Business Succession</h2>
                        <p className="text-gray-700">Comprehensive frameworks for transitioning family businesses across generations while preserving operational success and family harmony.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-black"></div>

                        {successionSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative mb-12 flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Circle on timeline */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 rounded-full border-4 border-black bg-white flex items-center justify-center">
                                    <span className="text-sm font-bold">{index + 1}</span>
                                </div>

                                {/* Content card */}
                                <div className={`md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white border-2 border-black rounded-md p-6">
                                        <h3 className="font-display text-xl text-black mb-2">{step.phase}</h3>
                                        <p className="text-gray-700 mb-4">{step.description}</p>
                                        <ul className="space-y-2">
                                            {step.tasks.map((task, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D6001C] mt-2 mr-2"></div>
                                                    <span className="text-sm text-gray-700">{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Estate Planning - New Section */}
            <section
                ref={digitalEstateRef}
                className="py-24 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Digital Estate Planning</h2>
                        <p className="text-gray-700">Comprehensive planning for digital assets ensures your online presence, digital currency, and electronic records are properly managed and transferred.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {digitalEstateComponents.map((component, index) => (
                            <div
                                key={index}
                                className={`border-2 ${component.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${component.bgcolor} flex flex-col h-full`}
                            >
                                <div className="mb-6">
                                    {component.icon}
                                </div>
                                <h3 className="font-display text-2xl text-black mb-4">{component.title}</h3>
                                <p className="text-gray-700">{component.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto bg-white border-2 border-black rounded-md p-8">
                        <h3 className="font-display text-2xl text-black mb-4 text-center">Digital Assets to Include</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4">
                                <Database className="h-10 w-10 mx-auto mb-2 text-[#D6001C]" />
                                <span className="text-sm font-medium">Cryptocurrency</span>
                            </div>
                            <div className="text-center p-4">
                                <Laptop className="h-10 w-10 mx-auto mb-2 text-[#4D80D4]" />
                                <span className="text-sm font-medium">Online Accounts</span>
                            </div>
                            <div className="text-center p-4">
                                <FileText className="h-10 w-10 mx-auto mb-2 text-[#FFEB80]" />
                                <span className="text-sm font-medium">Digital Documents</span>
                            </div>
                            <div className="text-center p-4">
                                <Users className="h-10 w-10 mx-auto mb-2 text-[#00A650]" />
                                <span className="text-sm font-medium">Social Media</span>
                            </div>
                        </div>
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
                        <p className="text-gray-700">Our estate and legacy expertise adapts to your specific circumstances and objectives.</p>
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

            {/* Featured Work */}
            <section
                ref={caseStudiesRef}
                className="py-24 bg-gray-50 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Work</h2>
                        <p className="text-gray-700">Explore how our estate planning expertise translates into tangible outcomes for clients.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Case Study 1 */}
                        <div className="bg-white border-t-4 border-[#4D80D4] p-8 shadow-sm">
                            <h3 className="font-display text-2xl text-black mb-4">Multi-Generational Family Enterprise</h3>
                            <p className="text-sm text-gray-500 mb-6">Family Business</p>
                            <p className="text-gray-700 mb-6">
                                Structured a comprehensive succession plan for a third-generation family business, incorporating trust structures, governance protocols, and tax-efficient transition mechanisms.
                            </p>
                            <div className="border-l-4 border-gray-200 pl-4">
                                <p className="italic text-gray-600">
                                    &quot;The plan balanced our business continuity needs with fair treatment of all family members—creating harmony where there was potential for conflict.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-white border-t-4 border-[#D6001C] p-8 shadow-sm">
                            <h3 className="font-display text-2xl text-black mb-4">Global Asset Portfolio Protection</h3>
                            <p className="text-sm text-gray-500 mb-6">High-Net-Worth Individual</p>
                            <p className="text-gray-700 mb-6">
                                Developed a sophisticated estate plan for a client with assets across multiple countries, addressing complex jurisdictional issues while optimizing tax efficiency.
                            </p>
                            <div className="border-l-4 border-gray-200 pl-4">
                                <p className="italic text-gray-600">
                                    &quot;Our international holdings created complexity that seemed overwhelming, but the structured approach provided clarity and confidence in our legacy planning.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section
                ref={servicesRef}
                className="py-24 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Related Services</h2>
                        <p className="text-gray-700">Explore our specialized service offerings that complement our estate planning practice areas.</p>
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

            {/* CTA Section */}
            <section className="py-24 bg-gray-50 relative">
                <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#00A650] z-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>

                <div className="container mx-auto px-6 max-w-4xl text-center relative">
                    <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Secure Your Legacy</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Begin a conversation about creating an estate plan that reflects your values and secures your family's future for generations to come.
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

export default EstateLegacy;
