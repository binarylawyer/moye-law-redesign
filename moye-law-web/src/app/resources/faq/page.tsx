import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { FAQChat } from '@/components/resources/FAQChat';
import { FAQGrid } from '@/components/ui/FAQGrid';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function FAQPage() {
    const supabase = await createClient();
    const { data: faqs } = await supabase.from('faqs').select('*').order('category');

    // Group FAQs by category manually or just pass to FAQGrid (which expects { question, answer }[])
    // My FAQGrid component logic (checked earlier) takes a simple list? 
    // Let's re-verify FAQGrid logic... 
    // Wait, I created FAQGrid in Batch 2. It accepts `items: { question, answer }[]`.
    // So I might need to group them myself if I want category headers, OR just render one big grid, OR render multiple grids.
    // The legacy `FAQGrid` was just a list.

    // Let's create a categorized view here.
    const categories = Array.from(new Set(faqs?.map(f => f.category) || []));

    const renderFAQs = () => {
        if (!faqs || faqs.length === 0) {
            // Fallback
            return <FAQGrid items={[
                { title: "How do I get started?", description: "Contact us to schedule a consultation." },
                { title: "Do you handle international probate?", description: "Yes, we specialize in cross-border estates." }
            ]} />;
        }

        // If we have categories, render sections
        if (categories.length > 0) {
            return (
                <div className="space-y-16">
                    {categories.map(cat => {
                        const catFaqs = faqs.filter(f => f.category === cat).map(f => ({
                            title: f.question,
                            description: f.answer
                        }));
                        return (
                            <div key={cat}>
                                <h3 className="font-display text-2xl text-navy mb-6 border-b-2 border-gray-100 pb-2">{cat || 'Valid Questions'}</h3>
                                <FAQGrid items={catFaqs} />
                            </div>
                        );
                    })}
                </div>
            );
        }

        return <FAQGrid items={faqs.map(f => ({ title: f.question, description: f.answer }))} />;
    };

    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
                    <Link href="/resources" className="inline-flex items-center text-gray-500 hover:text-navy mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
                    </Link>
                    <h1 className="font-display text-5xl text-navy mb-6">Frequently Asked Questions</h1>
                    <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mb-12">
                        Get instant answers from our AI Concierge, or browse common questions below.
                    </p>

                    {/* Chat Section */}
                    <div className="mb-24">
                        <FAQChat />
                    </div>

                    {/* Static FAQs */}
                    <div>
                        <h2 className="font-display text-3xl text-navy mb-12 text-center">Common Topics</h2>
                        {renderFAQs()}
                    </div>
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}
