import React from 'react';
import { Quote } from 'lucide-react';

const LegalExhibit: React.FC = () => {
    return (
        <div className="w-full bg-[#FAFAFA] border-b-4 border-navy py-24">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header Label */}
                <div className="flex justify-center mb-12">
                    <span className="bg-navy text-white px-4 py-1 font-mono text-sm tracking-widest">
                        EXHIBIT_A: CLIENT_VOICES
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Exhibit A: The Founder */}
                    <div className="bg-white p-8 md:p-12 border-4 border-navy shadow-[8px_8px_0px_0px_rgba(10,35,66,0.2)] transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(10,35,66,0.2)] transition-all duration-300">
                        <div className="flex justify-between items-start mb-8 border-b-2 border-gray-100 pb-4">
                            <span className="font-mono text-xs text-gray-400">REF: CASE_9042</span>
                            <Quote className="text-gold w-8 h-8 opacity-50" />
                        </div>
                        <blockquote className="font-serif text-2xl text-navy italic leading-relaxed mb-8">
                            "Moye Law didn't just write our contracts; they engineered our entire IP strategy.
                            It felt less like legal advice and more like a system upgrade."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 border-2 border-navy"></div>
                            <div>
                                <cite className="font-display text-lg text-navy not-italic font-bold block">
                                    Sarah Jenkins
                                </cite>
                                <span className="font-mono text-xs text-gold uppercase">
                                    CEO, TechFlow Inc.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Exhibit B: The Family */}
                    <div className="bg-white p-8 md:p-12 border-4 border-navy shadow-[8px_8px_0px_0px_rgba(10,35,66,0.2)] transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(10,35,66,0.2)] transition-all duration-300">
                        <div className="flex justify-between items-start mb-8 border-b-2 border-gray-100 pb-4">
                            <span className="font-mono text-xs text-gray-400">REF: ESTATE_B22</span>
                            <Quote className="text-gold w-8 h-8 opacity-50" />
                        </div>
                        <blockquote className="font-serif text-2xl text-navy italic leading-relaxed mb-8">
                            "We wanted to secure our legacy for the next generation.
                            The team mapped out a structure that was both bulletproof and beautiful."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 border-2 border-navy"></div>
                            <div>
                                <cite className="font-display text-lg text-navy not-italic font-bold block">
                                    The Harrison Family
                                </cite>
                                <span className="font-mono text-xs text-gold uppercase">
                                    Private Clients
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LegalExhibit;
