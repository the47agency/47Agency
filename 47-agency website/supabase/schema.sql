-- ============================================================
-- 47 Agency — Production Database Schema
-- Run this once in the Supabase SQL editor (or via the CLI:
-- supabase db push) against your project.
--
-- Design notes:
-- - Every content table has a `published` boolean. Only published
--   rows are readable by the public (anon) role. This lets content
--   be drafted and reviewed before it goes live, and is the hook
--   a future internal admin dashboard would use.
-- - `contact_requests` has NO public read policy at all — the
--   public can insert an inquiry but never read inquiries back.
--   Reading them requires the Supabase service role key (server-side
--   admin tooling only, never exposed to the browser).
-- - RLS is enabled on every table. Nothing is readable or writable
--   by default; each policy below is an explicit exception.
-- ============================================================

create extension if not exists "pgcrypto";

-- ============================================================
-- PROJECTS  (Work section / /work / /work/[slug])
-- ============================================================
create table if not exists public.projects (
  id             uuid primary key default gen_random_uuid(),
  slug           text unique not null,
  title          text not null,
  client         text,
  category       text,
  description    text,
  services       text[] default '{}',
  cover_image    text,
  gallery        text[] default '{}',
  results        text,
  external_url   text,
  published      boolean not null default false,
  sort_order     integer not null default 0,
  created_at     timestamptz not null default now()
);

create index if not exists projects_published_idx on public.projects (published, sort_order);
create index if not exists projects_slug_idx on public.projects (slug);

alter table public.projects enable row level security;

create policy "Public can read published projects"
  on public.projects
  for select
  to anon, authenticated
  using (published = true);

-- ============================================================
-- CASE STUDIES  (Case Studies section / /case-studies / [slug])
-- ============================================================
create table if not exists public.case_studies (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,
  title            text not null,
  client           text,
  industry         text,
  challenge        text,
  strategy         text,
  execution        text,
  results          text,
  images           text[] default '{}',
  campaign_metrics jsonb default '[]'::jsonb,  -- [{ "label": "...", "value": "..." }]
  published        boolean not null default false,
  sort_order       integer not null default 0,
  created_at       timestamptz not null default now()
);

create index if not exists case_studies_published_idx on public.case_studies (published, sort_order);
create index if not exists case_studies_slug_idx on public.case_studies (slug);

alter table public.case_studies enable row level security;

create policy "Public can read published case studies"
  on public.case_studies
  for select
  to anon, authenticated
  using (published = true);

-- ============================================================
-- CLIENTS  (Trusted By section)
-- ============================================================
create table if not exists public.clients (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  logo_url    text,
  sort_order  integer not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

create index if not exists clients_published_idx on public.clients (published, sort_order);

alter table public.clients enable row level security;

create policy "Public can read published clients"
  on public.clients
  for select
  to anon, authenticated
  using (published = true);

-- ============================================================
-- CAMPAIGN RESULTS  (Results section — animated counters)
-- ============================================================
create table if not exists public.campaign_results (
  id            uuid primary key default gen_random_uuid(),
  campaign_name text,
  metric_label  text not null,
  metric_value  numeric not null,
  prefix        text default '',
  suffix        text default '',
  decimals      integer not null default 0,
  sort_order    integer not null default 0,
  published     boolean not null default true,
  created_at    timestamptz not null default now()
);

create index if not exists campaign_results_published_idx on public.campaign_results (published, sort_order);

alter table public.campaign_results enable row level security;

create policy "Public can read published campaign results"
  on public.campaign_results
  for select
  to anon, authenticated
  using (published = true);

-- ============================================================
-- TESTIMONIALS
-- ============================================================
create table if not exists public.testimonials (
  id           uuid primary key default gen_random_uuid(),
  author_name  text not null,
  author_role  text,
  company      text,
  quote        text not null,
  published    boolean not null default false,
  created_at   timestamptz not null default now()
);

create index if not exists testimonials_published_idx on public.testimonials (published, created_at);

alter table public.testimonials enable row level security;

create policy "Public can read published testimonials"
  on public.testimonials
  for select
  to anon, authenticated
  using (published = true);

-- ============================================================
-- CONTACT REQUESTS  (Contact form submissions — write-only for the public)
-- ============================================================
create table if not exists public.contact_requests (
  id                       uuid primary key default gen_random_uuid(),
  name                     text not null,
  company                  text not null,
  email                    text not null,
  website                  text,
  target_market            text not null,
  budget                   text,
  services_needed          text[] not null default '{}',
  project_details          text not null,
  preferred_contact_method text,
  status                   text not null default 'new', -- new | contacted | closed (for future admin use)
  created_at               timestamptz not null default now()
);

create index if not exists contact_requests_created_idx on public.contact_requests (created_at desc);

alter table public.contact_requests enable row level security;

-- The public may submit an inquiry, but can never read, update or delete
-- inquiries — including their own, once submitted. No select/update/delete
-- policy exists for anon/authenticated on this table by design.
create policy "Public can submit a contact request"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (
    length(trim(name)) > 0
    and length(trim(company)) > 0
    and length(trim(email)) > 0
    and length(trim(target_market)) > 0
    and length(trim(project_details)) > 0
    and array_length(services_needed, 1) > 0
  );

-- ============================================================
-- Future admin access
-- A staff dashboard should use the Supabase service role key on the
-- server only (never in the browser). The service role bypasses RLS
-- entirely, so it can list/update/delete contact_requests and manage
-- draft (published = false) content without any additional policies.
-- ============================================================
