import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import V2PageWrapper from '../components/V2PageWrapper';

// Legacy Components and Data
import PodcastList from '../../src/components/podcasts/PodcastList';
import RelatedResources from '../../src/components/resources/RelatedResources';
import { resources as articles } from '../../src/data/articlesData';
import { books } from '../../src/data/booksData';

// Legacy Pages (treated as components)
import FAQ from '../../src/pages/FAQ';
import TechnologyPlatform from '../../src/pages/TechnologyApproach';

// DATA: Case Studies (Copied from src/pages/CaseStudies.tsx)
const caseStudies = [
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
        ],
        practiceArea: "Estate Planning",
        practiceAreaPath: "/practice/trusts-estates"
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
        ],
        practiceArea: "Elder Law",
        practiceAreaPath: "/practice/elder-law"
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
        ],
        practiceArea: "Art Law",
        practiceAreaPath: "/practice/art-law"
    },
    {
        id: "software-licensing",
        title: "Strategic Licensing Framework for SaaS Platform",
        clientType: "Technology Company",
        challenge: "A growing software company needed to restructure their licensing agreements to support expansion while protecting their intellectual property.",
        solution: "We developed a tiered licensing framework with clear terms, usage metrics, and enforcement protocols tailored to different market segments.",
        results: [
            "Increased licensing revenue by 35% in the first year",
            "Reduced unauthorized usage by implementing clear compliance terms",
            "Created scalable framework supporting international expansion"
        ],
        practiceArea: "Intellectual Property",
        practiceAreaPath: "/practice/intellectual-property"
    }
];

const ArchivedResourcesPage = () => {
    // Slice data for display
    const sampleArticles = articles ? articles.slice(0, 3) : [];

    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Knowledge Base</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Archived <br />Resources.</h1>
                    <p className="mt-4 font-sans text-gray-500 max-w-2xl">
                        Library of Podcasts, Books, Articles, and Case Studies from Version 1.0.
                    </p>
                </header>

                <div className="space-y-24">

                    {/* PODCASTS */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Audio Broadcasts (Podcasts)</h2>
                        <div className="bg-white border-2 border-gray-300">
                            <PodcastList />
                        </div>
                    </div>

                    {/* BOOKS */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Publications (Books)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {books.map(book => (
                                <div key={book.id} className="bg-white p-6 border-b-4 border-navy shadow-lg flex gap-6">
                                    <div className="w-24 h-32 bg-gray-200 flex-shrink-0 border border-gray-300 flex items-center justify-center">
                                        {book.coverImageUrl ? (
                                            <img src={book.coverImageUrl} alt={book.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-xs text-gray-400">NO COVER</span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-navy mb-2 leading-tight">{book.title}</h3>
                                        <p className="font-mono text-xs text-gold uppercase mb-4">{book.category}</p>
                                        <p className="font-sans text-sm text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                                        <button className="text-xs font-bold uppercase tracking-widest text-navy border-b border-navy">Download PDF</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ARTICLES */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Intelligence Briefs (Articles)</h2>
                        <div className="bg-white p-6">
                            <RelatedResources resources={sampleArticles} />
                        </div>
                    </div>

                    {/* CASE STUDIES */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Case Studies (Client Success)</h2>
                        <div className="space-y-8">
                            {caseStudies.map(study => (
                                <div key={study.id} className="bg-white border-l-4 border-navy p-6 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-display text-2xl text-navy">{study.title}</h3>
                                            <span className="font-mono text-xs bg-gray-100 px-2 py-1 text-gray-600 mt-2 inline-block">Client: {study.clientType}</span>
                                        </div>
                                        <Link to={study.practiceAreaPath} className="text-gold hover:text-navy transition-colors">
                                            <ArrowRight />
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                        <div>
                                            <h4 className="font-bold text-xs uppercase text-gray-400 mb-2">Challenge</h4>
                                            <p className="text-sm">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs uppercase text-gray-400 mb-2">Solution</h4>
                                            <p className="text-sm">{study.solution}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4">
                                            <h4 className="font-bold text-xs uppercase text-gold mb-2">Results</h4>
                                            <ul className="list-disc list-inside text-sm space-y-1">
                                                {study.results.map((r, i) => <li key={i}>{r}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ CHATBOT */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Interactive FAQ (Chat Interface)</h2>
                        <div className="h-[600px] overflow-hidden border-2 border-gray-300 relative bg-white">
                            {/* FAQ is a full page, so we restrain it within a frame */}
                            <div className="absolute inset-0 overflow-y-auto">
                                <FAQ />
                            </div>
                        </div>
                    </div>

                    {/* TECHNOLOGY PLATFORM */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Technology Platform (Full Page)</h2>
                        <div className="h-[600px] overflow-hidden border-2 border-gray-300 relative bg-white group">
                            <div className="absolute inset-0 overflow-y-auto scale-75 origin-top-left w-[133%] h-[133%] p-4">
                                <TechnologyPlatform />
                            </div>
                            <div className="absolute top-4 right-4 bg-navy text-white text-xs px-3 py-1 bg-opacity-80">
                                Scaled Preview (75%)
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </V2PageWrapper>
    );
};

export default ArchivedResourcesPage;
