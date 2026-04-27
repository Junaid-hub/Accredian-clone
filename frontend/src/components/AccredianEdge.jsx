import React from 'react';
import { edgeFeatures } from '../mock/mock';
import { Target, Users, BookOpen, BarChart3, Layers, LifeBuoy } from 'lucide-react';

const iconMap = [Target, Users, BookOpen, BarChart3, Layers, LifeBuoy];

const AccredianEdge = () => {
  return (
    <section id="edge" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Key Aspects of <span className="text-blue-600 font-medium">Our Strategic Training</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {edgeFeatures.map((f, i) => {
            const Icon = iconMap[i] || Target;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl p-6 md:p-7 bg-gradient-to-br from-blue-50 to-white border border-blue-100/60 hover:border-blue-300 hover:shadow-lg"
                style={{ transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease' }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105" style={{ transition: 'transform 0.25s ease' }}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
