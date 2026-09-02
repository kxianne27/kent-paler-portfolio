export interface ProjectProgress {
  completed: string[];
  inDevelopment: string[];
  planned: string[];
}

export interface Project {
  slug: string;

  title: string;
  subtitle: string;

  client: string;
  category: string;

  overview: string;

  challenge:
    | string
    | {
        title: string;
        items: string[];
      }[];

  solution: string;

  impact: string[];

  technologies: string[];

  modules?: string[];

  responsibilities?: string[];

  architecture?: string;

  role: string;

  year: string;

  featured: boolean;

  image?: string;

  status?: "completed" | "under-development" | "planned";

  progress?: ProjectProgress;
}
