export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string | null;
  category: string | null;
  description: string | null;
  services: string[] | null;
  cover_image: string | null;
  gallery: string[] | null;
  results: string | null;
  external_url: string | null;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface CampaignMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string | null;
  industry: string | null;
  challenge: string | null;
  strategy: string | null;
  execution: string | null;
  results: string | null;
  images: string[] | null;
  campaign_metrics: CampaignMetric[] | null;
  published: boolean;
  sort_order: number;
  created_at: string;
}

export interface Client {
  id: string;
  name: string;
  logo_url: string | null;
  sort_order: number;
  published: boolean;
  created_at: string;
}

export interface CampaignResult {
  id: string;
  campaign_name: string | null;
  metric_label: string;
  metric_value: number;
  prefix: string | null;
  suffix: string | null;
  decimals: number;
  sort_order: number;
  published: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  author_name: string;
  author_role: string | null;
  company: string | null;
  quote: string;
  published: boolean;
  created_at: string;
}

export interface ContactRequestInput {
  name: string;
  company: string;
  email: string;
  website: string | null;
  target_market: string;
  budget: string | null;
  services_needed: string[];
  project_details: string;
  preferred_contact_method: string;
}
