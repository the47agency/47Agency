import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: '47 Agency is a strategy-led digital marketing and creative agency built around Strategy, Creative, Growth.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">About 47 Agency</span>
            <h1>Strategy · Creative · Growth</h1>
          </Reveal>
        </div>
      </section>

      <section className="about section-pad">
        <div className="wrap about-inner">
          <Reveal>
            <h2>A strategic and creative growth partner</h2>
          </Reveal>
          <Reveal delay={1} className="about-col">
            <p>
              47 Agency was built around one idea: marketing works when strategy, creative and execution move
              together instead of passing through separate teams. We plan the approach, build the assets, run
              the media and read the data — as one team, on one timeline.
            </p>
            <p>
              We think in outcomes before we think in channels. A campaign brief starts with the business
              problem, not the platform. That&apos;s what lets us move between paid media, social and brand
              work without losing the thread that connects them.
            </p>
            <p>
              We work with companies expanding across the MENA region and beyond, bringing a native
              understanding of regional audiences alongside a global standard of execution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="about-pillars">
            <div className="about-pillar">
              <div className="word">Strategy</div>
              <p>Every engagement starts with the business problem, not a channel or a platform.</p>
            </div>
            <div className="about-pillar">
              <div className="word">Creative</div>
              <p>Assets are built for where they&apos;ll live — designed to hold attention, not just look good.</p>
            </div>
            <div className="about-pillar">
              <div className="word">Growth</div>
              <p>Success is measured in outcomes — leads, conversations, sales — not impressions.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Let&apos;s talk about the work ahead</h2>
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
