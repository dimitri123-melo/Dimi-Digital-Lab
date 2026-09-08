import { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'digital',
    title: 'DIGITAL MARKETING',
    titleFr: 'MARKETING DIGITAL',
    icon: 'megaphone',
    skills: [
      { name: 'Digital Strategy', level: 'core' },
      { name: 'Social Media Management', level: 'core' },
      { name: 'TikTok Growth', level: 'core' },
      { name: 'Content Architecture', level: 'core' },
      { name: 'Campaign Planning', level: 'proficient' },
      { name: 'Product Marketing', level: 'proficient' },
    ],
  },
  {
    id: 'creative',
    title: 'AI CREATIVE STUDIO',
    titleFr: 'STUDIO CRÉATIF IA',
    icon: 'palette',
    skills: [
      { name: 'AIGC Production', level: 'core' },
      { name: 'AI Image Synthesis', level: 'core' },
      { name: 'AI Video Generation', level: 'proficient' },
      { name: 'Creative Direction', level: 'proficient' },
      { name: 'Short-Form Video', level: 'core' },
      { name: 'Product Visualization', level: 'proficient' },
    ],
  },
  {
    id: 'development',
    title: 'WEB DEVELOPMENT',
    titleFr: 'DÉVELOPPEMENT WEB',
    icon: 'code-2',
    skills: [
      { name: 'Frontend Architecture', level: 'core' },
      { name: 'Responsive Web Design', level: 'core' },
      { name: 'E-Commerce Platforms', level: 'core' },
      { name: 'Web Applications', level: 'core' },
      { name: 'UI / Design Systems', level: 'core' },
      { name: 'Web Performance & SEO', level: 'proficient' },
    ],
  },
  {
    id: 'technology',
    title: 'SOFTWARE & BACKEND',
    titleFr: 'LOGICIEL & BACKEND',
    icon: 'cpu',
    skills: [
      { name: 'Full-Stack Integration', level: 'proficient' },
      { name: 'Java & Spring Boot', level: 'proficient' },
      { name: 'RESTful API Engineering', level: 'proficient' },
      { name: 'Relational Database / MySQL', level: 'proficient' },
      { name: 'PHP Ecosystem', level: 'proficient' },
      { name: 'Kotlin Development', level: 'working' },
    ],
  },
];
