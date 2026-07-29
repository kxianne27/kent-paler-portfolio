export interface Project {
  slug: string;

  title: string;

  subtitle: string;

  overview: string;

  challenge: {
    title: string;
    items: string[];
  }[];

  solution: string;

  impact: string[];

  technologies: string[];

  role: string;

  year: string;

  featured: boolean;

  image?: string;

  client?: string;

  category?: string;
}
