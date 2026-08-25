'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  as?: 'div' | 'section';
}

/**
 * Wraps content in the same fade-up-on-scroll treatment used across the
 * homepage prototype. Uses IntersectionObserver; respects reduced-motion
 * automatically via the global CSS media query on `.reveal`.
 */
export default function Reveal({ children, delay, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `reveal-d${delay}` : '';
  const Tag = as as any;

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
