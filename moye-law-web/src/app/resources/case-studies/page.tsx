import React from 'react';
import { createClient } from '@/lib/supabase/server';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { CaseStudyTimeline, CaseStudyItem } from '@/components/resources/CaseStudyTimeline';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CaseStudiesPage() {
    const supabase = createClient();
    const { data: studies } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });

    // Map DB to Props
    const mapStudy = (row: any): CaseStudyItem => ({
        id: row.id,
        title: row.title,
        clientType: row.client_type || 'Private Client',
        challenge: row.challenge,
        solution: row.solution,
        results: row.results || [],
        practiceArea: 'Estate Planning', // Placeholder or fetch via join
    });

    let items: CaseStudyItem[] = [];
    if (studies && studies.length > 0) {
        items = studies.map(mapStudy);
    } else {
        // Fallback Mock Data matching Legacy
        items = [
            {
                id: "tech-founder-estate",
                title: "Protecting a Tech Founder's Legacy",
                clientType: "Tech Entrepreneur",
                challenge: "A successful tech founder needed to protect intellectual assets while establishing a multigenerational wealth transfer structure that would support both family and philanthropic goals.",
                solution: "We created a comprehensive estate plan incorporating specialized trusts for digital assets, intellectual property protection, and strategic philanthropic structures.",
                results: [
                    "Reduced potential estate tax exposure by over 40%",
                    "Created secure succession protocols for digital assets",
                    "Established foundation structure aligned with client's values"
                ]
            },
            {
                id: "family-elder-care",
                title: "Navigating Elder Care for a Family Matriarch",
                clientType: "Family Office",
                challenge: "A family needed to establish comprehensive care for their aging matriarch while protecting assets and ensuring quality of life.",
                solution: "We developed an integrated elder care strategy combining legal documents, care coordination frameworks, and asset protection techniques.",
                results: [
                    "Preserved 95% of assets from long-term care costs",
                    "Established clear decision-making protocols across family members",
                    "Created sustainable funding structure for premium care options"
                ]
            },
            {
                id: "artist-ip-protection",
                title: "Securing a Renowned Artist's Creative Legacy",
                clientType: "Professional Artist",
                challenge: "A successful visual artist needed to protect intellectual property across multiple media while establishing structures for posthumous rights management.",
                solution: "We implemented a comprehensive IP protection strategy alongside specialized art trusts and licensing frameworks.",
                results: [
                    "Registered complete portfolio of works across multiple jurisdictions",
                    "Established transparent artist-friendly licensing structure",
                    "Created foundation for posthumous exhibition and reproduction"
                ]
            }
        ];
    }

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
                    <Link href="/resources" className="inline-flex items-center text-gray-500 hover:text-navy mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
                    </Link>
                    <h1 className="font-display text-5xl text-navy mb-6">Client Success Stories</h1>
                    <div className="w-24 h-1 bg-red-700 mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Real-world examples of how we navigate complex legal landscapes to protect what matters most.
                        <br /><span className="text-sm italic text-gray-400">*Identifying details have been anonymized.</span>
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <CaseStudyTimeline items={items} />
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}
