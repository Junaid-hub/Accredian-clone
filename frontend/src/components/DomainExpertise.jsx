import React from 'react';
import { domains } from '../mock/mock';
import { Lightbulb, Sparkles, Crown, Database, Settings, Globe, Banknote } from 'lucide-react';

const icons = { Lightbulb, Sparkles, Crown, Database, Settings, Globe, Banknote };

const DomainExpertise = () => {
  return (
    <section className="section-pad bg-slate-50/70 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Specialized Programs Designed to{' '}
            <span className="text-blue-600 font-medium">Fuel Innovation</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {domains.map((d, i) => {
            const Icon = icons[d.icon] || Lightbulb;
            return (
              <div
                key={d.title}
                className="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-5 md:p-6 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1"
                style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease' }}
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white" style={{ transition: 'background-color 0.25s ease, color 0.25s ease' }}>
                  <Icon size={26} />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  {d.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
