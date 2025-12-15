import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';

const ContactTerminal = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Input/Output</span>
                        <h1 className="font-display text-6xl text-navy leading-none">Inquiry <br />Terminal.</h1>
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row border-4 border-navy min-h-[600px]">

                    {/* LEFT PANEL: HQ DATA (The Factory) */}
                    <div className="w-full lg:w-1/2 bg-gray-100 p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-navy relative overflow-hidden">
                        {/* DECORATIVE GRID */}
                        <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-gray-300"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-gray-300"></div>

                        <div className="relative z-10">
                            <h2 className="font-display text-4xl text-navy mb-12">Headquarters Assets.</h2>

                            <div className="space-y-12">
                                <div>
                                    <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">PHYSICAL_COORDINATES</span>
                                    <p className="font-sans text-xl text-navy leading-relaxed">
                                        800 Westchester Avenue<br />
                                        Suite N-641<br />
                                        Rye Brook, NY 10573
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">DIGITAL_LINK</span>
                                    <p className="font-sans text-xl text-navy">
                                        office@moyelaw.com<br />
                                        +1 (PHONE_REDACTED)
                                    </p>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-gold uppercase tracking-widest block mb-2">OPERATIONAL_HOURS</span>
                                    <p className="font-mono text-sm text-navy">
                                        MON-FRI: 0900 - 1800 EST<br />
                                        SAT-SUN: AUTOMATED_SYSTEMS_ONLY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL: INPUT STREAM (The Input) */}
                    <div className="w-full lg:w-1/2 bg-white p-12">
                        <h2 className="font-display text-4xl text-navy mb-8">Input Stream.</h2>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs text-navy font-bold">CLIENT_ID (NAME)</label>
                                    <input type="text" className="w-full border-b-2 border-gray-300 bg-gray-50 p-4 focus:border-navy focus:outline-none transition-colors" placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-xs text-navy font-bold">COMMS_LINK (EMAIL)</label>
                                    <input type="email" className="w-full border-b-2 border-gray-300 bg-gray-50 p-4 focus:border-navy focus:outline-none transition-colors" placeholder="email@domain.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs text-navy font-bold">MODULE_SELECTION</label>
                                <select className="w-full border-b-2 border-gray-300 bg-gray-50 p-4 focus:border-navy focus:outline-none transition-colors">
                                    <option>Select a Service Module...</option>
                                    <option>Estate Planning Architecture</option>
                                    <option>Intellectual Property Defense</option>
                                    <option>Corporate Structure</option>
                                    <option>Other / Advisory</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs text-navy font-bold">DATA_PAYLOAD (MESSAGE)</label>
                                <textarea className="w-full h-32 border-b-2 border-gray-300 bg-gray-50 p-4 focus:border-navy focus:outline-none transition-colors overflow-hidden resize-none" placeholder="Describe your legal architecture needs..."></textarea>
                            </div>

                            <button className="w-full bg-navy text-white font-mono text-sm uppercase tracking-[0.2em] py-6 hover:bg-gold transition-colors duration-300">
                                Transmit_Payload &rarr;
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </V2PageWrapper>
    );
};

export default ContactTerminal;
