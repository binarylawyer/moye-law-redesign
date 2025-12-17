import React from 'react';
import V2PageWrapper from '../../components/V2PageWrapper';
import ServiceConsiderations from '@/components/services/ServiceConsiderations';

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
    // Mock Data for Component Demo
    const mockConsiderations = [
        { question: "How does the 'Funnel' model work?", answer: "Users self-select their tiered entry point (Retail vs Bespoke) based on their complexity needs." },
        { question: "Can standard components be used here?", answer: "Yes, we are reusing the 'ServiceConsiderations' component from the V1 Legacy system to maintain consistent FAQ behavior." },
        { question: "Why 'ServiceConsiderations'?", answer: "It creates a structured Q&A format that matches the 'Considerations' phase of the legal process." }
    ];

    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Service Funnel <br />Architecture.</h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">

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
                            sub="Target: ALEX (The Innovator). Self-service compliance engines, form generation, and instant trademark filing. 'Functional Minimalism'."
                            color="border-gray-200"
                        />
                        <FunnelTier
                            number="02"
                            title="Hybrid/Surgical"
                            sub="Target: BARBARA (The Caregiver). AI-drafted documents reviewed by human experts. Prioritizes 'Safety' and 'Clarity'."
                            color="border-gold"
                        />
                        <FunnelTier
                            number="03"
                            title="Bespoke/Strategic"
                            sub="Target: DAVID (The Investor). Full fractional General Counsel. Complex M&A and architectural planning. Demands 'Authority' and 'Structure'."
                            color="border-navy"
                        />
                    </div>

                </div>

                {/* FAQ COMPONENT DEMO */}
                <section className="border-t-4 border-navy pt-12">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-1 bg-gold mr-4"></div>
                        <h2 className="font-display text-3xl text-navy">Component: Service Considerations (FAQ)</h2>
                    </div>
                    <p className="font-mono text-xs text-gray-500 mb-8 max-w-xl">
                        Implementation of <code>ServiceConsiderations.tsx</code> from the legacy system, styled for V2 context. This component should be used on all Service Pages.
                    </p>
                    {/* Render the actual component */}
                    <div className="bg-gray-50 p-4 border border-gray-200">
                        <ServiceConsiderations considerations={mockConsiderations} />
                    </div>
                </section>

            </div>
        </V2PageWrapper>
    );
};

export default DesignServicePage;
