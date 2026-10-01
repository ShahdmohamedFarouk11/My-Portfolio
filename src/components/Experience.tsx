import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="tone-a py-20 t-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            WORK EXPERIENCE
          </h2>
        </div>

        {/* Timeline list */}
        <div className="mx-auto max-w-3xl space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-700/40 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
              
              {/* Timeline indicator node */}
              <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border-2 t-border-tint t-tile t-accent shadow-xl group-hover:scale-110 t-group-hover-border transition-all duration-300">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Content Card */}
              <div className="flex-1 rounded-2xl border t-divider p-6 shadow-lg t-group-hover-border transition-colors t-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block rounded-md t-tint px-2.5 py-0.5 text-xs font-mono font-medium t-accent mb-1">
                      {exp.type}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold t-heading">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono t-accent t-tile px-3 py-1 rounded-lg border t-divider w-fit">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold t-muted mb-3">
                  <Building2 className="h-3.5 w-3.5 t-accent" />
                  <span>{exp.organization}</span>
                </div>

                <p className="text-sm t-text leading-relaxed font-light mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t t-divider">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 rounded-md t-tile px-2.5 py-1 text-xs font-medium t-text border t-divider"
                    >
                      <CheckCircle2 className="h-3 w-3 t-accent" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
