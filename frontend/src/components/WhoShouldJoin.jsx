import React from 'react';
import { whoShouldJoin } from '../mock/mock';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

const icons = { MonitorCheck, MonitorX, GraduationCap, Briefcase };

const WhoShouldJoin = () => {
  return (
    <section className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 md:gap-4 p-6 sm:p-10 md:p-14">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <p className="text-sm md:text-base font-medium text-blue-100">Who Should Join?</p>
              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Strategic Skill <br className="hidden md:block" />
                Enhancement
              </h2>
              <div className="mt-8 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjB0cmFpbmluZ3xlbnwwfHx8fDE3NzcyODg0NDl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Diverse professionals"
                  className="rounded-2xl w-full max-w-sm h-64 object-cover shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {whoShouldJoin.map((p) => {
                const Icon = icons[p.icon] || MonitorCheck;
                return (
                  <div
                    key={p.title}
                    className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 hover:bg-white/15"
                    style={{ transition: 'background-color 0.25s ease' }}
                  >
                    <Icon size={28} className="text-white mb-3" />
                    <h3 className="text-base md:text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-blue-50 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;
