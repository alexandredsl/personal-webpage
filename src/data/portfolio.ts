/* ═══════════════════════════════════════════════
   PORTFOLIO DATA — Typed Interfaces & Placeholder Content
   ═══════════════════════════════════════════════ */

// ── Interfaces ──────────────────────────────────

export interface Experience {
  id: string;
  era: string;        // e.g. "The Age of Foundations"
  title: string;      // Job title
  company: string;
  period: string;     // e.g. "2018 – 2020"
  description: string;
  tech: string[];
  highlight?: string; // One-liner achievement
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5; // 1=Novice, 5=Master
  icon?: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'DevOps'
  | 'Database'
  | 'Tools'
  | 'Soft Skills';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'legendary';
  link?: string;
  github?: string;
  questType: 'main' | 'side' | 'legendary'; // RPG quest classification
}

export interface PersonalInterest {
  name: string;
  emoji: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  interests: PersonalInterest[];
  socials: SocialLink[];
}

// ── Placeholder Data ────────────────────────────

export const portfolioData: PortfolioData = {
  name: 'Alexandre',
  role: 'Full-Stack Developer',
  tagline: 'Navigating the streams of time, one commit at a time.',
  bio: 'A passionate developer who bridges frontend craft and backend architecture. Lover of clean code, retro RPGs, and building tools that make life easier.',

  experiences: [
    {
      id: 'era-1',
      era: 'The Age of Foundations',
      title: 'Junior Developer',
      company: 'TechCorp Systems',
      period: '2016 – 2018',
      description: 'Learned the fundamentals of enterprise software. Built internal tools and maintained legacy systems while sharpening core engineering skills.',
      tech: ['Java', 'SQL', 'Spring Boot', 'Git'],
      highlight: 'Automated a manual reporting process, saving 20 hours/week.',
    },
    {
      id: 'era-2',
      era: 'The Renaissance',
      title: 'Mid-Level Developer',
      company: 'Digital Forge',
      period: '2018 – 2021',
      description: 'Transitioned into modern web development. Led frontend initiatives and introduced component-driven architecture to the team.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      highlight: 'Architected a design system used across 5 product teams.',
    },
    {
      id: 'era-3',
      era: 'The Cloud Epoch',
      title: 'Senior Developer',
      company: 'Nimbus Labs',
      period: '2021 – 2024',
      description: 'Owned full-stack features end to end. Designed microservices, mentored junior devs, and drove cloud-native adoption.',
      tech: ['Next.js', 'AWS', 'Terraform', 'GraphQL', 'Kubernetes'],
      highlight: 'Reduced API latency by 60% through caching architecture.',
    },
    {
      id: 'era-4',
      era: 'The Present Day',
      title: 'Staff Engineer',
      company: 'Void Shepard',
      period: '2024 – Present',
      description: 'Building at the intersection of AI and developer tooling. Exploring new frontiers in automation, LLM integrations, and creative coding.',
      tech: ['Next.js', 'Python', 'LLMs', 'Cloudflare Workers', 'Framer Motion'],
      highlight: 'Shipping AI-powered tools used by thousands of developers.',
    },
  ],

  skills: [
    // Frontend
    { name: 'React', category: 'Frontend', level: 5 },
    { name: 'Next.js', category: 'Frontend', level: 5 },
    { name: 'TypeScript', category: 'Frontend', level: 5 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 4 },
    { name: 'Framer Motion', category: 'Frontend', level: 4 },
    { name: 'HTML/CSS', category: 'Frontend', level: 5 },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 4 },
    { name: 'Python', category: 'Backend', level: 4 },
    { name: 'GraphQL', category: 'Backend', level: 3 },
    { name: 'REST APIs', category: 'Backend', level: 5 },

    // DevOps
    { name: 'Docker', category: 'DevOps', level: 4 },
    { name: 'AWS', category: 'DevOps', level: 3 },
    { name: 'Terraform', category: 'DevOps', level: 3 },
    { name: 'CI/CD', category: 'DevOps', level: 4 },

    // Database
    { name: 'PostgreSQL', category: 'Database', level: 4 },
    { name: 'MongoDB', category: 'Database', level: 3 },
    { name: 'Redis', category: 'Database', level: 3 },

    // Tools
    { name: 'Git', category: 'Tools', level: 5 },
    { name: 'VS Code', category: 'Tools', level: 5 },
    { name: 'Figma', category: 'Tools', level: 3 },
  ],

  projects: [
    {
      id: 'project-1',
      title: 'Chronicle Engine',
      description: 'A real-time event processing system that handles millions of events per day.',
      longDescription: 'Built with Node.js and Redis Streams, this engine powers real-time dashboards and alerting systems. Features automatic scaling and fault tolerance.',
      tech: ['Node.js', 'Redis', 'Docker', 'WebSockets'],
      status: 'completed',
      questType: 'main',
      github: 'https://github.com',
    },
    {
      id: 'project-2',
      title: 'Void Portal',
      description: 'An AI-powered developer assistant that integrates with your workflow.',
      longDescription: 'Leverages LLM APIs to provide context-aware code suggestions, documentation generation, and automated code reviews directly in your IDE.',
      tech: ['Python', 'OpenAI', 'Next.js', 'Cloudflare Workers'],
      status: 'in-progress',
      questType: 'legendary',
      link: 'https://example.com',
    },
    {
      id: 'project-3',
      title: 'Epoch Dashboard',
      description: 'A beautiful analytics dashboard with real-time data visualization.',
      longDescription: 'Features interactive charts, custom widgets, and a drag-and-drop layout system. Built with performance in mind — handles 100k data points smoothly.',
      tech: ['React', 'D3.js', 'GraphQL', 'PostgreSQL'],
      status: 'completed',
      questType: 'main',
      github: 'https://github.com',
    },
    {
      id: 'project-4',
      title: 'Pixel Messenger',
      description: 'A retro-styled messaging app with end-to-end encryption.',
      longDescription: 'Combines nostalgic pixel art aesthetics with modern security. Features real-time messaging, emoji reactions, and voice notes.',
      tech: ['Next.js', 'WebRTC', 'Tailwind CSS', 'Socket.io'],
      status: 'completed',
      questType: 'side',
      github: 'https://github.com',
    },
  ],

  interests: [
    {
      name: 'Basketball',
      emoji: '🏀',
      description: 'Weekend warrior on the court. Nothing beats a good pickup game to clear the mind.',
    },
    {
      name: 'Final Fantasy',
      emoji: '⚔️',
      description: 'From FFVI to FFXVI — the stories, the music, the worlds. A lifelong fan.',
    },
    {
      name: 'Chrono Trigger',
      emoji: '⏰',
      description: 'The greatest RPG ever made. Lavos doesn\'t stand a chance.',
    },
    {
      name: 'Chrono Cross',
      emoji: '🌊',
      description: 'The sequel that became its own legend. That soundtrack is unmatched.',
    },
    {
      name: 'Creative Coding',
      emoji: '🎨',
      description: 'Generative art, shaders, and interactive experiments. Code as a canvas.',
    },
  ],

  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: '📦' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  ],
};
