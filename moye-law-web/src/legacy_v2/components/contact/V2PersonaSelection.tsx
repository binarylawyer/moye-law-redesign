import React from 'react';
import { Briefcase, Heart, ScrollText, ArrowRight } from 'lucide-react';

interface V2PersonaSelectionProps {
    onSelect: (persona: string) => void;
}

const PersonaCard = ({ icon: Icon, title, description, onClick }: any) => (
    <button
        onClick={onClick}
        className="group relative text-left w-full h-full bg-white border-4 border-gray-100 hover:border-navy transition-all duration-300 p-8 flex flex-col items-start"
    >
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-gold border-r-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="w-12 h-12 bg-gray-50 group-hover:bg-navy group-hover:text-gold text-navy transition-colors flex items-center justify-center mb-6">
            <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-display text-2xl text-navy mb-3 group-hover:translate-x-1 transition-transform">{title}</h3>
        <p className="font-sans text-sm text-gray-500 mb-8 flex-grow">{description}</p>

        <div className="font-mono text-xs font-bold text-navy uppercase tracking-widest flex items-center group-hover:text-gold transition-colors">
            Initialize
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
    </button>
);

const V2PersonaSelection: React.FC<V2PersonaSelectionProps> = ({ onSelect }) => {
    return (
        <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center mb-12">
                <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">Step 01: Identification</span>
                <h2 className="font-display text-4xl text-navy">Select Your Profile.</h2>
                <p className="font-sans text-gray-400 mt-4 max-w-xl mx-auto">
                    Our intake logic adapts to your specific needs. Choose the path that best describes your current objective.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PersonaCard
                    icon={Briefcase}
                    title="Tech Innovator"
                    description="I am a founder or investor protecting IP, digital assets, and business equity."
                    onClick={() => onSelect("Protect My Startup's Future")}
                />
                <PersonaCard
                    icon={Heart}
                    title="Family Steward"
                    description="I am navigating elder care, special needs planning, or guardianship for a loved one."
                    onClick={() => onSelect("Plan Care for My Aging Parent")}
                />
                <PersonaCard
                    icon={ScrollText}
                    title="Legacy Architect"
                    description="I am building or updating a comprehensive estate plan for wealth preservation."
                    onClick={() => onSelect("Build a Lasting Legacy")}
                />
            </div>
        </div>
    );
};

export default V2PersonaSelection;
