import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a proposal from 47 Agency — strategy, creative and performance marketing for growth-focused brands.',
};

export default function ContactPage() {
  return (
    <section className="contact page-hero-pad" style={{ paddingBottom: 140 }}>
      <div className="wrap contact-inner">
        <Reveal className="contact-left">
          <span className="eyebrow">Get In Touch</span>
          <h1 style={{ fontSize: 'clamp(32px,4vw,46px)', marginTop: 18 }}>Request a proposal</h1>
          <p>
            Send us the details of the project. We&apos;ll come back with a point of view on strategy, scope
            and next steps.
          </p>
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
  );
}
