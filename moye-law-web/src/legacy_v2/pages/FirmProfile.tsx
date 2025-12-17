import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';

const TeamMember = ({ name, role, bio, initials }: { name: string, role: string, bio: string, initials: string }) => (
    <div className="border-4 border-navy group hover:bg-navy transition-colors duration-500">
        <div className="h-64 bg-gray-200 relative overflow-hidden border-b-4 border-navy">
            {/* DUOTONE FILTER EFFECT */}
            <div className="absolute inset-0 bg-navy mix-blend-multiply opacity-80 z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gold mix-blend-overlay opacity-40 z-20 group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* Placeholder for now - normally an Image */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="font-display text-9xl text-navy opacity-20">{initials}</span>
            </div>

            <div className="absolute bottom-0 left-0 bg-navy text-gold px-4 py-2 font-mono text-xs z-30">
                Authorized_Personnel
            </div>
        </div>
        <div className="p-8">
            <h3 className="font-display text-3xl text-navy group-hover:text-white mb-2">{name}</h3>
            <div className="font-mono text-xs text-gold uppercase tracking-widest mb-6">{role}</div>
            <p className="font-sans text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm">
                {bio}
            </p>
        </div>
    </div>
);

const FirmProfile = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Firm Architecture</span>
                        <h1 className="font-display text-6xl text-navy leading-none">The Architects.</h1>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="font-mono text-xs text-navy/50">PERSONNEL: 03</div>
                        <div className="font-mono text-xs text-navy/50">LOCATION: NY_HQ</div>
                    </div>
                </header>

                {/* MANIFESTO */}
                <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="border-l-4 border-gold pl-8 py-2">
                        <p className="font-serif text-2xl text-navy leading-relaxed italic">
                            "We do not view the law as a series of documents, but as a rigid architectural framework that holds your legacy together."
                        </p>
                    </div>
                    <div>
                        <p className="font-sans text-gray-600 leading-relaxed mb-6">
                            Moye Law Systems was founded to bridge the gap between traditional "Besoke" counsel and the modern "Industrial" need for speed and automation. We operate as both a Software Factory and a Private Counsel Storefront.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 border border-gray-200">
                                <div className="font-mono text-xs text-navy font-bold mb-1">FACTORY_MODE</div>
                                <div className="text-xs text-gray-500">High-Volume, Low-Touch</div>
                            </div>
                            <div className="bg-navy p-4 text-white">
                                <div className="font-mono text-xs text-gold font-bold mb-1">STOREFRONT_MODE</div>
                                <div className="text-xs text-white/70">High-Touch, Strategic</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TeamMember
                        name="Christopher Moye"
                        role="Master Architect (CEO)"
                        initials="CM"
                        bio="Christopher leads Moye Law with a passion for combining traditional legal expertise with innovative technological solutions. With over 20 years of experience in estate planning, he brings a unique perspective to serving high-net-worth clients."
                    />
                    <TeamMember
                        name="Penny Moye"
                        role="Systems Director (VP Tech)"
                        initials="PM"
                        bio="Penny oversees client experience and the firm's technological initiatives. Her background in both legal operations and technology innovation bridges the gap between traditional services and modern expectations."
                    />
                    <TeamMember
                        name="Christopher Moye Jr"
                        role="Operations Engineer (VP Ops)"
                        initials="CJ"
                        bio="Christopher Jr manages the firm's operations to align with our core values. His focus on client-centered processes ensures that every interaction reflects our commitment to exceptional service architecture."
                    />
                </div>

            </div>
        </V2PageWrapper>
    );
};

export default FirmProfile;
