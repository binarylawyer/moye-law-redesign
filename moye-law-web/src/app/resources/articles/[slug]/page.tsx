import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Printer, Clock, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Quick fetch for metadata (simulated)
    // In real app, fetch title/desc here
    return {
        title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Moye Law Insights`,
    }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const supabase = createClient();

    const { data: article } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

    // If no DB data, check for our "seed" slugs to render the mock data for preview
    let displayArticle = article;

    if (!displayArticle) {
        const seeds: Record<string, any> = {
            "first-amendment-digital-age": {
                title: "The First Amendment in the Digital Age: New Challenges",
                author: "Sarah Chen, Esq.",
                date: "May 15, 2024",
                readTime: "8 min read",
                category: "Constitutional Law",
                tags: ["First Amendment", "Digital Rights", "Social Media"],
                content: `
              <p class="mb-6 leading-relaxed">Freedom of expression faces unprecedented challenges in the digital age. As communication increasingly shifts to online platforms, traditional First Amendment principles developed for print and broadcast media require thoughtful reconsideration.</p>
              
              <h2 class="text-2xl font-display text-navy mt-8 mb-4">Platform Governance</h2>
              <p class="mb-6 leading-relaxed">Private companies now serve as the primary gatekeepers of public discourse. Their content moderation policies, while not subject to First Amendment constraints, profoundly shape the boundaries of acceptable speech for billions of users worldwide.</p>
              
              <p class="mb-6 leading-relaxed">Courts have consistently held that social media companies, as private entities, can establish and enforce their own content guidelines. However, recent legislative efforts in several states have attempted to limit platforms' moderation abilities, creating tension between state law and platforms' own First Amendment rights to editorial discretion.</p>
              
              <h2 class="text-2xl font-display text-navy mt-8 mb-4">Digital Public Forums</h2>
              <p class="mb-6 leading-relaxed">The Supreme Court has begun addressing how traditional public forum doctrine translates to digital spaces. In <em>Packingham v. North Carolina</em> (2017), Justice Kennedy described social media as "the modern public square," suggesting enhanced protection for online speech.</p>
            `,
                image_url: "/images/articles/first-amendment.jpg"
            }
        };

        if (seeds[slug]) {
            displayArticle = seeds[slug];
        }
    }

    if (!displayArticle) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                {/* Breadcrumb / Nav */}
                <div className="container mx-auto px-4 md:px-8 max-w-4xl mb-8">
                    <Link href="/resources/articles" className="inline-flex items-center text-gray-500 hover:text-navy transition-colors text-sm font-mono uppercase tracking-wider">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
                    </Link>
                </div>

                {/* Header */}
                <article className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="mb-8 border-b-4 border-navy pb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {displayArticle.tags?.map((tag: string, idx: number) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs uppercase font-bold tracking-wider rounded-sm">
                                    {tag}
                                </span>
                            )) || <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs uppercase font-bold tracking-wider rounded-sm">Article</span>}
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl md:leading-tight text-navy mb-6">
                            {displayArticle.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 font-mono text-xs md:text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{displayArticle.author || 'Moye Law Firm'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(displayArticle.date || new Date()).toLocaleDateString()}</span>
                            </div>
                            {displayArticle.readTime && (
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{displayArticle.readTime}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content & Sidebar Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-8">
                            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-p:text-gray-700 prose-a:text-blue-600">
                                {displayArticle.image_url && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={displayArticle.image_url} alt={displayArticle.title} className="w-full h-auto rounded-none mb-8 border-2 border-gray-100" />
                                )}

                                <div dangerouslySetInnerHTML={{ __html: displayArticle.content || '<p>No content available.</p>' }} />
                            </div>

                            {/* Author Box */}
                            <div className="mt-16 bg-gray-50 p-8 border-l-4 border-yellow-400">
                                <h3 className="font-display text-xl text-navy mb-2">About the Author</h3>
                                <p className="text-gray-600">
                                    {(displayArticle.author || 'The Author').split(',')[0]} represents the firm's commitment to excellence in {displayArticle.category || 'legal practice'}.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-4 space-y-8">
                            {/* Share Tools */}
                            <div className="bg-white border-2 border-gray-200 p-6">
                                <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-4">Share</h4>
                                <div className="flex gap-4">
                                    <button className="p-2 bg-gray-100 hover:bg-navy hover:text-white rounded-full transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-gray-100 hover:bg-navy hover:text-white rounded-full transition-colors">
                                        <Printer className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Service CTA */}
                            <div className="bg-navy text-white p-8 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="font-display text-2xl mb-4">Need Guidance?</h4>
                                    <p className="text-blue-100 mb-6 text-sm">
                                        This article provides general information. For specific legal advice related to your situation, please consult with our team.
                                    </p>
                                    <Link href="/contact" className="inline-block bg-gold text-navy font-bold px-6 py-3 hover:bg-white transition-colors">
                                        Request Consultation
                                    </Link>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-800 rounded-full mix-blend-multiply opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <TerminalFooter />
        </div>
    );
}
