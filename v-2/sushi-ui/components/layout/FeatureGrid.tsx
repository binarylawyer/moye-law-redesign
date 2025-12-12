import React from 'react';

const FeatureGrid: React.FC = () => {
    return (
        <div className="w-full bg-white border-b-4 border-navy py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

                    {/* 1. Large Feature (2x2) */}
                    <div className="col-span-1 md:col-span-2 row-span-2 bg-navy p-12 flex flex-col justify-between border-4 border-navy relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="font-display text-4xl text-white mb-4">Global Jurisdiction</h3>
                            <p className="font-sans text-white/70 text-lg">
                                Your assets encompass the globe. So does our protection.
                                We operate across state lines and international borders.
                            </p>
                        </div>
                        <div className="w-full h-1 bg-white/20 mt-8">
                            <div className="w-1/3 h-full bg-gold"></div>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                    </div>

                    {/* 2. Top Right (Wide) */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-gray-100 p-8 border-4 border-navy hover:bg-gold transition-colors duration-300 group">
                        <h4 className="font-mono text-navy text-xl mb-2 font-bold uppercase">Digital_Vault</h4>
                        <p className="font-sans text-gray-600 text-sm group-hover:text-navy/80">
                            Secure storage for keys, passwords, and critical IP.
                        </p>
                    </div>

                    {/* 3. Bottom Right 1 */}
                    <div className="col-span-1 bg-white p-8 border-4 border-navy flex items-center justify-center">
                        <div className="text-center">
                            <span className="font-display text-5xl text-gold block mb-2">24/7</span>
                            <span className="font-mono text-xs text-navy tracking-widest uppercase">System Monitors</span>
                        </div>
                    </div>

                    {/* 4. Bottom Right 2 */}
                    <div className="col-span-1 lg:col-span-1 bg-[#8B0000] p-8 border-4 border-navy flex flex-col justify-center text-white">
                        <span className="font-mono text-gold text-xs mb-2">URGENT_ACTION</span>
                        <p className="font-serif italic text-xl">Crisis Management Protocol Available.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureGrid;
