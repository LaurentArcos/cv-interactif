import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    // Titre (FR / EN)
    titleFr:
      "Développeur Full Stack & Responsable Marketing, Tech et E-Commerce",
    titleEn:
      "Full Stack Developer & Head of Marketing, Tech and E-Commerce",
    type: "dev",
    company: "SEAGALE — CDI",
    location: "Toulon, France (hybride)",

    // Date (FR / EN)
    dateFr: "Novembre 2025 - Présent",
    dateEn: "November 2025 - Present",

    // Description (FR / EN)
    descriptionFr: `
    - Migration Prestashop vers Shopify : cadrage fonctionnel, choix des applications, suivi de la reprise de données et de la mise en production.

    - Product Owner et développeur principal du Seagale Hub (WMS / logistique / stocks) en React, TypeScript et Tailwind, connecté aux API Shopify et Airtable.

    - Seagale Hub : gestion des préparations de commandes, des sessions de picking, des problèmes de stocks et des flux entre entrepôt et boutiques.

    - Suivi et évolution continue de l'outil au contact quotidien des équipes entrepôt et retail.

    - Conception et développement de l'application Zapptax x Seagale : gestion des commandes et des flux liés à la détaxe.

    - Conception et développement d'une application de reporting e-commerce basée sur les données Shopify : chiffre d'affaires, marges, canaux, comparaison boutiques physiques et web.

    - Conception et développement d'une application de répartition des stocks au sein de l'entrepôt (allocation entre emplacements et zones internes).

    - Conception et développement d'une application de suivi des stocks matières (tissus, boutons, zips) détenus chez nos fournisseurs, donnant aux équipes une visibilité en amont de la production.

    - Workflows et automatisations n8n : synchronisations Shopify vers Airtable, mouvements de stocks, notifications et automatisations métiers.

    - Génération automatisée des étiquettes de transport via les API transporteurs.

    - Génération d'images et de vidéos par IA intégrée aux workflows n8n.

    - Administration système et DevOps des applications internes : déploiement, mises à jour, supervision et maintenance (Next.js, Node.js, Docker).

    - Responsable marketing et e-commerce Shopify : participation à la stratégie e-commerce (offres, animations commerciales, parcours client).

    - Optimisation du tunnel de conversion et de l'expérience utilisateur sur la boutique Shopify.

    - Conception et gestion des flows d'emails marketing et transactionnels sur Klaviyo : bienvenue, panier abandonné, post-achat, réactivation, confirmations de commande et d'expédition.

    - Segmentation de la base clients, création des campagnes et suivi des performances (taux d'ouverture, de clic et revenus attribués).

    - Coordination entre les équipes marketing, retail et logistique autour des outils digitaux.

    - Référent Baback : pilotage de la stratégie et de la mise en œuvre opérationnelle des retours e-commerce, interlocuteur principal du partenaire et responsable du paramétrage de la solution.

    - Choix et configuration des transporteurs, pilotage des flux logistiques entre entrepôt, boutiques et clients.
  `,
    descriptionEn: `
    - Prestashop to Shopify migration: functional scoping, app selection, data migration follow-up and go-live.

    - Product Owner and lead developer of the Seagale Hub (WMS / logistics / inventory) built with React, TypeScript and Tailwind, connected to the Shopify and Airtable APIs.

    - Seagale Hub: order preparation, picking sessions, stock issue handling and flows between warehouse and stores.

    - Continuous monitoring and iteration on the tool, in daily contact with warehouse and retail teams.

    - Design and development of the Zapptax x Seagale app: order handling and flows related to tax-free shopping.

    - Design and development of an e-commerce reporting app built on Shopify data: revenue, margins, channels, physical stores vs. web.

    - Design and development of a warehouse stock allocation app (distribution across internal locations and zones).

    - Design and development of a raw-material tracking app (fabrics, buttons, zips) held at our suppliers, giving teams upstream visibility before production.

    - n8n workflows and automations: Shopify to Airtable syncs, stock movements, notifications and business automations.

    - Automated shipping label generation through carrier APIs.

    - AI-generated images and videos integrated into n8n workflows.

    - System administration and DevOps for internal applications: deployment, updates, monitoring and maintenance (Next.js, Node.js, Docker).

    - Head of Shopify marketing and e-commerce: contribution to the e-commerce strategy (offers, campaigns, customer journey).

    - Conversion funnel and user experience optimization on the Shopify store.

    - Design and management of marketing and transactional email flows in Klaviyo: welcome, abandoned cart, post-purchase, win-back, order and shipping confirmations.

    - Customer base segmentation, campaign creation and performance tracking (open rate, click rate, attributed revenue).

    - Coordination between marketing, retail and logistics teams around digital tools.

    - Baback referent: ownership of the e-commerce returns strategy and its operational rollout, main point of contact for the partner and owner of the platform configuration.

    - Carrier selection and configuration, management of logistics flows between warehouse, stores and customers.
  `,

    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Shopify",
      "API GraphQL",
      "API Rest",
      "Airtable",
      "n8n",
      "Klaviyo",
      "Email marketing",
      "Docker",
      "DevOps",
      "IA générative",
      "WMS",
      "Logistique",
      "Product Ownership",
      "E-commerce",
      "Marketing digital",
      "CRO",
    ],
    website: "https://seagale.fr",
    logo: "/images/logos/seagale.webp",
  },
  {
    titleFr: "Développeur Full Stack",
    titleEn: "Full Stack Developer",
    type: "dev",
    company: "SEAGALE — CDD",
    location: "Toulon, France (hybride)",

    dateFr: "Mai 2025 - Octobre 2025",
    dateEn: "May 2025 - October 2025",

    descriptionFr: `
    - Préparation de la migration Prestashop vers Shopify : structuration des données et conception des premiers outils connectés à l'API Shopify.

    - Conception des bases du futur hub logistique et de gestion des stocks.

    - Automatisations avec n8n et Airtable : mouvements de stocks, synchronisations, génération d'images et de vidéos par IA.

    - Développement de plusieurs applications internes en React et TypeScript, dont l'application POS utilisée pour les ventes en boutique (API Prestashop).

    - Développement de routes API en PHP avec le Webservice Prestashop (POS, commandes, clients, stocks).

    - Maintenance et refonte graphique du site e-commerce Prestashop seagale.fr.

    - Mise en place du programme de parrainage sur la boutique en ligne Prestashop.

    - Création d'un module de sondage post-achat pour Prestashop et d'un outil React d'analyse des résultats.
  `,
    descriptionEn: `
    - Preparation of the Prestashop to Shopify migration: data structuring and design of the first tools connected to the Shopify API.

    - Design of the foundations of the future logistics and inventory hub.

    - Automations with n8n and Airtable: stock movements, syncs, AI-generated images and videos.

    - Development of several internal applications in React and TypeScript, including the POS app used for in-store sales (Prestashop API).

    - Development of PHP API routes with the Prestashop Webservice (POS, orders, customers, stock).

    - Maintenance and visual redesign of the seagale.fr Prestashop e-commerce site.

    - Implementation of the referral program on the Prestashop online store.

    - Creation of a post-purchase survey module for Prestashop and a React tool to analyze the results.
  `,

    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "PHP",
      "SQL",
      "Prestashop",
      "Shopify",
      "API Rest",
      "n8n",
      "Airtable",
      "IA générative",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
    ],
    website: "https://seagale.fr",
    logo: "/images/logos/seagale.webp",
  },
  {
    titleFr: "Développeur Full Stack (alternance)",
    titleEn: "Full Stack Developer (apprenticeship)",
    type: "dev",
    company: "SEAGALE — Alternance",
    location: "Toulon, France",

    dateFr: "Septembre 2023 - Avril 2025",
    dateEn: "September 2023 - April 2025",

    descriptionFr: `
    - Alternance réalisée en parallèle du titre professionnel Concepteur Développeur d'Applications (École O'clock).

    - Développement d'une application Point de Vente (POS) utilisée en magasin, en React, Express, PHP et API Prestashop.

    - Développement de routes API en PHP avec le Webservice Prestashop (POS, commandes, clients, stocks).

    - Développement de plusieurs applications internes en React et TypeScript.

    - Refonte complète du frontend du site seagale.fr : modernisation du design et optimisation des performances.

    - Mise en place du programme de parrainage sur la boutique en ligne Prestashop.

    - Création d'un module de sondage post-achat pour Prestashop et d'un dashboard React pour en analyser les réponses.

    - Développement d'un module FAQ dynamique pour améliorer l'accès à l'information.

    - Création d'un module de sélection de Noël.

    - Automatisation de plusieurs tâches internes et flux de travail via n8n et Airtable, réduisant le temps de gestion manuelle.
  `,
    descriptionEn: `
    - Apprenticeship completed alongside the Application Developer professional degree (O'clock school).

    - Development of a Point of Sale (POS) application used in store, with React, Express, PHP and the Prestashop API.

    - Development of PHP API routes with the Prestashop Webservice (POS, orders, customers, stock).

    - Development of several internal applications in React and TypeScript.

    - Complete frontend redesign of seagale.fr: modernized design and optimized performance.

    - Implementation of the referral program on the Prestashop online store.

    - Creation of a post-purchase survey module for Prestashop and a React dashboard to analyze the responses.

    - Development of a dynamic FAQ module to improve access to information.

    - Creation of a Christmas gift selection module.

    - Automation of internal tasks and workflows with n8n and Airtable, reducing manual workload.
  `,

    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "PHP",
      "SQL",
      "Prestashop",
      "API Rest",
      "Swagger",
      "n8n",
      "Airtable",
      "Make",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
    ],
    website: "https://seagale.fr",
    logo: "/images/logos/seagale.webp",
  },
  {
    titleFr: "Développeur Fullstack - Concepteur d'Applications",
    titleEn: "Fullstack Developer - Application Designer",
    type: "dev",
    company: "Freelance",
    location: "Hyères, France",

    dateFr: "Mars 2022 - Présent",
    dateEn: "March 2022 - Present",

    descriptionFr: `
      - Maintenance de sites WordPress, dont assurancedespros.fr pour une agence Allianz.

      - Création d'applications web sur mesure en React et Next.js.

      - Développement d'outils internes et d'API personnalisées.

      - Conception, développement et hébergement de ce CV interactif en Next.js, TypeScript et Tailwind, déployé sur un Raspberry Pi 5 avec Docker et GitHub Actions.

      - Développement de TL;DR, un assistant de lecture qui résume automatiquement un texte, un article, une vidéo YouTube ou un fichier (OpenAI et n8n).

      - Veille technologique constante et apprentissage de nouvelles technologies.
    `,
    descriptionEn: `
      - Maintenance of WordPress sites, including assurancedespros.fr for an Allianz agency.

      - Creation of custom web applications with React and Next.js.

      - Development of internal tools and custom APIs.

      - Design, development and self-hosting of this interactive CV in Next.js, TypeScript and Tailwind, deployed on a Raspberry Pi 5 with Docker and GitHub Actions.

      - Development of TL;DR, a reading assistant that automatically summarizes text, articles, YouTube videos or files (OpenAI and n8n).

      - Constant tech watch and continuous learning of new technologies.
    `,

    tags: [
      "React",
      "Node.js",
      "Docker",
      "Next.js",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Express",
      "API",
      "WordPress",
      "Prestashop",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
      "GraphQL",
      "shadcn/ui",
      "OpenAI",
      "n8n",
      "Raspberry Pi",
      "GitHub Actions",
    ],
    website: "https://github.com/LaurentArcos",
    logo: "/images/logos/logola.webp",
  },
  {
    titleFr: "Concepteur Développeur d'Applications",
    titleEn: "Application Designer & Developer",
    type: "dev",
    company: "Worduel",

    // Pas de location indiqué, on laisse éventuellement vide ou on en ajoute un si besoin
    // location: "",

    dateFr: "Octobre 2024 - Décembre 2024",
    dateEn: "October 2024 - December 2024",

    descriptionFr: `
      - Projet de fin de formation.

      - Développement d'un jeu en ligne multijoueur basé sur le principe de Wordle.

      - Utilisation de technologies modernes comme React, Node.js, et GraphQL.
    `,
    descriptionEn: `
      - Capstone project.

      - Development of an online multiplayer game inspired by Wordle.

      - Use of modern technologies such as React, Node.js, and GraphQL.
    `,

    tags: [
      "React",
      "Node.js",
      "GraphQL",
      "Apollo",
      "Docker",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "CI/CD",
    ],
    website: "https://www.worduel.fr",
    logo: "/images/logos/worduel.webp",
  },
  {
    titleFr: "Développeur Web Front-end",
    titleEn: "Front-End Web Developer",
    type: "dev",
    company: "Tribu",
    location: "Paris, France",

    dateFr: "Août 2022 - Septembre 2022",
    dateEn: "August 2022 - September 2022",

    descriptionFr: `
      - Développement front-end pour un réseau social destiné aux expatriés français.

      - Lead développeur Front-end sur le projet.

      - Présentation du projet sur YouTube.

      - Participation à la mise en œuvre de l'UX design et des fonctionnalités interactives.
    `,
    descriptionEn: `
      - Front-end development for a social network aimed at French expats.

      - Served as Lead Front-End Developer on the project.

      - Project showcased on YouTube.

      - Contributed to UX design and interactive features.
    `,

    tags: ["React", "SCSS", "UX Design", "JavaScript"],
    website: "https://tribu.surge.sh/",
    logo: "/images/logos/tribu.webp",
  },
  {
    titleFr: "Area Manager Prêt-à-Porter",
    titleEn: "Area Manager (Fashion Retail)",
    type: "sales",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",

    dateFr: "Juillet 2018 - Décembre 2021",
    dateEn: "July 2018 - December 2021",

    descriptionFr: `
      - Responsable secteur pour les boutiques multimarques des régions Grand-Est, Bourgogne, Est de l'Île-de-France et DOM-TOM.

      - Suivi du portefeuille clients existant et prospection de nouveaux partenaires via tournées terrain et l'outil Fashop.

      - Rendez-vous clients et prospects en showroom pendant les périodes de ventes : présentation des collections, négociation des budgets et saisie des commandes.

      - Calcul des objectifs de vente et suivi des performances personnelles et des clients.

      - Animation de rendez-vous à distance : clients DOM-TOM et réassorts hors périodes de ventes.

      - Création et mise en place d'opérations commerciales (SWAP, Buy&Get, Call Days, Crazy Days) pour augmenter les budgets clients et booster les sell-out.

      - Suivi des livraisons et des règlements clients avec les services comptabilité, logistique et ADV.

      - Veille marché et concurrence, maîtrise des conditions commerciales (RFA, RFS).

      - Préparation, prospection et ventes lors d'événements et de salons professionnels.
    `,
    descriptionEn: `
      - Regional manager for multi-brand stores across Grand-Est, Bourgogne, eastern Île-de-France, and French overseas territories.

      - Managed the existing client portfolio and prospected new partners through field tours and the Fashop tool.

      - Held showroom meetings with clients and prospects during selling periods: collection presentations, budget negotiation and order entry.

      - Defined sales targets and monitored performance for both personal and client metrics.

      - Hosted remote meetings: overseas clients and restock orders outside selling periods.

      - Created and rolled out commercial operations (SWAP, Buy&Get, Call Days, Crazy Days) to grow client budgets and boost sell-out.

      - Coordinated deliveries and customer payments with the accounting, logistics and sales administration teams.

      - Monitored market and competitor activity, applied commercial terms (volume and settlement rebates).

      - Prepared and ran prospecting and sales at trade events and fairs.
    `,

    tags: [
      "Gestion de portefeuille",
      "Prospection",
      "Relation client",
      "Mode",
      "Vente B2B",
      "Animation commerciale",
      "Analyse de données",
    ],
    website: null,
    logo: "/images/logos/esprit.webp",
  },
  {
    titleFr: "Area Manager Bodywear",
    titleEn: "Area Manager (Bodywear)",
    type: "sales",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",

    dateFr: "Avril 2017 - Juillet 2018",
    dateEn: "April 2017 - July 2018",

    descriptionFr: `
      - Responsable secteur pour les boutiques de lingerie en France métropolitaine et DOM-TOM.

      - Animation des ventes et suivi des performances des clients.

      - Gestion des commandes, livraisons, litiges et retours.
    `,
    descriptionEn: `
      - Oversaw the lingerie retail sector in mainland France and overseas territories.

      - Boosted sales and tracked client performance.

      - Managed orders, deliveries, disputes, and returns.
    `,

    tags: [
      "Gestion de portefeuille",
      "Prospection",
      "Relation client",
      "Mode",
      "Vente B2B",
      "Animation commerciale",
      "Analyse de données",
    ],
    website: null,
    logo: "/images/logos/esprit.webp",
  },
  {
    titleFr: "Assistant Commercial et Logistique",
    titleEn: "Commercial & Logistics Assistant",
    type: "sales",
    company: "Esprit",
    location: "Boulogne-Billancourt, France",

    dateFr: "Juin 2012 - Avril 2017",
    dateEn: "June 2012 - April 2017",

    descriptionFr: `
      - Gestion de l'administration des ventes pour les partenaires franchisés et multimarques.

      - Saisie des commandes, suivi des livraisons et gestion des litiges.

      - Création et mise à jour des comptes clients dans la base de données.

      - Saisie et validation des commandes des franchisés en showroom, annulations et transferts si nécessaire.

      - Création des matrices de saisie de commandes sur Excel.

      - Traitement des demandes de retours de marchandises et création des avoirs pour articles manquants.

      - Assistance aux clients pour les commandes de réassort B-SHOP et NOOS (télévente et relances lors d'opérations spéciales).

      - Extraction et analyse des états de commandes et de livraisons depuis le système BI interne.
    `,
    descriptionEn: `
      - Managed sales administration for franchised and multi-brand partners.

      - Entered orders, tracked deliveries, and handled disputes.

      - Created and updated client accounts in the database.

      - Entered and validated franchisee orders in the showroom, including cancellations and transfers when needed.

      - Built order-entry matrices in Excel.

      - Processed goods return requests and issued credit notes for items missing on delivery.

      - Assisted clients with B-SHOP and NOOS restock orders (telesales and follow-up during special operations).

      - Extracted and analyzed order and delivery reports from the internal BI system.
    `,

    tags: [
      "Administration des ventes",
      "Logistique",
      "Service client",
      "Analyse de données",
      "Reporting",
      "Mode",
      "Vente B2B",
      "Gestion de litiges",
    ],
    website: null,
    logo: "/images/logos/esprit.webp",
  },
  {
    titleFr: "Office Manager - Chargé d'Opération et de Gestion",
    titleEn: "Office Manager - Operations & Management Coordinator",
    type: "sales",
    company: "DERMEO",
    location: "Paris, France",

    dateFr: "Février 2011 - Mai 2012",
    dateEn: "February 2011 - May 2012",

    descriptionFr: `
      - Tâches administratives diverses en relation directe avec les dirigeants de la société.

      - Administration des ventes : gestion des commandes, factures et suivi des paiements.

      - Relation avec l'expert-comptable : préparation des documents comptables.

      - Gestion RH : établissement des contrats de travail, conventions de stage, gestion de la paie, gestion des fins de contrat et soldes de tout compte.

      - Relation avec les fournisseurs : gestion des paiements, des commandes et des litiges.

      - Collaboration avec les banques et les assureurs pour les démarches administratives.
    `,
    descriptionEn: `
      - Handled various administrative tasks in direct collaboration with company directors.

      - Managed sales administration: orders, invoices, and payment follow-up.

      - Coordinated with the external accountant to prepare financial documents.

      - Handled HR tasks: drafted employment contracts and internship agreements, managed payroll, end-of-contract processes, and final settlements.

      - Oversaw supplier relations: payments, orders, and dispute resolution.

      - Worked with banks and insurers for administrative procedures.
    `,

    tags: [
      "Administration des ventes",
      "Ressources Humaines",
      "Relation fournisseurs",
      "Comptabilité",
      "Gestion administrative",
      "Gestion de litiges",
    ],
    website: null,
    logo: "/images/logos/dermeo.webp",
  },
  {
    titleFr: "Assistant Commercial Export",
    titleEn: "Export Sales Assistant",
    type: "sales",
    company: "CRIOM",
    location: "Boulogne-Billancourt, France",

    dateFr: "Mars 2008 - Février 2011",
    dateEn: "March 2008 - February 2011",

    descriptionFr: `
      - Gestion des clients et fournisseurs pour l'export de papeterie, fournitures de bureau, mobilier et vaisselle.

      - Suivi des commandes des clients situés dans les DOM-TOM, en Afrique francophone et au Proche-Orient.

      - Transmission des commandes aux fournisseurs en France, Allemagne, Italie, Pays-Bas, Chine et Inde.

      - Administration des ventes : création de devis, factures pro forma et définitives.

      - Suivi logistique des livraisons : gestion des contraintes douanières, Incoterms, bons de livraison, attestations douanières et documents de transport.

      - Création de catalogues produits pour les clients.

      - Support aux commerciaux terrain pour les tâches administratives et commerciales.
    `,
    descriptionEn: `
      - Handled clients and suppliers for the export of stationery, office supplies, furniture, and tableware.

      - Managed orders for customers in French overseas territories, Francophone Africa, and the Middle East.

      - Forwarded orders to suppliers in France, Germany, Italy, the Netherlands, China, and India.

      - Oversaw sales administration: drafting quotes, pro forma, and final invoices.

      - Supervised logistics of deliveries: customs constraints, Incoterms, delivery notes, customs certificates, and transport documents.

      - Created product catalogs for clients.

      - Provided administrative and commercial support to field sales teams.
    `,
    tags: [
      "Export",
      "Logistique",
      "Relation client",
      "Administration des ventes",
      "Commerce international",
      "Incoterms",
    ],
    website: null,
    logo: "",
  },
];
