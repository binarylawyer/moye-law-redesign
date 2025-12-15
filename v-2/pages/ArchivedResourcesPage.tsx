import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';

// Legacy Components and Data
import PodcastList from '../../src/components/podcasts/PodcastList';
import RelatedResources from '../../src/components/resources/RelatedResources';
import { articles } from '../../src/data/articlesData';
import { books } from '../../src/data/booksData';

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
                        Library of Podcasts, Books, and Articles from Version 1.0.
                    </p>
                </header>

                <div className="space-y-24">

                    {/* PODCASTS */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Audio Broadcasts (Podcasts)</h2>
                        {/* PodcastList has its own Section wrapper, so we just drop it in */}
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

                </div>
            </div>
        </V2PageWrapper>
    );
};

export default ArchivedResourcesPage;
