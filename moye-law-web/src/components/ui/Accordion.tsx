"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
    id: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    id,
    title,
    subtitle,
    children,
    isOpen,
    onToggle,
    className = "",
    headerClassName = "",
    contentClassName = ""
}) => {
    // If no controlled state is provided, handle it locally (for standalone usage)
    const [localIsOpen, setLocalIsOpen] = useState(false);
    const isExpanded = isOpen !== undefined ? isOpen : localIsOpen;
    const handleToggle = onToggle || (() => setLocalIsOpen(!localIsOpen));

    return (
        <div className={`border-2 border-navy rounded-md overflow-hidden mb-4 ${className}`}>
            <div
                className={`bg-white p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors ${headerClassName}`}
                onClick={handleToggle}
            >
                <div className="flex-1">
                    {subtitle && <div className="mb-2">{subtitle}</div>}
                    <div className="font-display text-2xl text-navy">{title}</div>
                </div>
                <button className="flex-shrink-0 ml-4 text-navy">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className={`p-6 border-t border-navy bg-gray-50 ${contentClassName}`}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: {
        id: string;
        title: React.ReactNode;
        subtitle?: React.ReactNode;
        content: React.ReactNode;
    }[];
    allowMultiple?: boolean;
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = "" }) => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            if (allowMultiple) {
                return { ...prev, [id]: !prev[id] };
            } else {
                return { [id]: !prev[id] }; // Close others if not allowing multiple
            }
        });
    };

    return (
        <div className={className}>
            {items.map(item => (
                <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    isOpen={openItems[item.id] || false}
                    onToggle={() => toggleItem(item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};
