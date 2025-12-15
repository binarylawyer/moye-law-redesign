import React from 'react';
import NavBarV2 from '../components/NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Lock, Layers, Zap, Scale, Anchor, Monitor } from 'lucide-react';

/**
 * StrategyPage: A "Thinking Page" to visualize the new design system principles.
 * Structure: 8 Narrative Sections explaining the shift to Kinetic Structuralism.
 */
const StrategyPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-navy selection:text-gold pt-20">
            <NavBarV2 />

            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* HEADLINE */}
                <div className="mb-20 border-l-4 border-navy pl-8 py-4">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">
                        Strategic Architecture v2.0
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 leading-none">
                        Kinetic <br /> Structuralism
                    </h1>
                    <p className="font-sans text-xl text-gray-500 max-w-2xl leading-relaxed">
                        The definitive blueprint for the "Fifth Wave" legal interface.
                        Merging the rigid engineering of Mondrian with the narrative tension of Saul Bass.
                    </p>
                </div>

                {/* ------------------------------------------------------------
                   SECTION 1: KINETIC STRUCTURALISM 
                   Principal: Motion as Construction
                   ------------------------------------------------------------ */}
                <section className="mb-24 relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">01. Intersect & Reveal</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            We are abandoning the static grid for a <strong>living architecture</strong>.
                            The website does not simply load; it <em>constructs</em> itself.
                            Using an "Apple-style" scrollytelling mechanic, content is initially hidden
                            and only revealed when vertical and horizontal grid lines physically intersect
                            to close the frame.
                        </p>
                        <p className="border-l-4 border-gold pl-4 italic bg-gray-50 p-4">
                            "The architecture creates the window for the story." — The Saul Bass Principle.
                        </p>
                    </div>

                    {/* VIsual Aid: The Grid Animation Concept */}
                    <div className="w-full h-64 bg-gray-50 border-4 border-navy relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[1px] h-full bg-navy animate-pulse absolute left-1/3"></div>
                            <div className="h-[1px] w-full bg-navy animate-pulse absolute top-1/2"></div>
                            <span className="font-mono text-navy/50 text-xs mt-32">Grid_Intersection_Event::True</span>
                        </div>
                        <span className="font-display text-4xl text-navy z-10 bg-white px-4 py-2 border-2 border-navy">
                            Opacity: 100%
                        </span>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 2: THE FIFTH WAVE
                   Principal: From Artisan to Agent
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">02. The Fifth Wave</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            The industry is shifting from the <strong>Artisan Billable Hour</strong> (Wave 2)
                            to the <strong>Computed Agentic Outcome</strong> (Wave 5).
                            In this era, value is not defined by time spent, but by the autonomous execution
                            of complex tasks. We are moving from "Analytical Assistance" to "Autonomous Generation."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-0 border-4 border-navy">
                        <div className="p-8 bg-gray-100 border-r-4 border-navy text-center opacity-50">
                            <h3 className="font-serif text-xl mb-2">The Old Way</h3>
                            <p className="font-mono text-xs">Lawyer + Tool</p>
                            <p className="font-mono text-xs mt-2">Billable Hour</p>
                        </div>
                        <div className="p-8 bg-navy text-white text-center">
                            <h3 className="font-serif text-xl mb-2 text-gold">The New Way</h3>
                            <p className="font-mono text-xs">Lawyer + Agent</p>
                            <p className="font-mono text-xs mt-2">Computed Outcome</p>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 3: FACTORY VS STOREFRONT
                   Principal: Architectural Bifurcation
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">03. Factory vs. Storefront</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            To prevent brand dissonance, we must separate the <strong>backend engine</strong>
                            from the <strong>client interface</strong>.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>The Factory (Sushi Kitchen):</strong> Backend, Brutalist, "Binary Lawyer,"
                                focused on raw power and "Hacker" aesthetics.
                            </li>
                            <li>
                                <strong>The Storefront (Moye Law):</strong> Frontend, Mondrian, "Family Values,"
                                focused on trust, empathy, and refined engineering.
                            </li>
                        </ul>
                    </div>

                    <div className="relative w-full h-24 bg-gradient-to-r from-gray-800 to-navy border-4 border-navy flex">
                        <div className="w-1/2 flex items-center justify-center border-r-4 border-white/20 text-gray-400 font-mono text-xs">
                            Factory_Engine::Running
                        </div>
                        <div className="w-1/2 flex items-center justify-center bg-white text-navy font-serif italic text-xl">
                            The Storefront
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 4: PAIRED SERVICES
                   Principal: The Binary Choice
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">04. Paired Services</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            We solve the "Innovation vs. Tradition" conflict by offering every service as a <strong>Binary Choice</strong>.
                            Users can choose the high-velocity "Product" (Engineering) or the high-touch "Service" (Counsel).
                            This is the core UX pattern of the entire site.
                        </p>
                    </div>

                    {/* Mini Example of the Split Card */}
                    <div className="flex border-4 border-navy max-w-md mx-auto h-32">
                        <div className="w-1/2 bg-gray-100 p-4 border-r-4 border-navy flex flex-col justify-center">
                            <span className="font-mono text-xs text-navy font-bold">PRODUCT</span>
                            <span className="text-sm">EstateOS Setup</span>
                        </div>
                        <div className="w-1/2 bg-white p-4 flex flex-col justify-center">
                            <span className="font-serif italic text-navy font-bold">SERVICE</span>
                            <span className="text-sm">Bespoke Counsel</span>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 5: QUARANTINE PROTOCOL
                   Principal: Brand Protection
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-red-900 text-white p-3">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-red-900">05. Quarantine Protocol</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            To protect the "Legal Luxury" brand, specific elements are <strong>strictly forbidden</strong>.
                            These "contaminants" alienate our High-Net-Worth personas and signal risk rather than stability.
                        </p>
                    </div>

                    <div className="bg-red-50 border-2 border-red-900 p-6 text-red-900 font-mono text-sm">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="font-bold">[BANNED]</span> Sushi Metaphors (Omakase, Chef, Menu)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-bold">[BANNED]</span> Color #FA8072 (Salmon) & Neons
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-bold">[BANNED]</span> Hacker/Terminal Aesthetics on Client Interfaces
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-bold">[BANNED]</span> "Ultra Light" 1px Borders (Must use 4px)
                            </li>
                        </ul>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 6: NAVY-DUOTONE PROTOCOL
                   Principal: Human Graphics
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">06. Navy-Duotone Protocol</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            Photography must not break the system. We resolve the tension between
                            Abstract Graphics and Human Photography by treating photos <em>as</em> graphics.
                            All hero imagery undergoes a strict <strong>Duotone Mapping</strong> to Navy (#0A2342) and Gold (#C99D56).
                        </p>
                    </div>

                    <div className="w-full h-40 bg-navy flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-navy to-gold opacity-50 mix-blend-overlay"></div>
                        <span className="relative z-10 text-white font-serif italic text-2xl">
                            Humanity, Architected.
                        </span>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 7: DATA MESH
                   Principal: High Density Handling
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">07. Data Mesh & Mobile</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            We introduce "High-Density Zones" to show engineering competence (Pricing, API Specs).
                            However, the grid cannot squash on mobile.
                            <strong>The Rule:</strong> Desktop = Grid / Mobile = Carousel.
                        </p>
                    </div>
                </section>

                {/* ------------------------------------------------------------
                   SECTION 8: THE SEAWALL
                   Principal: Regulatory Navigation
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Anchor className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">08. The Regulatory Seawall</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            The transition to Agentic Law is blocked by <strong>Rule 5.4</strong> (The Seawall).
                            Our design must navigate this by ensuring "Human in the Loop" optics for the Storefront service,
                            avoiding any implication of "Unauthorized Practice of Law" by an autonomous agent.
                        </p>
                    </div>
                </section>

            </div>

            <TerminalFooter />
        </div>
    );
};


export default StrategyPage;
