import React from 'react';
import { X, Play, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl rounded-3xl border border-emerald-500/40 bg-[#091511] p-6 sm:p-8 shadow-2xl shadow-emerald-950/80 text-left overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-800/30">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <Play className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                {project.demoVideoTitle || `${project.title} — Video Demo`}
              </h3>
              <p className="text-xs text-emerald-400 font-mono">
                {project.categoryLabel}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-800/40 bg-[#0d1c16] text-slate-300 hover:text-white hover:border-emerald-500/60 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video / Preview showcase area */}
        <div className="my-6">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-700/40 bg-black aspect-video flex flex-col items-center justify-center shadow-inner group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Overlay interactive demo player state */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg">
                <Play className="h-4 w-4 fill-slate-950" />
                <span>Project Walkthrough & Implementation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 max-w-lg mb-2">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature breakdown */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-semibold">
            Key Architecture & Features Demonstrated
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-[#0d1c16] p-3 rounded-xl border border-emerald-800/20">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons footer */}
        <div className="mt-6 pt-4 border-t border-emerald-800/30 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/40 bg-[#10231b] px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-950 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>View Source Repository</span>
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors shadow-md"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <span>Close Demo</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
