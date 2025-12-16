import React, { useState } from 'react';
import { supabase, ContactSubmission } from '../../lib/supabase';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Check, AlertTriangle, Loader2 } from 'lucide-react';

// Import Types and Validation (We use the legacy schemas for now, or redefine them?)
// We will redefine minimal types here for the V2 Engine to be self-contained or import legacy schemas if robust.
// Importing legacy schemas is better for DRY.
import { techInnovatorSchema, caregiverSchema, legacyBuilderSchema, contactInfoSchema } from '@/utils/validationSchemas';

// Import Components (We will create these next)
import V2PersonaSelection from './V2PersonaSelection';
import V2TechInnovatorForm from './V2TechInnovatorForm';
import V2CaregiverForm from './V2CaregiverForm';
import V2LegacyBuilderForm from './V2LegacyBuilderForm';
import V2ContactInfo from './V2ContactInfo';

/*
 * V2 CONTACT LOGIC ENGINE
 * Purpose: Manages the 'Input Stream' lifecycle: Persona -> Data -> Contact -> Supabase.
 * Design: Kinetic Structuralism (Navy/Gold/Red).
 */

const V2ContactForm = () => {
    // STATE MACHINE
    const [step, setStep] = useState<number>(1);
    const [persona, setPersona] = useState<string | null>(null);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // STEP 1: PERSONA
    const handlePersonaSelect = (selectedPersona: string) => {
        setPersona(selectedPersona);
        setStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // STEP 2: DETAIL DATA
    const handleDetailSubmit = (data: any) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // STEP 3: CONTACT & SUBMIT (SUPABASE)
    const handleContactSubmit = async (contactData: any) => {
        setIsSubmitting(true);
        setError(null);

        try {
            // 1. Construct Payload
            const submission: ContactSubmission = {
                persona: persona || 'Unknown',
                incentive_requested: contactData.incentive_requested || false,
                contact_info: contactData,
                form_data: formData,
                metadata: {
                    source: 'V2_TERMINAL',
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                },
                status: 'new'
            };

            // 2. Submit to Supabase
            const { data, error: supabaseError } = await supabase
                .from('contact_submissions')
                .insert([submission])
                .select();

            if (supabaseError) throw supabaseError;

            // 3. Success
            setCompleted(true);
            setStep(4);
            toast({
                title: "Input Stream Received",
                description: "Your data has been secured in our vault.",
            });

        } catch (err: any) {
            console.error("Supabase Error:", err);
            setError(err.message || "Transmission Failed");
            toast({
                title: "Transmission Error",
                description: err.message || "Could not connect to the secure vault.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // RENDER LOGIC
    if (completed) {
        return (
            <div className="bg-white border-4 border-gold p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-16 h-16 bg-navy text-gold mx-auto flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" />
                </div>
                <h2 className="font-display text-4xl text-navy mb-4">Transmission Secured.</h2>
                <p className="font-sans text-gray-600 mb-8 max-w-md mx-auto">
                    We have received your kinetic profile. A strategic advisor will analyze your data and open a communication channel shortly.
                </p>
                <div className="font-mono text-xs text-gray-400 uppercase tracking-widest border-t border-gray-200 pt-4">
                    REF_ID: {new Date().getTime().toString(36).toUpperCase()}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* PROGRESS BAR */}
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-100 pb-4">
                <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${step >= 1 ? 'bg-navy' : 'bg-gray-200'}`}></div>
                    <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-navy' : 'bg-gray-200'}`}></div>
                    <div className={`w-3 h-3 ${step >= 2 ? 'bg-navy' : 'bg-gray-200'}`}></div>
                    <div className={`w-16 h-0.5 ${step >= 3 ? 'bg-navy' : 'bg-gray-200'}`}></div>
                    <div className={`w-3 h-3 ${step >= 3 ? 'bg-navy' : 'bg-gray-200'}`}></div>
                </div>
                <div className="font-mono text-xs text-navy uppercase tracking-widest">
                    Step 0{step} / 03
                </div>
            </div>

            {/* ERROR DISPLAY */}
            {error && (
                <div className="bg-red-50 border-l-4 border-venetian-red p-4 mb-8 flex items-start gap-4">
                    <AlertTriangle className="text-venetian-red w-5 h-5 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-navy text-sm">System Alert</h4>
                        <p className="text-xs text-red-700 font-mono">{error}</p>
                    </div>
                </div>
            )}

            {/* STEP RENDERER */}
            <div className="min-h-[400px]">
                {step === 1 && (
                    <V2PersonaSelection onSelect={handlePersonaSelect} />
                )}

                {step === 2 && persona === "Protect My Startup's Future" && (
                    <V2TechInnovatorForm onSubmit={handleDetailSubmit} onBack={() => setStep(1)} />
                )}
                {step === 2 && persona === "Plan Care for My Aging Parent" && (
                    <V2CaregiverForm onSubmit={handleDetailSubmit} onBack={() => setStep(1)} />
                )}
                {step === 2 && (persona === "Build a Lasting Legacy" || !['Protect My Startup\'s Future', 'Plan Care for My Aging Parent'].includes(persona || '')) && (
                    <V2LegacyBuilderForm onSubmit={handleDetailSubmit} onBack={() => setStep(1)} />
                )}

                {step === 3 && (
                    <V2ContactInfo onSubmit={handleContactSubmit} onBack={() => setStep(2)} isSubmitting={isSubmitting} />
                )}
            </div>
        </div>
    );
};

export default V2ContactForm;
