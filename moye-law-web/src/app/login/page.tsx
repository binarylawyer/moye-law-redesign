"use client";

import { createBrowserClient } from '@supabase/ssr'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lock, Terminal } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/admin');
            router.refresh(); // Refresh to update middleware state
        }
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#C99D56 1px, transparent 1px), linear-gradient(90deg, #C99D56 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="bg-white w-full max-w-md border-4 border-gold shadow-[16px_16px_0px_0px_#0A2342] relative z-10 p-10">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-navy text-gold mb-4 border-2 border-gold">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="font-display text-4xl text-navy mb-2">Restricted Access</h1>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                        Moye Law Systems // Admin Console
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="font-mono text-xs font-bold text-navy block mb-2">OPERATOR_ID (EMAIL)</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-grey border-2 border-navy p-3 font-mono text-sm focus:outline-none focus:border-gold transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="font-mono text-xs font-bold text-navy block mb-2">ACCESS_KEY (PASSWORD)</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-grey border-2 border-navy p-3 font-mono text-sm focus:outline-none focus:border-gold transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 font-mono text-xs border border-red-200 flex items-start">
                            <Terminal className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>ERROR: {error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-navy text-white font-mono text-sm uppercase tracking-widest py-4 border-2 border-navy hover:bg-gold hover:text-navy hover:border-gold transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-wait"
                    >
                        {loading ? 'AUTHENTICATING...' : 'INITIATE_SESSION >'}
                    </button>
                </form>

            </div>

            <div className="absolute bottom-8 left-0 w-full text-center font-mono text-[10px] text-white/30 uppercase">
                Secure Connection // TLS 1.3 // 256-bit AES
            </div>
        </div>
    );
}
