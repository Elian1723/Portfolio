export interface Project {
  id: string;
  title: string;
  badges: string[];
  description: {
    en: string;
    es: string;
  };
  githubUrl?: string;
  projectUrl?: string;
  imageUrl: string;
}
