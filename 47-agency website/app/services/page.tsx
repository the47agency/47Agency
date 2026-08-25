import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Digital marketing, social media management, creative & design, and brand building — run as one connected system by 47 Agency.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-pad">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">What We Do</span>
            <h1>Services built to run campaigns end to end</h1>
            <p>
              Every service exists to serve one outcome — growth that can be measured. No service is sold in
              isolation; each is planned as part of a single connected system.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="services section-pad">
        <div className="wrap">
          <div className="service-detail-list">
            {SERVICES.map((s, i) => (
              <Reveal as="section" key={s.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="service-detail">
                  <div>
                    <span className="idx">0{i + 1}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <div className="service-detail-body">
                    <p>{s.description}</p>
                    <div className="capability-list">
                      {s.caps.map((c) => (
                        <span className="cap-chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Let&apos;s scope the right mix of services</h2>
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
