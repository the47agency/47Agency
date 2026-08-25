export interface ServiceEntry {
  slug: string;
  title: string;
  summary: string;
  description: string;
  caps: string[];
}

export const SERVICES: ServiceEntry[] = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    summary:
      'Full-funnel performance marketing across the platforms your audience actually uses, planned around a single measurable objective.',
    description:
      'Digital Marketing is the core of what we run: campaigns planned against a business outcome first, then built out across paid channels. We set the strategy, structure the campaigns, and optimize toward the metric that actually matters — leads, conversations, or sales — rather than surface-level engagement.',
    caps: [
      'Meta Ads',
      'Google Ads',
      'TikTok Ads',
      'Campaign Strategy',
      'Performance Optimization',
      'Lead Generation',
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    summary:
      'Consistent, on-brand presence across social platforms — planned, produced and managed end to end.',
    description:
      'We manage the day-to-day of a brand\'s social presence: what gets posted, when, and why. Planning is grounded in the same strategy that drives paid campaigns, so organic and paid content reinforce each other instead of running as separate efforts.',
    caps: [
      'Content Planning',
      'Content Creation',
      'Publishing',
      'Community Management',
      'Platform Management',
    ],
  },
  {
    slug: 'creative-design',
    title: 'Creative & Design',
    summary:
      'Creative built to perform inside a feed, not just to look good in a deck — designed for the platform it lives on.',
    description:
      'Every asset is designed with its placement in mind — a Reel is not a shrunk-down banner ad. Our creative team works directly with strategy and media buying, so what gets produced is built to hold attention and drive the action a campaign needs.',
    caps: [
      'Social Media Design',
      'Advertising Creatives',
      'Visual Content',
      'Campaign Creative',
    ],
  },
  {
    slug: 'brand-building',
    title: 'Brand Building',
    summary:
      'A clear identity and digital presence that holds up across every channel and every touchpoint.',
    description:
      'Before performance marketing can scale, a brand needs a clear point of view — visually and in how it positions itself. We help define that identity and carry it consistently across a brand\'s digital presence, so every campaign builds equity rather than spending it.',
    caps: [
      'Brand Identity',
      'Visual Direction',
      'Brand Positioning',
      'Digital Presence',
    ],
  },
];
