"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Shield, Lock } from 'lucide-react';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

// --- DATA ---
const personaServices = [
    {
        title: "For Tech Innovators",
        description: "Legal solutions designed for founders, CTOs, and tech professionals navigating digital innovation.",
        services: [
            "Digital asset protection strategies",
            "IP valuation and monetization planning",
            "Software and technology licensing",
            "Technology transfer agreements",
            "NFT and blockchain legal frameworks"
        ],
        cta: {
            text: "Protect Your Digital Innovation",
            path: "/services/digital-asset-tech-protection"
        },
        color: "bg-[#003B98]",
        textColor: "text-white",
        iconColor: "text-white"
    },
    {
        title: "For Executive Caregivers",
        description: "Balanced solutions for professionals managing careers while caring for aging parents or family members.",
        services: [
            "Elder care legal frameworks",
            "Power of attorney arrangements",
            "Medicaid planning strategies",
            "Caregiver agreements",
            "Remote legal services for busy schedules"
        ],
        cta: {
            text: "Balance Care and Career",
            path: "/services/elder-law"
        },
        color: "bg-[#FFD500]",
        textColor: "text-black",
        iconColor: "text-black"
    },
    {
        title: "For Legacy Builders",
        description: "Sophisticated wealth transfer and legacy planning solutions for high-net-worth individuals and families.",
        services: [
            "Multi-generational wealth transfer",
            "Asset protection strategies",
            "Family governance frameworks",
            "Charitable planning solutions",
            "International estate planning"
        ],
        cta: {
            text: "Secure Your Legacy",
            path: "/services/estate-planning"
        },
        color: "bg-[#D6001C]",
        textColor: "text-white",
        iconColor: "text-white"
    }
];

export default function ServicesIndex() {
    return (
        <div className="min-h-screen bg-white">

            {/* HER0 */}
            <div className="relative pt-32 pb-20 px-6 border-b-4 border-navy overflow-hidden">
                <MondrianGrid delay={0.2} />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <RevealContent delay={0.4}>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Services</span>
                                <h1 className="font-display text-4xl md:text-6xl text-navy leading-none mb-6">Specialized Legal <br />Solutions.</h1>
                            </div>
                        </div>
                    </RevealContent>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-12 md:py-24">

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

                    {/* Estate Planning */}
                    <Link href="/services/estate-planning" className="group border-4 border-navy bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-[#003B98] h-32 group-hover:opacity-90 transition-opacity"></div>
                        <div className="p-8">
                            <h2 className="font-display text-2xl text-navy mb-3 group-hover:text-blue-900">Estate Planning</h2>
                            <p className="text-gray-600 mb-6">Tailored estate plans that preserve wealth and legacy for future generations.</p>
                            <span className="inline-flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>

                    {/* Probate */}
                    <Link href="/services/probate-administration" className="group border-4 border-navy bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="grid grid-cols-2">
                            <div className="bg-[#D6001C] h-32"></div>
                            <div className="bg-[#FFD500] h-32"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="font-display text-2xl text-navy mb-3 group-hover:text-red-900">Probate & Administration</h2>
                            <p className="text-gray-600 mb-6">Compassionate guidance through the estate settlement process with efficiency.</p>
                            <span className="inline-flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>

                    {/* IP Strategy */}
                    <Link href="/services/ip-consulting-strategy" className="group border-4 border-navy bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-white h-32 border-b-4 border-navy flex items-center justify-center">
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Strategic Advisory</span>
                        </div>
                        <div className="p-8">
                            <h2 className="font-display text-2xl text-navy mb-3 group-hover:text-blue-900">IP Consulting & Strategy</h2>
                            <p className="text-gray-600 mb-6">Strategic guidance to maximize the value and protection of your creative assets.</p>
                            <span className="inline-flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>

                    {/* Licensing */}
                    <Link href="/services/licensing-transactions" className="group border-4 border-navy bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="grid grid-cols-1">
                            <div className="bg-[#FFD500] h-32"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="font-display text-2xl text-navy mb-3 group-hover:text-yellow-600">Licensing & Transactions</h2>
                            <p className="text-gray-600 mb-6">Structured agreements that monetize intellectual property while protecting creator rights.</p>
                            <span className="inline-flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* MONDRIAN DIVIDER */}
                <div className="h-4 w-full flex border-t-4 border-b-4 border-navy mb-16">
                    <div className="w-1/4 bg-[#D6001C] border-r-4 border-navy"></div>
                    <div className="w-2/4 bg-white border-r-4 border-navy"></div>
                    <div className="w-1/4 bg-[#003B98]"></div>
                </div>

                {/* PERSONAS GRID */}
                <section>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Services For Your Specific Needs</h2>
                        <p className="text-lg text-gray-600">
                            We understand that different clients have different priorities. Our specialized services are designed to address unique challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {personaServices.map((persona, index) => (
                            <div key={index} className="border-4 border-navy overflow-hidden flex flex-col">
                                <div className={`${persona.color} p-8 border-b-4 border-navy`}>
                                    <h3 className={`font-display text-2xl mb-3 ${persona.textColor}`}>{persona.title}</h3>
                                    <p className={`${persona.textColor} opacity-90 mb-6 text-sm`}>{persona.description}</p>
                                </div>
                                <div className="bg-white p-8 flex-grow flex flex-col justify-between">
                                    <ul className="space-y-3 mb-8">
                                        {persona.services.map((service, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-navy flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={persona.cta.path}
                                        className="inline-block px-6 py-3 bg-navy text-white font-medium hover:bg-gold hover:text-navy transition-colors text-center w-full"
                                    >
                                        {persona.cta.text}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
