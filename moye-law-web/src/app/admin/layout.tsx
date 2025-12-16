"use client";

import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Palette, Type, Component, Lock, LogOut, Terminal } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    const navItems = [
        { name: 'Overview', path: '/admin', icon: LayoutDashboard },
        { name: 'Design System', path: '/admin/design', icon: Palette },
        // { name: 'Submissions', path: '/admin/submissions', icon: Inbox },
    ];

    const designSystemItems = [
        { name: 'Colors', path: '/admin/design/colors', icon: Palette },
        { name: 'Typography', path: '/admin/design/typography', icon: Type },
        { name: 'Components', path: '/admin/design/components', icon: Component },
        { name: 'Protocols', path: '/admin/design/protocol', icon: Terminal },
    ];

    return (
        <div className="min-h-screen bg-grey flex">

            {/* Sidebar */}
            <aside className="w-64 bg-navy text-white flex flex-col fixed h-full border-r-4 border-gold">
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                        <Lock className="w-4 h-4 text-gold" />
                        <span className="font-mono text-xs text-gold tracking-widest uppercase">ADMIN_CONSOLE</span>
                    </div>
                    <h1 className="font-display text-2xl">Moye Systems</h1>
                </div>

                <nav className="flex-grow p-4 space-y-8">
                    <div>
                        <h3 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest px-4 mb-2">Core Modules</h3>
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center gap-3 px-4 py-2 font-mono text-xs rounded transition-colors ${pathname === item.path ? 'bg-gold/20 text-gold font-bold' : 'hover:bg-white/5 text-gray-300'}`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest px-4 mb-2">Design System</h3>
                        <ul className="space-y-1">
                            {designSystemItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center gap-3 px-4 py-2 font-mono text-xs rounded transition-colors ${pathname === item.path ? 'bg-gold/20 text-gold font-bold' : 'hover:bg-white/5 text-gray-300'}`}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button onClick={handleSignOut} className="flex items-center gap-2 text-xs font-mono text-red-300 hover:text-red-100 transition-colors w-full px-4 py-2">
                        <LogOut className="w-4 h-4" /> TERMINATE_SESSION
                    </button>
                </div>
            </aside>

            {/* Content Area */}
            <main className="flex-grow ml-64 p-12">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>

        </div>
    );
}
