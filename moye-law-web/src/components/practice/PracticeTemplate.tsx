"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import MondrianClassicComposition from '@/components/mondrian/MondrianClassicComposition';

// Define TypeScript types for the data structure
export type PrincipleType = {
    number: string;
    title: string;
    description: string;
    color: string;
};

export type ProcessStepType = {
    number: string;
    title: string;
    description: string;
    color: string;
};

export type KeyConsiderationType = {
    title: string;
    description: string;
    icon?: string; // Optional: For future icon integration
    personaTags?: string[]; // Optional: To tag which persona it primarily addresses
};

export type PracticeTemplateProps = {
    title: string;
    description: string;
    principles: PrincipleType[];
    keyConsiderations?: KeyConsiderationType[]; // Add the new data prop
    process: ProcessStepType[];
    phoneNumber: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    ctaTagline: string;
    phoneLabel: string;
};

const PracticeTemplate: React.FC<PracticeTemplateProps> = ({
    title,
    description,
    principles,
    keyConsiderations = [], // Default to empty array
    process,
    phoneNumber,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaTagline,
    phoneLabel
}) => {
    // Add useEffect to handle reveal animations within the template
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    // observer.unobserve(entry.target); // Optional: keep observing or unobserve
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        // Select all elements with the 'reveal' class *within this component*
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.observe(el));

        // Cleanup function to unobserve elements when the component unmounts
        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="bg-white">
            <main className="pt-32 md:pt-40">
                {/* Hero Section */}
                <section className="py-16">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row">
                            {/* Mondrian composition on left - changed from 1/3 to 1/4 width */}
                            <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                                <MondrianClassicComposition />
                            </div>

                            {/* Added spacing between Mondrian and content */}
                            <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>

                            {/* White content block - adjusted width */}
                            <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
                                <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">{title}</h1>
                                <p className="text-xl text-black/80">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principles Section */}
                <section className="py-16">
                    <div className="container mx-auto px-8">
                        <div className="grid grid-cols-12 mb-16">
                            <div className="col-span-3 bg-[#FFEB80] h-4"></div>
                            <div className="col-span-6 bg-white p-8 text-center relative -top-8">
                                <h2 className="font-display text-black text-3xl mb-0">Our Principles</h2>
                            </div>
                            <div className="col-span-3 bg-white border-r-4 border-b-4 border-black h-4"></div>
                        </div>

                        <div className="space-y-8 max-w-5xl mx-auto">
                            {principles.map((principle, index) => {
                                // Map color strings to actual Tailwind classes if needed, or assume they are passed correctly
                                // The legacy code used 'mondrian-yellow', 'mondrian-blue', etc. which were customs CSS classes.
                                // I will map them to standard Tailwind colors for safety or ensure custom classes exist.
                                // For now, I'll rely on the passed strings but might need to adjust if 'mondrian-*' classes aren't in globals.css
                                // Let's assume standard colors for now to be safe:
                                let bgClass = 'bg-black';
                                if (principle.color === 'mondrian-yellow') bgClass = 'bg-[#FFEB80]';
                                if (principle.color === 'mondrian-blue') bgClass = 'bg-[#4D80D4]';
                                if (principle.color === 'mondrian-red') bgClass = 'bg-[#D6001C]';
                                if (principle.color === 'mondrian-white') bgClass = 'bg-white';

                                return (
                                    <div key={index} className="flex flex-col md:flex-row">
                                        {/* Number block with corresponding Mondrian color */}
                                        <div className={`${bgClass} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                                            <span className="font-display text-white text-3xl font-bold">{principle.number}</span>
                                        </div>

                                        {/* Content block */}
                                        <div className="bg-white p-6 border-4 border-black flex-grow">
                                            <h3 className="font-display text-black text-2xl mb-4">{principle.title}</h3>
                                            <p className="text-black/80 text-lg">{principle.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Key Considerations Section (New Styling) */}
                {keyConsiderations.length > 0 && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-8">
                            <div className="grid grid-cols-12 mb-20">
                                <div className="col-span-3 bg-[#4D80D4]/20 h-4"></div>
                                <div className="col-span-6 bg-white p-8 text-center relative -top-8">
                                    <h2 className="font-display text-black text-3xl mb-0">Key Considerations</h2>
                                </div>
                                <div className="col-span-3 bg-white border-r-4 border-b-4 border-black h-4"></div>
                            </div>

                            {/* Grid for the cards with more spacing */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
                                {keyConsiderations.map((item, index) => {
                                    const colors = ['bg-[#D6001C]', 'bg-[#4D80D4]', 'bg-[#FFEB80]'];
                                    const bgColorClass = colors[index % colors.length];

                                    return (
                                        // Outer Card: Rectangular frame, padding p-6, thick black border
                                        <div
                                            key={index}
                                            className={`group reveal opacity-0 translate-y-4 transition-all duration-700 ${bgColorClass} p-6 border-4 border-black flex items-center justify-center`}
                                        >
                                            {/* Inner Card: SQUARE, 85% size (10% bigger than before), centered, with more space between title and description */}
                                            <div className="bg-white p-3 border-2 border-black aspect-square transition-transform duration-300 ease-in-out group-hover:scale-[1.02] w-[85%] h-[85%] flex flex-col justify-center items-center">
                                                <h3 className="font-display text-black text-xl mb-5 text-center">{item.title}</h3>
                                                <p className="text-black/90 text-sm leading-relaxed text-center w-[90%]">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Process Section - Reverted to 2-Column Layout */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-8">
                        <div className="grid grid-cols-12 mb-20">
                            {/* Title bar for Process Section */}
                            <div className="col-span-3 bg-white border-r-4 border-b-4 border-black h-4"></div>
                            <div className="col-span-6 bg-white p-8 text-center relative -top-8">
                                <h2 className="font-display text-black text-3xl mb-0">Our Process</h2>
                            </div>
                            <div className="col-span-3 bg-[#D6001C] h-4"></div>
                        </div>

                        {/* Grid for Process Steps - Reverted to 2 columns, map all steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                            {/* Map ALL process steps */}
                            {process.map((step, index) => {
                                let bgClass = 'bg-black';
                                if (step.color === 'mondrian-yellow') bgClass = 'bg-[#FFEB80]';
                                if (step.color === 'mondrian-blue') bgClass = 'bg-[#4D80D4]';
                                if (step.color === 'mondrian-red') bgClass = 'bg-[#D6001C]';

                                return (
                                    <div
                                        key={index}
                                        // Use original padding p-8 
                                        className="reveal opacity-0 translate-y-4 transition-all duration-700 bg-white p-8 border-4 border-black flex flex-col"
                                    >
                                        {/* Top section with number and title */}
                                        <div className="flex items-center mb-6 pb-4 border-b-2 border-gray-200">
                                            {/* Number block with corresponding Mondrian color */}
                                            <div className={`${bgClass} w-16 h-16 flex-shrink-0 flex items-center justify-center mr-6`}>
                                                <span className="font-display text-white text-2xl font-bold">{step.number}</span>
                                            </div>
                                            {/* Title */}
                                            <h3 className="font-display text-black text-2xl flex-grow">{step.title}</h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-black/80 text-lg flex-grow">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Call to action button */}
                <section className="py-8">
                    <div className="container mx-auto px-8 flex justify-center">
                        <div className="flex items-center w-full max-w-4xl">
                            <div className="bg-[#FFEB80] h-8 w-16 flex-shrink-0"></div>
                            <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
                                <span className="text-xl font-display">{phoneLabel}: {phoneNumber}</span>
                            </div>
                            <div className="bg-[#D6001C] h-8 w-32 flex-shrink-0"></div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-8 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 border-4 border-black">
                            {/* Text content area (span 7) */}
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
                                <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-4">
                                    {ctaTagline}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-display mb-4 text-black">
                                    {ctaTitle}
                                </h2>
                                <p className="text-lg text-gray-700 mb-8">
                                    {ctaDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-3 border-2 border-black bg-[#FFEB80] text-black font-semibold text-lg hover:bg-black hover:text-[#FFEB80] transition-colors duration-300"
                                    >
                                        {ctaButtonText} <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            </div>
                            {/* Mondrian color blocks area (span 5) */}
                            <div className="hidden md:grid md:col-span-5 grid-rows-2 grid-cols-3 gap-0">
                                <div className="col-span-2 row-span-1 bg-[#4D80D4] border-b-4 border-r-4 border-black"></div>
                                <div className="col-span-1 row-span-1 bg-white border-b-4 border-black"></div>
                                <div className="col-span-1 row-span-1 bg-[#D6001C] border-l-4 border-black"></div>
                                <div className="col-span-2 row-span-1 bg-[#FFEB80] border-t-4 border-black border-r-4"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PracticeTemplate;
