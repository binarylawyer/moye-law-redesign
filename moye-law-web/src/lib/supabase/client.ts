import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error("CRITICAL: Supabase keys missing.");
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
