import React from 'react';
import { Link } from 'react-router-dom';
import NavBarV2 from '../components/NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import { FileText, Layout, Monitor, ArrowRight, Briefcase, Layers } from 'lucide-react';

const IndexPage = () => {
    const pages = [
        // --- PRODUCTION ---
        {
            title: "Production Homepage",
            path: "/v2-home",
            description: "The primary entry point. 'Tiffany's Model' with tiered service cards.",
            icon: <Layout className="w-6 h-6 text-gold" />,
            status: "Ready"
        },

        // --- CORE MODULES ---
        {
            title: "Practice Area Index",
            path: "/v2/practice",
            description: "The 'Matrix of Competence' catalog.",
            icon: <FileText className="w-6 h-6 text-navy" />,
            status: "beta",
            node: "06"
        },
        {
            title: "Firm Profile (The Architects)",
            path: "/v2/firm",
            description: "Leadership & Kinetic Manifesto.",
            icon: <Briefcase className="w-6 h-6 text-navy" />,
            status: "beta",
            node: "07"
        },
        {
            title: "Inquiry Terminal (Contact)",
            path: "/v2/contact",
            description: "Factory Data & Input Stream.",
            icon: <div className="w-6 h-6 border-2 border-navy"></div>,
            status: "beta",
            node: "08"
        },

        // --- DESIGN SYSTEM (RULES) ---
        {
            title: "Atomic Foundations",
            path: "/v2/design/foundations",
            description: "The Master Index: Colors, Typography, and Fonts.",
            icon: <Layout className="w-6 h-6 text-navy" />,
            status: "System"
        },
        {
            title: "Global Product Logic",
            path: "/v2/design/product",
            description: "Automated Offerings (LegacyOS) Strategy.",
            icon: <Layout className="w-6 h-6 text-navy" />,
            status: "System"
        },
        {
            title: "Service Funnel",
            path: "/v2/design/service",
            description: "The 5th Wave Service Ladder (Retail -> Bespoke).",
            icon: <Layout className="w-6 h-6 text-navy" />,
            status: "System"
        },
        {
            title: "Kinetic Motion",
            path: "/v2/design/motion",
            description: "Animation physics, the Saul Bass Door, and Mondrian Lines.",
            icon: <Layout className="w-6 h-6 text-navy" />,
            status: "System"
        },
        {
            title: "Component Library",
            path: "/v2/design/components",
            description: "Reusable UI Atoms & Molecules (Buttons, Inputs, Alerts).",
            icon: <Layout className="w-6 h-6 text-navy" />,
            status: "System"
        },

        // --- STRATEGY & ARCHIVE ---
        {
            title: "Kinetic Strategy (v2.0)",
            path: "/v2-strategy",
            description: "The 8 Principles of the new 'Fifth Wave' architecture.",
            icon: <FileText className="w-6 h-6 text-gold" />,
            status: "New"
        },
        {
            title: "Archived Resources (Legacy)",
            path: "/v2/resources-archive",
            description: "Podcasts, Books, Articles library.",
            icon: <Layers className="w-6 h-6 text-gray-400" />,
            status: "Archive",
            node: "98"
        },
        {
            title: "Archived Forms (Legacy)",
            path: "/v2/forms-archive",
            description: "Contact & Intake Logic.",
            icon: <div className="w-6 h-6 border border-gray-400"></div>,
            status: "Archive",
            node: "97"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-navy selection:text-gold pt-20">
            <NavBarV2 />

            <main className="container mx-auto px-6 py-12 max-w-5xl">
                <div className="mb-12 text-center">
                    <span className="font-mono text-xs text-navy tracking-[0.3em] uppercase block mb-4">
                        Development Index
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl text-navy mb-4">
                        V2 Page Directory
                    </h1>
                    <p className="font-sans text-gray-500 max-w-xl mx-auto">
                        A collection of all active pages, templates, and design system artifacts for the Moye Law Redesign.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className="bg-white border-2 border-navy/10 p-6 flex flex-col hover:border-navy hover:shadow-[4px_4px_0px_0px_#0A2342] transition-all group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-gray-50 rounded-sm group-hover:bg-navy group-hover:text-white transition-colors">
                                    {page.icon}
                                </div>
                                <span className={`text-[10px] font-mono uppercase px-2 py-1 border ${page.status === 'Ready' || page.status === 'Live'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    : 'bg-gray-50 text-gray-500 border-gray-200'
                                    }`}>
                                    {page.status}
                                </span>
                            </div>

                            <h3 className="font-display text-2xl text-navy mb-2 group-hover:text-gold transition-colors">
                                {page.title}
                            </h3>
                            <p className="font-sans text-sm text-gray-500 mb-6 flex-grow">
                                {page.description}
                            </p>

                            <div className="flex items-center text-xs font-mono font-bold text-navy uppercase tracking-wider">
                                <span>Access Route</span>
                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <TerminalFooter />
        </div>
    );
};

export default IndexPage;
