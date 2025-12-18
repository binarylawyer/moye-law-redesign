'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-8 font-mono bg-white p-4 border border-gray-200 rounded shadow-sm max-w-lg overflow-auto">
                {error.message || "Unknown error occurred"}
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="px-6 py-3 bg-navy text-white font-medium hover:bg-gold transition-colors"
            >
                Try again
            </button>
        </div>
    );
}
