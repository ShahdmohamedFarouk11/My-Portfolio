import {
  ProjectItem,
  SkillCategory,
  ExperienceItem,
  ServiceItem,
  AchievementItem,
} from './types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'talenta',
    title: '🤖 Talenta AI Recruitment Assistant',
    category: 'ai',
    categoryLabel: 'AI Engineering · AI Agents · RAG',

    description:
      'An AI recruitment assistant that helps recruiters search, evaluate, and compare candidates. The project combines MCP, memory, RAG, task planning, and AI agents to handle multi-step recruitment workflows and provide candidate recommendations.',

    image: '/assets/images/talent.png',
    aspectRatio: '16/9',

    tags: [
      'Python',
      'LangChain',
      'LangGraph',
      'MCP',
      'RAG',
      'Vector Databases',
    ],

    repoUrl:
      'https://github.com/ShahdmohamedFarouk11/Talenta-Automation-Project',

    demoUrl: 'https://drive.google.com/file/d/1_6bKb7u2Osrks66ZbhMlTjRBxGKI4nRE/view?usp=drive_link',

    demoType: 'video',

    demoVideoTitle:
      'Talenta AI Recruitment Assistant — Demo Video',

    keyHighlights: [
      'MCP, memory, RAG, task planning, and AI agents',
      'Multi-step recruitment workflows',
      'Candidate evaluation, comparison & recommendations',
    ],
  },

  {
    id: 'mealplan',
    title: '🍽️ MealPlan',
    category: 'mobile',
    categoryLabel: 'Mobile App · Flutter · Dart',

    description:
      'A meal-planning mobile app that helps users discover meals, search by different criteria, save favorites, and organize meals through a calendar. Built with Flutter and Dart with a complete flow from authentication to meal discovery and planning.',

    image: '/assets/images/mealplan.png',
    aspectRatio: '9/16',

    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'Mobile UI/UX',
      'Calendar Planning',
    ],

    repoUrl:
      'https://github.com/ShahdmohamedFarouk11/Meal-planning-app',

    demoUrl: 'https://drive.google.com/file/d/1dinfVR1914gLi0RUfumyR525lj9p127K/view?usp=drive_link',

    demoType: 'video',

    demoVideoTitle:
      'MealPlan — Mobile App Demo Video',

    keyHighlights: [
      'Complete flow from authentication to meal discovery',
      'Search by different criteria & save favorites',
      'Organize meals through an interactive calendar',
    ],
  },

  {
    id: 'candila',
    title: '🕯️ Candila',
    category: 'web',
    categoryLabel: 'Web Development · Responsive Design',

    description:
      'A responsive landing page for a candle brand, created as my WDF Camp final project. It includes a product showcase, brand sections, reviews, multimedia content, and newsletter validation using HTML, CSS, and JavaScript.',

    image: '/assets/images/candila.jpg',
    aspectRatio: '16/9',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'WDF Camp',
    ],

    repoUrl:
      'https://github.com/ShahdmohamedFarouk11/WDF-Candila-Landing-Page',

    demoUrl:
      'https://wdf-candila-landing-page.vercel.app/',

    demoType: 'live',

    keyHighlights: [
      'Product showcase & brand sections',
      'Reviews & multimedia content',
      'Newsletter validation using HTML, CSS, and JavaScript',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web',
    title: 'Web Development',
    icon: '🌐',
    description: 'Crafting responsive, clean interfaces and solid client validation.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Forms & Validation'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: '📱',
    description: 'Cross-platform mobile apps with native feel and persistent backends.',
    skills: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    icon: '🗄️',
    description: 'Object-oriented architecture, schemas, and relational data querying.',
    skills: ['Java', 'OOP', 'SQL', 'Database Design'],
  },
  {
    id: 'ai',
    title: 'Data & AI',
    icon: '🧠',
    description: 'Intelligent workflows, retrieval systems, and custom LLM agent pipelines.',
    skills: ['Python', 'Data Analysis', 'AI Agents', 'RAG', 'LLMs'],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: '🛠️',
    description: 'Version control, modern IDE setups, and collaborative development flow.',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    featured: true,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    type: 'Training Program',
    title: 'Cross-Platform Mobile App Developer Trainee',
    organization: 'DEPI',
    period: 'Jul 2026 – Present',
    description:
      'A 21-week hands-on training program focused on building cross-platform mobile applications with Flutter and Dart. Worked on responsive interfaces, Firebase integration, UI/UX, Git & GitHub, testing, and team-based projects.',
    skills: ['Flutter', 'Dart', 'Firebase', 'Team Collaboration'],
  },
  {
    type: 'University Training',
    title: 'Autonomous AI Engineering Trainee',
    organization: 'Alexandria University',
    period: 'Jul – Aug 2026',
    description:
      'A hands-on training focused on building AI agents and working with LLMs. Built projects using LangChain, LangGraph, MCP, RAG, and vector databases, with a focus on connecting AI models with tools, data, and workflows.',
    skills: ['LangChain', 'LangGraph', 'MCP & RAG', 'Vector Databases'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Websites, landing pages, and business websites.',
    tag: 'Websites & Landing Pages',
  },
  {
    icon: '📲',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using Flutter.',
    tag: 'Flutter Mobile Apps',
  },
  {
    icon: '🔄',
    title: 'Website & App Improvement',
    description: 'Improving existing products, adding features, and updating interfaces.',
    tag: 'Refactors & Features',
  },
  {
    icon: '⚙️',
    title: 'System Development',
    description: 'Building or expanding business systems to fit the needs of the business.',
    tag: 'Business Systems',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    icon: '🥈',
    title: '2nd Place – Ctrl+X Startup Ideas Competition',
    description:
      'Contributed to PharmaGo, a pharmacy availability platform, as part of the winning team.',
    tag: 'Startup Ideas',
  },
  {
    icon: '🏆',
    title: 'Grade A – WDF Camp Final Project',
    description:
      'Completed the Web Development Fundamentals Camp with a Grade A final project.',
    tag: 'WDF Camp',
  },
  {
    icon: '💻',
    title: 'ECPC 2026 Participant',
    description:
      'Participated in the Egyptian Collegiate Programming Contest and practiced competitive programming and problem solving.',
    tag: 'ECPC',
  },
  {
    icon: '🎓',
    title: 'Huawei Cloud Developer Certification – HCCDA-AI',
    description:
      'Earned an official Huawei Cloud certification through the HCCDA-AI exam.',
    tag: 'HCCDA-AI',
  },
];
