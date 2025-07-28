import { Project } from "@/types";

export const projects: Project[] = [
  {
    titleFr: "Worduel",
    titleEn: "Worduel",
    descriptionFr:
      "Jeu de type Wordle en solo ou en duel, projet de fin de formation",
    descriptionEn:
      "A Wordle-like game with solo or duel mode, capstone project",
    image: "/images/projects/worduel.webp",
    link: "https://worduel.fr/",
  },
  {
    titleFr: "Seagale - POS App",
    titleEn: "Seagale - POS App",
    descriptionFr: "Application en React utilisée par les vendeurs en boutique",
    descriptionEn: "React POS Application used by in-store employees",
    image: "/images/projects/posapp.webp",
    link: "https://github.com/LaurentArcos/Cigale-POS-App",
  },
  {
    titleFr: "Assurancedespros.fr",
    titleEn: "Assurancedespros.fr",
    descriptionFr: "Maintenance d'un site Wordpress pour une agence Allianz",
    descriptionEn: "Maintenance of a WordPress site for an Allianz agency",
    image: "/images/projects/allianz.webp",
    link: "https://www.assurancedespros.fr/",
  },
  {
    titleFr: "L.A. Coffeedential",
    titleEn: "L.A. Coffeedential",
    descriptionFr: "Site vitrine pour un Coffee Shop",
    descriptionEn: "A simple showcase site for a Coffee Shop",
    image: "/images/projects/coffee.webp",
    link: "https://lacoffeedential.surge.sh/",
  },
  {
    titleFr: "Seagale - Divers Prestashop",
    titleEn: "Seagale - Various Prestashop Features",
    descriptionFr: `Création de divers outils pour Seagale sur Prestashop, notamment : 
    - Module de programme de parrainage
    - Ajout d'un module de sondage
    - Page FAQ
    - Pages de sélection de Noël
    - Refonte du design du site`,
    descriptionEn: `Creation of various Prestashop tools for Seagale, including:
    - Referral program module
    - survey module added
    - FAQ page
    - Christmas gift selection pages
    - Site design overhaul`,
    image: "/images/projects/seagalepresta.webp",
    link: "",
  },
  {
    titleFr: "Seagale - Hub WMS avec Shopify",
    titleEn: "Seagale - WMS Hub with Shopify",
    descriptionFr: `Développement d'un hub en React logistique en prévision d'une migration vers Shopify. 
    Intégration des API Shopify, Chronopost, Colissimo et DHL. 
    Gestion automatisée des expéditions, génération des étiquettes et suivi des colis.`,
    descriptionEn: `Development of a logistics hub in preparation for a Shopify migration.
    Integration of Shopify, Chronopost, Colissimo, and DHL APIs.
    Automated shipments, label generation, and parcel tracking.`,
    image: "/images/projects/seagaleshopi.webp",
    link: "",
  },
  {
    titleFr: "Seagale - Dashboard d'analyse des résultats du sondage",
    titleEn: "Seagale - Survey Results Analysis Dashboard",
    descriptionFr: `Développement d’un tableau de bord interactif en React permettant d’analyser les réponses du sondage collectées via un module personnalisé PrestaShop. `,
    descriptionEn: `Development of an interactive React dashboard for analyzing survey responses collected via a custom PrestaShop module.`,
    image: "/images/projects/survey.webp",
    link: "https://survey.laurentarcos.fr/",
  },  
  {
    titleFr: "Seagale - Automatisations avec n8n et Airtable",
    titleEn: "Seagale - n8n and Airtable Automations",
    descriptionFr: `Développement d'automatisations pour la gestion des stocks, des commandes et plus avec n8n et Airtable.`,
    descriptionEn: `Development of automations for stock and order management using n8n and Airtable.`,
    image: "/images/projects/n8n.webp",
    link: "", 
  },
  {
    titleFr: "Assistant de Lecture TL;DR",
    titleEn: "TL;DR Reading Assistant",
    descriptionFr: `Application web permettant de résumer automatiquement un texte, un article, une vidéo YouTube ou un fichier.
  Fonctionne avec OpenAI, n8n et supporte plusieurs formats.`,
    descriptionEn: `Web application that summarizes text, articles, YouTube videos, or files automatically.
  Built with OpenAI and n8n, supports multiple formats.`,
    image: "/images/projects/tldr.webp",
    link: "https://laurentarcos.fr/tldr",
  },
  {
    titleFr: "ISS Tracker App",
    titleEn: "ISS Tracker App",
    descriptionFr:
      "Suivi en temps réel de la Station Spatiale Internationale avec la version gratuite de l'API Google Maps",
    descriptionEn:
      "Real-time tracking of the International Space Station using the free Google Maps API",
    image: "/images/projects/iss.webp",
    link: "https://laurentarcosisstracker.surge.sh/",
  },
  {
    titleFr: "Moodboard Graphiste",
    titleEn: "Moodboard for a Graphic Designer",
    descriptionFr: "Site vitrine démo en React pour un portfolio de graphiste",
    descriptionEn: "A React demo site showcasing a graphic designer's portfolio",
    image: "/images/projects/margot.webp",
    link: "https://margotjollyportfolio.surge.sh/",
  },
  {
    titleFr: "Pokédex",
    titleEn: "Pokedex",
    descriptionFr: "Un Pokédex en React créé pour ma nièce",
    descriptionEn: "A pokedex I made for my niece using React",
    image: "/images/projects/pokedex.webp",
    link: "https://pokedexdeclara.surge.sh/",
  },
  {
    titleFr: "App Météo",
    titleEn: "Weather App",
    descriptionFr: "Application météo en temps réel",
    descriptionEn: "Real-time weather application",
    image: "/images/projects/weather.webp",
    link: "http://laurentarcosweatherapp.surge.sh/",
  },
  {
    titleFr: "App Custom SNCF",
    titleEn: "SNCF Custom App",
    descriptionFr: "Application légère pour découvrir Angular. Avec API SNCF.",
    descriptionEn: "Light app to discover Angular. With SNCF API.",
    image: "/images/projects/sncf.webp",
    link: "https://laurentarcos-sncfcustomapp.surge.sh/",
  },
  {
    titleFr: "Trivia Quizz",
    titleEn: "Trivia Quiz",
    descriptionFr: "Jeu de quizz de culture générale intéractif",
    descriptionEn: "Interactive general-knowledge quiz game",
    image: "/images/projects/trivia.webp",
    link: "https://laurentarcostriviaquizz.surge.sh/",
  },
  {
    titleFr: "Tribu",
    titleEn: "Tribu",
    descriptionFr:
      "Réseau social pour expatriés, projet de fin de formation (backend hors service)",
    descriptionEn:
      "A social network for expats, capstone project (backend currently offline)",
    image: "/images/projects/tribu.webp",
    link: "https://tribu.surge.sh/",
  },
  {
    titleFr: "Calculatrice",
    titleEn: "Calculator",
    descriptionFr: "Application calculatrice en ligne",
    descriptionEn: "Online calculator app",
    image: "/images/projects/calculatrice.webp",
    link: "https://laurentarcoscalculatrice.surge.sh/",
  },
  {
    titleFr: "Drapeaux du monde",
    titleEn: "Flags of the World",
    descriptionFr: "Application interactive sur les drapeaux du monde",
    descriptionEn: "Interactive application about world flags",
    image: "/images/projects/flags.webp",
    link: "https://laurentarcosflagsoftheworld.surge.sh/",
  },
  {
    titleFr: "Page d’accueil sur laurentarcos.fr",
    titleEn: "Home Page on laurentarcos.fr",
    descriptionFr: "Petit projet HTML/CSS/JS pour proposer un visuel original (CSS art) et rediriger vers mon CV interactif.",
    descriptionEn: "A small HTML/CSS/JS project showcasing some CSS art and providing a direct link to my interactive CV.",
    image: "/images/projects/homepage.webp",
    link: "https://www.laurentarcos.fr",
  },
];
