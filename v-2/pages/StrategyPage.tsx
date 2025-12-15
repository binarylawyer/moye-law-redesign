import React from 'react';
import NavBarV2 from '../components/NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Lock, Layers, Zap, Scale, Anchor, Monitor } from 'lucide-react';

/**
 * Structure: 8 Narrative Sections explaining the shift to Kinetic Structuralism.
 */

// Helper Component for Image Interaction
const DuotoneImage = ({ src, label, variant = 'navy' }: { src: string, label: string, variant?: 'navy' | 'gold' }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // THE FINAL RECIPE: "Deep Navy Overlay"
    // 1. Background: #0A2342 (Navy)
    // 2. Image: Grayscale + Multiply (Maps darks to Navy)
    // 3. Opacity: Tuned to ~60-70% to let the Navy shine through without being too dark (The "10% lighter" adjustment)
    // 4. No Gold Overlay.

    return (
        <div
            className="group relative cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Container (Navy Base) */}
            <div
                className={`relative h-64 overflow-hidden border-4 ${variant === 'navy' ? 'border-navy' : 'border-gold'} 
                ${variant === 'navy' ? 'bg-[#0A2342]' : 'bg-[#C99D56]'} transition-colors duration-300`}
            >

                {/* The Image */}
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                        // Step 1: Kill Color to allow pure blend
                        filter: isHovered ? 'none' : 'grayscale(100%) contrast(1.1)',
                        // Step 2: Multiply with Navy Background
                        mixBlendMode: isHovered ? 'normal' : 'multiply',
                        // Step 3: Opacity Tuning (Lighter than 100% to avoid "black hole" effect)
                        opacity: isHovered ? 1 : 0.7,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />

                {/* No Gold Overlay - Removed per user request */}

            </div>

            <div className={`mt-2 flex justify-between font-mono text-xs ${variant === 'navy' ? 'text-navy' : 'text-[#C99D56]'} border-t border-navy/10 pt-2`}>
                <span className="font-bold">{label}</span>
                <span className={`transition-colors ${isHovered ? 'text-gold' : 'text-gray-400'}`}>
                    {isHovered ? 'FILTER::BYPASSED' : 'FILTER::ACTIVE'}
                </span>
            </div>
        </div>
    );
};

// Demo Component for "Intersect & Reveal"
const KineticGridDemo = () => {
    // We simulate the "scroll" or "load" with a simple time-based sequence for this demo
    // In production, this would use useScroll()

    return (
        <div className="w-full h-96 bg-gray-50 border-4 border-navy relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {/* Quadrant 1: Top Left */}
                <KineticCell delay={0.2} label="QUADRANT_01" content="Analysis" />

                {/* Quadrant 2: Top Right */}
                <KineticCell delay={0.8} label="QUADRANT_02" content="Strategy" />

                {/* Quadrant 3: Bottom Left */}
                <KineticCell delay={1.4} label="QUADRANT_03" content="Execution" />

                {/* Quadrant 4: Bottom Right */}
                <KineticCell delay={2.0} label="QUADRANT_04" content="Result" />
            </div>

            {/* The Constructing Lines (The "Architects") */}
            <motion.div
                className="absolute top-0 bottom-0 left-1/2 w-1 bg-navy z-20"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: false }} // Re-animate on scroll for effect
            />
            <motion.div
                className="absolute left-0 right-0 top-1/2 h-1 bg-navy z-20"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                viewport={{ once: false }}
            />

            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-navy/50">
                System_Status::Constructing
            </div>
        </div>
    );
};

const KineticCell = ({ delay, label, content }: { delay: number, label: string, content: string }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.5 }} // Wait for lines to cross
                className="text-center"
            >
                <div className="font-mono text-[10px] text-gold tracking-widest mb-2">{label}</div>
                <div className="font-display text-3xl text-navy">{content}</div>
            </motion.div>
        </div>
    )
}

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

                    {/* Visual Aid: Kinetic Grid Demo */}
                    <KineticGridDemo />
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

                    <div className="w-full h-40 bg-navy flex items-center justify-center relative overflow-hidden mb-8">
                        <div className="absolute inset-0 bg-gradient-to-tr from-navy to-gold opacity-50 mix-blend-overlay"></div>
                        <span className="relative z-10 text-white font-serif italic text-2xl">
                            Humanity, Architected.
                        </span>
                    </div>

                    {/* DUOTONE GALLERY: NAVY VARIANT */}
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-4 h-4 bg-navy"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT A: ENGINEERING (NAVY MAP)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <DuotoneImage
                            src="/assets/v2/architecture.png"
                            label="FIG 01.1: STRUCTURE [NAVY]"
                            variant="navy"
                        />
                        <DuotoneImage
                            src="/assets/v2/handshake.png"
                            label="FIG 01.2: HUMANITY [NAVY]"
                            variant="navy"
                        />
                    </div>

                    {/* DUOTONE GALLERY: GOLD VARIANT */}
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-4 h-4 bg-gold"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT B: LUXURY (GOLD MAP)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DuotoneImage
                            src="/assets/v2/architecture.png"
                            label="FIG 02.1: STRUCTURE [GOLD]"
                            variant="gold"
                        />
                        <DuotoneImage
                            src="/assets/v2/handshake.png"
                            label="FIG 02.2: HUMANITY [GOLD]"
                            variant="gold"
                        />
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
