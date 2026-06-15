"use client"

import { SkillObject } from '@/content/types'
import { useEffect, useRef, useState } from 'react'
import SkillCard from './SkillCard'
import Icon from '../ui/Icon';

interface RadialLayoutProps {
    skills: SkillObject[];
}

export const RadialLayout = ({ skills }: RadialLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Container is 2:1 (width = 2 × height). Arc center sits at bottom-center.
  // radiusX is expressed as % of container width; multiply by 2 to convert to % of height.
  const radiusX = 40;

  return (
    <div ref={containerRef} className="relative w-full" style={{ aspectRatio: '1 / 2' }}>
      {skills.map((skill, i) => {
        const t = skills.length > 1 ? i / (skills.length - 1) : 0.5;
        const angle = Math.PI * (1 - t); // sweeps π → 0 (left to right)
        const y = 50 + radiusX * Math.cos(angle);
        const x = 80 - 2 * radiusX * Math.sin(angle);

        return (
          <div
            key={skill.name}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Icon size={15} name={skill.name}/>
          </div>
        );
      })}
    </div>
  );
}
