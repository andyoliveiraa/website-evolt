export interface CandidateInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  availabilityNote: string;
  workRegime: string;
  bio: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  badgeColor?: string;
}

export interface EducationItem {
  institution: string;
  course: string;
  period: string;
  details: string;
  status: "Concluído" | "Frequência Universitária" | "Em Curso";
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "Web & CMS" | "Automação & Python" | "Design & Multimédia" | "Evolt Special" | "Sistemas & AI";
  impactMetrics: string[];
  link?: string;
  githubUrl?: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    level: "Avançado" | "Intermédio" | "Prático";
    context: string;
  }[];
}

export interface WorkflowNode {
  id: string;
  title: string;
  type: "trigger" | "action" | "output";
  icon: string;
  description: string;
  color: string;
}
