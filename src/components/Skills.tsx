import React from 'react';
import { Cpu, Check } from 'lucide-react';

interface SkillGroup {
  category: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Forms & Validation'],
  },
  {
    category: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Java', 'OOP', 'SQL', 'Database Design'],
  },
  {
    category: 'Data & AI',
    skills: ['Python', 'Data Analysis', 'AI Agents', 'RAG', 'LLMs'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="tone-green py-20 t-section border-t t-divider">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <Cpu className="h-3.5 w-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold t-heading">
            SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl border t-divider p-6 shadow-md t-hover-border transition-all duration-300 flex flex-col justify-between t-card"
            >
              <div>
                <h3 className="font-heading text-lg font-bold t-accent mb-4 pb-2 border-b t-divider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 rounded-lg border t-divider t-tile px-3 py-1.5 text-xs font-medium t-text t-hover-border transition-colors"
                    >
                      <Check className="h-3 w-3 t-accent" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connector Line to Client */}
        <div className="mt-12 text-center max-w-3xl mx-auto rounded-2xl border t-border-tint t-tint p-6 shadow-lg">
          <p className="text-base sm:text-lg font-medium t-text leading-relaxed">
            From building interfaces to working with data, databases, and AI, I enjoy bringing different pieces together to build useful product
          </p>
        </div>

      </div>
    </section>
  );
};
