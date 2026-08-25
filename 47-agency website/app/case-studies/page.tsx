import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CaseStudyList from '@/components/CaseStudyList';
import { getCaseStudies } from '@/lib/queries';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'The strategy, execution and results behind campaigns run by 47 Agency.',
};

export const revalidate = 60;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Case Studies</span>
            <h1>The story behind the results</h1>
            <p>Client, industry, challenge, strategy, execution and results — documented in full for every campaign we publish.</p>
          </Reveal>
        </div>
      </section>

      <section className="cases section-pad">
        <div className="wrap">
          <Reveal>
            <CaseStudyList caseStudies={caseStudies} />
          </Reveal>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Ready to build the next case study?</h2>
          </Reveal>
          <Reveal delay={1} className="cta-btns">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request a Proposal
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
