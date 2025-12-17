import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Established", value: "1994", prefix: "EST." },
    { label: "Cases Managed", value: "850+", prefix: "VOL." },
    { label: "Asset Value", value: "$450M", prefix: "SECURED" },
    { label: "System Uptime", value: "99.9%", prefix: "OPS" }
];

const MondrianStats: React.FC = () => {
    return (
        <div className="w-full bg-[#FAFAFA] border-b-4 border-navy">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 border-x-4 border-navy">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`
                                 p-8 md:p-12 
                                 border-b-4 md:border-b-0 md:border-r-4 border-navy last:border-r-0
                                 flex flex-col justify-center items-start
                                 bg-white hover:bg-navy hover:text-white transition-colors duration-300 group
                             `}
                        >
                            <span className="font-mono text-xs text-gold font-bold mb-2 tracking-widest group-hover:text-emerald-400">
                                {stat.prefix}
                            </span>
                            <span className="font-display text-4xl md:text-5xl lg:text-6xl text-navy font-bold group-hover:text-white">
                                {stat.value}
                            </span>
                            <span className="font-sans text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide group-hover:text-gray-300">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MondrianStats;
