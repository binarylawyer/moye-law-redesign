import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Cpu, Terminal } from 'lucide-react';

const BinaryBio: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full bg-white border-b-4 border-navy py-12 px-4">
            <div className="container mx-auto max-w-6xl">

                {/* Toggle Header */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex border-4 border-navy p-1 bg-gray-100">
                        <div className={`px-6 py-2 font-serif text-lg transition-colors ${!isHovered ? 'bg-navy text-white' : 'text-gray-400'}`}>
                            The Lawyer
                        </div>
                        <div className={`px-6 py-2 font-mono text-sm flex items-center transition-colors ${isHovered ? 'bg-gold text-navy font-bold' : 'text-gray-400'}`}>
                            The Engineer
                        </div>
                    </div>
                </div>

                {/* The Card */}
                <div
                    className="relative min-h-[500px] border-4 border-navy overflow-hidden cursor-crosshair group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode='wait'>

                        {/* STATE A: THE LAWYER (Default) */}
                        {!isHovered && (
                            <motion.div
                                key="lawyer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-white grid grid-cols-1 md:grid-cols-2"
                            >
                                {/* Photo Side */}
                                <div className="bg-gray-200 border-r-4 border-navy relative">
                                    {/* Placeholder for Suit Photo */}
                                    <div className="absolute inset-0 flex items-center justify-center text-navy/20">
                                        <Scale className="w-32 h-32" />
                                    </div>
                                    <div className="absolute bottom-8 left-8 bg-white p-4 border-2 border-navy">
                                        <p className="font-serif text-2xl text-navy italic">Christopher Moye, Esq.</p>
                                    </div>
                                </div>
                                {/* Text Side */}
                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="font-display text-4xl text-navy mb-6">Counsel & Strategy</h3>
                                    <p className="font-sans text-lg text-gray-600 mb-6 leading-relaxed">
                                        "The law is a human instrument. It requires empathy, nuance, and a deep understanding of legacy.
                                        We protect what you've built with the weight of tradition."
                                    </p>
                                    <ul className="space-y-3 font-serif text-xl text-navy">
                                        <li className="flex items-center"><div className="w-2 h-2 bg-gold mr-3 rounded-full"></div> Estate Planning</li>
                                        <li className="flex items-center"><div className="w-2 h-2 bg-gold mr-3 rounded-full"></div> Asset Protection</li>
                                        <li className="flex items-center"><div className="w-2 h-2 bg-gold mr-3 rounded-full"></div> Legal Strategy</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}

                        {/* STATE B: THE ENGINEER (Hover) */}
                        {isHovered && (
                            <motion.div
                                key="engineer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-navy grid grid-cols-1 md:grid-cols-2"
                            >
                                {/* Text Side (Swapped for effect, or keep same side? Left's try keeping layout consistent for stability) */}
                                <div className="bg-black/30 border-r-4 border-gold relative">
                                    {/* Placeholder for Hoodie Photo/Avatar */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gold/20">
                                        <Cpu className="w-32 h-32 animate-pulse" />
                                    </div>

                                    {/* Matrix Rain Effect Overlay (Simulated) */}
                                    <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-10 mix-blend-overlay bg-cover"></div>

                                    <div className="absolute bottom-8 left-8 bg-black p-4 border-2 border-gold">
                                        <p className="font-mono text-sm text-gold">DEV_ID: MOYE_V2</p>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col justify-center text-gray-300">
                                    <div className="flex items-center mb-6">
                                        <Terminal className="w-6 h-6 text-emerald-400 mr-2" />
                                        <h3 className="font-mono text-2xl text-white">Full_Stack_Architect</h3>
                                    </div>

                                    <div className="font-mono text-sm bg-black/50 p-6 border-l-2 border-emerald-500 mb-6">
                                        <p className="mb-2"><span className="text-purple-400">class</span> <span className="text-yellow-300">LegalEngineer</span> <span className="text-purple-400">extends</span> Human {'{'}</p>
                                        <p className="pl-4">stack: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Python'</span>, <span className="text-green-300">'Law'</span>];</p>
                                        <p className="pl-4">mission: <span className="text-blue-300">optimize_justice()</span>;</p>
                                        <p>{'}'}</p>
                                    </div>

                                    <p className="font-sans text-md text-gray-400 mb-6 leading-relaxed">
                                        "We treat legal documents as code. Executable, modular, and bug-free.
                                        Why rely on paper when you can build a system?"
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default BinaryBio;
