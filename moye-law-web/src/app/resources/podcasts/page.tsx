import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { PodcastHub, PodcastEpisode } from '@/components/resources/PodcastHub';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function PodcastPage() {
    const supabase = await createClient();
    const { data: podcasts } = await supabase.from('podcasts').select('*').order('published_at', { ascending: false });

    // Helper to map DB to PodcastEpisode
    const mapPodcast = (row: any): PodcastEpisode => ({
        id: row.id,
        title: row.title,
        description: row.description || '',
        date: new Date(row.published_at || row.created_at).toLocaleDateString(),
        duration: row.duration || '20 min',
        topics: row.tags || ['Estate Planning'],
        audioUrl: row.audio_url,
        transcript: row.transcript,
        relatedContent: [] // Could fetch related content via joins later
    });

    let items: PodcastEpisode[] = [];

    if (podcasts && podcasts.length > 0) {
        items = podcasts.map(mapPodcast);
    } else {
        // Fallback Mock Data
        items = [
            {
                id: 'ep-1',
                title: 'The Digital Afterlife: Managing Crypto Assets',
                description: 'We explore the legal frameworks surrounding cryptocurrency, NFTs, and digital wallets in estate planning. Guest expert: Sarah Chen.',
                date: 'Oct 15, 2024',
                duration: '45 min',
                topics: ['Digital Assets', 'Tech'],
                transcript: "Welcome to the Digital Afterlife podcast...",
                relatedContent: [
                    { type: 'article', title: 'Future of Digital Legacy', slug: 'future-of-digital-legacy', excerpt: 'Protecting your crypto assets.' }
                ]
            },
            {
                id: 'ep-2',
                title: 'Trusts & Taxes: 2025 Outlook',
                description: 'A deep dive into upcoming tax law changes and how they affect high-net-worth estate strategies.',
                date: 'Sep 28, 2024',
                duration: '32 min',
                topics: ['Estate Planning', 'Tax Strategy'],
                transcript: "In today's episode, we discuss the 2025 tax cliffs...",
                relatedContent: [
                    { type: 'book', title: 'Strategic Wealth 2025', slug: 'strategic-wealth', excerpt: 'The definitive guide.' }
                ]
            },
            {
                id: 'ep-3',
                title: 'Succession Planning for Founders',
                description: 'Key considerations for tech founders ensuring business continuity and family harmony.',
                date: 'Aug 10, 2024',
                duration: '50 min',
                topics: ['Business', 'Tech'],
                transcript: "Founders face unique challenges...",
            },
            {
                id: 'ep-4',
                title: 'International Probate Challenges',
                description: 'Navigating probate across multiple jurisdictions: UK, US, and Singapore.',
                date: 'July 05, 2024',
                duration: '40 min',
                topics: ['Probate', 'Global'],
                transcript: "When assets cross borders...",
            }
        ];
    }

    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
                    <Link href="/resources" className="inline-flex items-center text-gray-500 hover:text-navy mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
                    </Link>
                    <h1 className="font-display text-5xl text-navy mb-4">The Legal Frontier Podcast</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Our AI-powered podcast series explores the intersection of law, technology, and wealth with expert analysis.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <PodcastHub podcasts={items} />
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}
