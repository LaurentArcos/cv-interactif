import { Education } from "@/types";

export const education: Education[] = [
  {
    school: "Ecole O'clock",
    degreeFr: "Titre professionnel (TP) de niveau 6, Concepteur Développeur d'Applications, Promo Elfes",
    degreeEn: "Professional Degree (Level 6), Application Developer, 'Elfes' Cohort",
    dateFr: "Septembre 2023 - Avril 2025",
    dateEn: "September 2023 - April 2025",
    descriptionFr: `
      - Formation en alternance.
      - 721h de formation en développement web full stack.
      - Installer et configurer son environnement de travail en fonction du projet.
      - Analyser les besoins et maquetter une application.
      - Définir l’architecture logicielle d’une application.
      - Concevoir et mettre en place une base de données relationnelle.
      - Développer des composants d’accès aux données SQL et NoSQL.
      - Développer des composants métier.
      - Développer une interface utilisateur.
      - Contribuer à la gestion d’un projet informatique.
      - Préparer et exécuter les plans de tests d’une application.
      - Préparer et documenter le déploiement d’une application.
      - Contribuer à la mise en production dans une démarche DevOps.
    `,
    descriptionEn: `
      - Work-study program.
      - 721 hours of full-stack web development training.
      - Set up and configure the work environment based on the project.
      - Analyze requirements and create application mockups.
      - Define the software architecture of an application.
      - Design and implement a relational database.
      - Develop data-access components for SQL and NoSQL databases.
      - Develop business logic components.
      - Develop a user interface.
      - Contribute to IT project management.
      - Prepare and execute test plans for an application.
      - Prepare and document application deployment.
      - Assist with production release in a DevOps-oriented approach.
    `,
    tags: [
      "JavaScript", "TypeScript", "React", "Node.js", "Docker", "GraphQL", "PostgreSQL",
      "MongoDB", "NestJS", "Sequelize", "Apollo", "React Native", "DevOps", "Jest",
      "Cypress", "Agile", "CI/CD", "GitHub Actions", "Svelte", "Redux", "WebSocket",
      "API REST", "API GraphQL", "Microservices", "OAuth", "Web Security", "Clean Code",
      "TDD", "BDD", "Swagger", "Cahier des charges", "Tailwind CSS", "Figma", "Responsive Design",
      "Web Performance", "Accessibility", "SEO", "Nginx", "Express.js"
    ],
    website: "https://oclock.io/formations/cda-alternance",
    logo: "/images/logos/oclock.png",
  },
  {
    school: "Ecole O'clock",
    degreeFr: "Développeur Web et Web Mobile, Promo De Vinci",
    degreeEn: "Web & Mobile Developer, 'De Vinci' Cohort",
    dateFr: "Mars 2022 - Septembre 2022",
    dateEn: "March 2022 - September 2022",
    descriptionFr: `
      La formation Développeur Web de l'école O'Clock, labellisée « Grande École du Numérique » (798h de formation au total), se décompose ainsi :
  
      Le « Socle » (4 mois) apportant les bases du développement :
      - Frontend : HTML5, CSS3 (Sass, Bootstrap), JavaScript Vanilla, Ajax
      - Backend : PHP, MySQL, MVC, POO, Apache, Composer
      - Versioning : Git, GitHub
      - Environnement : Linux Ubuntu (en VM), Visual Studio Code
  
      La « Spécialisation » (1 mois) sur React.js ⚛️ :
      - Classes et Hooks, JSX, components, lifecycles, containers
      - npm/yarn, syntaxe ES2015, ESLint, Redux, Router
  
      L'« Apothéose » (1 mois) :
      - Projet en groupe de fin de formation permettant de mettre en pratique toutes les connaissances acquises pour l'élaboration d'un projet professionnel.
    `,
    descriptionEn: `
      The Web Developer training at O'Clock school, labeled "Grande École du Numérique" (798 hours in total), is structured as follows:
  
      The "Core" (4 months) providing development foundations:
      - Frontend: HTML5, CSS3 (Sass, Bootstrap), Vanilla JavaScript, Ajax
      - Backend: PHP, MySQL, MVC, OOP, Apache, Composer
      - Versioning: Git, GitHub
      - Environment: Linux Ubuntu (VM), Visual Studio Code
  
      The "Specialization" (1 month) on React.js ⚛️:
      - Classes and Hooks, JSX, components, lifecycles, containers
      - npm/yarn, ES2015 syntax, ESLint, Redux, Router
  
      The "Final Project" (1 month):
      - Group project to apply all the knowledge acquired during the training to create a professional project.
    `,
    tags: [
      "HTML5", "CSS3", "Sass", "Bootstrap", "JavaScript", "PHP", "MySQL", "MVC", "POO",
      "Git", "GitHub", "React", "Redux", "React Router", "NPM", "Yarn", "Ajax", "Apache",
      "Composer", "UI/UX", "Responsive Design", "Cross-Browser Compatibility", "Teamwork",
      "Version Control", "Problem Solving", "Project Management", "Debugging", "Testing",
      "Linux", "Ubuntu", "Visual Studio Code", "ESLint", "API Integration"
    ],
    website: "https://oclock.io/formations/developpeur-web-web-mobile",
    logo: "/images/logos/oclock.png",
  },
  
  {
    school: "Opquast",
    degreeFr: "Certification Opquast, Maîtrise de la qualité en projet web",
    degreeEn: "Opquast Certification, Mastering Web Project Quality",
    dateFr: "Décembre 2022",
    dateEn: "December 2022",
    descriptionFr: `
      - Niveau avancé : 855/1000 points.
      - Connaissance des bonnes pratiques qualité web.
    `,
    descriptionEn: `
      - Advanced Level: 855/1000 points.
      - Knowledge of best practices in web quality.
    `,
    tags: [
      "Quality Assurance", "Web Best Practices", "Accessibility", "SEO", "User Experience",
      "Web Performance", "GDPR", "Security", "Web Standards", "Semantic HTML", "Content Strategy",
      "Error Management", "Forms", "Internationalization", "Mobile-First Design"
    ],
    website: "https://www.opquast.com",
    logo: "/images/logos/opquast2.jpg",
  },
  {
    school: "Institut d'Etudes Européennes - Université Paris 8",
    degreeFr: "Licence Professionnelle, Commerce et Logistique international",
    degreeEn: "Professional Bachelor's, International Trade & Logistics",
    dateFr: "2007 - 2008",
    dateEn: "2007 - 2008",
    descriptionFr: `
      - Formation spécialisée en commerce international et logistique.
    `,
    descriptionEn: `
      - Specialized program in international trade and logistics.
    `,
    tags: [
      "International Trade", "incoterms", "Logistics", "Supply Chain Management", "Import/Export",
      "Customer Relationship Management", "Business Communication", "Negotiation",
      "International Marketing", "Financial Analysis", "Risk Management"
    ],
    website: "https://iee.univ-paris8.fr/",
    logo: "/images/logos/paris.jpg",
  },
  {
    school: "Université de Toulon",
    degreeFr: "Licence L.E.A., Langues étrangères appliquées (Anglais - Espagnol)",
    degreeEn: "Bachelor's in Applied Foreign Languages (English - Spanish)",
    dateFr: "2003 - 2006",
    dateEn: "2003 - 2006",
    descriptionFr: `
      - Études en langues étrangères appliquées à la communication et au commerce.
    `,
    descriptionEn: `
      - Studies in foreign languages applied to communication and business.
    `,
    tags: [
      "English", "Español", "Communication", "Business Correspondence", "Translation",
      "International Business", "Cultural Awareness", "Public Speaking", "Marketing",
      "Intercultural Skills", "Presentation Skills"
    ],
    website: "https://formations.univ-tln.fr/fr/offre-de-formation/licence-XA/licence-langues-etrangeres-appliquees-LOY3H2X5.html",
    logo: "/images/logos/toulon.jpg",
  },
];
