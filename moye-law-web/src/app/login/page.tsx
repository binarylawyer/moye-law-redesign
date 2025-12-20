"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Success
            router.push('/admin');
            router.refresh(); // Refresh middleware/server state
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white p-8 border-4 border-gold shadow-[16px_16px_0px_0px_#C99D56]">

                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-navy mb-4">
                        <Lock className="w-6 h-6 text-gold" />
                    </div>
                    <h1 className="font-display text-4xl text-navy">Access Control</h1>
                    <p className="font-mono text-xs text-gray-500 mt-2 tracking-widest uppercase">AUTHORIZED PERSONNEL ONLY</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700 font-mono">
                            ERROR: {error}
                        </div>
                    )}

                    <div>
                        <label className="block font-mono text-xs text-navy uppercase mb-2">Identifier</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 p-3 focus:outline-none focus:border-navy transition-colors font-mono"
                            placeholder="admin@moye.law"
                        />
                    </div>

                    <div>
                        <label className="block font-mono text-xs text-navy uppercase mb-2">Passkey</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-gray-200 p-3 focus:outline-none focus:border-navy transition-colors font-mono"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-navy text-white font-bold py-4 hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                AUTHENTICATE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="font-mono text-[10px] text-gray-400">
                        SYSTEM V2.0 // SECURE GATEWAY
                    </p>
                </div>

            </div>
        </div>
    );
}
