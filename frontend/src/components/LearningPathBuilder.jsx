import React, { useMemo, useState } from 'react';
import { learningModules } from '../mock/mock';
import { Button } from './ui/button';
import { Plus, Trash2, GripVertical, Route, Clock, Layers } from 'lucide-react';
import { toast } from 'sonner';

const categoryColors = {
  Leadership: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  Tech: 'bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  AI: 'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
  Product: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
};

const LearningPathBuilder = () => {
  const [path, setPath] = useState([learningModules[0], learningModules[6], learningModules[10]]);
  const [filter, setFilter] = useState('All');
  const [dragIdx, setDragIdx] = useState(null);

  const categories = ['All', ...Array.from(new Set(learningModules.map((m) => m.category)))];

  const available = useMemo(
    () =>
      learningModules.filter(
        (m) =>
          !path.some((p) => p.id === m.id) &&
          (filter === 'All' || m.category === filter)
      ),
    [path, filter]
  );

  const totalWeeks = path.reduce((s, m) => s + m.weeks, 0);

  const addModule = (m) => {
    if (path.length >= 8) {
      toast.info('Max 8 modules per path. Remove one to add another.');
      return;
    }
    setPath((p) => [...p, m]);
  };

  const removeModule = (id) => setPath((p) => p.filter((m) => m.id !== id));

  const handleDragStart = (idx) => setDragIdx(idx);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (toIdx) => {
    if (dragIdx === null || dragIdx === toIdx) return;
    setPath((p) => {
      const copy = [...p];
      const [moved] = copy.splice(dragIdx, 1);
      copy.splice(toIdx, 0, moved);
      return copy;
    });
    setDragIdx(null);
  };

  const savePath = () => {
    localStorage.setItem('accredian_learning_path', JSON.stringify(path));
    toast.success('Learning path saved!');
  };

  return (
    <section id="path" className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
            <Route size={14} />
            Build your custom journey
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Learning <span className="text-blue-600">Path Builder</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Drag to reorder, click to add or remove. See your timeline update live.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Available modules */}
          <div className="lg:col-span-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
                Module library
              </h3>
              <Layers size={18} className="text-slate-400" />
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    filter === c
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-300'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              {available.length === 0 && (
                <p className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center">
                  No modules available in this category.
                </p>
              )}
              {available.map((m) => (
                <div
                  key={m.id}
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">
                      {m.title}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          categoryColors[m.category] || 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {m.category}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-0.5">
                        <Clock size={11} /> {m.weeks} wk
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => addModule(m)}
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center flex-shrink-0"
                    aria-label={`Add ${m.title}`}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* My path */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
                Your learning path
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium">
                  {path.length} modules
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white font-semibold">
                  ~{totalWeeks} weeks
                </span>
              </div>
            </div>

            {path.length === 0 ? (
              <div className="py-14 text-center text-slate-500 dark:text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
                Add modules from the library to build your path.
              </div>
            ) : (
              <ol className="space-y-2">
                {path.map((m, idx) => (
                  <li
                    key={m.id}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(idx)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${
                      dragIdx === idx ? 'opacity-50' : ''
                    }`}
                  >
                    <button
                      className="text-slate-400 hover:text-slate-600 cursor-grab active:cursor-grabbing"
                      aria-label="Drag to reorder"
                    >
                      <GripVertical size={18} />
                    </button>
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white truncate">
                        {m.title}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            categoryColors[m.category] || 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {m.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-0.5">
                          <Clock size={11} /> {m.weeks} weeks
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeModule(m.id)}
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-red-100 hover:text-red-600 flex items-center justify-center flex-shrink-0"
                      aria-label={`Remove ${m.title}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </li>
                ))}
              </ol>
            )}

            {path.length > 0 && (
              <div className="mt-5 flex items-center justify-end">
                <Button
                  onClick={savePath}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-10 font-medium"
                >
                  Save my path
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathBuilder;
