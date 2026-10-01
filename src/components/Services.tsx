import React from 'react';
import { Layers, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  return (
    <section id="services" className="tone-b py-20 t-section border-t t-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <Layers className="h-3.5 w-3.5" />
            <span>Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            OFFERED SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border t-divider p-6 shadow-lg t-hover-border hover:-translate-y-1 transition-all duration-300 group t-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 rounded-2xl t-tint border t-border-tint group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider t-accent t-tint px-2.5 py-1 rounded-md border t-divider">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold t-heading mb-2 t-title-hover transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm t-text leading-relaxed font-light">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t t-divider flex items-center gap-2 text-xs font-semibold t-accent">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Production Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
