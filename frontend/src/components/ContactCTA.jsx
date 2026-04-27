import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ContactCTA = ({ onEnquire }) => {
  return (
    <section className="section-pad bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 p-8 sm:p-12 md:p-16 text-center">
          {/* decorative shapes */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="mt-4 text-base md:text-lg text-blue-50">
              Get Expert Guidance for Your Team's Success!
            </p>
            <Button
              onClick={onEnquire}
              className="mt-8 bg-white hover:bg-slate-50 text-blue-700 rounded-full px-8 h-12 text-base font-semibold shadow-lg inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
