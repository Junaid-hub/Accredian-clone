import React, { useState } from 'react';
import { testimonials } from '../mock/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            What Our Clients Are{' '}
            <span className="text-blue-600 font-medium">Saying</span>
          </p>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 p-8 md:p-14">
          <Quote className="absolute top-6 left-6 text-blue-200 dark:text-blue-900" size={40} />

          <div className="flex flex-col items-center text-center">
            <div
              className="h-14 flex items-center justify-center mb-6 px-6 rounded-lg bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 shadow-sm"
            >
              <span
                className="text-2xl font-bold tracking-wide"
                style={{ color: t.color }}
              >
                {t.company}
              </span>
            </div>
            <p className="text-base md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic max-w-3xl">
              “{t.quote}”
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full ${
                    i === active ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-600'
                  }`}
                  style={{ transition: 'width 0.3s ease, background-color 0.3s ease' }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
