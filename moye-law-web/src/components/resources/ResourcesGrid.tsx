"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, FileText, BookOpen, Layers, Search } from 'lucide-react';

export type ResourceType = 'article' | 'guide' | 'whitepaper' | 'case-study' | 'podcast' | 'faq' | 'book';

export interface ResourceItem {
    id: string;
    title: string;
    type: ResourceType;
    category: string;
    date: string;
    description: string;
    link: string;
    slug?: string;
    imageUrl?: string;
}

const resources: ResourceItem[] = [
    {
        id: "1",
        title: "The Estate Tax Cliff: 2026 Preparation Guide",
        type: "guide",
        category: "Estate Planning",
        date: "Oct 2024",
        description: "A comprehensive analysis of the upcoming sunset of TCJA exemption limits.",
        link: "/resources/articles/estate-tax-2026"
    },
    {
        id: "2",
        title: "Legacy Code: Digital Assets in Probate",
        type: "whitepaper",
        category: "Digital Assets",
        date: "Sep 2024",
        description: "Technical and legal frameworks for passing on cryptocurrency and NFT portfolios.",
        link: "/resources/articles/digital-assets-probate"
    },
    {
        id: "3",
        title: "Trust Decanting 101",
        type: "article",
        category: "Trust Administration",
        date: "Aug 2024",
        description: "When and how to modify an irrevocable trust using modern decanting statutes.",
        link: "/resources/articles/trust-decanting"
    },
    {
        id: "4",
        title: "Episode 42: The Art of the Buy-Sell Agreement",
        type: "podcast",
        category: "Business Law",
        date: "July 2024",
        description: "Interview with Moye Law founder on structuring business continuity.",
        link: "/resources/podcasts/42-buy-sell"
    },
    {
        id: "5",
        title: "Medicaid Look-Back Period Explained",
        type: "faq",
        category: "Elder Law",
        date: "June 2024",
        description: "Understanding the 5-year rule and asset protection strategies.",
        link: "/resources/faq/medicaid-look-back"
    }
];

interface ResourcesGridProps {
    initialItems?: ResourceItem[];
}

export default function ResourcesGrid({ initialItems }: ResourcesGridProps) {
    // If initialItems provided (from DB), use them. Else use static fallback.
    const items = initialItems || resources;
    const [activeTab, setActiveTab] = useState<string>("all");

    // Filter logic
    const filteredResources = activeTab === "all"
        ? items
        : items.filter(r => r.type === activeTab || (activeTab === "guides" && (r.type === "guide" || r.type === "whitepaper")));

    const tabs = [
        { id: "all", label: "All Resources" },
        { id: "article", label: "Articles" },
        { id: "guides", label: "Guides & Papers" },
        { id: "podcast", label: "Podcasts" },
        { id: "faq", label: "FAQs" }
    ];

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="font-mono text-xs text-navy tracking-widest uppercase mb-2 block">Knowledge Base</span>
                        <h2 className="font-display text-4xl text-navy">Legal Intelligence</h2>
                    </div>
                </div>

                {/* VISUAL TABS IMPLEMENTATION */}
                <div className="w-full mb-12">
                    <div className="flex flex-wrap gap-2 border-b-2 border-gray-200 pb-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 text-sm font-mono tracking-wide uppercase transition-all duration-300 relative ${activeTab === tab.id
                                    ? 'text-navy font-bold bg-white border-t-4 border-navy -mb-[2px] border-x border-x-gray-200'
                                    : 'text-gray-500 hover:text-navy hover:bg-gray-100'
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <span className="absolute top-0 left-0 right-0 h-1 bg-gold"></span>
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredResources.map((resource) => (
                                    <Link key={resource.id} href={resource.link} className="group block h-full">
                                        <div className="bg-white border-2 border-transparent p-8 h-full flex flex-col hover:border-navy hover:shadow-[8px_8px_0px_0px_rgba(10,35,66,1)] transition-all duration-300">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 bg-gray-50 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                                                    {resource.type === 'podcast' && <Headphones className="w-6 h-6" />}
                                                    {resource.type === 'guide' && <BookOpen className="w-6 h-6" />}
                                                    {resource.type === 'whitepaper' && <Layers className="w-6 h-6" />}
                                                    {(resource.type === 'article' || resource.type === 'faq') && <FileText className="w-6 h-6" />}
                                                </div>
                                                <span className="font-mono text-xs text-gray-400 group-hover:text-navy transition-colors">{resource.date}</span>
                                            </div>

                                            <div className="mb-4">
                                                <span className="inline-block px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase tracking-wider text-navy mb-3">
                                                    {resource.category}
                                                </span>
                                                <h3 className="font-display text-xl text-navy group-hover:text-gold transition-colors duration-300 min-h-[3.5rem]">
                                                    {resource.title}
                                                </h3>
                                            </div>

                                            <p className="font-sans text-sm text-gray-600 line-clamp-3 mb-6 flex-grow">
                                                {resource.description}
                                            </p>

                                            <div className="flex items-center text-xs font-bold text-navy uppercase tracking-widest group-hover:underline decoration-gold underline-offset-4">
                                                Read Resource
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredResources.length === 0 && (
                            <div className="text-center py-24 bg-white border-2 border-dashed border-gray-300">
                                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="font-mono text-gray-400">NO_DATA_FOUND</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
