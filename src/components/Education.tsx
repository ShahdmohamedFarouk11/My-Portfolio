import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="tone-b py-20 t-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            EDUCATION
          </h2>
        </div>

        {/* Education Card: Specifically displays ONLY Alexandria University Logo (NO Graduation Cap Image) */}
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-3xl border t-divider p-6 sm:p-8 shadow-xl t-hover-border transition-all duration-300 t-card">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b t-divider">
              
              <div className="flex items-center gap-4">
                {/* University Logo ONLY */}
                <div 
                  id="education-university-logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border-2 t-border-tint shrink-0"
                >
                  <img
                    alt="Alexandria University Official Logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdEinySiQjmMgiSg1yVWwwvVhV6YOtP1aXsW51_oxygWWzYaOZ-5UM0CZhEnjXNH_9iiEGcRR2a0eKgb8Jqi2tCbCVJ2Q12NyBnhfy9ZV2Z4cKyTkPBAnorCrOOw2AtRroiuRJqQpdfZanI7eL1SVVWIMzT66sgBiJLd-YQlhBvaO1kMMI9-Yib_7dBiQUZd33W9Jpa9nxvBabe0gghnt0q5gA86595WOL2EfvzvtqZOdwaXMgCnihw_xYmH53iS8r-g"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold t-heading">
                    Alexandria University
                  </h3>
                  <p className="text-sm font-medium t-accent">
                    Faculty of Computers and Data Science
                  </p>
                  <p className="text-base font-semibold t-heading mt-1">
                    B.Sc. in Data Science
                  </p>
                </div>
              </div>

              {/* Time & Location badge */}
              <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs t-muted font-mono shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-lg t-tile px-3 py-1.5 t-accent border t-divider">
                  <Calendar className="h-3.5 w-3.5" />
                  2024 – 2028
                </span>
                <span className="inline-flex items-center gap-1 t-muted">
                  <MapPin className="h-3 w-3 t-accent" />
                  Alexandria, Egypt
                </span>
              </div>
            </div>

            {/* Description verbatim */}
            <div className="pt-6">
              <p className="t-text text-sm sm:text-base leading-relaxed">
                Exploring Data Science, Data Analysis, Artificial Intelligence, and AI Agents, alongside programming and databases.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
