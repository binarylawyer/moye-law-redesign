"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function EntertainmentLawPage() {
    // Principles based on the Mondrian aesthetic
    const principles = [
        {
            number: "1",
            title: "Creative Protection",
            description: "We safeguard creative works through comprehensive rights protection, ensuring artists and creators maintain control of their intellectual property.",
            color: "mondrian-blue" // Keep original class names if they map to global CSS or Tailwind config, or adapt. Assuming "bg-[#003B98]" pattern for safety.
        },
        {
            number: "2",
            title: "Strategic Monetization",
            description: "Our approach helps entertainment clients maximize revenue opportunities across traditional and emerging channels while preserving artistic integrity.",
            color: "mondrian-yellow"
        },
        {
            number: "3",
            title: "Industry Navigation",
            description: "We guide clients through the complex entertainment ecosystem, leveraging deep industry relationships and knowledge of evolving business models.",
            color: "mondrian-red"
        }
    ];

    // Process steps
    const process = [
        {
            number: "01",
            title: "Rights Assessment",
            description: "We conduct a comprehensive inventory and evaluation of your creative works, identifying all exploitable rights and potential revenue streams.",
            color: "mondrian-blue"
        },
        {
            number: "02",
            title: "Protection Strategy",
            description: "Our team develops a customized legal strategy to secure your entertainment rights through appropriate registrations, agreements, and monitoring systems.",
            color: "mondrian-red"
        },
        {
            number: "03",
            title: "Deal Structuring",
            description: "We structure and negotiate entertainment agreements that maximize your benefits while maintaining appropriate creative control and future flexibility.",
            color: "mondrian-yellow"
        },
        {
            number: "04",
            title: "Ongoing Counsel",
            description: "Our relationship continues with strategic advice as your entertainment career evolves, addressing new opportunities and challenges in this dynamic industry.",
            color: "mondrian-blue"
        }
    ];

    // Helper to map color names to hex classes for consistency
    const getColorClass = (colorName: string) => {
        switch (colorName) {
            case 'mondrian-blue': return 'bg-[#003B98]';
            case 'mondrian-red': return 'bg-[#D6001C]';
            case 'mondrian-yellow': return 'bg-[#FFEB80]';
            case 'mondrian-white': return 'bg-white';
            default: return 'bg-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 md:pt-40 py-16">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row">
                        {/* Mondrian composition on left */}
                        <div className="w-full md:w-1/3 h-64 md:h-auto">
                            <MondrianClassicComposition />
                        </div>

                        {/* White content block */}
                        <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:w-2/3">
                            <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">Entertainment Law</h1>
                            <p className="text-xl text-black/80">
                                Our Entertainment Law practice provides comprehensive legal guidance for creative professionals
                                and entertainment companies. We help navigate complex rights issues, transactions, and
                                protection of creative works across traditional and emerging media.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-16">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-12 mb-16">
                        <div className="col-span-3 bg-white border-r-4 border-b-4 border-black h-16"></div>
                        <div className="col-span-6 bg-white p-4 text-center border-b-4 border-black flex items-center justify-center">
                            <h2 className="font-display text-black text-3xl">Our Principles</h2>
                        </div>
                        <div className="col-span-3 bg-[#FFEB80] border-b-4 border-black h-16"></div>
                    </div>

                    <div className="space-y-8 max-w-5xl mx-auto">
                        {principles.map((principle, index) => (
                            <div key={index} className="flex flex-col md:flex-row">
                                {/* Number block with corresponding Mondrian color */}
                                <div className={`${getColorClass(principle.color)} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                                    <span className={`font-display text-3xl font-bold ${principle.color === 'mondrian-yellow' ? 'text-black' : 'text-white'}`}>
                                        {principle.number}
                                    </span>
                                </div>

                                {/* Content block */}
                                <div className="bg-white p-6 border-4 border-black flex-grow">
                                    <h3 className="font-display text-black text-2xl mb-4">{principle.title}</h3>
                                    <p className="text-black/80 text-lg">{principle.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-12 mb-16">
                        <div className="col-span-3 bg-[#D6001C] border-b-4 border-black h-16"></div>
                        <div className="col-span-6 bg-white p-4 text-center border-b-4 border-black flex items-center justify-center">
                            <h2 className="font-display text-black text-3xl">Our Process</h2>
                        </div>
                        <div className="col-span-3 bg-white border-l-4 border-b-4 border-black h-16"></div>
                    </div>

                    <div className="space-y-8 max-w-5xl mx-auto">
                        {process.map((step, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                <div className={`${getColorClass(step.color)} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                                    <span className={`font-display text-3xl font-bold ${step.color === 'mondrian-yellow' ? 'text-black' : 'text-white'}`}>
                                        {step.number}
                                    </span>
                                </div>
                                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                                    <h3 className="font-display text-black text-2xl mb-4">{step.title}</h3>
                                    <p className="text-black/80 text-lg">{step.description}</p>

                                    {index === 3 && (
                                        <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1 border border-black p-1 bg-white">
                                            <div className="bg-[#D6001C]"></div>
                                            <div className="bg-white border border-black"></div>
                                            <div className="bg-white border border-black"></div>
                                            <div className="bg-[#FFEB80]"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to action phone banner */}
            <section className="py-8">
                <div className="container mx-auto px-8 flex justify-center">
                    <div className="flex items-center w-full max-w-4xl border-4 border-black">
                        <div className="bg-[#FFEB80] h-full w-16 flex-shrink-0 border-r-4 border-black hidden sm:block"></div>
                        <div className="flex-grow bg-white py-6 px-6 text-center">
                            <span className="text-xl font-display">Ask us about Entertainment Law: (212) 555-0129</span>
                        </div>
                        <div className="bg-[#003B98] h-full w-32 flex-shrink-0 border-l-4 border-black hidden sm:block"></div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <div className="max-w-7xl mx-auto px-8 mb-16">
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row">
                            {/* Mondrian composition for the left section */}
                            <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                                <MondrianClassicComposition />
                            </div>

                            <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>

                            <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                                <h2 className="font-display text-3xl mb-4">Protect Your Creative Vision — Contact Us Today</h2>
                                <p className="mb-6 text-lg">Schedule a consultation to discuss your entertainment law needs and discover how our experienced team can help secure your creative future.</p>

                                <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium mb-6">
                                    ENTERTAINMENT LAW EXPERTISE FOR CREATIVE PROFESSIONALS
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-[#003B98] text-white font-bold hover:bg-[#002a6c] transition-colors border-2 border-black"
                                    >
                                        Request Your Entertainment Law Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-gray-100 w-full md:w-1/6 p-8 border-t-4 border-r-4 border-b-4 border-gray-100 md:border-l-0 md:border-t-0 md:border-b-0"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
