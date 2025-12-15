import React from 'react';
import NavBarV2 from '../components/NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Lock, Layers, Zap, Scale, Anchor, Monitor } from 'lucide-react';

/**
 * Structure: 8 Narrative Sections explaining the shift to Kinetic Structuralism.
 */

// Helper Component for Image Interaction
const DuotoneImage = ({ src, label, variant = 'navy' }: { src: string, label: string, variant?: 'navy' | 'gold' | 'navy-light' }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    // THE FINAL TUNED RECIPE (As of User's "I like the new gold" Request):

    // Variant Colors & Logic:
    // 1. 'navy' (The "Gold" Result User Likes): Base Gold (#C99D56) / Navy Overlay (#0A2342) @ 0.6.
    // 2. 'gold' (The "Luxury" Result): Base White (#FFFFFF) / Gold Overlay (#C99D56) @ 0.6.
    // 3. 'navy-light' (The New Request): Navy Overlay (#0A2342) @ 0.1 (Very Light).

    let baseColor = '#FFFFFF';
    let overlayColor = '#0A2342';
    let overlayOpacity = 0.6;

    if (variant === 'navy') {
        baseColor = '#C99D56';
        overlayColor = '#0A2342';
        overlayOpacity = 0.6;
    } else if (variant === 'gold') {
        baseColor = '#FFFFFF';
        overlayColor = '#C99D56';
        overlayOpacity = 0.6;
    } else if (variant === 'navy-light') {
        // "Shift to a 70% opacity to test that out"
        // SOLUTION: Lighter Blue + Warm Base + Multiply + Higher Opacity
        baseColor = '#FFFFFF';
        overlayColor = '#6495ED'; // Cornflower Blue
        overlayOpacity = 0.7; // 70% Opacity
    }

    // Dynamic Blend Mode
    const overlayMode = variant === 'navy-light' ? 'multiply' : 'lighten';

    // Dynamic Image Filter (Add Sepia for navy-light warmth)
    const baseFilter = variant === 'navy-light'
        ? 'grayscale(100%) sepia(40%) contrast(1.1)' // Warm base
        : 'grayscale(100%) contrast(1.1)'; // Standard base

    return (
        <div
            className="group relative cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Container */}
            <div
                className={`relative h-64 overflow-hidden border-4 ${variant.includes('navy') ? 'border-navy' : 'border-gold'} transition-colors duration-300`}
                style={{ backgroundColor: baseColor }}
            >

                {/* The Image */}
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                        // Step 1: Kill Color or Add Warmth
                        filter: isHovered ? 'none' : baseFilter,
                        // Step 2: Multiply with Base
                        mixBlendMode: isHovered ? 'normal' : 'multiply',
                        opacity: isHovered ? 1 : 1,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />

                {/* The Overlay */}
                {!isHovered && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundColor: overlayColor,
                            mixBlendMode: overlayMode,
                            opacity: overlayOpacity
                        }}
                    />
                )}

            </div>

            <div className={`mt-2 flex justify-between font-mono text-xs ${variant.includes('navy') ? 'text-navy' : 'text-[#C99D56]'} border-t border-navy/10 pt-2`}>
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

