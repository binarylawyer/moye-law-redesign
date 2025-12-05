import React from 'react';
import { ArrowRight, Check, Server, Feather } from 'lucide-react';

/**
 * SplitServiceCard: The "Binary Lawyer" Signature Component
 * 
 * Based on Design Spec 2.3:
 * - Heavy Navy Border Container
 * - Vertical 4px Divider
 * - Left: "The Product" (Grey, Mono, Technical)
 * - Right: "The Service" (White, Serif, Empathetic)
 */

interface SplitServiceCardProps {
    title: string;
    productTitle: string;
    serviceTitle: string;
    productFeatures: string[];
    serviceFeatures: string[];
}

const SplitServiceCard: React.FC<SplitServiceCardProps> = ({
    title = "Estate Planning",
    productTitle = "EstateOS_Bundle",
    serviceTitle = "Legacy Strategy",
    productFeatures = ["Automated Drafting", "Fixed Price: $2,500", "72h Turnaround"],
    serviceFeatures = ["Bespoke Counsel", "Family Dynamics", "Tax Strategy"]
}) => {
    return (
        <div className="w-full max-w-5xl mx-auto my-12">
            {/* Section Header */}
            <div className="mb-4 border-l-4 border-mondrian-gold pl-4">
                <h2 className="font-serif text-3xl text-mondrian-navy font-bold">{title}</h2>

                export default SplitServiceCard;
