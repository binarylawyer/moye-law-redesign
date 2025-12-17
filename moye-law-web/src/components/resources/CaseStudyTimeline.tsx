"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface CaseStudyItem {
    id: string;
    title: string;
    clientType: string;
    challenge: string;
    solution: string;
    results: string[];
    practiceArea?: string; // e.g. "Estate Planning"
    practiceAreaSlug?: string; // e.g. "estate-planning"
}

interface CaseStudyTimelineProps {
    items: CaseStudyItem[];
}

export const CaseStudyTimeline: React.FC<CaseStudyTimelineProps> = ({ items }) => {
    return (
        <div className="relative py-20">
            {/* Background Decorative Lines */}
            <div className="absolute w-screen h-4 bg-blue-100 left-[-50vw] top-[20%] -z-10"></div>
            <div className="absolute w-screen h-2 bg-navy left-[-50vw] top-[25%] -z-10"></div>

            <div className="space-y-32">
                {items.map((study, index) => {
                    const isEven = index % 2 === 0;

                    // Mondrian Logic
                    const colors = ['bg-red-700', 'bg-yellow-400', 'bg-blue-800', 'bg-blue-100', 'bg-navy'];
                    const color1 = colors[index % 5];
                    const color2 = colors[(index + 2) % 5];

                    return (
                        <div
                            key={study.id}
                            className={`relative flex flex-col md:flex-row gap-8 items-stretch ${isEven ? '' : 'md:flex-row-reverse'}`}
                        >
                            {/* Decorative Squares - Absolute Positioning */}
                            <div className={`absolute w-12 h-12 border-2 border-navy z-10 ${color1} ${isEven ? '-top-4 -left-4' : '-bottom-4 -right-4'}`}></div>
                            <div className={`absolute w-8 h-8 border-2 border-navy z-10 ${color2} ${isEven ? '-bottom-4 -right-4' : '-top-6 -left-6'}`}></div>

                            {/* Main Content Card */}
                            <div className="flex-grow bg-white border-2 border-navy p-8 md:p-12 shadow-2xl relative z-0 md:w-2/3">
                                <h2 className="font-display text-3xl text-navy mb-2">{study.title}</h2>
                                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Client: {study.clientType}</p>

                                <div className="grid gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-navy mb-2 border-l-4 border-red-700 pl-3">The Challenge</h3>
                                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy mb-2 border-l-4 border-yellow-400 pl-3">The Solution</h3>
                                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                                    <Link href={`/practice`} className="inline-flex items-center text-navy font-bold hover:text-red-700 transition-colors uppercase tracking-wider text-xs">
                                        View Practice Areas <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>

                            {/* Results Sidebar */}
                            <div className={`md:w-1/3 flex flex-col justify-center`}>
                                <div className={`p-8 border-2 border-navy h-full flex flex-col justify-center ${color2 === 'bg-navy' || color2 === 'bg-blue-800' || color2 === 'bg-red-700' ? 'text-white' : 'text-navy'} ${color2}`}>
                                    <h3 className="font-display text-xl mb-4 border-b border-current pb-2">Key Results</h3>
                                    <ul className="space-y-4">
                                        {study.results.map((r, i) => (
                                            <li key={i} className="flex items-start text-sm font-medium leading-normal">
                                                <span className="mr-2 opacity-50">•</span>
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
