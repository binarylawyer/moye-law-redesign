"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Image, PenTool, Globe, FileText, Shield, Scale, Check, Briefcase, Book } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function ArtLawPage() {
    // Refs for scroll animations
    const practiceAreasRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const personaPathwaysRef = useRef<HTMLDivElement>(null);
    const caseStudiesRef = useRef<HTMLDivElement>(null);
    const approachRef = useRef<HTMLDivElement>(null);
    const protectionRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for reveal animations
    useEffect(() => {
        // Make all sections visible initially, then apply animations
        const sections = [
            practiceAreasRef.current,
            servicesRef.current,
            personaPathwaysRef.current,
            caseStudiesRef.current,
            approachRef.current,
            protectionRef.current
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

    // Art Law Practice Areas
    const practiceAreas = [
        {
            icon: <Image className="h-8 w-8 text-[#003B98]" />,
            title: "Visual Art",
            description: "Legal frameworks for painters, sculptors, photographers, and other visual artists addressing creation, exhibition, and commercialization.",
            color: "border-[#003B98]",
            bgColor: "bg-[#003B98]/5"
        },
        {
            icon: <PenTool className="h-8 w-8 text-[#D6001C]" />,
            title: "Gallery & Museum Law",
            description: "Specialized guidance for art institutions addressing acquisition, exhibition, conservation, and institutional governance.",
            color: "border-[#D6001C]",
            bgColor: "bg-[#D6001C]/5"
        },
        {
            icon: <Globe className="h-8 w-8 text-[#FFEB80]" />,
            title: "Art Market",
            description: "Legal structures for art dealers, auction houses, and collectors navigating the complex art marketplace and investment landscape.",
            color: "border-[#FFEB80]",
            bgColor: "bg-[#FFEB80]/5"
        },
        {
            icon: <Shield className="h-8 w-8 text-[#4D80D4]" />,
            title: "Digital & New Media Art",
            description: "Innovative legal approaches for digital art, NFTs, and emerging forms addressing authentication, copyright, and technological challenges.",
            color: "border-[#4D80D4]",
            bgColor: "bg-[#4D80D4]/5"
        }
    ];

    // Specialized Services
    const services = [
        {
            icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
            title: "Artist Agreements",
            description: "Comprehensive contracts for commissions, gallery representation, licensing, exhibition, and collaboration tailored to visual artists.",
            color: "border-[#D6001C]"
        },
        {
            icon: <Scale className="h-8 w-8 text-[#003B98]" />,
            title: "Art Authentication & Provenance",
            description: "Legal guidance for establishing and documenting artwork authenticity, provenance, and chain of title to support value and marketability.",
            color: "border-[#003B98]"
        },
        {
            icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
            title: "Cultural Property Protection",
            description: "Sophisticated approaches to ownership disputes, repatriation claims, and international movement of culturally significant works.",
            color: "border-[#FFEB80]"
        },
        {
            icon: <Globe className="h-8 w-8 text-[#4D80D4]" />,
            title: "Art Estate Planning",
            description: "Strategic planning for artists' estates and collectors focusing on legacy preservation, valuation, and disposition of artistic works.",
            color: "border-[#4D80D4]"
        }
    ];

    // Protection Areas
    const protectionAreas = [
        {
            title: "Copyright & Moral Rights",
            description: "Comprehensive protection of artists' intellectual property rights, including both economic rights and moral rights of attribution and integrity.",
            icon: <Shield className="h-8 w-8 text-[#D6001C]" />,
            color: "text-[#D6001C]"
        },
        {
            title: "Resale Rights",
            description: "Strategic approaches to artist's resale royalty rights (droit de suite) in applicable jurisdictions and contractual alternatives elsewhere.",
            icon: <Scale className="h-8 w-8 text-[#003B98]" />,
            color: "text-[#003B98]"
        },
        {
            title: "First Amendment",
            description: "Protection of artistic expression and advocacy around freedom of expression issues affecting visual and conceptual artists.",
            icon: <PenTool className="h-8 w-8 text-[#FFEB80]" />,
            color: "text-black"
        }
    ];

    // Persona-specific pathways
    const personaPathways = [
        {
            persona: "For Artists",
            icon: <PenTool className="h-8 w-8 text-[#4D80D4]" />,
            heading: "Creative Protection",
            description: "We provide artists with legal frameworks that protect creative works while preserving artistic freedom and facilitating strategic career development.",
            color: "border-[#4D80D4]",
            textColor: "text-[#4D80D4]",
            checks: [
                "Copyright registration strategy",
                "Studio practice protection",
                "Contract negotiation support",
                "Legacy planning consultation"
            ]
        },
        {
            persona: "For Galleries & Institutions",
            icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
            heading: "Institutional Governance",
            description: "We support galleries and cultural institutions with comprehensive legal structures addressing acquisitions, exhibition practices, and organizational operations.",
            color: "border-[#D6001C]",
            textColor: "text-[#D6001C]",
            checks: [
                "Artist representation agreements",
                "Exhibition contract frameworks",
                "Consignment protection",
                "Institutional risk management"
            ]
        },
        {
            persona: "For Collectors",
            icon: <Book className="h-8 w-8 text-[#FFEB80]" />,
            heading: "Collection Management",
            description: "We advise serious collectors on acquisition, authentication, insurance, display, loan, and legacy planning for significant art collections.",
            color: "border-[#FFEB80]",
            textColor: "text-black",
            checks: [
                "Acquisition due diligence",
                "Collection documentation",
                "Tax-efficient planning",
                "Charitable giving strategies"
            ]
        }
    ];

    // Case Studies
    const caseStudies = [
        {
            title: "Artist Estate Planning & Foundation Creation",
            sector: "Legacy Planning",
            description: "Developed a comprehensive estate plan for an established artist, including creation of a foundation to preserve artistic legacy, manage intellectual property, and support ongoing charitable initiatives.",
            outcome: "The structure ensured proper valuation, tax efficiency, ongoing management of the artist's oeuvre, and sustained support for the artist's philanthropic vision.",
            color: "border-t-[#D6001C]"
        },
        {
            title: "Digital Art Collection NFT Strategy",
            sector: "Digital Art",
            description: "Created a strategic framework for a digital art collector moving into the NFT space, addressing authentication, platform selection, copyright implications, and resale structures.",
            outcome: "The framework provided clear guidance on rights acquisition, technical considerations, and long-term value preservation in an emerging digital art ecosystem.",
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
                                Art Law
                            </h1>
                            <p className="text-xl text-black/80">
                                Specialized legal guidance for artists, galleries, and collectors—where creative expression meets legal protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Section */}
            <section
                ref={practiceAreasRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Art Practice Areas</h2>
                        <p className="text-gray-700">Our expertise spans the full spectrum of visual arts, with tailored legal approaches for each creative domain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {practiceAreas.map((area, index) => (
                            <div
                                key={index}
                                className={`border-2 ${area.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${area.bgColor} h-full`}
                            >
                                <div className="mb-6">
                                    {area.icon}
                                </div>
                                <h3 className="font-display text-xl text-black mb-4">{area.title}</h3>
                                <p className="text-gray-700">{area.description}</p>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Art Legal Services</h2>
                        <p className="text-gray-700">Our practice offers specialized legal services designed specifically for the unique challenges of the art world.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex gap-6 p-6 rounded-md hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div className={`flex-shrink-0 p-3 rounded-md ${service.color} bg-white border-2`}>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Art Journey</h2>
                        <p className="text-gray-700">Our approach adapts to your specific relationship with visual art, providing tailored guidance that aligns with your creative or collection objectives.</p>
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Art Work</h2>
                        <p className="text-gray-700">Examples of our specialized legal approach to art world challenges and opportunities.</p>
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

            {/* Rights Protection */}
            <section
                ref={protectionRef}
                className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Rights Protection</h2>
                        <p className="text-gray-700">We provide sophisticated guidance for protecting the legal rights of artists and art owners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {protectionAreas.map((area, index) => (
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
                        <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Art Law Approach</h2>
                        <p className="text-gray-700">We blend creative understanding with legal expertise to address the unique challenges of the art world.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Creative Context</h3>
                            <p className="text-gray-700 mb-4">
                                Our art law practice prioritizes understanding the creative context, artistic intentions, and aesthetic considerations that inform legal needs in the visual arts.
                            </p>
                            <p className="text-gray-700">
                                This culturally informed perspective enables us to craft legal solutions that respect artistic integrity while providing effective protection.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8">
                            <h3 className="font-display text-2xl text-black mb-6">Market Awareness</h3>
                            <p className="text-gray-700 mb-4">
                                We maintain deep understanding of art market dynamics, valuation considerations, and institutional practices that impact legal strategies for artists and collectors.
                            </p>
                            <p className="text-gray-700">
                                This market awareness informs practical legal approaches that align with actual art world practices rather than abstract legal theories.
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
                    <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your Art Legal Strategy</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Schedule a consultation to discuss how we can address your specific art-related legal needs with sophisticated, culturally aware guidance.
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
