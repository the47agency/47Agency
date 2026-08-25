# 47 Agency — Website

Production Next.js 14 (App Router + TypeScript) build for the 47 Agency website, connected to Supabase.

## Getting started

```bash
npm install
cp .env.local.example .env.local
# then fill in your Supabase project URL + anon key in .env.local
npm run dev
```

Open http://localhost:3000

## Connect Supabase

1. Create a project at https://supabase.com
2. In the SQL Editor, run the contents of `supabase/schema.sql` — this creates all six tables
   (`projects`, `case_studies`, `clients`, `campaign_results`, `testimonials`, `contact_requests`)
   with Row Level Security policies already applied.
3. In Project Settings → API, copy your **Project URL** and **anon public key** into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```
4. Restart `npm run dev`. The contact form will now insert real rows into `contact_requests`,
   and Work / Case Studies / Clients / Results / Testimonials will render from the database
   instead of showing empty states.

Until Supabase is connected, the site still runs and builds — every section just shows an
honest empty state instead of fake content.

## Adding content

Every content table has a `published` boolean — a row only appears on the live site once
`published = true`. This is the hook a future internal admin dashboard would use (via the
Supabase **service role key**, server-side only, which bypasses RLS).

For now, add rows directly in the Supabase Table Editor. `slug` fields must be unique,
lowercase, and hyphenated (e.g. `acme-lead-gen-campaign`) — they're used in the URL:
`/work/acme-lead-gen-campaign`, `/case-studies/acme-lead-gen-campaign`.

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Homepage — primary conversion page
  services/page.tsx      /services
  work/page.tsx           /work
  work/[slug]/page.tsx     /work/[slug]
  case-studies/page.tsx    /case-studies
  case-studies/[slug]/     /case-studies/[slug]
  about/page.tsx           /about
  contact/page.tsx         /contact
  layout.tsx             Root layout — fonts, header, footer, metadata
  template.tsx           Page transition wrapper
  globals.css            Full design system (tokens, components, sections)
  sitemap.ts / robots.ts SEO
components/             Reusable UI (Header, Footer, ContactForm, ResultsGrid, etc.)
lib/
  supabase.ts           Shared Supabase client (anon key)
  queries.ts            All data-fetching functions (fail gracefully to empty states)
  types.ts              TypeScript types matching the DB schema
  data/                 Static content (services copy, process steps — not in Supabase)
supabase/schema.sql     Full SQL schema + RLS policies
```

## Design system

Colors, type, spacing and animation live in `app/globals.css` as CSS custom properties —
no Tailwind, no CSS-in-JS. Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded via a
standard Google Fonts `<link>` in `app/layout.tsx`.

## Notes

- No public login/auth exists by design. An internal admin dashboard can be added later
  using the Supabase service role key server-side.
- `contact_requests` has no public read policy — submissions can be inserted but never
  read back by the public site, only by an authenticated admin tool using the service key.
