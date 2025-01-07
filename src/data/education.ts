import { Education } from "@/types";

export const education: Education[] = [
  {
    school: "Ecole O'clock",
    degree: "Titre professionnel (TP) de niveau 6, Concepteur Développeur d'Applications, Promo Elfes",
    date: "Septembre 2023 - Avril 2025",
    description: `
      - Formation en alternance.
      - 721h de formation en développement web full stack.
      - Technologies maîtrisées : JavaScript, TypeScript, React, Node.js, PostgreSQL, Docker, GraphQL.
      - Apprentissage des meilleures pratiques en développement et gestion de projet.
    `,
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Docker", "GraphQL"],
    website: "https://oclock.io/formations/cda-alternance",
    logo: "/images/logos/oclock.png",
  },
  {
    school: "Ecole O'clock",
    degree: "Développeur Web et Web Mobile, Promo De Vinci",
    date: "Mars 2022 - Septembre 2022",
    description: `
      - 798h de formation labellisée « Grande École du Numérique ».
      - **Socle (4 mois)** : Frontend (HTML5, CSS3, Sass, Bootstrap, JavaScript, Ajax), Backend (PHP, MySQL, MVC, POO, Apache, Composer), Versioning (Git, GitHub).
      - **Spécialisation (1 mois)** : React.js (Classes et Hooks, JSX, components, lifecycles, npm/yarn, Redux, Router).
      - **Apothéose (1 mois)** : Projet en groupe mettant en pratique les compétences acquises.
    `,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React", "Git"],
    website: "https://oclock.io/formations/developpeur-web-web-mobile",
    logo: "/images/logos/oclock.png",
  },
  {
    school: "Opquast",
    degree: "Certification Opquast, Maîtrise de la qualité en projet web",
    date: "Décembre 2022",
    description: `
      - Niveau avancé : 855/1000 points.
      - Connaissance des bonnes pratiques qualité web.
    `,
    tags: ["Qualité web", "Accessibilité", "SEO"],
    website: "https://www.opquast.com",
    logo: "/images/logos/opquast.jpg",
  },
  {
    school: "Université Paris 8",
    degree: "Licence Professionnelle, Commerce et Logistique international",
    date: "2007 - 2008",
    description: `
      - Formation spécialisée en commerce international et logistique.
    `,
    tags: ["Commerce", "Logistique"],
    website: "https://univ-paris8.fr",
    logo: "/images/logos/paris8.svg",
  },
  {
    school: "Université de Toulon",
    degree: "Licence L.E.A., Langues étrangères appliquées (Anglais - Espagnol)",
    date: "2003 - 2006",
    description: `
      - Études en langues étrangères appliquées à la communication et au commerce.
    `,
    tags: ["Langues", "Communication"],
    website: "https://www.univ-tln.fr",
    logo: "/images/logos/toulon.jpg",
  },
];
