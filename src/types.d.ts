export interface Experience {
  title: string;
  type: string;
  company: string;
  location?: string;
  date: string;
  description: string;
  tags: string[];
  website?: string | null;
  logo: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  description: string;
  tags: string[];
  website?: string | null;
  logo: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Divers";
}

export interface Project {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  link: string;
}