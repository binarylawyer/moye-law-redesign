import React from 'react';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import V2ContactForm from '@/components/contact/V2ContactForm';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            <main className="pt-20 lg:pt-28 pb-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT COL: Context (Factory Data) */}
                    <div className="col-span-1 lg:col-span-5 pt-8">
                        <span className="font-mono text-xs text-gold tracking-widest uppercase mb-4 block">
                            System_Status: ONLINE
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl text-navy mb-8">
                            Inquiry <br />Terminal.
                        </h1>
                        <p className="font-sans text-xl text-gray-600 mb-12 max-w-md">
                            Direct line to our legal architecture team.
                            Secure, encrypted, and prioritized.
                        </p>

                        <div className="space-y-8 border-t-4 border-navy pt-8">
                            <div>
                                <h4 className="font-mono text-xs font-bold text-navy mb-2">OFFICE_COORDINATES</h4>
                                <p className="font-sans text-sm text-gray-600">
                                    800 West El Camino Real, Suite 180<br />
                                    Mountain View, CA 94040
                                </p>
                            </div>
                            <div>
                                <h4 className="font-mono text-xs font-bold text-navy mb-2">DIRECT_LINK</h4>
                                <p className="font-sans text-sm text-gray-600">
                                    (650) 999-9999<br />
                                    intake@moye.law
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COL: The Input Form */}
                    <div className="col-span-1 lg:col-span-7">
                        <V2ContactForm />
                    </div>

                </div>
            </main>

            <TerminalFooter />
        </div>
    );
}
