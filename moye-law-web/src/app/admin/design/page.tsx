"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DesignSystemHub() {
    return (
        <div className="space-y-12">
            <div>
                <span className="font-mono text-xs text-navy tracking-widest uppercase mb-2 block">Methodology v1.0</span>
                <h1 className="font-display text-5xl text-navy mb-6">Kinetic Structuralism.</h1>
                <p className="font-sans text-xl text-gray-600 max-w-3xl leading-relaxed">
                    The Moye Law interface is an active agent. It does not simply "load"; it constructs itself.
                    Our design system fuses the rigid engineering of Piet Mondrian with the cinematic tension of Saul Bass.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/admin/design/colors" className="group block bg-white border-2 border-navy p-8 hover:shadow-[8px_8px_0px_0px_#C99D56] transition-shadow">
                    <div className="h-2 w-12 bg-navy mb-6 group-hover:w-24 transition-all duration-300"></div>
                    <h3 className="font-display text-2xl text-navy mb-2">Color System</h3>
                    <p className="font-mono text-xs text-gray-500 mb-6">NAVY // GOLD // WHITE // GREY</p>
                    <span className="flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors">
                        View Palette <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </Link>

                <Link href="/admin/design/typography" className="group block bg-white border-2 border-navy p-8 hover:shadow-[8px_8px_0px_0px_#C99D56] transition-shadow">
                    <div className="h-2 w-12 bg-navy mb-6 group-hover:w-24 transition-all duration-300"></div>
                    <h3 className="font-display text-2xl text-navy mb-2">Typography</h3>
                    <p className="font-mono text-xs text-gray-500 mb-6">CORMORANT // INTER // JETBRAINS</p>
                    <span className="flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors">
                        View Typeface <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </Link>

                <Link href="/admin/design/components" className="group block bg-white border-2 border-navy p-8 hover:shadow-[8px_8px_0px_0px_#C99D56] transition-shadow">
                    <div className="h-2 w-12 bg-navy mb-6 group-hover:w-24 transition-all duration-300"></div>
                    <h3 className="font-display text-2xl text-navy mb-2">Component Library</h3>
                    <p className="font-mono text-xs text-gray-500 mb-6">ATOMIC // MOLECULAR // KINETIC</p>
                    <span className="flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors">
                        View Components <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </Link>
            </div>

            <div className="bg-navy p-8 text-white max-w-2xl">
                <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-4">Core Tenet</h4>
                <blockquote className="font-display text-2xl italic leading-relaxed">
                    "We do not sell documents. We sell sleep. The structure of the interface must reflect the durability of the legal architecture."
                </blockquote>
            </div>
        </div>
    )
}
