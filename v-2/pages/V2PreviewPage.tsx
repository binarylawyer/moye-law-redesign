import React from 'react';
import NavBarV2 from '../components/NavBarV2';
import HeroV2 from '../components/HeroV2';
import SplitServiceCard from '../components/SplitServiceCard';
import MethodologySection from '../components/MethodologySection';
import PracticeCardV2 from '../components/PracticeCardV2';

/**
 * V2PreviewPage: Showcasing the Hybrid Mondrian Strategy
 */

const V2PreviewPage = () => {
    return (
        <div className="min-h-screen bg-white pt-20 md:pt-24">
            {/* 1. SYSTEM STATUS BAR (NavBar) */}
            <NavBarV2 />

            {/* 2. THE BINARY LAWYER (Hero) */}
            <HeroV2 />

            {/* 3. METHODOLOGY (Explainer) */}
            <MethodologySection />

            {/* 4. THE STOREFRONT (Domino Cards) */}
            <section className="py-24 px-4 md:px-8 bg-white border-b-4 border-mondrian-navy">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <span className="font-mono text-mondrian-gold text-sm tracking-widest uppercase mb-4 block">
                            Practice Areas
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy font-bold mb-4">
                            Choose Your Interface
                        </h2>
                        <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                            Select a practice area to see our dual engagement models.
                        </p>
                    </div>

                    {/* THE DOMINO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* 1. Estate Planning */}
                        <SplitServiceCard
                            title="Estate Planning"
                            serviceTitle="Legacy Strategy"
                            productTitle="EstateOS_Bundle"
                            serviceDesc="Bespoke counsel for complex family dynamics, tax strategy, and multi-generational wealth transfer."
                            productDesc="Automated will generation, digital asset vaults, and healthcare directives. Delivered in 72h."
                        />

                        {/* 2. Business Law */}
                        <SplitServiceCard
                            title="Business Law"
                            serviceTitle="General Counsel"
                            productTitle="Inc_Launcher_v2"
                            serviceDesc="Strategic advising for mergers, acquisitions, and board governance. Your partner in the boardroom."
                            productDesc="LLC formation, operating agreements, and EIN registration. Flat-fee, compliance-ready."
                        />

                        {/* 3. Intellectual Property */}
                        <SplitServiceCard
                            title="Intellectual Property"
                            serviceTitle="Brand Defense"
                            productTitle="Trademark_Bot"
                            serviceDesc="Litigation support, licensing negotiations, and global IP portfolio strategy."
                            productDesc="USPTO search algorithms, automated filing, and status monitoring. Protect your brand instantly."
                        />

                    </div>
                </div>
            </section>

            {/* 5. THE ENGINEERING (Practice Cards) */}
            <section className="py-24 px-4 md:px-8 bg-mondrian-grey border-b-4 border-mondrian-navy">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <span className="font-mono text-mondrian-navy text-sm tracking-widest uppercase mb-4 block">
                            SYSTEM_MODULES
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy font-bold mb-4">
                            Core Competencies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PracticeCardV2
                            title="Art Law"
                            description="Authentication, title disputes, and gallery representation. We protect the creator."
                            path="/practice/art-law"
                            icon={<span className="font-serif text-2xl italic">Al</span>}
                        />
                        <PracticeCardV2
                            title="Estate Planning"
                            description="For artists, collectors, and innovators. Ensuring your legacy survives you."
                            path="/practice/estate-planning"
                            icon={<span className="font-serif text-2xl italic">Ep</span>}
                        />
                        <PracticeCardV2
                            title="Corporate Law"
                            description="Entity formation, governance, and M&A. Building the structure for your vision."
                            path="/practice/corporate-law"
                            icon={<span className="font-serif text-2xl italic">Cl</span>}
                        />
                    </div>
                </div>
            </section>

            {/* 5. THE TERMINAL (Footer) */}
            <footer className="bg-mondrian-navy text-white py-16 border-t-4 border-mondrian-navy">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-3xl mb-6">MOYE LAW</h3>
                        <p className="font-sans text-white/60 max-w-sm">
                            The intersection of art, law, and code. <br />
                            Engineered for the future of legacy.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-mono text-mondrian-gold mb-4 text-sm">OFFICES</h4>
                        <ul className="font-mono text-sm space-y-2 text-white/80">
                            <li>NEW_YORK_NY</li>
                            <li>RICHMOND_VA</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-mono text-mondrian-gold mb-4 text-sm">SYSTEM_STATUS</h4>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-mono text-sm text-white/80">ALL SYSTEMS OPERATIONAL</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default V2PreviewPage;
