"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, LayoutGrid, Palette, Layers, FileText } from 'lucide-react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";

export default function PracticeDirectoryPage() {
    const sections = [
        {
            title: "Core Hubs",
            icon: <LayoutGrid className="h-6 w-6 text-navy" />,
            description: "Aggregated landing pages for major practice divisions.",
            links: [
                { name: "Intellectual Property Hub", path: "/practice/intellectual-property" },
                { name: "Estate & Legacy Hub", path: "/practice/estate-legacy" },
                { name: "Arts & Media Law Hub", path: "/practice/arts-media-law" },
                { name: "Real Estate Hub", path: "/practice/real-estate-hub" },
                { name: "Emerging Technology Hub", path: "/practice/emerging-technology-hub" }
            ]
        },
        {
            title: "Technology & Innovation",
            icon: <Layers className="h-6 w-6 text-[#003B98]" />,
            description: "Custom-designed pages for tech-focused practice areas.",
            links: [
                { name: "AI & Machine Learning", path: "/practice/ai-machine-learning" },
                { name: "Blockchain & Digital Assets", path: "/practice/blockchain-digital-assets" },
                { name: "Digital Asset Protection", path: "/practice/digital-asset-protection" },
                { name: "Innovation & Patent Law", path: "/practice/innovation-patent-law" },
                { name: "Software Licensing", path: "/practice/software-licensing" }
            ]
        },
        {
            title: "Creative & Media",
            icon: <Palette className="h-6 w-6 text-[#D6001C]" />,
            description: "Specialized legal services for creative industries.",
            links: [
                { name: "Art Law", path: "/practice/art-law" },
                { name: "Entertainment Law", path: "/practice/entertainment-law" },
                { name: "Digital Media Law", path: "/practice/digital-media-law" }
            ]
        },
        {
            title: "Real Estate & Corporate",
            icon: <BriefcaseIcon className="h-6 w-6 text-[#FFEB80]" />,
            description: "Sophisticated transactional and consulting services.",
            links: [
                { name: "Real Estate Consulting", path: "/practice/real-estate-consulting" },
                { name: "Real Estate Transactions", path: "/practice/real-estate-transactions" },
                { name: "IP Consulting", path: "/practice/ip-consulting" }
            ]
        },
        {
            title: "Standard Practice Areas",
            icon: <FileText className="h-6 w-6 text-gray-600" />,
            description: "Template-based pages for foundational legal services.",
            links: [
                { name: "Emerging Tech (Template)", path: "/practice/emerging-tech" },
                { name: "IP Asset Protection", path: "/practice/ip-asset-protection" },
                { name: "IP Licensing", path: "/practice/ip-licensing" },
                { name: "Real Estate (General)", path: "/practice/real-estate" },
                { name: "Trusts & Estates", path: "/practice/trusts-estates" },
                { name: "Elder Law", path: "/practice/elder-law" },
                { name: "Probate Administration", path: "/practice/probate-administration" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBarV2 />

            <main className="container mx-auto px-6 py-32 max-w-6xl">
                <div className="mb-16">
                    <span className="font-mono text-xs text-navy tracking-widest uppercase mb-2 block">System Inventory</span>
                    <h1 className="font-display text-5xl text-navy mb-6">Practice Area Directory</h1>
                    <p className="font-sans text-xl text-gray-600 max-w-3xl leading-relaxed">
                        A complete inventory of all 22 migrated practice area modules.
                        This directory serves as the verification index for the V2 migration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-white border-2 border-navy p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-gray-50 rounded border border-gray-200">
                                    {section.icon}
                                </div>
                                <h2 className="font-display text-xl text-navy">{section.title}</h2>
                            </div>

                            <p className="text-sm text-gray-500 mb-6 font-mono border-b border-gray-100 pb-4">
                                {section.description}
                            </p>

                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.path}
                                            className="group flex items-center justify-between text-sm font-medium text-navy hover:text-gold transition-colors"
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    );
}
