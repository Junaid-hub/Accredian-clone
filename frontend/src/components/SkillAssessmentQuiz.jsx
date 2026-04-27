import React, { useMemo, useState } from 'react';
import { quizQuestions, quizRecommendations } from '../mock/mock';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Brain, ArrowRight, ArrowLeft, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

const SkillAssessmentQuiz = ({ onEnquire }) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const progress = useMemo(
    () => ((step + (showResult ? 1 : 0)) / quizQuestions.length) * 100,
    [step, showResult]
  );

  const currentQ = quizQuestions[step];
  const currentAnswer = answers[currentQ?.id];

  const handleSelect = (value) => {
    setAnswers((a) => ({ ...a, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setShowResult(false);
    setStarted(false);
  };

  // Map the "focus" answer directly to a recommendation bucket
  const recommendation = useMemo(() => {
    const focus = answers.focus || 'tech';
    return quizRecommendations[focus] || quizRecommendations.tech;
  }, [answers]);

  return (
    <section id="quiz" className="section-pad bg-gradient-to-b from-white to-blue-50/60 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
            <Sparkles size={14} />
            AI-Powered • Exclusive Feature
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Discover Your <span className="text-blue-600">Ideal Program</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Take our 30-second skill assessment to get a personalized recommendation.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg p-6 md:p-10">
          {!started ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Brain size={30} />
              </div>
              <h3 className="mt-5 text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Skill Assessment Quiz
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                5 quick questions. No signup. Instant personalized recommendation.
              </p>
              <Button
                onClick={() => setStarted(true)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 font-medium inline-flex items-center gap-2"
              >
                Start Assessment <ArrowRight size={18} />
              </Button>
            </div>
          ) : showResult ? (
            <div className="py-4">
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle2 size={22} />
                <span className="text-sm font-medium">Assessment Complete</span>
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Your recommended track:{' '}
                <span className="text-blue-600">{recommendation.domain}</span>
              </h3>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {recommendation.desc}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Suggested programs:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recommendation.programs.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-900"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={onEnquire}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-11 font-medium"
                >
                  Talk to an advisor
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  className="rounded-full px-6 h-11 font-medium inline-flex items-center gap-2"
                >
                  <RotateCcw size={16} /> Retake quiz
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                  <span>
                    Question {step + 1} of {quizQuestions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                {currentQ.question}
              </h3>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const selected = currentAnswer === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`text-left px-4 py-3.5 rounded-xl border-2 text-sm md:text-base font-medium ${
                        selected
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/20'
                      }`}
                      style={{ transition: 'border-color 0.2s ease, background-color 0.2s ease' }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  disabled={step === 0}
                  className="text-slate-600 dark:text-slate-300 inline-flex items-center gap-1.5 rounded-full"
                >
                  <ArrowLeft size={16} /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-full px-6 h-11 font-medium inline-flex items-center gap-2"
                >
                  {step === quizQuestions.length - 1 ? 'See result' : 'Next'}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillAssessmentQuiz;
