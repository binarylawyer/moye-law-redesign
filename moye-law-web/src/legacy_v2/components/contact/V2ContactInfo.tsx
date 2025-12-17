import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactInfoSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import { Loader2, ArrowLeft, ArrowRight, Lock } from 'lucide-react';

type ContactInfoValues = z.infer<typeof contactInfoSchema>;

interface V2ContactInfoProps {
    onSubmit: (data: ContactInfoValues) => void;
    onBack: () => void;
    isSubmitting: boolean;
}

const V2ContactInfo: React.FC<V2ContactInfoProps> = ({ onSubmit, onBack, isSubmitting }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactInfoValues>({
        resolver: zodResolver(contactInfoSchema)
    });

    return (
        <div className="animate-in slide-in-from-right duration-500">
            <div className="mb-8">
                <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-2">Step 03: Connection</span>
                <h2 className="font-display text-4xl text-navy mb-4">Secure Channel Input.</h2>
                <p className="font-sans text-gray-500">
                    Provide your contact coordinates. This data is encrypted and sent directly to our secure vault.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl bg-white border-2 border-gray-100 p-8 shadow-xl">

                {/* NAME */}
                <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Full Designation (Name)</label>
                    <input
                        {...register('name')}
                        className="w-full h-12 border-2 border-gray-200 bg-gray-50 px-4 font-sans text-navy focus:border-gold focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-600 font-mono">{errors.name.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* EMAIL */}
                    <div className="space-y-2">
                        <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Digital Relay (Email)</label>
                        <input
                            {...register('email')}
                            type="email"
                            className="w-full h-12 border-2 border-gray-200 bg-gray-50 px-4 font-sans text-navy focus:border-gold focus:outline-none transition-colors"
                            placeholder="user@example.com"
                        />
                        {errors.email && <span className="text-xs text-red-600 font-mono">{errors.email.message}</span>}
                    </div>

                    {/* PHONE */}
                    <div className="space-y-2">
                        <label className="font-mono text-xs font-bold text-navy uppercase tracking-widest">Voice Line (Phone)</label>
                        <input
                            {...register('phone')}
                            type="tel"
                            className="w-full h-12 border-2 border-gray-200 bg-gray-50 px-4 font-sans text-navy focus:border-gold focus:outline-none transition-colors"
                            placeholder="(555) 000-0000"
                        />
                        {errors.phone && <span className="text-xs text-red-600 font-mono">{errors.phone.message}</span>}
                    </div>
                </div>

                {/* INCENTIVE */}
                <div className="flex items-start space-x-4 p-4 border border-gold/30 bg-gold/5">
                    <input
                        type="checkbox"
                        {...register('incentive_requested')}
                        className="mt-1 w-4 h-4 text-navy border-gray-300 focus:ring-navy"
                    />
                    <div>
                        <label className="font-bold text-navy text-sm">Request "The Moye Legacy Guide"</label>
                        <p className="text-xs text-gray-600 mt-1">Receive our comprehensive physical dossier on wealth preservation.</p>
                    </div>
                </div>

                {/* SUBMIT */}
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
                        disabled={isSubmitting}
                        className="bg-navy text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-gold transition-colors flex items-center disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <>Processing <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                        ) : (
                            <>Transmit Data <Lock className="w-4 h-4 ml-2" /></>
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default V2ContactInfo;
