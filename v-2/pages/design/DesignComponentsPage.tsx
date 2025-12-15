import React from 'react';
import NavBarV2 from '../../components/NavBarV2';
import TerminalFooter from '../../sushi-ui/components/layout/TerminalFooter';
import { ArrowRight, Check } from 'lucide-react';

/* 
 * DESIGN SYSTEM NODE 04: COMPONENT LIBRARY
 * Purpose: Showcase Reusable UI Atoms & Molecules
 */

// --- PREVIEW COMPONENTS ---
const ButtonPrim = ({ children }: { children: React.ReactNode }) => (
    <button className="bg-navy text-white font-mono text-xs tracking-widest px-8 py-4 border-2 border-transparent hover:border-gold hover:text-gold transition-all duration-300 uppercase">
        {children}
    </button>
);

const ButtonSec = ({ children }: { children: React.ReactNode }) => (
    <button className="bg-transparent text-navy font-mono text-xs tracking-widest px-8 py-4 border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 uppercase flex items-center">
        {children} <ArrowRight className="ml-2 w-4 h-4" />
    </button>
);

const InputField = ({ placeholder }: { placeholder: string }) => (
    <div className="relative">
        <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-gray-50 border-b-2 border-gray-300 p-4 font-sans text-navy focus:outline-none focus:border-navy transition-colors"
        />
        <div className="absolute right-0 bottom-4 w-4 h-4 border border-gray-300"></div>
    </div>
);

const DesignComponentsPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-navy selection:text-gold pt-20">
            <NavBarV2 />

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Atomic Components <br />& Interfaces.</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* BUTTONS */}
                    <section>
                        <h3 className="font-mono text-xs text-gray-400 mb-8 border-b border-gray-200 pb-2">01. INTERACTION POINTS</h3>
                        <div className="space-y-8">
                            <div className="flex items-center space-x-8">
                                <ButtonPrim>Primary Action</ButtonPrim>
                                <span className="text-xs text-gray-400 font-mono">DEFAULT.BTN</span>
                            </div>
                            <div className="flex items-center space-x-8">
                                <ButtonSec>Secondary Flow</ButtonSec>
                                <span className="text-xs text-gray-400 font-mono">GHOST.BTN</span>
                            </div>
                        </div>
                    </section>

                    {/* INPUTS */}
                    <section>
                        <h3 className="font-mono text-xs text-gray-400 mb-8 border-b border-gray-200 pb-2">02. DATA ENTRY</h3>
                        <div className="space-y-6 max-w-sm">
                            <InputField placeholder="Enter Client ID..." />
                            <InputField placeholder="Search Case Files..." />
                        </div>
                    </section>

                    {/* ALERTS */}
                    <section className="col-span-1 md:col-span-2">
                        <h3 className="font-mono text-xs text-gray-400 mb-8 border-b border-gray-200 pb-2">03. SYSTEM MESSAGING</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Success */}
                            <div className="bg-gray-50 border-l-4 border-gold p-6 flex items-start">
                                <div className="bg-white p-2 border border-gray-200 mr-4 text-navy">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <div className="font-bold text-navy font-mono text-xs mb-1">OPERATION_SUCCESS</div>
                                    <p className="text-xs text-gray-500">The contract has been compiled and validated against the ledger.</p>
                                </div>
                            </div>

                            {/* Critical */}
                            <div className="bg-[#8B0000] text-white p-6 border-l-4 border-navy flex items-start">
                                <div className="bg-navy p-2 border border-white/20 mr-4 text-white">
                                    !
                                </div>
                                <div>
                                    <div className="font-bold font-mono text-xs mb-1">SYSTEM_CRITICAL</div>
                                    <p className="text-xs text-white/70">Unauthorized access attempt detected in Sector 7G.</p>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>

            </main>

            <TerminalFooter />
        </div>
    );
};

export default DesignComponentsPage;
