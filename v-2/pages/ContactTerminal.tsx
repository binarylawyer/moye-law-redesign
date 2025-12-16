import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';
import V2ContactForm from '../components/contact/V2ContactForm';

const ContactTerminal = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Systems v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Inquiry<br />Terminal.</h1>
                    <p className="mt-4 font-sans text-gray-500 max-w-2xl">
                        Initiate a secure communication protocol. Our intake logic routes your inquiry to the appropriate specialist.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* LEFT: FORM ENGINE */}
                    <div className="md:col-span-8">
                        <div className="bg-white border-2 border-gray-200 p-8 shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-gold to-navy"></div>
                            <V2ContactForm />
                        </div>
                    </div>

                    {/* RIGHT: CONTACT META */}
                    <div className="md:col-span-4 space-y-12">
                        {/* OFFICE DATA */}
                        <div>
                            <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-widest border-b border-gold mb-4 pb-2">HQ Coordinates</h3>
                            <div className="font-sans text-gray-600">
                                <p className="font-bold text-navy">Moye Law Firm, LLC</p>
                                <p>123 Legal Avenue, Suite 400</p>
                                <p>Atlanta, GA 30303</p>
                                <p className="mt-4 font-mono text-sm">P: (404) 555-0123</p>
                                <p className="font-mono text-sm">F: (404) 555-0124</p>
                            </div>
                        </div>

                        {/* STATUS */}
                        <div className="bg-navy p-6 text-white">
                            <h3 className="font-mono text-xs font-bold text-gold uppercase tracking-widest mb-4">System Status</h3>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="font-mono text-xs">Intake: ONLINE</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="font-mono text-xs">Vault: SECURE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </V2PageWrapper>
    );
};

export default ContactTerminal;
