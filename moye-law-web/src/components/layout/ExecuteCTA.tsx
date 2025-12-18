import React from 'react';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

const ExecuteCTA: React.FC = () => {
    return (
        <div className="w-full bg-navy border-b-4 border-gold">
            <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Block */}
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                            Ready to <span className="text-gold italic">Engineer</span> Your Legacy?
                        </h2>
                        <p className="font-sans text-xl text-white/80 leading-relaxed font-light">
                            Deploy a legal strategy built on thirty years of precision.
                            Whether you need automated protection or bespoke counsel,
                            our system is ready.
                        </p>
                    </div>

                    {/* Action Block */}
                    <div className="flex flex-col w-full md:w-auto gap-4">
                        {/* Primary: Execute */}
                        <Link
                            href="/contact"
                            className="bg-gold text-navy px-10 py-5 font-mono text-lg font-bold border-2 border-gold hover:bg-white hover:border-white transition-all flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                        >
                            <Terminal className="w-5 h-5 mr-3" />
                            INITIALIZE_CONSULT()
                        </Link>

                        {/* Secondary: Learn */}
                        <Link
                            href="/services"
                            className="text-white px-10 py-4 font-serif italic text-lg text-center hover:text-gold transition-colors underline decoration-1 underline-offset-4"
                        >
                            Review System Capabilities
                        </Link>
                    </div>

                </div>
            </div>

            {/* Decorative Mondrian Strip at Bottom */}
            <div className="w-full h-4 flex">
                <div className="w-[10%] bg-white"></div>
                <div className="w-[60%] bg-navy shadow-inner"></div>
                <div className="w-[20%] bg-[#8B0000]"></div>
                <div className="w-[10%] bg-gold"></div>
            </div>
        </div>
    );
};

export default ExecuteCTA;
