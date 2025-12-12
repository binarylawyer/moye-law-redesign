import React from 'react';
import { Search, PenTool, Rocket, ShieldCheck } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Audit_Protocol",
        desc: "We scan your current assets, identifying vulnerabilities and structural weaknesses.",
        icon: Search
    },
    {
        id: "02",
        title: "Architect_System",
        desc: "We design a custom legal framework tailored to your specific goals.",
        icon: PenTool
    },
    {
        id: "03",
        title: "Deploy_Structure",
        desc: "Execution of trusts, entities, and contracts with engineering precision.",
        icon: Rocket
    },
    {
        id: "04",
        title: "Monitor_Loop",
        desc: "Continuous oversight to ensure your strategy evolves with the law.",
        icon: ShieldCheck
    }
];

const TechnicalProcess: React.FC = () => {
    return (
        <div className="w-full bg-navy border-b-4 border-gold text-white py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-16 border-l-4 border-gold pl-8">
                    <h2 className="font-display text-5xl mb-4">The Manufacturing Process</h2>
                    <p className="font-mono text-gold/80 max-w-xl">
                        Legal outcomes are not accidental. They are manufactured through a rigorous, repeatable process.
                    </p>
                </div>

                {/* The Schematic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/20 -z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 group">
                            {/* Step Node */}
                            <div className="w-24 h-24 bg-navy border-4 border-white group-hover:border-gold transition-colors flex items-center justify-center mb-8 relative z-10 mx-auto lg:mx-0">
                                <step.icon className="w-10 h-10 text-white group-hover:text-gold transition-colors" />
                                <div className="absolute -top-3 -right-3 bg-gold text-navy font-mono text-xs font-bold px-2 py-1">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="font-mono text-xl text-gold mb-4 group-hover:text-white transition-colors">
                                {step.title}
                            </h3>
                            <p className="font-sans text-white/60 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default TechnicalProcess;
