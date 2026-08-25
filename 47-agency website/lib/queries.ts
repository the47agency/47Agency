import { getSupabase } from './supabase';
import type {
  Project,
  CaseStudy,
  Client,
  CampaignResult,
  Testimonial,
} from './types';

/**
 * Every function here degrades to an empty array/null when Supabase is not
 * configured yet, or when a query fails — so the site always renders a
 * clean, honest empty state instead of a crash or fake data.
 */

export async function getProjects(limit?: number): Promise<Project[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  let query = supabase
    .from('projects')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) {
    console.error('getProjects error:', error.message);
    return [];
  }
  return (data as Project[]) ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error) {
    console.error('getProjectBySlug error:', error.message);
    return null;
  }
  return (data as Project) ?? null;
}

export async function getCaseStudies(limit?: number): Promise<CaseStudy[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  let query = supabase
    .from('case_studies')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) {
    console.error('getCaseStudies error:', error.message);
    return [];
  }
  return (data as CaseStudy[]) ?? [];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error) {
    console.error('getCaseStudyBySlug error:', error.message);
    return null;
  }
  return (data as CaseStudy) ?? null;
}

export async function getClients(): Promise<Client[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.error('getClients error:', error.message);
    return [];
  }
  return (data as Client[]) ?? [];
}

export async function getCampaignResults(): Promise<CampaignResult[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('campaign_results')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.error('getCampaignResults error:', error.message);
    return [];
  }
  return (data as CampaignResult[]) ?? [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  if (error) {
    console.error('getTestimonials error:', error.message);
    return [];
  }
  return (data as Testimonial[]) ?? [];
}
