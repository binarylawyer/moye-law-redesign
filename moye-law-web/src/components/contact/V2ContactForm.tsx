"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { V2PersonaSelection } from './V2PersonaSelection';
import { V2ContactInfo } from './V2ContactInfo';
import { motion, AnimatePresence } from 'framer-motion';

export default function V2ContactForm() {
    const [step, setStep] = useState<number>(0);
    const [persona, setPersona] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handlePersonaSelect = (p: string) => {
        setPersona(p);
        setStep(1); // Usually goes to specific form, skipping directly to contact info for MVP speed
        // Actually, let's keep it simple: Persona -> Contact Info. 
        // We can add the intermediate "Tech Form" later if critical.
        // User said "focus on home and contact page".
    };

    const handleFinalSubmit = async (data: any) => {
        setIsLoading(true);
        console.log("Submitting:", { persona, ...data });

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert({
                    persona: persona,
                    contact_data: {
                        name: data.name,
                        email: data.email,
                        phone: data.phone
                    },
                    incentive_requested: data.incentive,
                    status: 'new',
                    metadata: {
                        userAgent: navigator.userAgent,
                        timestamp: new Date().toISOString()
                    }
                });

            if (error) throw error;
            setSuccess(true);
        } catch (err: any) {
            console.error('Submission Error:', err);
            alert('Transmission Failed: ' + (err.message || "Unknown Error")); // Replace with UI error later
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center p-12 bg-emerald-50 border-emerald-100 border">
                <h3 className="font-display text-3xl text-emerald-800 mb-4">Transmission Received.</h3>
                <p className="font-sans text-emerald-600 mb-8">
                    Your data packet has been successfully logged in our secure vault.
                    A legal architect will analyze your parameters and respond shortly.
                </p>
                <button onClick={() => window.location.reload()} className="text-emerald-700 underline font-mono text-xs">
                    RESET_TERMINAL
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 border-4 border-navy shadow-[12px_12px_0px_0px_#0A2342] relative">
            {/* Steps Progress */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <div
                    className="h-full bg-gold transition-all duration-300"
                    style={{ width: `${((step + 1) / 2) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        <V2PersonaSelection onSelect={(p: any) => handlePersonaSelect(p)} />
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                    >
                        {/* We skip the specific sub-forms for this MVP iteration and go straight to contact capture */}
                        <V2ContactInfo
                            onSubmit={handleFinalSubmit}
                            onBack={() => setStep(0)}
                            isLoading={isLoading}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
