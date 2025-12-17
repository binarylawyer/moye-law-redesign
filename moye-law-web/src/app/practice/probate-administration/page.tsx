import React from 'react';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

export default function ProbateAdministration() {
    return (
        <div className="bg-white min-h-screen pt-32 md:pt-40">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row mb-16">
                    <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                        <MondrianClassicComposition />
                    </div>
                    <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
                    <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1">
                        <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">
                            Probate Administration
                        </h1>
                        <p className="text-xl text-black/80 mb-8">
                            Guidance through the probate process, representation in probate court, and estate administration.
                        </p>
                        <div className="p-6 bg-gray-50 border-l-4 border-[#D6001C]">
                            <p className="text-gray-700">
                                This practice area page is currently being updated to better serve you. Please contact our main office for immediate assistance with probate matters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
