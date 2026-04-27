import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../mock/mock';
import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onEnquire }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm ${
        scrolled
          ? 'shadow-sm border-b border-slate-100 dark:border-slate-800'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex flex-col items-start leading-none flex-shrink-0"
          aria-label="Accredian Home"
        >
          <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight">
            accredian
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider">
            credentials that matter
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium pb-1 border-b-2 inline-flex items-center gap-1.5 ${
                  activeLink === link.href
                    ? 'text-blue-600 border-blue-600'
                    : 'text-slate-800 dark:text-slate-200 border-transparent hover:text-blue-600'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-600 text-white leading-none">
                    {link.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Theme */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <Button
            onClick={onEnquire}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 h-10 font-medium shadow-sm"
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="xl:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-slate-800 dark:text-slate-200 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 max-h-[75vh] overflow-y-auto">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium inline-flex items-center gap-2 ${
                    activeLink === link.href
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-600 text-white leading-none">
                      {link.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onEnquire();
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10"
              >
                Enquire Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
