"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Assuming these exist, if not I'll use standard buttons
import { Headphones, FileText, BookOpen, Layers, Search } from 'lucide-react';

export type ResourceType = 'article' | 'guide' | 'whitepaper' | 'case-study' | 'podcast' | 'faq' | 'book';

export interface ResourceItem {
    id: string;
    type: ResourceType;
    title: string;
    description: string;
    date: string;
    slug: string;
    imageUrl?: string;
    category?: string; // e.g. "Estate Planning"
}

interface ResourcesGridProps {
    initialItems: ResourceItem[];
}

export const ResourcesGrid: React.FC<ResourcesGridProps> = ({ initialItems }) => {
    const [filter, setFilter] = useState<ResourceType | 'all'>('all');

    const filteredItems = filter === 'all'
        ? initialItems
        : initialItems.filter(item => item.type === filter);

    // Helper to get icon based on type
    const getIcon = (type: ResourceType) => {
        switch (type) {
            case 'podcast': return <Headphones className="w-4 h-4 text-white" />;
            case 'case-study': return <Search className="w-4 h-4 text-white" />;
            case 'book': return <BookOpen className="w-4 h-4 text-white" />;
            default: return <FileText className="w-4 h-4 text-white" />;
        }
    };

    // Helper for color badge
    const getBadgeColor = (type: ResourceType) => {
        switch (type) {
            case 'podcast': return 'bg-gold';
            case 'case-study': return 'bg-navy';
            case 'book': return 'bg-red-700';
            default: return 'bg-blue-600';
        }
    };

    return (
        <div className="w-full">
            <Tabs defaultValue="all" className="w-full mb-12" onValueChange={(val) => setFilter(val as any)}>
                <div className="flex justify-center mb-12">
                    <TabsList className="bg-gray-100 p-1 rounded-lg inline-flex flex-wrap justify-center overflow-x-auto max-w-full">
                        <TabsTrigger value="all" className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all">All Resources</TabsTrigger>
                        <TabsTrigger value="article" className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all">Articles</TabsTrigger>
                        <TabsTrigger value="podcast" className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all">Podcasts</TabsTrigger>
                        <TabsTrigger value="case-study" className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all">Case Studies</TabsTrigger>
                        <TabsTrigger value="guide" className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all">Guides</TabsTrigger>
                    </TabsList>
                </div>

                <div className="min-h-[500px]">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredItems.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className="group bg-white border-2 border-transparent hover:border-navy transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg"
                                >
                                    {/* Card Header Image / Placeholder */}
                                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                                        {item.imageUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                                                <Layers className="w-12 h-12" />
                                            </div>
                                        )}
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-2 ${getBadgeColor(item.type)}`}>
                                            {getIcon(item.type)}
                                            <span className="uppercase tracking-wider">{item.type.replace('-', ' ')}</span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-xs text-gray-500 mb-2 font-mono flex justify-between items-center">
                                            <span>{item.date}</span>
                                            {item.category && <span className="text-navy font-semibold">{item.category}</span>}
                                        </div>
                                        <h3 className="font-display text-xl text-navy mb-3 group-hover:text-blue-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                            {item.description}
                                        </p>

                                        <Link
                                            href={`/resources/${item.type === 'article' ? 'articles/' : ''}${item.slug}`}
                                            className="text-navy font-bold text-sm hover:underline mt-auto flex items-center"
                                        >
                                            Read Full {item.type === 'case-study' ? 'Story' : 'Entry'}
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            {filteredItems.length === 0 && (
                                <div className="col-span-full py-12 text-center text-gray-500">
                                    No resources found for this category.
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Tabs>
        </div>
    );
};
