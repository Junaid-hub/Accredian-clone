import React, { useMemo, useState } from 'react';
import { roiDefaults } from '../mock/mock';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { Calculator, TrendingUp, IndianRupee, Users, Clock } from 'lucide-react';

const formatINR = (n) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${n}`;
};

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(roiDefaults.teamSize);
  const [avgSalary, setAvgSalary] = useState(roiDefaults.avgSalary);
  const [programCost, setProgramCost] = useState(roiDefaults.programCost);
  const [productivityGain, setProductivityGain] = useState(roiDefaults.productivityGainPct);
  const [retentionGain, setRetentionGain] = useState(roiDefaults.retentionGainPct);

  const metrics = useMemo(() => {
    const totalInvestment = teamSize * programCost;
    const productivityValue = teamSize * avgSalary * (productivityGain / 100);
    // Assume average replacement cost = 40% of salary, retention gain saves that for % of team
    const retentionSavings = teamSize * avgSalary * 0.4 * (retentionGain / 100);
    const totalReturn = productivityValue + retentionSavings;
    const netGain = totalReturn - totalInvestment;
    const roiPct = totalInvestment > 0 ? (netGain / totalInvestment) * 100 : 0;
    const paybackMonths =
      totalReturn > 0 ? Math.max(1, Math.round((totalInvestment / totalReturn) * 12)) : 0;
    return {
      totalInvestment,
      productivityValue,
      retentionSavings,
      totalReturn,
      netGain,
      roiPct,
      paybackMonths,
    };
  }, [teamSize, avgSalary, programCost, productivityGain, retentionGain]);

  return (
    <section id="roi" className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
            <Calculator size={14} />
            Interactive • Built for CFOs & L&D Leaders
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Training <span className="text-blue-600">ROI Calculator</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            See the projected return on investing in your team's growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Inputs */}
          <div className="lg:col-span-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6">
              Your organization's inputs
            </h3>

            <div className="space-y-7">
              {/* Team size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Users size={15} className="text-blue-600" /> Team size
                  </Label>
                  <span className="text-sm font-semibold text-blue-600">
                    {teamSize} people
                  </span>
                </div>
                <Slider
                  value={[teamSize]}
                  onValueChange={(v) => setTeamSize(v[0])}
                  min={5}
                  max={500}
                  step={5}
                />
              </div>

              {/* Avg salary */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <IndianRupee size={15} className="text-blue-600" /> Average annual salary
                  </Label>
                  <span className="text-sm font-semibold text-blue-600">
                    {formatINR(avgSalary)}
                  </span>
                </div>
                <Slider
                  value={[avgSalary]}
                  onValueChange={(v) => setAvgSalary(v[0])}
                  min={400000}
                  max={5000000}
                  step={50000}
                />
              </div>

              {/* Program cost */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Calculator size={15} className="text-blue-600" /> Program cost / person
                  </Label>
                  <span className="text-sm font-semibold text-blue-600">
                    {formatINR(programCost)}
                  </span>
                </div>
                <Slider
                  value={[programCost]}
                  onValueChange={(v) => setProgramCost(v[0])}
                  min={15000}
                  max={200000}
                  step={5000}
                />
              </div>

              {/* Productivity gain */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp size={15} className="text-blue-600" /> Expected productivity gain
                  </Label>
                  <span className="text-sm font-semibold text-blue-600">
                    {productivityGain}%
                  </span>
                </div>
                <Slider
                  value={[productivityGain]}
                  onValueChange={(v) => setProductivityGain(v[0])}
                  min={5}
                  max={40}
                  step={1}
                />
              </div>

              {/* Retention gain */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <Clock size={15} className="text-blue-600" /> Retention improvement
                  </Label>
                  <span className="text-sm font-semibold text-blue-600">
                    {retentionGain}%
                  </span>
                </div>
                <Slider
                  value={[retentionGain]}
                  onValueChange={(v) => setRetentionGain(v[0])}
                  min={0}
                  max={30}
                  step={1}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 md:p-8 shadow-xl">
            <h3 className="text-lg md:text-xl font-bold mb-6">Projected annual impact</h3>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-200">Total investment</p>
                <p className="text-2xl md:text-3xl font-bold mt-1">
                  {formatINR(metrics.totalInvestment)}
                </p>
              </div>

              <div className="h-px bg-white/20" />

              <div>
                <p className="text-xs uppercase tracking-wider text-blue-200">Productivity value</p>
                <p className="text-xl md:text-2xl font-bold mt-1">
                  {formatINR(metrics.productivityValue)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-200">Retention savings</p>
                <p className="text-xl md:text-2xl font-bold mt-1">
                  {formatINR(metrics.retentionSavings)}
                </p>
              </div>

              <div className="h-px bg-white/20" />

              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-4">
                <p className="text-xs uppercase tracking-wider text-blue-200">Net annual gain</p>
                <p className="text-3xl md:text-4xl font-extrabold mt-1">
                  {formatINR(metrics.netGain)}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-white/10 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wider text-blue-200">ROI</p>
                    <p className="text-lg font-bold">{metrics.roiPct.toFixed(0)}%</p>
                  </div>
                  <div className="rounded-lg bg-white/10 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wider text-blue-200">Payback</p>
                    <p className="text-lg font-bold">{metrics.paybackMonths} mo</p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-blue-100 leading-relaxed">
                Numbers are directional estimates based on your inputs and industry benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
