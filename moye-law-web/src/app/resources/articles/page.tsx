import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { ResourcesGrid, ResourceItem } from '@/components/resources/ResourcesGrid';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function ArticlesListPage() {
    const supabase = createClient();
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

    // Fallback data if DB is empty
    let items: ResourceItem[] = [];

    if (articles && articles.length > 0) {
        items = articles.map(row => ({
            id: row.id,
            type: 'article',
            title: row.title,
            description: row.summary || row.content?.substring(0, 150) || '',
            date: new Date(row.published_at!).toLocaleDateString(),
            slug: row.slug,
            imageUrl: row.image_url,
            category: row.tags?.[0] || 'Legal Insights'
        }));
    } else {
        // Fallback Mock Data matching legacy feeling
        items = [
            {
                id: 'seed-1',
                type: 'article',
                title: "The First Amendment in the Digital Age",
                description: "How traditional free speech protections are evolving to address the unique challenges of online expression and platform governance.",
                date: "May 15, 2024",
                slug: "first-amendment-digital-age",
                category: "Constitutional Law",
                imageUrl: "/images/articles/first-amendment.jpg"
            },
            {
                id: 'seed-2',
                type: 'article',
                title: "AI and Intellectual Property",
                description: "Exploring the complex intellectual property questions arising from AI-generated content and inventions.",
                date: "April 3, 2024",
                slug: "ai-intellectual-property",
                category: "IP Strategy",
                imageUrl: "/images/articles/ai-ip.jpg"
            },
            {
                id: 'seed-3',
                type: 'article',
                title: "Strategic Wealth Preservation 2025",
                description: "A comprehensive look at the changing tax landscape and strategies for high-net-worth families.",
                date: "June 10, 2024",
                slug: "strategic-wealth-2025",
                category: "Estate Planning"
            },
            {
                id: 'seed-4',
                type: 'article',
                title: "The Future of Digital Legacy",
                description: "Protecting your digital assets: cryptocurrency, NFTs, and online accounts in your estate plan.",
                date: "Oct 12, 2024",
                slug: "future-of-digital-legacy",
                category: "Digital Assets"
            }
        ];
    }

    const featured = items[0];
    const remaining = items.slice(1);

    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
                    <Link href="/resources" className="inline-flex items-center text-gray-500 hover:text-navy mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
                    </Link>
                    <h1 className="font-display text-5xl text-navy mb-6">Legal Articles & Insights</h1>
                    <div className="w-24 h-1 bg-red-700"></div>
                </div>

                {/* Featured Article - Mondrian Layout */}
                {featured && (
                    <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-12 border-4 border-navy">
                            {/* Image Block */}
                            <div className="md:col-span-8 bg-gray-100 min-h-[400px] relative border-b-4 md:border-b-0 md:border-r-4 border-navy">
                                {featured.imageUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={featured.imageUrl} alt={featured.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 font-mono">
                                        Featured Article Image
                                    </div>
                                )}
                                <div className="absolute top-0 left-0 bg-red-700 text-white px-4 py-2 font-display text-lg">
                                    Featured
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="md:col-span-4 bg-white p-8 flex flex-col justify-center">
                                <div className="text-sm text-gray-500 mb-2 font-mono">{featured.date}</div>
                                <h2 className="font-display text-3xl text-navy mb-4 leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-600 mb-8 line-clamp-4">
                                    {featured.description}
                                </p>
                                <Link href={`/resources/articles/${featured.slug}`} className="inline-block text-navy font-bold hover:text-red-700 transition-colors uppercase tracking-wider text-sm border-b-2 border-navy hover:border-red-700 pb-1 w-fit">
                                    Read Full Article
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Remaining Articles Grid */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <h3 className="font-display text-2xl text-navy mb-8">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {remaining.map(article => (
                            <div key={article.id} className="group cursor-pointer">
                                <div className="relative h-64 bg-gray-100 mb-4 overflow-hidden border-b-4 border-yellow-400 group-hover:border-navy transition-colors">
                                    {article.imageUrl && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 text-xs font-bold text-navy backdrop-blur-sm">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                                <h4 className="font-display text-xl text-navy mb-2 group-hover:text-blue-800 transition-colors">
                                    <Link href={`/resources/articles/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h4>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {article.description}
                                </p>
                            </div>
                        ))}

                        {remaining.length === 0 && (
                            <p className="text-gray-500 italic">More articles coming soon.</p>
                        )}
                    </div>
                </section>

            </main>

            <TerminalFooter />
        </div>
    );
}
