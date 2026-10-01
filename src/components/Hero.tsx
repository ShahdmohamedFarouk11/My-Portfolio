import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Smartphone, Code2, Bot, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070e0b] py-16 sm:py-20 lg:py-24">
      {/* Grid background: lives in the dark Hero only */}
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-70" />

      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl animate-orb-move-1" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-teal-600/10 blur-3xl animate-orb-move-2" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Collaborative Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Shahd Mohamed Farouk
              </h1>
              <p className="font-heading text-xl sm:text-2xl font-semibold text-emerald-400">
                Web & App Developer
              </p>
              <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed">
                Turning ideas into experiences people love to use.
              </p>
            </div>

            {/* Interactive CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/60 hover:brightness-110 hover:shadow-emerald-900/50 hover:scale-[1.02] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-700/40 bg-[#0c1814]/80 px-6 py-3.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-950/60 hover:border-emerald-500/60 transition-all backdrop-blur-md"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social links & quick stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-emerald-400/80">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ShahdmohamedFarouk11"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  aria-label="Shahd Mohamed on GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-800/30 bg-[#0d1a15] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shahd-farouk-b869b435a/"
                  target="_blank"
                  rel="noreferrer"
                  id="hero-linkedin-link"
                  aria-label="Shahd Mohamed on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-800/30 bg-[#0d1a15] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:shahdmohamedfarouk1112@gmail.com"
                  id="hero-email-link"
                  aria-label="Send email to Shahd"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-800/30 bg-[#0d1a15] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image with glowing decorative tech elements */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square">
              
              {/* Decorative background glow rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-xl transform scale-105" />
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-700 opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Profile Image container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-emerald-500/40 bg-[#091511] shadow-2xl shadow-emerald-950/70">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdb_wquMFO97yMtis8x3hkbo2KXrftIUrFyQ_Ta3-YNHF6MWtWk-F_LYyvzzsJ88d2du2i3NZq-xnSAT35-sSR7HFoo-XHz0pBGCxq4JqpLuSZK1JwB6CsJbvYc4OJRIBVIfEbMGJ4huAV8_aIgsiaywRVIA7pxp4EtTjv_fDLegQMyl80LC9LVLP1CryyIrxrlEzC4vnnST2-TyK95K4m65ACcgmF1pAZ9CeqCSZKrJRzND17qkomoIhI_BFrlFEDOg"
                  alt="Shahd Mohamed Farouk"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: Flutter & Mobile */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 flex items-center gap-2.5 rounded-2xl border border-emerald-500/40 bg-[#0a1713]/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-slow">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-emerald-400/80">Cross-Platform</div>
                  <div className="text-xs font-bold text-white">Flutter & Dart</div>
                </div>
              </div>

              {/* Floating Badge 2: AI Agents & LangGraph */}
              <div className="absolute -top-4 -right-4 sm:-right-6 flex items-center gap-2.5 rounded-2xl border border-teal-500/40 bg-[#0a1713]/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-reverse">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-teal-400/80">Autonomous AI</div>
                  <div className="text-xs font-bold text-white">LangGraph & RAG</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
