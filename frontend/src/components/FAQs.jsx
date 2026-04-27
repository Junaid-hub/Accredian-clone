import React, { useState } from 'react';
import { faqs } from '../mock/mock';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const FAQs = ({ onEnquire }) => {
  const categories = Object.keys(faqs);
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [openIdx, setOpenIdx] = useState(0);

  const items = faqs[activeCat];

  return (
    <section id="faqs" className="section-pad bg-slate-50/70 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setOpenIdx(0);
              }}
              className={`px-4 md:px-5 py-2 rounded-full text-sm font-medium border ${
                activeCat === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                    <span className="text-blue-600 mr-2">#</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 mt-1 text-blue-600 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ transition: 'transform 0.25s ease' }}
                  />
                </button>
                <div
                  className={`overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  style={{ transition: 'max-height 0.35s ease' }}
                >
                  <p className="px-5 pb-5 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={onEnquire}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 font-medium shadow-md"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
