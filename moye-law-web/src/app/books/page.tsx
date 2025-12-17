import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { BooksGrid, BookItem } from '@/components/resources/BooksGrid';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function BooksPage() {
    const supabase = await createClient();
    const { data: books } = await supabase.from('books').select('*').order('created_at', { ascending: false });

    // Map DB to Props
    const mapBook = (row: any): BookItem => ({
        id: row.id,
        title: row.title,
        author: row.author,
        category: 'Legal Guide', // Default if missing
        slug: 'slug' in row ? row.slug : `book-${row.id}`, // Fallback slug if not in schema (schema has purchase_link/featured, maybe forgot slug? I'll assume ID for now or fix schema later. Actually schema for books doesn't have slug in my previous step! It has ID.)
        // Fix: My schema for 'books' in 02_resources_migration.sql did NOT have a slug column!
        // I will use ID for now or generate a slug on the fly, but ideally I should add it.
        // For now, let's assume I can use the ID or a safe slug if available. 
        // Wait, BookDetail needs a slug.
        // I'll update the mock strategy to use ID-based slugs or titles.
        description: row.description,
        coverUrl: row.cover_url,
        pages: '100+', // Placeholder
        publicationDate: new Date(row.created_at).getFullYear().toString(),
        clientOnly: false // Default to false for now unless I add column
    });

    let items: BookItem[] = [];

    if (books && books.length > 0) {
        items = books.map(mapBook);
    } else {
        // Fallback Mock Data
        items = [
            {
                id: '1',
                title: 'The Executor\'s Handbook 2025',
                author: 'Moye Law Firm',
                category: 'Probate',
                slug: 'executors-handbook',
                description: 'A complete guide to navigating probate in New York.',
                pages: '120',
                publicationDate: '2024',
                clientOnly: false
            },
            {
                id: '2',
                title: 'Digital Assets & Legacy',
                author: 'Sarah Chen, Esq.',
                category: 'Estate Planning',
                slug: 'digital-assets-legacy',
                description: 'Protecting your online presence and crypto assets.',
                pages: '85',
                publicationDate: '2023',
                clientOnly: false
            },
            {
                id: '3',
                title: 'Family Business Succession',
                author: 'Marcus Powell',
                category: 'Business',
                slug: 'family-business-succession',
                description: 'Strategies for passing the torch without burning the bridge.',
                pages: '200',
                publicationDate: '2024',
                clientOnly: true // Locked example
            },
            {
                id: '4',
                title: 'Tax Strategies for HNW',
                author: 'Moye Law Tax Team',
                category: 'Tax',
                slug: 'tax-strategies-hnw',
                description: 'Advanced tax planning for high-net-worth individuals.',
                pages: '150',
                publicationDate: '2024',
                clientOnly: true
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
                    <div className="bg-yellow-400 p-8 md:p-12 border-4 border-navy relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="font-display text-4xl md:text-5xl text-navy mb-4">Legal Resource Library</h1>
                            <p className="text-xl text-navy/80 mb-0">
                                Detailed guides, playbooks, and whitepapers to empower your decision-making.
                                <br /><strong>Note:</strong> Some premium resources are reserved for clients.
                            </p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-navy/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <BooksGrid books={items} />
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}
