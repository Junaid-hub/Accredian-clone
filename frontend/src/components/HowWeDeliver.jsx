import React from 'react';
import { deliverySteps } from '../mock/mock';
import { LineChart, Presentation, MonitorPlay } from 'lucide-react';

const icons = { LineChart, Presentation, MonitorPlay };

const HowWeDeliver = () => {
  return (
    <section id="how" className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A Structured Three-Step Approach to{' '}
            <span className="text-blue-600 font-medium">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverySteps.map((s) => {
            const Icon = icons[s.icon] || LineChart;
            return (
              <div
                key={s.step}
                className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 p-6 md:p-8 text-center hover:shadow-xl"
                style={{ transition: 'box-shadow 0.3s ease' }}
              >
                <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-600 flex items-center justify-center text-xs font-bold text-blue-600">
                  {s.step}
                </div>
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
