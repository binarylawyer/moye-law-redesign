export default function TypographySystem() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="font-display text-4xl text-navy mb-4">Typography System</h1>
                <p className="font-sans text-lg text-gray-600">
                    A triad of voices: The Artist (Serif), The Engineer (Mono), and The Professional (Sans).
                </p>
            </div>

            <section className="space-y-12">

                {/* HEADLINES */}
                <div className="p-8 border-4 border-navy bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-navy text-white px-3 py-1 font-mono text-xs">THE ARTIST</div>
                    <div className="mb-8">
                        <h2 className="font-display text-6xl text-navy mb-4">Cormorant Garamond</h2>
                        <p className="font-sans text-gray-500 max-w-xl">
                            Used for Headlines, Hero Statements, and Key Quotes.
                            It represents tradition, art, and the "human" element of the firm.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-baseline gap-8 border-b border-gray-100 pb-4">
                            <span className="font-mono text-xs text-gray-400 w-24">Heading 1</span>
                            <span className="font-display text-5xl text-navy">Structure is Strategy.</span>
                        </div>
                        <div className="flex items-baseline gap-8 border-b border-gray-100 pb-4">
                            <span className="font-mono text-xs text-gray-400 w-24">Heading 2</span>
                            <span className="font-display text-4xl text-navy">The Moye Standard.</span>
                        </div>
                        <div className="flex items-baseline gap-8 border-b border-gray-100 pb-4">
                            <span className="font-mono text-xs text-gray-400 w-24">Heading 3</span>
                            <span className="font-display text-3xl text-navy italic">Legacy Architecture</span>
                        </div>
                    </div>
                </div>

                {/* BODY COPY */}
                <div className="p-8 border-4 border-gray-200 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-3 py-1 font-mono text-xs">THE PROFESSIONAL</div>
                    <div className="mb-8">
                        <h2 className="font-sans text-4xl text-navy mb-4">Inter</h2>
                        <p className="font-sans text-gray-500 max-w-xl">
                            Used for Body Copy, Explanations, and Service Descriptions.
                            It represents clarity, modernity, and accessibility.
                        </p>
                    </div>

                    <div className="max-w-2xl font-sans text-gray-600 leading-relaxed text-lg">
                        <p>
                            We don't just draft documents; we deploy systems.
                            In the 5th Wave of legal services, the value isn't in the hour billed,
                            but in the outcome engineered. Our family office solutions provide
                            a rigorous framework for inter-generational wealth transfer.
                        </p>
                    </div>
                </div>

                {/* DATA & CODE */}
                <div className="p-8 bg-navy text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-navy px-3 py-1 font-mono text-xs">THE ENGINEER</div>
                    <div className="mb-8">
                        <h2 className="font-mono text-4xl text-gold mb-4">JetBrains Mono</h2>
                        <p className="font-mono text-gray-400 max-w-xl text-sm">
                            Used for UI Micro-copy, Data Points, System Status, and Navigation.
                            It represents code, precision, and the underlying "Factory".
                        </p>
                    </div>

                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-center gap-4">
                            <span className="text-gold">&gt;</span>
                            <span>SYSTEM_STATUS: <span className="text-emerald-400">ONLINE</span></span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gold">&gt;</span>
                            <span>INITIALIZE_PROTOCOL()</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gold">&gt;</span>
                            <span className="opacity-50">EST. 2024 // MOUNTAIN_VIEW</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
