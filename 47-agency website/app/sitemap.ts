import type { MetadataRoute } from 'next';
import { getProjects, getCaseStudies } from '@/lib/queries';

const siteUrl = 'https://www.47agency.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, caseStudies] = await Promise.all([getProjects(), getCaseStudies()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/work`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/case-studies`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: p.created_at,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteUrl}/case-studies/${cs.slug}`,
    lastModified: cs.created_at,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...caseStudyRoutes];
}
