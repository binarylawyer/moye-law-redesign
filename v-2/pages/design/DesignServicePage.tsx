import React from 'react';
import NavBarV2 from '../../components/NavBarV2';
import TerminalFooter from '../../sushi-ui/components/layout/TerminalFooter';

/* 
 * DESIGN SYSTEM NODE 02: SERVICE FUNNEL
 * Purpose: Visualize 5th Wave Lawyering (Retail -> Bespoke)
 */

const FunnelTier = ({ number, title, sub, color }: { number: string, title: string, sub: string, color: string }) => (
    <div className={`border-b-4 ${color} py-12 px-8 flex items-start group hover:bg-gray-50 transition-colors`}>
        <div className="font-display text-8xl text-gray-200 mr-12 group-hover:text-navy transition-colors duration-500">
            {number}
        </div>
        <div>
            <h3 className="font-display text-4xl text-navy mb-2">{title}</h3>
            <p className="font-sans text-gray-600 max-w-md">{sub}</p>
        </div>
    </div>
);

const DesignServicePage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-navy selection:text-gold pt-20">
            <NavBarV2 />

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Service Funnel <br />Architecture.</h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT: EXPLAINER */}
                    <div className="lg:col-span-1 border-r-4 border-gray-100 pr-8">
                        <h2 className="font-mono text-xs font-bold text-navy mb-6 uppercase">The 5th Wave Model</h2>
                        <p className="font-serif text-xl text-navy leading-relaxed mb-8">
                            "We don't just sell hours. We sell validated outcomes across a spectrum of automation."
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                            The redesign funnel is built to migrate "Retail" users (quick, transactional, low-cost) into "High Value" ecosystems (long-term, complex, high-revenue).
                        </p>
                        <div className="w-full h-px bg-gold my-8"></div>
                        <div className="text-xs font-mono text-gray-400">
                            DATA SOURCE: /docs/strategy_v2
                        </div>
                    </div>

                    {/* RIGHT: THE LADDER */}
                    <div className="lg:col-span-2">
                        <FunnelTier
                            number="01"
                            title="Retail/Automated"
                            sub="Self-service compliance engines, form generation, and instant trademark filing. Zero human intervention."
                            color="border-gray-200"
                        />
                        <FunnelTier
                            number="02"
                            title="Hybrid/Surgical"
                            sub="AI-drafted documents reviewed by human experts. Specific problem solving (e.g., dispute resolution)."
                            color="border-gold"
                        />
                        <FunnelTier
                            number="03"
                            title="Bespoke/Strategic"
                            sub="Full fractional General Counsel services. Complex M&A, high-stakes litigation, and architectural planning."
                            color="border-navy"
                        />
                    </div>

                </div>

            </main>

            <TerminalFooter />
        </div>
    );
};

export default DesignServicePage;
