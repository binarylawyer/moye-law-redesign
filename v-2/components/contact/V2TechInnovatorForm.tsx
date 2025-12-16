import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { techInnovatorSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type TechInnovatorValues = z.infer<typeof techInnovatorSchema>;

interface V2TechInnovatorFormProps {
    onSubmit: (data: TechInnovatorValues) => void;
    onBack: () => void;
}

const V2TechInnovatorForm: React.FC<V2TechInnovatorFormProps> = ({ onSubmit, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TechInnovatorValues>({
        resolver: zodResolver(techInnovatorSchema),
        defaultValues: { concerns: [] } // Init array
    });

    const concerns = [
        { id: "intellectual-property", label: "Intellectual Property / Patents" },
        { id: "crypto", label: "Cryptocurrency / Digital Assets" },
        { id: "funding", label: "VC Funding & Term Sheets" },
        { id: "succession", label: "Founder Succession" }
    ];

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="mb-8">
                <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">Step 02: Specification</span>
                <h2 className="font-display text-4xl text-navy mb-4">Tech Venture Profile.</h2>
                <p className="font-sans text-gray-500">
                    Define the parameters of your innovation. We structure legal frameworks around these pillars.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">

                {/* STAGE */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Venture Stage</label>
                    <select
                        {...register('business_stage')}
                        className="w-full h-12 border-4 border-gray-100 bg-white px-4 font-sans text-navy focus:border-navy focus:outline-none"
                    >
                        <option value="">Select Stage...</option>
                        <option value="seed">Pre-Seed / Seed</option>
                        <option value="series-a">Series A+</option>
                        <option value="established">Established / Profitable</option>
                    </select>
                    {errors.business_stage && <span className="text-xs text-red-600 font-mono">{errors.business_stage.message}</span>}
                </div>

                {/* CONCERNS */}
                <div className="space-y-4">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Critical Vectors</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {concerns.map(c => (
                            <label key={c.id} className="flex items-center space-x-3 p-4 border-2 border-gray-100 hover:border-gold transition-colors cursor-pointer bg-white">
                                <input
                                    type="checkbox"
                                    value={c.id}
                                    {...register('concerns')}
                                    className="w-5 h-5 text-navy border-gray-300 focus:ring-navy rounded-none"
                                />
                                <span className="font-sans text-sm text-navy">{c.label}</span>
                            </label>
                        ))}
                    </div>
                    {errors.concerns && <span className="text-xs text-red-600 font-mono">{errors.concerns.message}</span>}
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
                        Confirm Protocol <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default V2TechInnovatorForm;
