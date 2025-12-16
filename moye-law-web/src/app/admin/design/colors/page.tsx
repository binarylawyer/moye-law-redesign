export default function ColorSystem() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="font-display text-4xl text-navy mb-4">Color System</h1>
                <p className="font-sans text-lg text-gray-600">
                    A restrained palette of authority. No bright primaries. Duotone imagery only.
                </p>
            </div>

            {/* Primary Colors */}
            <section>
                <h2 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
                    01. Signal Colors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* NAVY */}
                    <div className="space-y-4">
                        <div className="h-32 bg-navy w-full border-4 border-navy shadow-lg relative group">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 text-white font-mono text-xs">
                                #0A2342
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-xl text-navy">Mondrian Navy</h3>
                            <code className="text-xs bg-gray-100 px-2 py-1 text-gray-600 block w-max mt-1">var(--color-navy)</code>
                            <p className="text-sm text-gray-500 mt-2">The Grid. The Structure. The Law.</p>
                        </div>
                    </div>

                    {/* GOLD */}
                    <div className="space-y-4">
                        <div className="h-32 bg-gold w-full border-4 border-navy shadow-lg relative group">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy/10 text-navy font-mono text-xs">
                                #C99D56
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-xl text-navy">Venetian Gold</h3>
                            <code className="text-xs bg-gray-100 px-2 py-1 text-gray-600 block w-max mt-1">var(--color-gold)</code>
                            <p className="text-sm text-gray-500 mt-2">Wealth. CTAs. Hover States.</p>
                        </div>
                    </div>

                    {/* RED */}
                    <div className="space-y-4">
                        <div className="h-32 bg-[var(--color-red)] w-full border-4 border-navy shadow-lg relative group">
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 text-white font-mono text-xs">
                                #8B0000
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-xl text-navy">Seal Red</h3>
                            <code className="text-xs bg-gray-100 px-2 py-1 text-gray-600 block w-max mt-1">var(--color-red)</code>
                            <p className="text-sm text-gray-500 mt-2">Accents. "The Art".</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Functional Colors */}
            <section>
                <h2 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
                    02. Functional Layers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        <div className="h-20 bg-grey w-full border-2 border-gray-200"></div>
                        <span className="font-mono text-xs block">Engineering Grey (#F3F4F6)</span>
                        <span className="text-xs text-gray-400">Backgrounds, Panels</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
