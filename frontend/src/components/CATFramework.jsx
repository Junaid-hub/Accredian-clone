import React from 'react';
import { catFramework } from '../mock/mock';

const CATFramework = () => {
  return (
    <section id="cat" className="section-pad bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our Proven Approach to{' '}
            <span className="text-blue-600 font-medium">Learning Excellence</span>
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-blue-300" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {catFramework.map((item) => (
              <div key={item.letter} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-blue-100 dark:border-slate-700 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-blue-600">
                      {item.letter}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    {item.letter}
                  </div>
                </div>
                <h3 className="mt-5 text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CATFramework;
