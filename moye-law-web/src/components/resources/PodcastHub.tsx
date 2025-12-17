"use client";

import React, { useState } from 'react';
import { PlayCircle, Headphones, Share2, BookmarkPlus, ScrollText, Book, Mic, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export interface RelatedContent {
    type: 'article' | 'book' | 'research';
    title: string;
    slug: string;
    excerpt: string;
    clientOnly?: boolean;
}

export interface PodcastEpisode {
    id: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    topics: string[];
    audioUrl?: string;
    transcript?: string;
    relatedContent?: RelatedContent[];
}

interface PodcastHubProps {
    podcasts: PodcastEpisode[];
}

export const PodcastHub: React.FC<PodcastHubProps> = ({ podcasts }) => {
    const [selectedPodcast, setSelectedPodcast] = useState<PodcastEpisode>(podcasts[0] || null);
    const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState<'transcript' | 'related'>('transcript');

    if (!selectedPodcast) return <div>No podcasts available.</div>;

    // Filter Logic
    const estatePodcasts = podcasts.filter(p => p.topics.some(t => ['Estate Planning', 'Trusts', 'Probate'].includes(t)));
    const techPodcasts = podcasts.filter(p => p.topics.some(t => ['IP Strategy', 'Digital Assets', 'Tech'].includes(t)));

    // Fallback lists if empty (to show *something* in the grids if everything is 'General')
    const displayEstate = estatePodcasts.length > 0 ? estatePodcasts : podcasts.slice(0, 2);
    const displayTech = techPodcasts.length > 0 ? techPodcasts : podcasts.slice(2, 4);

    return (
        <div className="space-y-16">

            {/* FEATURED PLAYER SECTION */}
            <section className="border-t-4 border-navy bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Player Main Area */}
                    <div className={`lg:col-span-${isPlayerExpanded ? '12' : '7'} transition-all duration-500 ease-in-out`}>
                        <div className="bg-gradient-to-br from-blue-900 to-navy rounded-lg p-8 text-white relative overflow-hidden shadow-2xl">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-700 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-700 text-white mb-3">
                                            <Headphones className="w-3 h-3 mr-2" /> Now Playing
                                        </span>
                                        <h2 className="font-display text-2xl md:text-4xl mb-2">{selectedPodcast.title}</h2>
                                        <div className="text-blue-200 font-mono text-xs flex gap-4">
                                            <span>{selectedPodcast.date}</span>
                                            <span>{selectedPodcast.duration}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        {isPlayerExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                                    </button>
                                </div>

                                <p className="text-blue-100 mb-8 max-w-2xl leading-relaxed">
                                    {selectedPodcast.description}
                                </p>

                                {/* Audio Controls Placeholder */}
                                <div className="bg-black/30 rounded-xl p-4 mb-8 border border-white/10">
                                    <div className="h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                                        <div className="w-1/3 h-full bg-yellow-400"></div>
                                    </div>
                                    <div className="flex justify-center gap-6 items-center">
                                        <button className="text-white/70 hover:text-white">⏮️</button>
                                        <button className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                            <PlayCircle className="w-8 h-8 fill-current" />
                                        </button>
                                        <button className="text-white/70 hover:text-white">⏭️</button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-medium transition-colors">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-medium transition-colors">
                                        <BookmarkPlus className="w-4 h-4" /> Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel (Transcript / Related) */}
                    {!isPlayerExpanded && (
                        <div className="lg:col-span-5 flex flex-col h-full bg-gray-50 border-2 border-gray-100 rounded-lg overflow-hidden">
                            <div className="flex border-b border-gray-200 bg-white">
                                <button
                                    onClick={() => setActiveTab('transcript')}
                                    className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider ${activeTab === 'transcript' ? 'border-b-4 border-navy text-navy bg-gray-50' : 'text-gray-400 hover:text-navy'}`}
                                >
                                    Transcript
                                </button>
                                <button
                                    onClick={() => setActiveTab('related')}
                                    className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider ${activeTab === 'related' ? 'border-b-4 border-navy text-navy bg-gray-50' : 'text-gray-400 hover:text-navy'}`}
                                >
                                    Related
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto max-h-[500px] flex-grow custom-scrollbar">
                                {activeTab === 'transcript' ? (
                                    <div className="prose prose-sm max-w-none text-gray-600">
                                        {selectedPodcast.transcript ? (
                                            <pre className="whitespace-pre-wrap font-sans text-sm">{selectedPodcast.transcript}</pre>
                                        ) : (
                                            <p className="italic text-gray-400">Transcript not available for this episode.</p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {selectedPodcast.relatedContent?.map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 border-l-4 border-red-700 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-bold text-red-700 uppercase">{item.type}</span>
                                                    {item.clientOnly && <span className="bg-gray-100 text-gray-500 text-[10px] px-1 rounded">Client Only</span>}
                                                </div>
                                                <h4 className="font-display text-navy mb-2">{item.title}</h4>
                                                <p className="text-xs text-gray-500 mb-2">{item.excerpt}</p>
                                                <Link href={`/resources/${item.slug}`} className="text-xs font-bold text-navy hover:underline flex items-center">
                                                    View Resource <ChevronRight className="w-3 h-3 ml-1" />
                                                </Link>
                                            </div>
                                        ))}
                                        {(!selectedPodcast.relatedContent || selectedPodcast.relatedContent.length === 0) && (
                                            <p className="italic text-gray-400">No related content linked.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ESTATE PLANNING GRID */}
            <section>
                <div className="flex items-end justify-between mb-8 border-b-2 border-gray-100 pb-2">
                    <h3 className="font-display text-2xl text-navy">Estate Planning Series</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayEstate.map((podcast, idx) => (
                        <div
                            key={podcast.id}
                            onClick={() => setSelectedPodcast(podcast)}
                            className={`cursor-pointer group bg-white border-2 hover:border-navy transition-all duration-300 ${selectedPodcast.id === podcast.id ? 'border-navy ring-2 ring-navy/20' : 'border-transparent'}`}
                        >
                            {/* Mini Visualizer */}
                            <div className="h-32 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <PlayCircle className="w-8 h-8 text-navy ml-1" />
                                </div>
                                {/* Colored Strip */}
                                <div className={`absolute bottom-0 left-0 w-full h-1 ${idx % 2 === 0 ? 'bg-red-700' : 'bg-yellow-400'}`}></div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between text-xs text-gray-500 mb-2">
                                    <span>{podcast.date}</span>
                                    <span>{podcast.duration}</span>
                                </div>
                                <h4 className="font-display text-lg text-navy mb-2 leading-tight group-hover:text-blue-800 transition-colors">{podcast.title}</h4>
                                <p className="text-xs text-gray-600 line-clamp-2">{podcast.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH GRID */}
            <section>
                <div className="flex items-end justify-between mb-8 border-b-2 border-gray-100 pb-2">
                    <h3 className="font-display text-2xl text-navy">Tech & Digital Assets</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayTech.map((podcast, idx) => (
                        <div
                            key={podcast.id}
                            onClick={() => setSelectedPodcast(podcast)}
                            className={`cursor-pointer group bg-white border-2 hover:border-navy transition-all duration-300 ${selectedPodcast.id === podcast.id ? 'border-navy ring-2 ring-navy/20' : 'border-transparent'}`}
                        >
                            <div className="h-32 bg-navy relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <PlayCircle className="w-8 h-8 text-red-700 ml-1" />
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between text-xs text-gray-500 mb-2">
                                    <span>{podcast.date}</span>
                                    <span>{podcast.duration}</span>
                                </div>
                                <h4 className="font-display text-lg text-navy mb-2 leading-tight group-hover:text-blue-800 transition-colors">{podcast.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};
