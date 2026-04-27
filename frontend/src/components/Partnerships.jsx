import React from 'react';
import { partners } from '../mock/mock';

// Lightweight text-based logo placeholder
const LogoPlaceholder = ({ name, color }) => (
  <div
    className="flex items-center justify-center h-14 sm:h-16 min-w-[120px] sm:min-w-[140px] px-6 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
    style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
  >
    <span
      className="text-xl sm:text-2xl font-bold tracking-wide"
      style={{ color: color, fontFamily: 'Poppins, sans-serif' }}
    >
      {name}
    </span>
  </div>
);

const Partnerships = () => {
  // Duplicate list for seamless marquee
  const loop = [...partners, ...partners];

  return (
    <section id="clients" className="section-pad bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Successful Collaborations With the{' '}
            <span className="text-blue-600 font-medium">Industry's Best</span>
          </p>
        </div>

        <div className="marquee-container relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex gap-6 animate-marquee w-max">
            {loop.map((p, i) => (
              <LogoPlaceholder key={`${p.name}-${i}`} name={p.name} color={p.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
