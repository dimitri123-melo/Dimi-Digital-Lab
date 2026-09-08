export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  nameFr?: string;
  description: string;
  descriptionFr?: string;
  deliverables: string;
  deliverablesFr?: string;
  targetAudience: string;
  targetAudienceFr?: string;
  outcome: string;
  outcomeFr?: string;
  tools: string[];
  icon: string;
  proofId?: string;
  proofSrc?: string;
}

export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  titleFr?: string;
  subtitle: string;
  subtitleFr?: string;
  description: string;
  descriptionFr?: string;
  heroProofId?: string;
  heroProofSrc?: string;
  services: Service[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  titleFr?: string;
  category: 'digital-marketing' | 'ai-creative' | 'web-development' | 'software';
  categoryLabel: string;
  categoryLabelFr?: string;
  proofLabel: string;
  proofLabelFr?: string;
  proofId: string;
  description: string;
  descriptionFr?: string;
  objective: string;
  objectiveFr?: string;
  role: string;
  roleFr?: string;
  services: string[];
  servicesFr?: string[];
  technologies: string[];
  solution: string;
  solutionFr?: string;
  outcome: string;
  outcomeFr?: string;
  images: ProjectImage[];
  client: string;
  featured: boolean;
  caseStudyUrl?: string;
}

export interface SkillItem {
  name: string;
  level: 'core' | 'proficient' | 'working';
}

export interface SkillGroup {
  id: string;
  title: string;
  titleFr?: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  details: string[];
  detailsFr?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
