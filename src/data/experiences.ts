import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Développeur Full Stack",
    company: "SEAGALE",
    location: "Toulon, France",
    date: "Octobre 2023 - Présent",
    description: `
      - Création du programme de parrainage sur boutique en ligne Prestashop.
      - Développement de plusieurs applications en React + Express.
      - Création d'une application utilisée pour les ventes en magasin.
      - Gestion de routes API en PHP avec le Webservice API Prestashop.
      - Gestion de routes API en TypeScript avec l'API Shopify.
    `,
    tags: ["Prestashop", "React", "Express", "API", "TypeScript", "PHP", "SQL", "Swagger"],
    website: "https://seagale.fr",
    logo: "/images/logos/seagale.png",
  },
  {
    title: "Développeur Web Fullstack - Concepteur d'application",
    company: "Freelance",
    location: "Hyères, France",
    date: "Octobre 2022 - Présent",
    description: `
      - Maintenance de sites WordPress pour des clients divers.
      - Création d'applications web sur mesure en React.
      - Développement de projets divers, notamment des outils internes et des API personnalisées.
      - Veille technologique constante et apprentissage de nouvelles technologies.
    `,
    tags: ["WordPress", "React", "JavaScript", "TypeScript", "Express", "API"],
    website: "https://github.com/LaurentArcos",
    logo: "",
  },
  {
    title: "Concepteur Développeur d'Applications",
    company: "Worduel",
    date: "Octobre 2024 - Décembre 2024",
    description: `
      - Projet de fin de formation.
      - Développement d'un jeu en ligne multijoueur basé sur le principe de Wordle.
      - Utilisation de technologies modernes comme React, Node.js, et GraphQL.
    `,
    tags: ["React", "Node.js", "GraphQL", "Apollo", "Docker", "Tailwind CSS", "TypeScript"],
    website: "https://www.worduel.fr",
    logo: "/images/logos/worduel.png",
  },
  {
    title: "Développeur Web Front-end",
    company: "Tribu",
    location: "Hyères, France",
    date: "Août 2022 - Septembre 2022",
    description: `
      - Développement front-end pour un réseau social destiné aux expatriés français.
      - Lead développeur Front-end sur le projet.
      - Présentation du projet sur YouTube.
      - Participation à la mise en œuvre de l'UX design et des fonctionnalités interactives.
    `,
    tags: ["Vue.js", "SCSS", "UX Design", "JavaScript", "React"],
    website: "https://www.tribu.com",
    logo: "/images/logos/tribu.png",
  },
  {
    title: "Area Manager Prêt-à-Porter",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",
    date: "Juillet 2018 - Décembre 2021",
    description: `
      - Responsable secteur pour les boutiques multimarques des régions Grand-Est, Bourgogne, Est de l'Île-de-France et DOM-TOM.
      - Gestion du portefeuille clients et prospection de nouveaux partenaires.
      - Présentation des collections, négociation des budgets et saisie des commandes en showroom.
      - Animation de rendez-vous clients à distance (DOM-TOM).
      - Création et gestion d'opérations commerciales pour booster les ventes.
      - Suivi des livraisons et des paiements clients avec les services logistique et comptabilité.
    `,
    tags: ["Gestion de portefeuille", "Prospection", "Relation client", "Mode", "Vente B2B"],
    website: null,
    logo: "/images/logos/esprit.png",
  },
  {
    title: "Area Manager Bodywear",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",
    date: "Avril 2017 - Juillet 2018",
    description: `
      - Gestion des boutiques de lingerie en France métropolitaine et DOM-TOM.
      - Animation des ventes et suivi des performances des clients.
      - Gestion des commandes, livraisons, litiges et retours.
    `,
    tags: ["Gestion commerciale", "Logistique", "Relation client", "Mode"],
    website: null,
    logo: "/images/logos/esprit.png",
  },
  {
    title: "Assistant Commercial et Logistique",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",
    date: "Juin 2012 - Avril 2017",
    description: `
      - Gestion de l'administration des ventes pour les partenaires franchisés et multimarques.
      - Saisie des commandes, suivi des livraisons et gestion des litiges.
      - Création et mise à jour des comptes clients dans la base de données.
      - Assistance aux clients pour les commandes de réassort et les opérations spéciales.
      - Analyse et reporting des données de commandes et de livraisons.
      `,
      tags: ["Administration des ventes", "Logistique", "Service client", "Analyse de données"],
    website: null,
    logo: "/images/logos/esprit.png",
  },
  {
    title: "Office Manager - Chargé d'Opération et de Gestion",
    company: "DERMEO",
    location: "Paris, France",
    date: "Février 2011 - Mai 2012",
    description: `
      - Tâches administratives diverses en relation directe avec les dirigeants de la société.
      - Administration des ventes : gestion des commandes, factures et suivi des paiements.
      - Relation avec l'expert-comptable : préparation des documents comptables.
      - Gestion RH : établissement des contrats de travail, conventions de stage, gestion de la paie, gestion des fins de contrat et soldes de tout compte.
      - Relation avec les fournisseurs : gestion des paiements, des commandes et des litiges.
      - Collaboration avec les banques et les assureurs pour les démarches administratives.
    `,
    tags: ["Administration des ventes", "Ressources Humaines", "Relation fournisseurs", "Comptabilité"],
    website: null,
    logo: "/images/logos/dermeo.jpg",
  },
  {
    title: "Assistant Commercial Export",
    company: "CRIOM",
    location: "Boulogne-Billancourt, France",
    date: "Mars 2008 - Janvier 2011",
    description: `
      - Gestion des clients et fournisseurs pour l'export de papeterie, fournitures de bureau, mobilier et vaisselle.
      - Suivi des commandes des clients situés dans les DOM-TOM, en Afrique francophone et au Proche-Orient.
      - Transmission des commandes aux fournisseurs en France, Allemagne, Italie, Pays-Bas, Chine et Inde.
      - Administration des ventes : création de devis, factures pro forma et définitives.
      - Suivi logistique des livraisons : gestion des contraintes douanières, Incoterms, bons de livraison, attestations douanières et documents de transport.
      - Création de catalogues produits pour les clients.
      - Support aux commerciaux terrain pour les tâches administratives et commerciales.
    `,
    tags: ["Export", "Logistique", "Relation client", "Administration des ventes", "Commerce international"],
    website: null,
    logo: "",
  },
];
