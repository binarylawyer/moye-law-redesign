"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Box, BarChart2, Shield, Globe } from "lucide-react";

/**
 * StripeBentoGrid
 * Inspired by Stripe's "Customers by use case".
 * Features:
 * - Functional Tab Selection
 * - Clean whitespace gaps between cards
 * - Rounded corners
 * - "Functional" Mondrian aesthetic (structured but usable)
 */

const tabs = [
    { id: "saas", label: "SaaS Platforms" },
    { id: "ecommerce", label: "Global Ecommerce" },
    { id: "crypto", label: "Crypto & Web3" }
];

const content = {
    saas: [
        { span: "col-span-2 row-span-2", title: "Recurring Revenue Engine", icon: <BarChart2 className="w-6 h-6" />, color: "bg-navy text-white" },
        { span: "col-span-1 row-span-1", title: "Churn Analytics", icon: <Box className="w-6 h-6" />, color: "bg-white text-navy border border-gray-100" },
        { span: "col-span-1 row-span-2", title: "Enterprise SSO", icon: <Shield className="w-6 h-6" />, color: "bg-gray-50 text-navy border border-gray-100" },
        { span: "col-span-1 row-span-1", title: "API Keys", icon: <Globe className="w-6 h-6" />, color: "bg-gold text-white" },
    ],
    ecommerce: [
        { span: "col-span-1 row-span-2", title: "Global Payments", icon: <Globe className="w-6 h-6" />, color: "bg-mondrian-blue text-white" },
        { span: "col-span-2 row-span-1", title: "Cart Abandonment", icon: <Box className="w-6 h-6" />, color: "bg-white text-navy border border-gray-100" },
        { span: "col-span-1 row-span-1", title: "Fraud Shield", icon: <Shield className="w-6 h-6" />, color: "bg-mondrian-red text-white" },
        { span: "col-span-2 row-span-1", title: "Instant Checkout", icon: <ArrowRight className="w-6 h-6" />, color: "bg-navy text-white" },
    ],
    crypto: [
        { span: "col-span-3 row-span-1", title: "On-Ramp / Off-Ramp", icon: <ArrowRight className="w-6 h-6" />, color: "bg-navy text-white" },
        { span: "col-span-1 row-span-1", title: "Wallet Auth", icon: <Shield className="w-6 h-6" />, color: "bg-white text-navy border border-gray-100" },
        { span: "col-span-1 row-span-1", title: "Token Gating", icon: <Box className="w-6 h-6" />, color: "bg-gold text-white" },
        { span: "col-span-1 row-span-1", title: "Smart Contracts", icon: <BarChart2 className="w-6 h-6" />, color: "bg-gray-50 text-navy border border-gray-100" },
    ]
};

export default function StripeBentoGrid() {
    const [activeTab, setActiveTab] = useState("saas");

    return (
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">

            {/* TABS */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all ${activeTab === tab.id
                                ? "bg-navy text-white shadow-md"
                                : "bg-white text-gray-500 hover:text-navy hover:bg-gray-100"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className="h-[400px] w-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-3 grid-rows-2 gap-4 h-full"
                    >
                        {content[activeTab as keyof typeof content].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`${item.span} ${item.color} rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: i * 0.05 }
                                }}
                            >
                                <div className="opacity-50">{item.icon}</div>
                                <span className="font-display text-lg font-bold">{item.title}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
}
