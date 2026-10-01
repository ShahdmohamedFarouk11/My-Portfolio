import React, { useState } from 'react';
import { Menu, X, SunMoon, Sparkles } from 'lucide-react';

interface NavbarProps {
  inverted: boolean;
  setInverted: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ inverted, setInverted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-800/20 bg-[#070e0b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          id="nav-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-lg shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform duration-200">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Shahd Mohamed
            </span>
            <span className="text-xs text-emerald-400/80 font-mono tracking-wide">
              Web & App Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-950/40 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setInverted((prev) => !prev)}
            id="theme-toggle-btn"
            aria-label="Invert theme (dark / light)"
            title={inverted ? 'Back to default theme' : 'Invert theme (dark ⇄ light)'}
            aria-pressed={inverted}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-700/30 bg-[#0d1a15] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
          >
            <SunMoon className="h-4 w-4" />
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs lg:text-sm font-semibold text-slate-950 shadow-md shadow-emerald-900/30 hover:brightness-110 hover:scale-[1.02] transition-all"
            id="nav-hire-me"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let's Talk</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            id="mobile-menu-toggle"
            aria-label="Open menu"
            className="flex h-9 w-9 md:hidden items-center justify-center rounded-xl border border-emerald-700/30 bg-[#0d1a15] text-slate-300 hover:text-emerald-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-800/30 bg-[#091511]/95 backdrop-blur-xl px-4 pt-3 pb-5 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-emerald-900/40 hover:text-emerald-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-bold text-slate-950"
              >
                <Sparkles className="h-4 w-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
