"use client";

import React from 'react';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

import { ProcessTimeline } from '@/components/ui/ProcessTimeline';
import { Clock, Target, Zap, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HowWeWorkPage() {
    const processSteps = [
        {
            title: "The Private Consultation",
            description: "Your journey begins with an exclusive consultation where we explore your vision and objectives. We measure your precise needs and aspirations.",
            details: ["Asset & Risk Assessment", "Goal Alignment", "Preliminary Strategy"]
        },
        {
            title: "Artisanal Strategy",
            description: "We craft a bespoke legal strategy with meticulous care. Every detail is thoughtfully considered, every contingency elegantly addressed.",
            details: ["Custom Legal Frameworks", "Scenario Planning", "Stakeholder Review"]
        },
        {
            title: "Flawless Execution",
            description: "We execute with precision and confidence, drawing on decades of expertise and our innovative approach to deliver exceptional results.",
            details: ["Implementation Roadmap", "Continuous Monitoring", "Seamless Integration"]
        }
    ];

    return (
        <div className="min-h-screen bg-white selection:bg-navy selection:text-white">
            <NavBarV2 />

            <main className="pt-32 pb-24">
                {/* HERO SECTION */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24 md:mb-32">
                    <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24 md:mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[60vh] border-4 border-navy">
                            {/* SLOT 1: Red Block */}
                            <div className="md:col-span-1 bg-red-700 min-h-[100px] md:min-h-full border-b-4 md:border-b-0 md:border-r-4 border-navy"></div>

                            {/* SLOT 2: Content Block */}
                            <div className="md:col-span-10 bg-white relative flex flex-col justify-center items-center p-8 text-center md:border-r-4 border-navy overflow-hidden">
                                <MondrianGrid />
                                <div className="relative z-10">
                                    <RevealContent>
                                        <h1 className="font-display text-5xl md:text-7xl mb-6 text-navy tracking-tight">
                                            How We Work
                                        </h1>
                                        <p className="font-sans text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                                            The intersection of traditional legal expertise and forward-thinking innovation.
                                        </p>
                                    </RevealContent>
                                </div>
                            </div>

                            {/* SLOT 3: Yellow Block */}
                            <div className="md:col-span-1 bg-yellow-400 min-h-[100px] md:min-h-full border-t-4 md:border-t-0 border-navy"></div>
                        </div>
                    </section>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24 md:mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-4 bg-navy p-12 text-white h-full flex items-center">
                            <RevealContent>
                                <h2 className="font-display text-4xl">Our Philosophy</h2>
                            </RevealContent>
                        </div>
                        <div className="md:col-span-8 p-4 md:p-8">
                            <RevealContent delay={0.2}>
                                <p className="font-serif text-2xl md:text-3xl text-navy leading-relaxed mb-8">
                                    "We blend personalized attention with technological innovation to deliver legal solutions that are both traditional in values and forward-thinking in execution."
                                </p>
                                <div className="w-24 h-1 bg-red-700"></div>
                            </RevealContent>
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="bg-gray-50 py-24 md:py-32 border-t-4 border-navy mb-24">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <RevealContent>
                                <h2 className="font-display text-4xl text-navy mb-4">The Moye Experience</h2>
                                <p className="text-gray-600">Our distinctive process ensures results as remarkable as they are refined.</p>
                            </RevealContent>
                        </div>

                        <ProcessTimeline
                            steps={processSteps}
                        />
                    </div>
                </section>

                {/* SIGNATURE APPROACH (2x2 Grid) */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24 md:mb-32">
                    <RevealContent>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl text-navy mb-6">The Moye Law Signature</h2>
                            <div className="w-24 h-1 bg-navy mx-auto"></div>
                        </div>
                    </RevealContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Personalized Attention",
                                description: "Your relationship with us is intimate and exclusive. We limit our client roster to ensure each receives our undivided attention.",
                                icon: <CheckCircle className="text-white w-8 h-8" />,
                                color: "bg-red-700"
                            },
                            {
                                title: "Technological Innovation",
                                description: "We seamlessly blend tradition with innovation. Our AI-enhanced workflows deliver efficiency without sacrificing quality.",
                                icon: <Shield className="text-white w-8 h-8" />,
                                color: "bg-blue-800"
                            },
                            {
                                title: "Discreet Handling",
                                description: "Your affairs are managed with the utmost discretion and confidentiality—the same level of privacy you would expect from the finest institutions.",
                                icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
                                color: "bg-yellow-400"
                            },
                            {
                                title: "Legacy Preservation",
                                description: "We craft legal solutions that stand the test of time, protecting your legacy with reverence—built to endure for generations.",
                                icon: <CheckCircle className="text-white w-8 h-8" />,
                                color: "bg-gray-900"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className={`${feature.color} p-8 md:p-12 text-white border-4 border-navy hover:scale-[1.02] transition-transform duration-300`}>
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className={`font-display text-2xl md:text-3xl mb-4 ${feature.color === 'bg-yellow-400' ? 'text-navy' : 'text-white'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`font-sans leading-relaxed ${feature.color === 'bg-yellow-400' ? 'text-navy/80' : 'text-white/80'}`}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-16">
                        <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-yellow-400 border-4 border-navy text-navy font-display text-xl hover:bg-red-700 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg">
                            Schedule Your Private Consultation <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </main>

            <TerminalFooter />
        </div>
    );
}
