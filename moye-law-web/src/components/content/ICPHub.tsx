"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, User, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

/**
 * ICPHub (Ideal Customer Profile Hub)
 * Inspired by Duna's whitespace-heavy, persona-driven navigation.
 * Uses radical clarity to route users based on "Who they are".
 */

type PersonaType = "innovator" | "investor" | "executor";

const personas = {
    innovator: {
        title: "The Innovator",
        role: "Founder / Creator",
        desc: "You are building the future. You need protection for your IP and structured entities for scaling.",
        path: "/practice/intellectual-property",
        color: "bg-navy text-white",
        icon: <Briefcase className="w-6 h-6" />
    },
    investor: {
        title: "The Investor",
        role: "Family Office / VC",
        desc: "You are deploying capital. You need rigorous due diligence and inter-generational wealth transfer.",
        path: "/practice/estate-legacy",
        color: "bg-[#F5F5F0] text-navy border border-gray-200",
        icon: <TrendingUp className="w-6 h-6" />
    },
    executor: {
        title: "The Executor",
        role: "CEO / Managing Partner",
        desc: "You are running the machine. You need operational efficiency, contracts, and compliance.",
        path: "/services",
        color: "bg-white text-navy border border-gray-200",
        icon: <User className="w-6 h-6" />
    }
};

export default function ICPHub() {
    const [activePersona, setActivePersona] = useState<PersonaType>("innovator");

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Text Layer */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none flex items-center justify-center overflow-hidden">
                <span className="font-display text-[20vw] leading-none text-navy whitespace-nowrap">
                    IDENTITY
                </span>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* LEFT: SELECTOR */}
                    <div className="w-full md:w-1/3 space-y-8">
                        <div>
                            <span className="font-mono text-navy text-xs tracking-widest uppercase mb-4 block">Select Profile</span>
                            <h2 className="font-display text-4xl text-navy">Who are you?</h2>
                        </div>

                        <div className="space-y-2">
                            {(Object.keys(personas) as PersonaType[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActivePersona(key)}
                                    className={`w-full text-left p-6 transition-all duration-300 border-l-4 flex items-center justify-between group ${activePersona === key
                                            ? "border-gold bg-navy/5 pl-8"
                                            : "border-gray-200 hover:border-navy hover:pl-8 text-gray-400 hover:text-navy"
                                        }`}
                                >
                                    <span className={`font-display text-xl ${activePersona === key ? "text-navy" : ""}`}>
                                        {personas[key].title}
                                    </span>
                                    {activePersona === key && (
                                        <ArrowRight className="w-4 h-4 text-gold animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: CARD DISPLAY */}
                    <div className="w-full md:w-2/3 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePersona}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className={`h-full p-12 flex flex-col justify-between rounded-lg shadow-xl ${personas[activePersona].color}`}
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-gold/20 rounded-full text-gold">
                                            {personas[activePersona].icon}
                                        </div>
                                        <span className="font-mono text-xs tracking-widest uppercase opacity-70">
                                            {personas[activePersona].role}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-5xl mb-6 leading-tight">
                                        {personas[activePersona].desc}
                                    </h3>
                                </div>

                                <div className="pt-12">
                                    <Link href={personas[activePersona].path} className="group inline-flex items-center font-bold text-lg tracking-wide border-b-2 border-transparent hover:border-current transition-all pb-1">
                                        Initialize Protocol
                                        <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
