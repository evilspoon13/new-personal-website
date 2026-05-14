export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  summary: string;
  techStack: string[];
  logo?: string;
  link?: { label: string; href: string };
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
}
