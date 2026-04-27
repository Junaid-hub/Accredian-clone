import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { heroBullets } from '../mock/mock';
import { Button } from './ui/button';

const Hero = ({ onEnquire }) => {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100/60 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-8 md:gap-4 p-6 sm:p-10 md:p-14">
            {/* Left text */}
            <div className="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Next-Gen{' '}
                <span className="text-blue-600">Expertise</span> For Your{' '}
                <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-md">
                Cultivate high-performance teams through expert learning.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm sm:text-base text-slate-800">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onEnquire}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base font-medium shadow-md hover:shadow-lg"
              >
                Enquire Now
              </Button>
            </div>

            {/* Right image */}
            <div className="relative flex justify-center md:justify-end fade-up">
              <div className="relative w-full max-w-md md:max-w-lg">
                <img
                  src="https://images.pexels.com/photos/5583996/pexels-photo-5583996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Enterprise professionals"
                  className="w-full h-[320px] sm:h-[400px] md:h-[440px] object-cover rounded-2xl shadow-xl"
                  loading="eager"
                />
                {/* Floating badge */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Trusted by</p>
                    <p className="text-sm font-semibold text-slate-900">200+ Enterprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
