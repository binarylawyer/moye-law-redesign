import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { legacyBuilderSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type LegacyBuilderValues = z.infer<typeof legacyBuilderSchema>;

interface V2LegacyBuilderFormProps {
    onSubmit: (data: LegacyBuilderValues) => void;
    onBack: () => void;
}

const V2LegacyBuilderForm: React.FC<V2LegacyBuilderFormProps> = ({ onSubmit, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LegacyBuilderValues>({
        resolver: zodResolver(legacyBuilderSchema),
        defaultValues: { assets: [] }
    });

    const assets = [
        { id: "real_estate", label: "Real Estate Holdings" },
        { id: "business", label: "Business Interests" },
        { id: "crypto", label: "Digital Assets" },
        { id: "investments", label: "Market Portfolios" }
    ];

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="mb-8">
                <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">Step 02: Architecture</span>
                <h2 className="font-display text-4xl text-navy mb-4">Legacy Blueprint.</h2>
                <p className="font-sans text-gray-500">
                    Outline the assets you wish to secure. We build the fortress around these pillars.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">

                {/* COMPLEXITY */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Estate Complexity</label>
                    <select
                        {...register('estate_complexity')}
                        className="w-full h-12 border-4 border-gray-100 bg-white px-4 font-sans text-navy focus:border-navy focus:outline-none"
                    >
                        <option value="">Select Level...</option>
                        <option value="simple">Simple (Single State, Liquid Assets)</option>
                        <option value="moderate">Moderate (Business or Multi-Property)</option>
                        <option value="complex">Complex (Trusts, Tax Planning)</option>
                    </select>
                    {errors.estate_complexity && <span className="text-xs text-red-600 font-mono">{errors.estate_complexity.message}</span>}
                </div>

                {/* ASSETS */}
                <div className="space-y-4">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Asset Classes</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {assets.map(c => (
                            <label key={c.id} className="flex items-center space-x-3 p-4 border-2 border-gray-100 hover:border-gold transition-colors cursor-pointer bg-white">
                                <input
                                    type="checkbox"
                                    value={c.id}
                                    {...register('assets')}
                                    className="w-5 h-5 text-navy border-gray-300 focus:ring-navy rounded-none"
                                />
                                <span className="font-sans text-sm text-navy">{c.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-gray-400 hover:text-navy font-mono text-xs uppercase tracking-widest flex items-center"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </button>

                    <button
                        type="submit"
                        className="bg-navy text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-gold transition-colors flex items-center"
                    >
                        Draft Blueprint <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default V2LegacyBuilderForm;
