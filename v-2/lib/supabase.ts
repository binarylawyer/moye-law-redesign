import { createClient } from '@supabase/supabase-js';

// Access Environment Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// WARN: Client-side validation to prevent runtime crash if keys missing
// In production, these should be strictly enforced.
if (!supabaseUrl || !supabaseAnonKey) {
    console.error("CRITICAL: Supabase keys missing in environment variables. Check .env file.");
}

// Create single Supabase client for interaction with the database
export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
);

// Type definition for form submissions
export interface ContactSubmission {
    id?: string;
    created_at?: string;
    persona: string;
    incentive_requested: boolean;
    contact_info: Record<string, any>;
    form_data: Record<string, any>; // The variable step data
    metadata: Record<string, any>;
    status: 'new' | 'processed' | 'archived';
}
