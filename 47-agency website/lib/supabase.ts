import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

/**
 * Returns a shared Supabase client using the public anon key.
 * Safe to call from Server Components, Client Components, and Route Handlers —
 * the anon key is designed to be public and all access is governed by
 * Row Level Security policies defined in supabase/schema.sql.
 *
 * Returns null when env vars are not configured yet, so the app can render
 * clean empty states instead of crashing before Supabase is connected.
 */
export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return client;
}

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
