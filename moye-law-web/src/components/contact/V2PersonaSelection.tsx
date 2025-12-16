"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Landmark, ArrowRight, Check } from 'lucide-react';

interface V2PersonaSelectionProps {
    onSelect: (persona: 'Tech Innovator' | 'Family Steward' | 'Legacy Architect') => void;
}

const personas = [
    {
        id: 'Tech Innovator',
        icon: Rocket,
        label: 'Tech Innovator',
        desc: 'Speed. Scale. Exit Strategy.',
        detail: 'For founders and crypto-natives.',
        color: 'text-blue-600',
        bg: 'hover:bg-blue-50',
        border: 'hover:border-blue-200'
    },
    {
        id: 'Family Steward',
        icon: Heart,
        label: 'Family Steward',
        desc: 'Protection. Harmony. Care.',
        detail: 'For parents and guardians.',
        color: 'text-rose-600',
        bg: 'hover:bg-rose-50',
        border: 'hover:border-rose-200'
    },
    {
        id: 'Legacy Architect',
        icon: Landmark,
        label: 'Legacy Architect',
        desc: 'Structure. Durability. Tax.',
        detail: 'For high-net-worth building blocks.',
        color: 'text-emerald-600',
        bg: 'hover:bg-emerald-50',
        border: 'hover:border-emerald-200'
    }
] as const;

export const V2PersonaSelection: React.FC<V2PersonaSelectionProps> = ({ onSelect }) => {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-navy">Identify Protocol</h3>
                <p className="font-mono text-xs text-gray-500 mt-2">SELECT_USER_PROFILE</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {personas.map((p, i) => (
                    <motion.button
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => onSelect(p.id)}
                        className={`group relative text-left p-6 border-2 border-gray-200 bg-white transition-all duration-200 ${p.bg} ${p.border}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 bg-gray-50 rounded-none group-hover:bg-white transition-colors border border-gray-100`}>
                                    <p.icon className={`w-6 h-6 ${p.color}`} />
                                </div>
                                <div>
                                    <h4 className="font-display text-lg text-navy font-bold group-hover:text-black">{p.label}</h4>
                                    <p className="font-sans text-sm text-gray-600 group-hover:text-gray-900">{p.desc}</p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};
