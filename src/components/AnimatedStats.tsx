'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 450000, label: 'MBI Policies Active Nationwide', suffix: '+', prefix: '' },
  { value: 85, label: 'Of Mechanical Breakdowns Can Be Covered by MBI', suffix: '%', prefix: '' },
  { value: 24, label: 'Hour Claims Response from Leading Providers', suffix: '/7', prefix: '' },
  { value: 4, label: 'Year Maximum Policy Term Available', suffix: ' yr', prefix: 'Up to ' },
];

function AnimatedNumber({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-14 bg-gradient-to-r from-amber-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-4xl sm:text-5xl font-extrabold mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-amber-100 text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
