import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WorkGrid from '@/components/WorkGrid';
import { getProjects } from '@/lib/queries';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects built by 47 Agency across digital marketing, social and creative.',
};

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Selected Work</span>
            <h1>Projects we&apos;ve built</h1>
            <p>A running record of the campaigns, platforms and brands we&apos;ve worked on.</p>
          </Reveal>
        </div>
      </section>

      <section className="work section-pad">
        <div className="wrap">
          <Reveal>
            <WorkGrid projects={projects} />
          </Reveal>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Want to be the next project here?</h2>
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
