import type { Testimonial } from '@/lib/types';

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  // Per content rules: never show fake testimonials or an empty-state
  // placeholder for this section — it simply doesn't render until real
  // testimonials are published in Supabase.
  if (testimonials.length === 0) return null;

  return (
    <section className="testimonials section-pad">
      <div className="wrap">
        <div className="testimonials-head reveal in">
          <span className="eyebrow">What Clients Say</span>
          <h2>In their words</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                {t.author_name}
                {t.author_role ? `, ${t.author_role}` : ''}
                {t.company ? ` — ${t.company}` : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
