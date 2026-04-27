import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../mock/mock';

const StatItem = ({ value, label }) => {
  return (
    <div className="text-center px-4">
      <div className="inline-block relative">
        <span className="absolute inset-0 rounded-full bg-blue-100/60 blur-md" aria-hidden="true" />
        <span className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
          {value}
        </span>
      </div>
      <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-[220px] mx-auto leading-relaxed">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            The Numbers Behind <span className="text-blue-600 font-medium">Our Success</span>
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 ${
            visible ? 'fade-up' : 'opacity-0'
          }`}
        >
          {stats.map((s) => (
            <div key={s.value} className="pt-8 md:pt-0 md:px-6">
              <StatItem value={s.value} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
