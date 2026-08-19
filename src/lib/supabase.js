import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Helper to check if valid Supabase configuration is present
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.trim().startsWith('http') &&
  !supabaseUrl.includes('your-supabase-project-id') &&
  !supabaseAnonKey.includes('your_supabase_anon_public_key') &&
  !supabaseAnonKey.includes('your_supabase_anon_publishable_key')
);

// Export Supabase client singleton if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl.trim(), supabaseAnonKey.trim())
  : null;
