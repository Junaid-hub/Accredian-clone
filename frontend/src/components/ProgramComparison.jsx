import React, { useState } from 'react';
import { programCatalog } from '../mock/mock';
import { Button } from './ui/button';
import { Plus, X, Star, GitCompare, Check } from 'lucide-react';

const ProgramComparison = () => {
  const [selected, setSelected] = useState([programCatalog[0].id, programCatalog[2].id]);
  const [pickerOpen, setPickerOpen] = useState(false);

  const selectedPrograms = programCatalog.filter((p) => selected.includes(p.id));

  const add = (id) => {
    if (selected.length >= 3) return;
    setSelected((s) => [...s, id]);
    setPickerOpen(false);
  };
  const remove = (id) => setSelected((s) => s.filter((x) => x !== id));

  const rows = [
    { key: 'domain', label: 'Domain' },
    { key: 'duration', label: 'Duration' },
    { key: 'format', label: 'Format' },
    { key: 'level', label: 'Level' },
    { key: 'price', label: 'Price per learner' },
    { key: 'rating', label: 'Learner rating', render: (v) => (
      <span className="inline-flex items-center gap-1">
        <Star size={14} className="text-amber-500 fill-amber-500" /> {v}
      </span>
    )},
  ];

  return (
    <section id="compare" className="section-pad bg-slate-50/70 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
            <GitCompare size={14} />
            Compare side-by-side
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Find the <span className="text-blue-600">Right Fit</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Compare up to 3 programs across duration, outcomes, format and more.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          {/* Card headers */}
          <div className="grid grid-cols-[140px_repeat(auto-fit,minmax(0,1fr))] gap-0">
            <div className="p-4 md:p-5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700" />
            {selectedPrograms.map((p) => (
              <div
                key={p.id}
                className="relative p-4 md:p-5 border-b border-l border-slate-200 dark:border-slate-700"
              >
                <button
                  onClick={() => remove(p.id)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-red-100 hover:text-red-600 flex items-center justify-center"
                  aria-label="Remove"
                >
                  <X size={14} />
                </button>
                <p className="text-xs uppercase tracking-wider text-blue-600 font-medium">
                  {p.domain}
                </p>
                <h3 className="mt-1 text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug pr-8">
                  {p.name}
                </h3>
              </div>
            ))}
            {selected.length < 3 && (
              <div className="p-4 md:p-5 border-b border-l border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
                <Button
                  variant="outline"
                  onClick={() => setPickerOpen(!pickerOpen)}
                  className="rounded-full border-dashed inline-flex items-center gap-2"
                >
                  <Plus size={16} /> Add program
                </Button>
              </div>
            )}
          </div>

          {/* Picker dropdown */}
          {pickerOpen && (
            <div className="p-4 md:p-5 bg-blue-50/60 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                Select a program to add:
              </p>
              <div className="flex flex-wrap gap-2">
                {programCatalog
                  .filter((p) => !selected.includes(p.id))
                  .map((p) => (
                    <button
                      key={p.id}
                      onClick={() => add(p.id)}
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:text-blue-600"
                    >
                      {p.name}
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-[140px_repeat(auto-fit,minmax(0,1fr))] border-b border-slate-100 dark:border-slate-700 last:border-b-0"
            >
              <div className="p-4 md:p-5 bg-slate-50 dark:bg-slate-900 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
                {row.label}
              </div>
              {selectedPrograms.map((p) => (
                <div
                  key={p.id + row.key}
                  className="p-4 md:p-5 border-l border-slate-100 dark:border-slate-700 text-sm md:text-base text-slate-800 dark:text-slate-100"
                >
                  {row.render ? row.render(p[row.key]) : p[row.key]}
                </div>
              ))}
              {selected.length < 3 && (
                <div className="p-4 md:p-5 border-l border-dashed border-slate-200 dark:border-slate-700" />
              )}
            </div>
          ))}

          {/* Outcomes row */}
          <div className="grid grid-cols-[140px_repeat(auto-fit,minmax(0,1fr))]">
            <div className="p-4 md:p-5 bg-slate-50 dark:bg-slate-900 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300">
              Key outcomes
            </div>
            {selectedPrograms.map((p) => (
              <div
                key={p.id + 'out'}
                className="p-4 md:p-5 border-l border-slate-100 dark:border-slate-700"
              >
                <ul className="space-y-1.5">
                  {p.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
                    >
                      <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {selected.length < 3 && (
              <div className="p-4 md:p-5 border-l border-dashed border-slate-200 dark:border-slate-700" />
            )}
          </div>
        </div>

        {selectedPrograms.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            Add programs to start comparing.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramComparison;
