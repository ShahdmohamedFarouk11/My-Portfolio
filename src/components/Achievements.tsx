import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="tone-green py-20 t-section border-t t-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <Trophy className="h-3.5 w-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border t-divider p-6 shadow-lg t-hover-border hover:-translate-y-1 transition-all duration-300 t-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl t-tint border t-border-tint">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-mono t-accent t-tint px-2.5 py-1 rounded-md border t-divider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold t-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm t-text leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t t-divider flex items-center gap-2 text-xs font-semibold t-accent">
                <Award className="h-3.5 w-3.5" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
