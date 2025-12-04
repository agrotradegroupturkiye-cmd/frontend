'use client'
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number; // milliseconds
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        obs.unobserve(node);
      }
    }, { threshold: 0.12 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ transition: 'opacity 700ms cubic-bezier(.2,.9,.2,1), transform 700ms cubic-bezier(.2,.9,.2,1)' }}
      className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'} transform ${className}`}
    >
      {children}
    </div>
  );
}
