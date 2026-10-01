import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Play,
  CheckCircle2,
} from 'lucide-react';

import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'ai' | 'mobile' | 'web'
  >('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="tone-a py-24 t-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">

          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Work</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold t-heading">
            PROJECTS
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">

            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI Agents & RAG' },
              { id: 'mobile', label: 'Mobile (Flutter)' },
              { id: 'web', label: 'Web Development' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveFilter(
                    tab.id as 'all' | 'ai' | 'mobile' | 'web'
                  )
                }
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 't-btn shadow-lg scale-105'
                    : 'border t-divider t-tile t-text t-hover-accent t-hover-border'
                }`}
              >
                {tab.label}
              </button>
            ))}

          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {filteredProjects.map((proj) => (

            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className="flex flex-col justify-between rounded-3xl border t-divider p-6 shadow-xl t-hover-border hover:shadow-2xl hover:shadow-emerald-950/50 transition-all duration-300 group t-card"
            >

              <div>

        <div
  className={`relative rounded-2xl overflow-hidden border t-divider bg-[#050b08] mb-6 flex items-center justify-center ${
    proj.id === 'mealplan'
      ? 'h-[360px]'
      : 'aspect-video'
  }`}
>
  <img
    src={proj.image}
    alt={proj.title}
    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
      proj.id === 'mealplan'
        ? 'object-contain p-3'
        : 'object-cover'
    }`}
  />

  {proj.featuredBadge && (
    <div className="absolute top-3 left-3 rounded-lg bg-slate-950/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-300 border border-emerald-500/30">
      {proj.featuredBadge}
    </div>
  )}

  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
    <a
      href={proj.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:bg-emerald-400 transition-colors"
    >
      <span>{proj.demoType === 'video' ? '▶' : '↗'}</span>
      <span>
        {proj.demoType === 'video' ? 'Watch Demo' : 'Live Site'}
      </span>
    </a>
  </div>
</div>
                {/* Category & Title */}
                <div className="space-y-2 mb-3">

                  <div className="text-xs font-mono font-medium t-accent">
                    {proj.categoryLabel}
                  </div>

                  <h3 className="font-heading text-xl font-bold t-heading t-title-hover transition-colors">
                    {proj.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm t-text leading-relaxed font-light mb-4">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5 pb-4 border-b t-divider">

                  {proj.keyHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-1.5 text-xs t-text"
                    >

                      <CheckCircle2 className="h-3.5 w-3.5 t-accent shrink-0 mt-0.5" />

                      <span>{highlight}</span>

                    </div>
                  ))}

                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">

                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md t-tile px-2.5 py-1 text-[11px] font-mono t-accent border t-divider"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t t-divider flex items-center justify-between gap-3">

                {/* GitHub */}
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-repo-${proj.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border t-divider t-tile px-3.5 py-2.5 text-xs font-semibold t-text t-hover-tile t-hover-accent transition-colors"
                >

                  <Github className="h-3.5 w-3.5 t-accent" />

                  <span>Repository</span>

                </a>

                {/* Demo */}
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-demo-${proj.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold shadow-md shadow-emerald-950/40 transition-all t-btn"
                >

                  {proj.demoType === 'video' ? (
                    <Play className="h-3.5 w-3.5 fill-current" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}

                  <span>
                    {proj.demoType === 'video'
                      ? 'Demo Video'
                      : 'Live Demo'}
                  </span>

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};