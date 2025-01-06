export interface Experience {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string;
  tags: string[];
  website?: string | null;
  icon?: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  description: string;
  tags: string[];
  website?: string | null;
  icon?: string;
}