// --- HELPER COMPONENT: OPEN SESAME DOOR (3D KINETIC) ---
const OpenSesameDoor = ({ doorColor, revealColor, textColor, revealText }: { doorColor: string, revealColor: string, textColor: string, revealText?: string }) => {
    // Determine borders based on door color
    const borderColor = doorColor.includes('bg-navy') ? 'border-gold' : 'border-navy';

    return (
        // STAGE: Perspective Container
        // Use inline style for perspective to ensure it works regardless of Tailwind config
        <div
            className="w-full h-full cursor-pointer relative"
            style={{ perspective: "1000px" }}
        >

            {/* THE REVEAL (Background Layer - Static) */}
            <div className={`absolute inset-0 z-0 ${revealColor} flex items-center justify-center`}>
                <span className={`font-mono text-xs tracking-widest ${textColor} opacity-100`}>
                    {revealText || "ACCESS_GRANTED"}
                </span>
            </div>

            {/* THE DOOR (Foreground Layer - Moving) */}
            <motion.div
                className={`absolute inset-0 z-10 ${doorColor} border-4 ${borderColor} origin-left flex items-center justify-center`}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: -110 }}
                transition={{
                    duration: 0.6,
                    ease: [0.3, 0.0, 0.2, 1] // The Saul Bass Snap
                }}
            >
                <div className="flex flex-col items-center">
                    <span className={`font-display text-2xl ${textColor} mb-1 opacity-100`}>open sesame</span>
                    <div className={`h-[1px] w-8 ${textColor.replace('text-', 'bg-')} opacity-30`}></div>
                </div>
            </motion.div>
        </div>
    );
};

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

                    {/* DUOTONE GALLERY: NAVY LIGHT VARIANT */}
                    <div className="mb-4 flex items-center gap-2 mt-12">
                        <div className="w-4 h-4 bg-navy opacity-10"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT C: PURE NAVY (10% OPACITY)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DuotoneImage
                            src="/assets/v2/architecture.png"
                            label="FIG 03.1: STRUCTURE [LIGHT NAVY]"
                            variant="navy-light"
                        />
                        <DuotoneImage
                            src="/images/test-image-1.jpg"
                            label="FIG 03.2: TEST IMAGE [LIGHT NAVY]"
                            variant="navy-light"
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

                {/* ------------------------------------------------------------
                   SECTION 9: KINETIC MONDRIAN SHOWCASE (LIVE PROOF)
                   Principal: Extended Composition
                   ------------------------------------------------------------ */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-navy text-white p-3">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h2 className="font-display text-3xl text-navy">09. Kinetic Mondrian (Live Proof)</h2>
                    </div>

                    <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                        <p>
                            A living demonstration of the <strong>Unified Design System</strong>.
                            Observing the interplay of primary structures (Navy), energy accents (Gold),
                            and the three distinct imaging protocols on a single subject.
                            The grid lines construct the frame, revealing the content only upon intersection.
                        </p>
                    </div>

                    {/* THE KINETIC MONDRIAN GRID (ASYMMETRICAL STRUCTURE) */}
                    <div className="w-full relative h-[900px] border-8 border-navy bg-white overflow-hidden">

                        {/* --- KINETIC INFRASTRUCTURE (The Lines) --- */}

                        {/* 1. THE PRIME VERTICAL (Major Artery - 8px) -- Position: 38.2% (Golden Ratio approx) */}
                        <motion.div
                            className="absolute top-0 bottom-0 left-[38.2%] w-2 bg-navy z-30"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        />

                        {/* 2. THE SECONDARY VERTICAL (Minor - 4px) -- Position: 75% */}
                        <motion.div
                            className="absolute top-0 bottom-0 left-[75%] w-1 bg-navy z-20"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        />

                        {/* 3. THE PRIME HORIZONTAL (Major Artery - 8px) -- Position: 25% */}
                        <motion.div
                            className="absolute left-0 right-0 top-[25%] h-2 bg-navy z-30"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.3, delay: 0.1, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        />

                        {/* 4. THE SUB HORIZONTAL A (Minor - 4px) -- Position: 60% (Spanning Right Only) */}
                        <motion.div
                            className="absolute left-[38.2%] right-0 top-[60%] h-1 bg-navy z-20"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        />

                        {/* 5. THE SUB HORIZONTAL B (Minor - 4px) -- Position: 85% (Spanning Left Only) */}
                        <motion.div
                            className="absolute left-0 right-[61.8%] top-[85%] h-1 bg-navy z-20"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
                            viewport={{ once: false }}
                        />


                        {/* --- CONTENT BLOCKS (The Composition) --- */}

                        {/* BLOCK A: CORE STRUCTURE (Top Left - Large) */}
                        {/* Position: 0,0 to 38.2%, 25% */}
                        <div className="absolute top-0 left-0 w-[38.2%] h-[25%] p-8 flex flex-col justify-end items-start bg-gray-50">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                            >
                                <span className="font-mono text-xs text-gold mb-2 block">01. THE ARCHITECTURE</span>
                                <h3 className="font-display text-3xl text-navy leading-none mb-2">Valid State<br />Machines.</h3>
                                <p className="font-sans text-xs text-gray-500 max-w-[200px] leading-relaxed">
                                    We don't write contracts. We build navigational charts for regulatory environments.
                                </p>
                            </motion.div>
                        </div>

                        {/* BLOCK B: VARIANT C (Top Right - Broad) */}
                        {/* Position: 38.2%,0 to 100%, 25% */}
                        <div className="absolute top-0 left-[38.2%] right-0 h-[25%] overflow-hidden">
                            <motion.div
                                className="w-full h-full"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <DuotoneImage
                                    src="/images/real-estate-3-people-right.jpg"
                                    label="VAR C: CORNFLOWER [WIDE]"
                                    variant="navy-light"
                                />
                            </motion.div>
                        </div>

                        {/* BLOCK C: VARIANT A (Middle Left - Vertical Portrait) */}
                        {/* Position: 0, 25% to 38.2%, 85% */}
                        <div className="absolute top-[25%] left-0 w-[38.2%] h-[60%] overflow-hidden border-r-0">
                            <motion.div
                                className="w-full h-full"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                <DuotoneImage
                                    src="/images/real-estate-3-people-right.jpg"
                                    label="VAR A: STANDARD [TALL]"
                                    variant="navy"
                                />
                            </motion.div>
                        </div>

                        {/* BLOCK D: THE GOLD ENGINE (Center - High Impact) -> OPEN SESAME */}
                        {/* Position: 38.2%, 25% to 75%, 60% */}
                        <div className="absolute top-[25%] left-[38.2%] w-[36.8%] h-[35%] overflow-hidden">
                            <OpenSesameDoor
                                doorColor="bg-gold"
                                revealColor="bg-navy"
                                textColor="text-navy"
                                revealText="ACCESS GRANTED"
                            />
                        </div>

                        {/* BLOCK E: NAVY VOID (Right Side Strip) */}
                        {/* Position: 75%, 25% to 100%, 60% */}
                        <div className="absolute top-[25%] left-[75%] right-0 h-[35%] bg-navy flex items-center justify-center">
                            <div className="rotate-90 text-white font-mono text-xs tracking-widest opacity-30">REG_5.4</div>
                        </div>

                        {/* BLOCK F: VARIANT B (Center Right) */}
                        <div className="absolute top-[60%] left-[38.2%] right-0 bottom-0 overflow-hidden">
                            <motion.div
                                className="w-full h-full"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.8 }}
                            >
                                <DuotoneImage
                                    src="/images/real-estate-3-people-right.jpg"
                                    label="VAR B: LUXURY [MACRO]"
                                    variant="gold"
                                />
                            </motion.div>
                        </div>

                        {/* BLOCK G: BOTTOM LEFT (Footer) -> OPEN SESAME 2 */}
                        <div className="absolute top-[85%] left-0 w-[38.2%] h-[15%] overflow-hidden">
                            <OpenSesameDoor
                                doorColor="bg-gray-100"
                                revealColor="bg-gold"
                                textColor="text-gray-400"
                                revealText="SYSTEM_UNK"
                            />
                        </div>

                    </div>
                </section>

            </div>

            <TerminalFooter />
        </div>
    );
};

export default StrategyPage;
