import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const MondrianHero: React.FC = () => {
    return (
        <div className="relative w-full border-b-4 border-navy bg-white">
            {/* 
        GRID STRUCTURE: 12 Columns
        Desktop: 7 cols (Text) | 5 cols (Visual)
        Mobile: Stacked
      */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">

                {/* LEFT CELL: THE STATEMENT (Art/Law) */}
                <div className="col-span-1 lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-navy relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-gold text-sm tracking-widest uppercase mb-4 block">
                            System Architecture v2.0
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl text-navy mb-8 leading-[0.9]">
                            The Intersection of <br />
                            <span className="italic">Art</span>, <span className="italic">Law</span>, <br />
                            and <span className="text-gold">Code</span>.
                        </h1>
                        <p className="font-sans text-xl text-gray-600 max-w-lg mb-12 leading-relaxed">
                            We don't just practice law; we engineer outcomes.
                            Moye Law combines centuries of legal tradition with
                            state-of-the-art automation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-0">
                            <Link to="/contact" className="px-8 py-4 bg-navy text-white font-serif italic text-xl border-2 border-navy hover:bg-white hover:text-navy transition-colors flex items-center justify-center">
                                Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-white text-navy font-mono text-sm border-2 border-navy border-t-0 sm:border-t-2 sm:border-l-0 hover:bg-gray-50 flex items-center justify-center">
                                View_Methodology()
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT CELL: THE VISUAL (Engineering/Mondrian) */}
                <div className="col-span-1 lg:col-span-5 bg-gray-50 grid grid-rows-6 relative overflow-hidden">

                    {/* Block A: Navy Code Block */}
                    <div className="row-span-4 bg-navy p-8 border-b-4 border-navy relative overflow-hidden group">
                        <div className="absolute top-4 right-4 text-emerald-500 animate-pulse">
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        </div>
                        <div className="font-mono text-xs md:text-sm text-gold/80 leading-loose">
                            <span className="text-gray-500">// Deploying Legacy Protection...</span><br />
                            <span className="text-purple-400">const</span> <span className="text-blue-300">estatePlan</span> = <span className="text-purple-400">await</span> sushi.<span className="text-yellow-300">build</span>({'{'}<br />
                            &nbsp;&nbsp;assets: <span className="text-emerald-300">['Trust', 'Crypto', 'Equity']</span>,<br />
                            &nbsp;&nbsp;beneficiaries: <span className="text-orange-300">Family.tree</span>,<br />
                            &nbsp;&nbsp;compliance: <span className="text-purple-400">true</span><br />
                            {'}'});<br />
                            <br />
                            <span className="text-gray-500">// System Stable.</span><br />
                            <span className="text-emerald-500">_</span>
                        </div>

                        {/* Hover Reveal */}
                        <div className="absolute inset-0 bg-navy/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <Terminal className="w-16 h-16 text-gold mb-4" />
                        </div>
                    </div>

                    {/* Block B: Mondrian Split (Gold / Red) */}
                    <div className="row-span-2 grid grid-cols-3">
                        <div className="col-span-2 bg-[#C99D56] border-r-4 border-navy flex items-center justify-center p-6 hover:bg-[#b08845] transition-colors cursor-pointer">
                            <span className="font-display text-navy text-3xl font-bold italic">30 Years</span>
                        </div>
                        <div className="col-span-1 bg-[#8B0000] flex items-center justify-center hover:bg-[#6b0000] transition-colors cursor-pointer">
                            <ArrowRight className="text-white w-8 h-8 -rotate-45" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MondrianHero;
