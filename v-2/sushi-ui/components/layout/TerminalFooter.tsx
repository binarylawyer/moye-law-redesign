import React from 'react';
import { Facebook, Twitter, Linkedin, Disc } from 'lucide-react';

const TerminalFooter: React.FC = () => {
    return (
        <footer className="bg-navy border-t-4 border-gold text-white pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Block */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="font-display text-3xl mb-6">MOYE LAW</h2>
                        <div className="font-mono text-xs text-gold/80 mb-6">
                            > SYSTEM_STATUS: <span className="text-emerald-400">ONLINE</span><br />
                            > VERSION: <span className="text-white">2.4.9</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all cursor-pointer"><Linkedin className="w-5 h-5" /></div>
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all cursor-pointer"><Twitter className="w-5 h-5" /></div>
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all cursor-pointer"><Facebook className="w-5 h-5" /></div>
                        </div>
                    </div>

                    {/* Links - Architecture */}
                    <div>
                        <h4 className="font-mono text-gold text-sm font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-2 inline-block">Architecture</h4>
                        <ul className="space-y-3 font-sans text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Estate Planning</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Asset Protection</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Business Logic</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Art Law</li>
                        </ul>
                    </div>

                    {/* Links - System */}
                    <div>
                        <h4 className="font-mono text-gold text-sm font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-2 inline-block">System</h4>
                        <ul className="space-y-3 font-sans text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">About the Factory</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Methodology</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Client Portal</li>
                            <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">API Access</li>
                        </ul>
                    </div>

                    {/* Contact Block */}
                    <div>
                        <h4 className="font-mono text-gold text-sm font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-2 inline-block">Signal</h4>
                        <p className="font-serif italic text-xl mb-4">
                            "The code is law. The law is art."
                        </p>
                        <div className="font-mono text-xs text-gray-500">
                            800 West El Camino Real<br />
                            Suite 180<br />
                            Mountain View, CA 94040
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-600">
                    <div>
                        © 2024 MOYE LAW GROUP. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <Disc className="w-4 h-4 text-emerald-500 animate-spin-slow" />
                        <span>SERVER_TIME: {new Date().toLocaleTimeString()}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default TerminalFooter;
