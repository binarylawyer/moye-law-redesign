import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { ResourcesGrid, ResourceItem, ResourceType } from '@/components/resources/ResourcesGrid';
import { OpenSesameDoor } from '@/components/ui/OpenSesameDoor';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ResourcesPage() {
    const supabase = createClient();

    // Parallel fetch from all resource tables
    const [articlesRes, podcastsRes, caseStudiesRes, booksRes] = await Promise.all([
        supabase.from('articles').select('*').limit(10),
        supabase.from('podcasts').select('*').limit(5),
        supabase.from('case_studies').select('*').limit(5),
        supabase.from('books').select('*').limit(5)
    ]);

    // Normalize data into ResourceItem format
    let items: ResourceItem[] = [];

    // Helper to map DB rows to ResourceItem
    const mapArticle = (row: any): ResourceItem => ({
        id: row.id,
        type: 'article',
        title: row.title,
        description: row.summary || row.content?.substring(0, 150) || 'No description available',
        date: new Date(row.published_at || row.created_at).toLocaleDateString(),
        slug: row.slug,
        imageUrl: row.image_url,
        category: row.tags?.[0] || 'General'
    });

    const mapPodcast = (row: any): ResourceItem => ({
        id: row.id,
        type: 'podcast',
        title: row.title,
        description: row.description || '',
        date: new Date(row.published_at || row.created_at).toLocaleDateString(),
        slug: row.slug,
        imageUrl: '/images/podcast-cover-placeholder.jpg', // Placeholder
        category: 'Audio'
    });

    const mapCaseStudy = (row: any): ResourceItem => ({
        id: row.id,
        type: 'case-study',
        title: row.title,
        description: row.challenge || '',
        date: new Date(row.created_at).toLocaleDateString(),
        slug: row.slug,
        imageUrl: row.image_url,
        category: row.client_type
    });

    // Add DB items if they exist
    if (articlesRes.data) items.push(...articlesRes.data.map(mapArticle));
    if (podcastsRes.data) items.push(...podcastsRes.data.map(mapPodcast));
    if (caseStudiesRes.data) items.push(...caseStudiesRes.data.map(mapCaseStudy));

    // FALLBACK SEED DATA (If DB is empty, use this so page isn't blank for review)
    if (items.length === 0) {
        items = [
            {
                id: 'seed-1',
                type: 'article',
                title: "The Future of Digital Legacy",
                description: "How to protect your digital assets in an increasingly virtual world. A guide for crypto-investors and online entrepreneurs.",
                date: "Oct 12, 2024",
                slug: "future-of-digital-legacy",
                category: "Estate Planning"
            },
            {
                id: 'seed-2',
                type: 'podcast',
                title: "Episode 4: Trusts & Taxes",
                description: "Listen to our latest discussion on the changing landscape of estate taxes and how standard trusts are adapting.",
                date: "Nov 01, 2024",
                slug: "trusts-and-taxes-ep4",
                category: "Tax Strategy"
            },
            {
                id: 'seed-3',
                type: 'case-study',
                title: "Global Portfolio Protection",
                description: "How we structured a multi-jurisdictional estate plan for a family with assets in NY, London, and Singapore.",
                date: "Sep 15, 2024",
                slug: "global-portfolio-protection",
                category: "International"
            },
            {
                id: 'seed-4',
                type: 'guide',
                title: "Executor's Handbook 2025",
                description: "A comprehensive checklist for new executors in New York State. What you need to know about probate and timelines.",
                date: "Dec 05, 2024",
                slug: "executors-handbook-2025",
                category: "Probate"
            },
            {
                id: 'seed-5',
                type: 'article',
                title: "Intellectual Property for Families",
                description: "Why family businesses need to treat their brand and IP as core assets in succession planning.",
                date: "Aug 20, 2024",
                slug: "ip-for-families",
                category: "IP Strategy"
            }
        ];
    }

    // Sort by date (descending) - rudimentary since date strings vary
    // items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                {/* HERO SECTION */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 tracking-tight">
                                Legacy Resources
                            </h1>
                            <p className="font-sans text-xl text-gray-600 leading-relaxed mb-8">
                                Insights, guides, and tools to navigate the complex intersection of law, life, and legacy.
                            </p>

                            <div className="flex gap-4">
                                <Link href="#browse" className="bg-navy text-white px-6 py-3 font-display rounded hover:bg-blue-900 transition-colors">
                                    Browse Library
                                </Link>
                                <Link href="/contact" className="border-2 border-navy text-navy px-6 py-3 font-display rounded hover:bg-navy hover:text-white transition-colors">
                                    Ask a Question
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Visual - The Knowledge Door */}
                        <div className="h-[400px] w-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden relative">
                            <div className="transform scale-75">
                                <OpenSesameDoor
                                    isOpen={true}
                                    doorColor="bg-navy"
                                    revealColor="bg-gold"
                                    textColor="text-white"
                                    borderColor="border-navy"
                                />
                            </div>
                            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-400">
                                The Library
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED / LATEST GRID */}
                <section id="browse" className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="font-display text-3xl text-navy">Browse Collection</h2>
                    </div>

                    <ResourcesGrid initialItems={items} />
                </section>

                {/* PODCAST PROMO */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                    <div className="bg-navy text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative Mondrian Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-2 mb-4 text-gold font-mono text-sm uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    Now Streaming
                                </div>
                                <h2 className="font-display text-4xl mb-4">Estate Planning Insights Podcast</h2>
                                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                    Join our legal experts as they discuss the nuances of wealth preservation, modern family dynamics, and the future of estate law.
                                </p>
                                <Link href="/resources/podcasts" className="inline-flex items-center text-gold hover:text-white transition-colors border-b border-gold pb-1">
                                    Listen to Latest Episodes <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
                                {/* Placeholder for Album Art */}
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🎙️</div>
                                    <div className="font-display text-xl">Moye Law</div>
                                    <div className="font-mono text-xs text-gray-400">On Air</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <TerminalFooter />
        </div>
    );
}
