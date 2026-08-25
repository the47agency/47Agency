'use client';

import { useEffect, useRef, useState } from 'react';
import { PROCESS } from '@/lib/data/process';

export default function ProcessSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    function update() {
      const list = listRef.current;
      const fill = fillRef.current;
      if (!list || !fill) return;
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const scrolled = Math.min(Math.max(vh * 0.6 - rect.top, 0), total);
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      fill.style.height = pct + '%';

      const steps = list.querySelectorAll('.process-step');
      let newActive = -1;
      steps.forEach((step, i) => {
        const r = step.getBoundingClientRect();
        if (r.top < vh * 0.62 && r.bottom > vh * 0.25) newActive = i;
      });
      setActiveIndex(newActive);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="process-list" ref={listRef}>
      <div className="process-line">
        <div className="process-line-fill" ref={fillRef}></div>
      </div>
      {PROCESS.map((step, i) => (
        <div className={`process-step ${activeIndex === i ? 'active' : ''}`} key={step.n}>
          <span className="process-idx">{step.n}</span>
          <div className="process-text">
            <h3>{step.t}</h3>
            <p>{step.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
