export interface Project {
  id: string;
  title: string;
  badges: string[];
  description: string;
  githubUrl?: string;
  projectUrl?: string;
  imageUrl: string;
}
