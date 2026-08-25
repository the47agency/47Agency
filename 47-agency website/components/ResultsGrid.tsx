'use client';

import { useEffect, useRef, useState } from 'react';
import type { CampaignResult } from '@/lib/types';
import EmptyState from './EmptyState';

function Counter({ result }: { result: CampaignResult }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    `${result.prefix ?? ''}0${result.suffix ?? ''}`
  );
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            if (reduceMotion) {
              setDisplay(`${result.prefix ?? ''}${result.metric_value.toFixed(result.decimals)}${result.suffix ?? ''}`);
              return;
            }
            const duration = 1400;
            const start = performance.now();
            function tick(now: number) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const val = result.metric_value * eased;
              setDisplay(`${result.prefix ?? ''}${val.toFixed(result.decimals)}${result.suffix ?? ''}`);
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [result]);

  return (
    <span className="num" ref={ref}>
      {display}
    </span>
  );
}

export default function ResultsGrid({ results }: { results: CampaignResult[] }) {
  if (results.length === 0) {
    return (
      <EmptyState
        eyebrow="Campaign Results"
        title="Results will appear here"
        body="Campaign metrics are published per campaign, never as agency-wide averages, once real results are available."
      />
    );
  }

  return (
    <div className="results-grid">
      {results.map((r) => (
        <div className="result-cell" key={r.id}>
          <Counter result={r} />
          <div className="lbl">{r.metric_label}</div>
        </div>
      ))}
    </div>
  );
}
