import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-emerald-900/30 bg-[#060c09] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-sm shadow-md">
              S
            </div>

            <div>
              <div className="font-heading text-sm font-bold text-white">
                Shahd Mohamed Farouk
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Web & App Developer · Data Science
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400 flex items-center gap-1 text-center">
            Built with modern React, Tailwind CSS & Motion. ©{' '}
            {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/ShahdmohamedFarouk11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-800/30 bg-[#0b1713] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shahd-farouk-b869b435a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-800/30 bg-[#0b1713] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-700/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};