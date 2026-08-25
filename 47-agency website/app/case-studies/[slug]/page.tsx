import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/queries';

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return {
    title: cs.title,
    description: cs.results ?? `${cs.title} — a case study by 47 Agency.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal className="case-editorial-head">
            {cs.industry && <span className="tag">{cs.industry}</span>}
            <h1>{cs.title}</h1>
          </Reveal>

          <Reveal delay={1} className="case-meta-row">
            {cs.client && (
              <div className="project-meta-item">
                <div className="label">Client</div>
                <div className="value">{cs.client}</div>
              </div>
            )}
            {cs.industry && (
              <div className="project-meta-item">
                <div className="label">Industry</div>
                <div className="value">{cs.industry}</div>
              </div>
            )}
          </Reveal>

          {cs.challenge && (
            <Reveal delay={2} className="case-editorial-section">
              <div className="label">Challenge</div>
              <p>{cs.challenge}</p>
            </Reveal>
          )}

          {cs.strategy && (
            <Reveal delay={3} className="case-editorial-section">
              <div className="label">Strategy</div>
              <p>{cs.strategy}</p>
            </Reveal>
          )}

          {cs.execution && (
            <Reveal delay={4} className="case-editorial-section">
              <div className="label">Execution</div>
              <p>{cs.execution}</p>
            </Reveal>
          )}

          {cs.campaign_metrics && cs.campaign_metrics.length > 0 && (
            <Reveal className="case-metrics-grid">
              {cs.campaign_metrics.map((m, i) => (
                <div className="case-metric-cell" key={m.label + i}>
                  <span className="num">{m.value}</span>
                  <div className="lbl">{m.label}</div>
                </div>
              ))}
            </Reveal>
          )}

          {cs.results && (
            <Reveal className="case-editorial-section">
              <div className="label">Results</div>
              <p>{cs.results}</p>
            </Reveal>
          )}

          {cs.images && cs.images.length > 0 && (
            <Reveal className="case-image-grid">
              {cs.images.map((src, i) => (
                <Image key={src + i} src={src} alt={`${cs.title} — image ${i + 1}`} width={640} height={480} />
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Want results like this?</h2>
          </Reveal>
          <Reveal delay={1} className="cta-btns">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/case-studies" className="btn btn-ghost">
              Back to Case Studies
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
