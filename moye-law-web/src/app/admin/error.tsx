'use client';

import { useEffect } from 'react';

export default function AdminError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg max-w-2xl w-full text-center">
                <h2 className="text-2xl font-display text-navy mb-4">Admin System Error</h2>
                <div className="font-mono text-sm text-red-600 bg-white p-4 rounded border border-red-100 mb-6 overflow-auto text-left">
                    {error.name}: {error.message}
                    {error.digest && <div className="mt-2 text-xs text-gray-400">Digest: {error.digest}</div>}
                </div>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 bg-navy text-white hover:bg-gold transition-colors font-bold text-sm uppercase tracking-widest"
                >
                    Reset Console
                </button>
            </div>
        </div>
    );
}
