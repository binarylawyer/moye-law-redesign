"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu } from 'lucide-react';
import Image from 'next/image';

export const BinaryBio: React.FC = () => {
    const [mode, setMode] = useState<'human' | 'system'>('human');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b-4 border-navy">
            {/* IMAGE SIDE */}
            <div
                className="relative bg-gray-200 border-b-4 lg:border-b-0 lg:border-r-4 border-navy overflow-hidden group cursor-pointer"
                onMouseEnter={() => setMode('system')}
                onMouseLeave={() => setMode('human')}
            >
                <div className="w-full h-full relative">
                    <Image
                        src="/images/real-estate-3-people-center.jpg"
                        alt="Attorney Portrait"
                        fill
                        className={`object-cover transition-all duration-700 ${mode === 'system' ? 'grayscale contrast-125 scale-105' : ''}`}
                    />
                    {/* Matrix Overlay */}
                    <div className={`absolute inset-0 bg-navy/80 flex items-center justify-center transition-opacity duration-500 ${mode === 'system' ? 'opacity-80' : 'opacity-0'}`}>
                        <div className="text-emerald-400 font-mono text-sm p-8">
                            {'{'}<br />
                            &nbsp;&nbsp;"id": "ATT_01",<br />
                            &nbsp;&nbsp;"role": "Principal_Architect",<br />
                            &nbsp;&nbsp;"status": "ONLINE",<br />
                            &nbsp;&nbsp;"capabilities": ["Litigation", "Trusts", "Code"]<br />
                            {'}'}
                        </div>
                    </div>
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className="p-12 lg:p-24 flex flex-col justify-center bg-white relative">
                <div className="absolute top-8 right-8">
                    {mode === 'human' ? <User className="w-8 h-8 text-navy" /> : <Cpu className="w-8 h-8 text-gold animate-pulse" />}
                </div>

                <AnimatePresence mode="wait">
                    {mode === 'human' ? (
                        <motion.div
                            key="human"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <span className="font-mono text-navy text-xs tracking-widest uppercase mb-4 block">The Attorney</span>
                            <h2 className="font-display text-4xl text-navy mb-6">Empathy & Experience.</h2>
                            <p className="font-sans text-lg text-gray-600 leading-relaxed">
                                With over three decades of practice, we understand that law is ultimately about people.
                                We listen first, design second, and execute with precision. Your legacy is personal to us.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="system"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <span className="font-mono text-gold text-xs tracking-widest uppercase mb-4 block">The Architect</span>
                            <h2 className="font-display text-4xl text-navy mb-6">Efficiency & Structure.</h2>
                            <p className="font-mono text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 border-l-4 border-gold">
                                {'>'} OPTIMIZING_OUTCOMES...<br /><br />
                                We leverage advanced document automation and parametric modeling to reduce error rates and accelerate turnaround times. Law as Code.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
