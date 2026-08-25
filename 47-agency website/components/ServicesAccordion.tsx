'use client';

import { useState } from 'react';
import type { ServiceEntry } from '@/lib/data/services';

export default function ServicesAccordion({ services }: { services: ServiceEntry[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(services[0]?.slug ?? null);

  return (
    <div className="service-list">
      {services.map((s, i) => {
        const active = activeSlug === s.slug;
        return (
          <div key={s.slug} className={`service-item ${active ? 'active' : ''}`}>
            <div
              className="service-row"
              role="button"
              tabIndex={0}
              onClick={() => setActiveSlug(active ? null : s.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSlug(active ? null : s.slug);
                }
              }}
              aria-expanded={active}
            >
              <span className="service-num">0{i + 1}</span>
              <h3 className="service-title">{s.title}</h3>
              <span className="service-toggle"></span>
            </div>
            <div className="service-body">
              <div className="service-body-inner">
                <p>{s.summary}</p>
                <div className="capability-list">
                  {s.caps.map((c) => (
                    <span className="cap-chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
