export interface Experience {
  titleFr: string;
  titleEn: string;
  type: "dev" | "sales" | "management" | "other";
  company: string;
  location?: string;
  dateFr: string;
  dateEn: string;
  descriptionFr: string;
  descriptionEn: string;
  tags: string[];
  website?: string | null;
  logo: string;
}

export interface Education {
  school: string;
  degreeFr: string;
  degreeEn: string;
  dateFr: string;
  dateEn: string;
  descriptionFr: string;
  descriptionEn: string;
  tags: string[];
  website?: string | null;
  logo: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Divers" | "SoftSkills";
}

export interface Project {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  link: string | null;
  tags: string[];
}

export interface AboutMe {
  titleFr: string;
  titleEn: string;
  textFr: string;
  textEn: string;
}
