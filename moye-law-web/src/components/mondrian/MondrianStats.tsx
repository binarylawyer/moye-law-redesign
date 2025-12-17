"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const MondrianStats: React.FC = () => {
    const stats = [
        { label: "Assets Protected", value: "$2.5B+", color: "bg-navy text-white" },
        { label: "Families Served", value: "1,200+", color: "bg-white text-navy" },
        { label: "Trusts Executed", value: "850+", color: "bg-gold text-navy" },
        { label: "Years Experience", value: "30", color: "bg-red-800 text-white" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-4 border-navy">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    className={`${stat.color} p-12 border-b-4 md:border-b-0 md:border-r-4 border-navy last:border-r-0 flex flex-col items-center justify-center text-center group hover:brightness-110 transition-all cursor-crosshair`}
                    whileHover={{ scale: 0.98 }}
                >
                    <h3 className="font-display text-5xl md:text-6xl font-bold mb-2">{stat.value}</h3>
                    <p className="font-mono text-sm uppercase tracking-widest opacity-80">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
};
