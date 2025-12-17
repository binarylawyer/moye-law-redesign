"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Loader2 } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().optional(),
    projectScope: z.string().min(10, "Please provide a brief description (min 10 chars)"),
    assetValue: z.string().optional(),
    incentive: z.boolean(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface V2ContactInfoProps {
    onSubmit: (data: ContactFormData) => void;
    onBack: () => void;
    isLoading: boolean;
}

export const V2ContactInfo: React.FC<V2ContactInfoProps> = ({ onSubmit, onBack, isLoading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            projectScope: '',
            assetValue: 'undisclosed',
            incentive: true
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-navy">Finalize Transmission</h3>
                <p className="font-mono text-xs text-gray-500 mt-2">ENCRYPT_AND_SEND</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block font-mono text-xs font-bold text-navy mb-1">FULL_NAME</label>
                    <input {...register('name')} className="w-full border-2 border-gray-200 p-3 font-mono text-sm focus:border-navy focus:outline-none bg-gray-50" placeholder="Jane Doe" />
                    {errors.name && <p className="text-red-600 text-xs mt-1 font-mono">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block font-mono text-xs font-bold text-navy mb-1">COMM_LINK (EMAIL)</label>
                    <input {...register('email')} className="w-full border-2 border-gray-200 p-3 font-mono text-sm focus:border-navy focus:outline-none bg-gray-50" placeholder="jane@example.com" />
                    {errors.email && <p className="text-red-600 text-xs mt-1 font-mono">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block font-mono text-xs font-bold text-navy mb-1">PHONE (OPTIONAL)</label>
                    <input {...register('phone')} className="w-full border-2 border-gray-200 p-3 font-mono text-sm focus:border-navy focus:outline-none bg-gray-50" placeholder="+1 (555) 000-0000" />
                </div>

                {/* PROJECT SCOPE */}
                <div>
                    <label className="block font-mono text-xs font-bold text-navy mb-1">PROJECT_SCOPE</label>
                    <textarea
                        {...register('projectScope')}
                        className="w-full border-2 border-gray-200 p-3 font-mono text-sm focus:border-navy focus:outline-none bg-gray-50 h-24 resize-none"
                        placeholder="Briefly describe your legal needs or objectives..."
                    />
                    {errors.projectScope && <p className="text-red-600 text-xs mt-1 font-mono">{errors.projectScope.message}</p>}
                </div>

                {/* ASSET VALUE */}
                <div>
                    <label className="block font-mono text-xs font-bold text-navy mb-1">ESTIMATED_ASSET_VALUE</label>
                    <select {...register('assetValue')} className="w-full border-2 border-gray-200 p-3 font-mono text-sm focus:border-navy focus:outline-none bg-gray-50">
                        <option value="undisclosed">Prefer not to say</option>
                        <option value="<1M">Under $1M</option>
                        <option value="1M-5M">$1M - $5M</option>
                        <option value="5M-20M">$5M - $20M</option>
                        <option value="20M+">$20M+</option>
                    </select>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gold/10 border border-gold/20">
                    <input type="checkbox" {...register('incentive')} className="mt-1 w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy" />
                    <div>
                        <label className="font-bold text-sm text-navy block">Request "The Moye Standard" PDF?</label>
                        <p className="text-xs text-gray-600 mt-1">Receive our whitepaper on "5th Wave Legal Architecture" immediately via email.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <button type="button" onClick={onBack} className="px-6 py-3 border-2 border-gray-200 text-gray-500 hover:border-navy hover:text-navy font-mono text-xs transition-colors">
                    &lt; BACK
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-grow py-3 bg-navy text-white font-mono text-xs hover:bg-gold hover:text-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isLoading ? 'TRANSMITTING...' : 'INITIATE_CONTACT'}
                </button>
            </div>
        </form>
    );
};
