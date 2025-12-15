import React from 'react';
import NavBarV2 from '../../components/NavBarV2';
import TerminalFooter from '../../sushi-ui/components/layout/TerminalFooter';
import { motion } from 'framer-motion';

/* 
 * DESIGN SYSTEM NODE 03: MOTION & ANIMATION
 * Purpose: Document Kinetic Behaviors (Saul Bass Door, Mondrian Lines)
 */

// --- SHARED COMPONENT: KINETIC DOOR (Documentation Instance) ---
const PromoDoor = ({ title }: { title: string }) => {
    return (
        <motion.div
            className="w-64 h-80 cursor-pointer relative"
            style={{ perspective: "1000px" }}
            initial="closed"
            whileHover="open"
        >
            <div className="absolute inset-0 z-0 bg-navy flex items-center justify-center border-4 border-navy">
                <span className="font-mono text-xs text-gold tracking-widest">CONTENT_REVEALED</span>
            </div>
            <motion.div
                className="absolute inset-0 z-10 bg-gold border-4 border-navy origin-left flex items-center justify-center p-6"
                variants={{
                    closed: { rotateY: 0 },
                    open: { rotateY: -110 }
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
            >
                <div className="text-center">
                    <div className="font-display text-2xl text-navy mb-2">{title}</div>
                    <div className="h-0.5 w-8 bg-navy opacity-30 mx-auto"></div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const DesignMotionPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-navy selection:text-gold pt-20">
            <NavBarV2 />

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Kinetic Physics <br />& Motion Laws.</h1>
                </header>

                {/* SECTION 1: THE SAUL BASS DOOR */}
                <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-1 bg-gold mr-4"></div>
                            <h2 className="font-display text-3xl text-navy">The "Saul Bass" Door</h2>
                        </div>
                        <p className="font-sans text-gray-600 mb-8 max-w-md leading-relaxed">
                            A heavy, decisive opening mechanism typically used for high-value reveals.
                            Uses <strong>CSS 3D Transforms</strong> with a custom bezier curve to mimic mechanical weight.
                            <br /><br />
                            <span className="font-mono text-xs text-navy bg-gray-100 p-2 block mt-4">
                                Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)<br />
                                Duration: 1.2s<br />
                                Rotation: -110deg (Y-Axis)
                            </span>
                        </p>
                    </div>
                    <div className="bg-gray-50 p-12 flex items-center justify-center border-4 border-dashed border-gray-200">
                        <PromoDoor title="Hover Me" />
                    </div>
                </section>

                {/* SECTION 2: MONDRIAN GRID CONSTRUCTION */}
                <section className="mb-12">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-1 bg-gold mr-4"></div>
                        <h2 className="font-display text-3xl text-navy">Structural Grid Construction</h2>
                    </div>
                    <div className="w-full h-64 relative border-4 border-navy overflow-hidden bg-gray-50">
                        {/* Demo Lines */}
                        <motion.div
                            className="absolute top-0 bottom-0 left-[33%] w-2 bg-navy"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-[50%] left-0 right-0 h-1 bg-gold"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                        />
                        <div className="absolute bottom-4 right-4 font-mono text-xs text-gray-400">
                            INTERSECT & REVEAL PROTOCOL
                        </div>
                    </div>
                </section>

            </main>

            <TerminalFooter />
        </div>
    );
};

export default DesignMotionPage;
