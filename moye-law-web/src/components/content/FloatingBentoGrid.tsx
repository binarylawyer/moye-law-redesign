"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * FloatingBentoGrid
 * Inspired by BentoNow / Cook.
 * Features:
 * - Borderless design
 * - "Floating" cards with subtle shadows
 * - Airy, widely spaced layout
 * - Use for trust signals (SOC 2, etc)
 */

export default function FloatingBentoGrid() {
    return (
        <div className="bg-white p-12 border border-dashed border-gray-200 rounded-lg">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                {/* CARD 1: Large Feature */}
                <motion.div
                    className="col-span-1 md:col-span-2 bg-[#FAFAFA] rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow"
                    whileHover={{ y: -5 }}
                >
                    <div className="flex items-start justify-between mb-8">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                            COMPLIANCE READY
                        </div>
                    </div>
                    <h3 className="font-display text-3xl text-navy mb-4">SOC 2 Type II Certified</h3>
                    <p className="font-sans text-gray-500 leading-relaxed max-w-md">
                        We maintain the highest standards of data security and privacy.
                        Your intellectual property is fortified by military-grade encryption and strict access controls.
                    </p>
                </motion.div>

                {/* CARD 2: Stat */}
                <motion.div
                    className="col-span-1 bg-navy rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center items-center text-center group"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-6xl font-display text-gold mb-2 group-hover:scale-110 transition-transform">99%</div>
                    <div className="font-sans text-sm opacity-70 tracking-widest uppercase">Success Rate</div>
                </motion.div>

                {/* CARD 3: List */}
                <motion.div
                    className="col-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                    whileHover={{ y: -5 }}
                >
                    <h4 className="font-display text-xl text-navy mb-6">Security Layer</h4>
                    <ul className="space-y-4">
                        {["256-bit Encryption", "Biometric Auth", "Daily Snapshots"].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-600 font-sans text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* CARD 4: Wide Feature */}
                <motion.div
                    className="col-span-1 md:col-span-2 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 border border-gray-100 flex items-center justify-between"
                    whileHover={{ scale: 1.01 }}
                >
                    <div>
                        <h3 className="font-display text-2xl text-navy mb-2">Automated filings</h3>
                        <p className="text-gray-500 text-sm">LLC formation in all 50 states.</p>
                    </div>
                    <div className="h-12 w-12 bg-navy rounded-full flex items-center justify-center">
                        <span className="text-white font-mono text-xs">GO</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
