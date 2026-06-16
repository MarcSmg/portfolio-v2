'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>('span.char');
    const tween = gsap.fromTo(chars, { opacity: 0, y: 8 }, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.012,
      delay,
    });
    return () => { tween.kill(); };
  }, [children, delay]);

  const words = children.split(' ');

  return (
    <span className={`inline ${className}`} ref={containerRef}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <span key={ci} className="char inline-block" style={{ opacity: 0 }}>{char}</span>
          ))}
          {wi < words.length - 1 && <span className="char inline-block" style={{ opacity: 0 }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};
