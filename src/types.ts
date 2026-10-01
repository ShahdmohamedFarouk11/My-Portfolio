export interface ProjectItem {
  id: string;
  title: string;
  category: 'ai' | 'mobile' | 'web';
  categoryLabel: string;
  featuredBadge?: string;
  description: string;
  image: string;
  aspectRatio?: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  demoType: 'video' | 'live';
  demoVideoTitle?: string;
  keyHighlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  type: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface AchievementItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}
