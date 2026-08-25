import Link from 'next/link';
import HeroCanvas from '@/components/HeroCanvas';
import ServicesAccordion from '@/components/ServicesAccordion';
import WorkGrid from '@/components/WorkGrid';
import CaseStudyList from '@/components/CaseStudyList';
import ResultsGrid from '@/components/ResultsGrid';
import ProcessSection from '@/components/ProcessSection';
import ClientsGrid from '@/components/ClientsGrid';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data/services';
import {
  getProjects,
  getCaseStudies,
  getClients,
  getCampaignResults,
  getTestimonials,
} from '@/lib/queries';

export default async function HomePage() {
  const [projects, caseStudies, clients, results, testimonials] = await Promise.all([
    getProjects(4),
    getCaseStudies(2),
    getClients(),
    getCampaignResults(),
    getTestimonials(),
  ]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-grid"></div>
        <HeroCanvas />
        <div className="wrap hero-inner">
          <div className="hero-content">
            <span className="eyebrow reveal in">Strategy · Creative · Growth</span>
            <h1 className="reveal in reveal-d1">
              Digital marketing that <span className="accent">moves markets.</span>
            </h1>
            <p className="hero-sub reveal in reveal-d2">
              47 Agency plans, builds and scales campaigns for growth-focused brands across the MENA region
              and beyond — paid media, social and creative, run as one connected system.
            </p>
            <div className="hero-ctas reveal in reveal-d3">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/work" className="btn btn-ghost">
                View Our Work
              </Link>
            </div>
            <div className="hero-stats reveal in reveal-d4">
              <div className="hero-stat">
                <span className="num">1.79%</span>
                <span className="lbl">Campaign CTR</span>
              </div>
              <div className="hero-stat">
                <span className="num">$0.08</span>
                <span className="lbl">Cost per click</span>
              </div>
              <div className="hero-stat">
                <span className="num">MENA</span>
                <span className="lbl">Market focus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span className="line"></span>Scroll
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="intro section-pad">
        <div className="wrap intro-inner">
          <Reveal>
            <span className="eyebrow">About 47</span>
            <p className="brand-line">Strategy · Creative · Growth</p>
          </Reveal>
          <Reveal delay={1}>
            <h2>Three disciplines. One outcome.</h2>
            <p style={{ marginTop: 22 }}>
              47 Agency combines strategic planning, creative production and performance marketing under one
              roof. We don&apos;t hand campaigns between departments — we run them as a single connected
              system, from first insight to last dollar spent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services section-pad" id="services">
        <div className="wrap">
          <Reveal className="services-head">
            <span className="eyebrow on-light">What We Do</span>
            <h2>Built to run campaigns end to end</h2>
          </Reveal>
          <Reveal delay={1}>
            <ServicesAccordion services={SERVICES} />
          </Reveal>
          <div style={{ marginTop: 48 }}>
            <Link href="/services" className="btn btn-dark">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY 47 ============ */}
      <section className="why section-pad">
        <div className="wrap">
          <Reveal className="why-head">
            <span className="eyebrow">Why 47</span>
            <h2>A different way to run marketing</h2>
          </Reveal>
          <Reveal delay={1} className="why-grid">
            <div className="why-card">
              <span className="idx">01</span>
              <h3>Strategy before execution</h3>
              <p>Every campaign starts with a plan, not a template. We understand the objective before we touch a single ad.</p>
            </div>
            <div className="why-card">
              <span className="idx">02</span>
              <h3>Creative that serves the goal</h3>
              <p>Design and copy are built to perform, not just to look good in a portfolio.</p>
            </div>
            <div className="why-card">
              <span className="idx">03</span>
              <h3>Performance, measured properly</h3>
              <p>We track outcomes — conversations, leads, sales — not vanity impressions.</p>
            </div>
            <div className="why-card">
              <span className="idx">04</span>
              <h3>Native to the MENA market</h3>
              <p>We understand regional audiences, platforms and buying behavior, without limiting our thinking to one market.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section className="work section-pad" id="work">
        <div className="wrap">
          <Reveal className="work-head">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2>Projects we&apos;ve built</h2>
            </div>
            <Link href="/work" className="btn btn-ghost">
              View All Work
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <WorkGrid projects={projects} />
          </Reveal>
        </div>
      </section>

      {/* ============ CASE STUDIES ============ */}
      <section className="cases section-pad" id="case-studies">
        <div className="wrap">
          <Reveal className="cases-head">
            <span className="eyebrow on-light">Case Studies</span>
            <h2>The story behind the results</h2>
          </Reveal>
          <Reveal delay={1}>
            <CaseStudyList caseStudies={caseStudies} />
          </Reveal>
          <div style={{ marginTop: 40 }}>
            <Link href="/case-studies" className="btn btn-dark">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ============ RESULTS ============ */}
      <section className="results section-pad">
        <div className="wrap">
          <Reveal className="results-head">
            <span className="eyebrow">Campaign Results</span>
            <h2>Numbers from a real campaign</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="results-note">
              Results from a lead-generation campaign run for a client in the MENA region. Figures are
              specific to this campaign, not agency-wide averages.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <ResultsGrid results={results} />
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="process section-pad">
        <div className="wrap">
          <Reveal className="process-head">
            <span className="eyebrow">How We Work</span>
            <h2>A five-stage system</h2>
          </Reveal>
          <ProcessSection />
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="clients section-pad">
        <div className="wrap">
          <Reveal className="clients-head">
            <span className="eyebrow on-light">Trusted By</span>
            <h2>Selected partners</h2>
          </Reveal>
          <Reveal delay={1}>
            <ClientsGrid clients={clients} />
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS (hidden until real content exists) ============ */}
      <Testimonials testimonials={testimonials} />

      {/* ============ CTA ============ */}
      <section className="cta-section section-pad">
        <div className="wrap">
          <Reveal as="section">
            <h2>Have a project in mind?</h2>
          </Reveal>
          <Reveal delay={1} as="section">
            <p>Tell us where the business is today and where it needs to go. We&apos;ll tell you how to get there.</p>
          </Reveal>
          <Reveal delay={2} className="cta-btns">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request a Proposal
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT (condensed — full page at /about) ============ */}
      <section className="about section-pad" id="about">
        <div className="wrap about-inner">
          <Reveal>
            <span className="eyebrow on-light">About 47 Agency</span>
            <h2>A strategic and creative growth partner</h2>
          </Reveal>
          <Reveal delay={1} className="about-col">
            <p>
              47 Agency was built around one idea: marketing works when strategy, creative and execution move
              together instead of passing through separate teams. We plan the approach, build the assets, run
              the media and read the data — as one team, on one timeline.
            </p>
            <p>
              We work with companies expanding across the MENA region and beyond, bringing a native
              understanding of regional audiences alongside a global standard of execution.
            </p>
            <Link href="/about" className="btn btn-dark" style={{ marginTop: 8 }}>
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact section-pad" id="contact">
        <div className="wrap contact-inner">
          <Reveal className="contact-left">
            <span className="eyebrow">Get In Touch</span>
            <h2>Request a proposal</h2>
            <p>Send us the details of the project. We&apos;ll come back with a point of view on strategy, scope and next steps.</p>
            <div className="contact-detail">
              <div className="label">Email</div>
              <div className="value">[OFFICIAL EMAIL]</div>
              <div className="label">Social</div>
              <div className="value">[INSTAGRAM LINK] · [LINKEDIN LINK]</div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
