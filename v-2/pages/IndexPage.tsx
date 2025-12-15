import React from 'react';
import { Link } from 'react-router-dom';
import NavBarV2 from '../components/NavBarV2';
import TerminalFooter from '../sushi-ui/components/layout/TerminalFooter';
import { FileText, Layout, Monitor, ArrowRight } from 'lucide-react';

const IndexPage = () => {
    const pages = [
        {
            title: "Production Homepage",
            path: "/v2-home",
            description: "The primary entry point. 'Tiffany's Model' with tiered service cards.",
            icon: <Layout className="w-6 h-6 text-gold" />,
            status: "Ready"
        },
        {
            title: "Mondrian UI Kit",
            path: "/v2-ui-kit",
            description: "The component library showcase (Split Cards, Hero, Grid, etc.).",
            icon: <Monitor className="w-6 h-6 text-navy" />,
            status: "Live"
        },
        {
            title: "Kinetic Strategy (v2.0)",
            path: "/v2-strategy",
            description: "The 8 Principles of the new 'Fifth Wave' architecture.",
            icon: <FileText className="w-6 h-6 text-gold" />,
            status: "New"
        },
        {
            title: "Design System",
            path: "/v2-design-system",
            description: "Typography, Colors, and basic tokens.",
            icon: <FileText className="w-6 h-6 text-navy" />,
            status: "Draft"
        },
        {
            title: "Service Template",
            path: "/v2-service-template",
            description: "Template for individual service pages (Estate Planning, etc.).",
            icon: <Layout className="w-6 h-6 text-gray-400" />,
            status: "Prototype"
        },
        {
            title: "Annotated Landing",
            path: "/v2-landing",
            description: "Original concept with strategic annotations.",
            icon: <FileText className="w-6 h-6 text-gray-400" />,
            status: "Reference"
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
