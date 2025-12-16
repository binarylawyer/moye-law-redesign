import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { caregiverSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CaregiverValues = z.infer<typeof caregiverSchema>;

interface V2CaregiverFormProps {
    onSubmit: (data: CaregiverValues) => void;
    onBack: () => void;
}

const V2CaregiverForm: React.FC<V2CaregiverFormProps> = ({ onSubmit, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<CaregiverValues>({
        resolver: zodResolver(caregiverSchema),
        defaultValues: { needs: [] }
    });

    const needs = [
        { id: "medicaid", label: "Medicaid / Long Term Care" },
        { id: "guardianship", label: "Guardianship / Conservatorship" },
        { id: "poa", label: "Power of Attorney Status" },
        { id: "assets", label: "Asset Protection" }
    ];

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="mb-8">
                <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">Step 02: Assessment</span>
                <h2 className="font-display text-4xl text-navy mb-4">Care & Stewardship.</h2>
                <p className="font-sans text-gray-500">
                    Detail the situation regarding your loved one. We approach this with dignity and strategic foresight.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">

                {/* LOCATION */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Parent's Location</label>
                    <select
                        {...register('parent_location')}
                        className="w-full h-12 border-4 border-gray-100 bg-white px-4 font-sans text-navy focus:border-navy focus:outline-none"
                    >
                        <option value="">Select Situation...</option>
                        <option value="home">Their Own Home</option>
                        <option value="facility">Assisted Living / Nursing</option>
                        <option value="with_me">Living With Me</option>
                    </select>
                    {errors.parent_location && <span className="text-xs text-red-600 font-mono">{errors.parent_location.message}</span>}
                </div>

                {/* URGENCY */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Urgency Level</label>
                    <div className="flex gap-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" value="low" {...register('urgency_level')} className="text-navy" />
                            <span className="text-sm">Planning Ahead</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" value="high" {...register('urgency_level')} className="text-navy" />
                            <span className="text-sm text-red-700 font-bold">Imminent / Crisis</span>
                        </label>
                    </div>
                </div>

                {/* NEEDS */}
                <div className="space-y-4">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Specific Concerns</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {needs.map(c => (
                            <label key={c.id} className="flex items-center space-x-3 p-4 border-2 border-gray-100 hover:border-gold transition-colors cursor-pointer bg-white">
                                <input
                                    type="checkbox"
                                    value={c.id}
                                    {...register('needs')}
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
                        Confirm Assessment <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default V2CaregiverForm;
