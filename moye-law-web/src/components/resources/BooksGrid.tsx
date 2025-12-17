"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Lock, ChevronRight } from 'lucide-react';

export interface BookItem {
    id: string;
    title: string;
    author: string;
    category: string;
    slug: string; // Add slug to interface
    description?: string;
    coverUrl?: string; // Add coverUrl (mapped from cover_url)
    pages?: string;
    publicationDate?: string;
    clientOnly?: boolean;
}

interface BooksGridProps {
    books: BookItem[];
    isLoggedIn?: boolean; // Optional prop to simulate auth status
}

export const BooksGrid: React.FC<BooksGridProps> = ({ books, isLoggedIn = false }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(books.map(b => b.category)))];

    const filteredBooks = activeCategory === 'All'
        ? books
        : books.filter(b => b.category === activeCategory);

    return (
        <div>
            {/* Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === cat
                                ? 'bg-navy text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredBooks.map(book => {
                    const isLocked = book.clientOnly && !isLoggedIn;

                    return (
                        <div
                            key={book.id}
                            className={`group relative bg-white border-2 border-navy overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-xl ${isLocked ? 'grayscale' : ''}`}
                        >
                            {/* Visual Cover Area */}
                            <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden border-b-2 border-navy">
                                {/* If we had real images, we'd use them. Here using the gradient placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-navy text-white flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                        {isLocked ? <Lock className="w-8 h-8" /> : <Book className="w-8 h-8" />}
                                    </div>
                                    <h3 className="font-display text-xl mb-2 line-clamp-3">{book.title}</h3>
                                    <p className="font-serif italic text-sm text-gray-300">{book.author}</p>
                                </div>

                                {/* Lock Overlay for unauthenticated users */}
                                {isLocked && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                        <div className="bg-white/10 border border-white/20 p-4 rounded text-white text-center">
                                            <Lock className="w-8 h-8 mx-auto mb-2" />
                                            <span className="font-bold uppercase tracking-widest text-xs">Client Access Only</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-yellow-400 text-navy px-2 py-1 rounded-sm">
                                        {book.category}
                                    </span>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    {isLocked ? (
                                        <Link href="/login" className="flex items-center justify-center w-full py-2 bg-gray-100 text-gray-500 font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
                                            Login to View
                                        </Link>
                                    ) : (
                                        <Link href={`/books/${book.slug}`} className="flex items-center justify-center w-full py-2 bg-navy text-white font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors">
                                            View Details <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
