import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn("WARNING: Supabase keys missing. Using placeholder for build.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ContactSubmission {
    id?: string;
    persona: 'Tech Innovator' | 'Family Steward' | 'Legacy Architect';
    status: 'new' | 'reviewing' | 'archived';
    incentive_requested: boolean;
    contact_data: {
        name: string;
        email: string;
        phone?: string;
    };
    form_data: any; // The variable answers
    metadata: {
        userAgent: string;
        timestamp: string;
        referral?: string;
    };
}
