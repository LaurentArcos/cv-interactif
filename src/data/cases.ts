import type { Lang } from "./cv";

type T = Record<Lang, string>;
const t = (fr: string, en: string): T => ({ fr, en });

export const caseUi = {
  back: t("Retour au CV", "Back to resume"),
  caseStudy: t("Étude de cas", "Case study"),
  problem: t("Le problème", "The problem"),
  constraints: t("Les contraintes de terrain", "Constraints on the floor"),
  journey: t("Le parcours d’une commande", "The journey of an order"),
  floor: t("Sur le terrain", "On the floor"),
  tech: t("Dans l’outil", "In the tool"),
  safety: t("Fiabiliser le stock", "Keeping stock reliable"),
  modules: t("Ce que le hub couvre aussi", "What else the hub covers"),
  flow: t("Des données brutes à la décision", "From raw data to decisions"),
  questions: t("Les questions auxquelles il répond", "The questions it answers"),
  use: t("Ce que j’en fais", "How I use it"),
  next: t("Lire aussi", "Read next"),
  cart: t("Chariot de picking : le damier rend une erreur de bac visible", "Picking cart: the checkerboard makes a wrong bin visible"),
};

export const hub = {
  title: t("Hub logistique", "Logistics hub"),
  lead: t(
    "L’outil interne de Seagale pour préparer les commandes, suivre les stocks et faire circuler les produits entre l’entrepôt et les boutiques.",
    "Seagale’s internal tool to prepare orders, track stock and move products between the warehouse and the stores.",
  ),
  role: t("Product owner, conception, développement et mise en production", "Product owner, design, development and deployment"),
  stack: ["Next.js", "React", "TypeScript", "Tailwind", "Shopify", "Airtable", "n8n", "Docker", "ZPL"],
  problem: [
    t(
      "Shopify sait vendre et compter le stock. Il ne dit pas comment préparer une commande dans un entrepôt : quel chariot prendre, dans quel bac déposer un article, que faire quand il manque, comment réapprovisionner les boutiques.",
      "Shopify knows how to sell and count stock. It does not say how to prepare an order in a warehouse: which cart to take, which bin an item goes into, what to do when it is missing, how to restock the stores.",
    ),
    t(
      "J’ai d’abord pensé ces process à partir des contraintes de terrain, au contact des équipes entrepôt et retail, puis j’ai développé l’outil qui les porte. Chaque écran part d’un geste réel.",
      "I first designed these processes from the constraints on the floor, working with the warehouse and retail teams, then built the tool that carries them. Every screen starts from a real gesture.",
    ),
  ],
  constraints: [
    { h: t("Préparer debout, sur mobile", "Preparing on foot, on a phone"), p: t("La préparation se fait au téléphone, en se déplaçant. Le parcours mobile a été pensé pour ce geste.", "Preparation happens on a phone, on the move. The mobile flow was designed for that gesture.") },
    { h: t("Imprimer sans poste à côté de soi", "Printing with no computer nearby"), p: t("Les imprimantes ne sont joignables que depuis le poste de l’entrepôt. Les écrans mobiles décident, l’ordinateur imprime.", "Printers can only be reached from the warehouse computer. Mobile screens decide, the computer prints.") },
    { h: t("Des colis de toutes tailles", "Parcels of every size"), p: t("Les commandes sont réparties selon leur poids et leur format. Petits colis et articles encombrants ne partent pas sur le même chariot.", "Orders are split by weight and format. Small parcels and bulky items do not go on the same cart.") },
    { h: t("L’erreur de bac", "The wrong bin"), p: t("Les bacs alternent en damier de couleurs, et l’écran reprend les teintes du chariot. Une erreur se voit sans lire le numéro.", "Bins alternate in a colour checkerboard, and the screen matches the cart’s colours. A mistake shows without reading the number.") },
    { h: t("L’article manquant", "The missing item"), p: t("Si un produit manque au picking, le colis part dans une boîte à problèmes et le manquant reste suivi.", "If an item is missing at picking, the parcel goes into a problem box and the missing item stays tracked.") },
    { h: t("Les envois hors UE", "Shipments outside the EU"), p: t("Ces commandes demandent plusieurs documents douaniers. Leur impression est découpée pour qu’aucun ne se perde.", "These orders need several customs documents. Printing is split so that none gets lost.") },
  ],
  steps: [
    { h: t("Commande reçue", "Order received"), f: t("La commande arrive dans la file des commandes à préparer.", "The order lands in the queue of orders to prepare."), o: t("n8n reçoit l’événement Shopify et synchronise Airtable.", "n8n receives the Shopify event and syncs Airtable.") },
    { h: t("Tri par gabarit", "Sorted by size"), f: t("La commande rejoint les petits colis ou les encombrants.", "The order joins small parcels or bulky items."), o: t("Une règle sur le poids et un tag produit détermine le groupe.", "A rule on weight and a product tag sets the group.") },
    { h: t("Session de picking", "Picking session"), f: t("Le préparateur choisit un chariot, et la session se remplit selon sa capacité.", "The picker chooses a cart, and the session fills to its capacity."), o: t("Chaque commande reçoit un bac, nommé comme sur le chariot.", "Each order gets a bin, named as it is on the cart.") },
    { h: t("Picking", "Picking"), f: t("Les articles sont collectés et déposés dans leur bac depuis le téléphone.", "Items are collected and placed into their bin from the phone."), o: t("L’écran reprend les couleurs du chariot. Un manquant envoie vers la boîte à problèmes.", "The screen matches the cart’s colours. A missing item goes to the problem box.") },
    { h: t("Validation", "Validation"), f: t("La session est contrôlée commande par commande avant l’emballage.", "The session is checked order by order before packing."), o: t("Le hub garde le statut de chaque commande de la session.", "The hub keeps the status of each order in the session.") },
    { h: t("Étiquette et documents", "Label and documents"), f: t("L’étiquette de transport et les documents sortent sur le poste de l’entrepôt.", "The shipping label and documents print at the warehouse computer."), o: t("Les API transporteurs créent l’étiquette, une file d’impression pilote les imprimantes.", "Carrier APIs create the label, a print queue drives the printers.") },
    { h: t("Expédition et suivi", "Shipping and tracking"), f: t("Le colis part et son statut reste visible.", "The parcel leaves and its status stays visible."), o: t("n8n suit les colis, met à jour Shopify et prévient Klaviyo.", "n8n tracks parcels, updates Shopify and notifies Klaviyo.") },
  ],
  safetyIntro: t(
    "Les réassorts et les alertes écrivent directement dans le stock Shopify. Une opération rejouée ou interrompue peut le faire dériver sans que personne ne le voie. J’ai donc superposé plusieurs contrôles.",
    "Restocks and stock alerts write directly to Shopify stock. A replayed or interrupted operation can make it drift without anyone noticing. So I layered several safeguards.",
  ),
  safety: [
    t("Un verrou pour qu’une session ne s’exécute qu’une fois à la fois", "A lock so that a session only runs once at a time"),
    t("Une garde de statut sur les sessions déjà réceptionnées", "A status guard on sessions already received"),
    t("Une clé d’idempotence qui bloque un rejeu à l’identique", "An idempotency key that blocks an identical replay"),
    t("Une trace par ligne pour recalculer ce qu’il reste à faire", "A trace per line to recompute what remains to be done"),
    t("Une lecture de l’état réel de Shopify avant de retirer du stock réservé", "A read of Shopify’s real state before removing reserved stock"),
  ],
  modules: [
    t("Sessions de picking", "Picking sessions"), t("Réassorts boutiques", "Store restocks"), t("Arrivages", "Inbound shipments"), t("Alertes stock", "Stock alerts"),
    t("Inventaires", "Inventories"), t("Étiquettes de transport", "Shipping labels"), t("Retours", "Returns"), t("Retouches", "Alterations"),
    t("Demandes spéciales", "Special requests"), t("Planning", "Planning"),
  ],
};

export const reporting = {
  title: t("Reporting e-commerce", "E-commerce reporting"),
  lead: t(
    "L’application que j’ai créée pour lire d’un coup d’œil les ventes de Seagale, en ligne comme en magasin, et en tirer des décisions.",
    "The app I built to read Seagale’s sales at a glance, online and in stores, and turn them into decisions.",
  ),
  role: t("Conception, développement et analyses business", "Design, development and business analysis"),
  stack: ["Next.js", "React", "TypeScript", "Shopify", "ShopifyQL", "API GraphQL"],
  problem: [
    t(
      "Depuis la migration d’octobre 2025, l’historique des ventes vit dans deux systèmes : Prestashop avant, Shopify après. Le web et les boutiques ont aussi leurs propres logiques.",
      "Since the October 2025 migration, sales history lives in two systems: Prestashop before, Shopify after. The web and the stores also work differently.",
    ),
    t(
      "Pour piloter, il fallait une seule lecture de ces données : comparable d’une période à l’autre, et assez fiable pour décider.",
      "Steering the business needed one reading of this data: comparable from one period to another, and reliable enough to decide on.",
    ),
  ],
  flow: [
    { h: t("Sources", "Sources"), items: [t("Historique Prestashop", "Prestashop history"), t("Commandes Shopify", "Shopify orders"), t("Ventes en boutique", "In-store sales")] },
    { h: t("Unification", "Unification"), items: [t("CA HT avant et après migration", "Revenue before and after migration"), t("Imports historiques exclus", "Historical imports excluded")] },
    { h: t("Indicateurs", "Indicators"), items: [t("Ventes et marges", "Sales and margins"), t("Canaux et boutiques", "Channels and stores"), t("Clients et remises", "Customers and discounts")] },
    { h: t("Décisions", "Decisions"), items: [t("Analyses business", "Business analysis"), t("Stratégie e-commerce", "E-commerce strategy")] },
  ],
  questions: [
    { h: t("Où en est-on ?", "Where do we stand?"), p: t("Chiffre d’affaires, commandes et panier moyen, sur la période de son choix, du jour à l’année.", "Revenue, orders and average basket, over any period, from a day to a year.") },
    { h: t("Web ou boutique ?", "Web or store?"), p: t("Comparaison des canaux et progression de chaque boutique.", "Channel comparison and progress for each store.") },
    { h: t("Qui sont les nouveaux clients ?", "Who are the new customers?"), p: t("Clients comptés par e-mail, sans ceux déjà connus avant la migration.", "Customers counted by email, without those already known before the migration.") },
    { h: t("Que coûtent les remises ?", "What do discounts cost?"), p: t("Remises classées par familles, à partir du détail de chaque commande.", "Discounts sorted into families, from the detail of each order.") },
    { h: t("Quels produits tirent les ventes ?", "Which products drive sales?"), p: t("Meilleures ventes et détail des ventes par produit.", "Best sellers and sales detail by product.") },
    { h: t("Ce mois est-il bon ?", "Is this a good month?"), p: t("Saisonnalité estimée sur tout l’historique, y compris les années incomplètes.", "Seasonality estimated on the whole history, including incomplete years.") },
  ],
  use: t(
    "Je m’appuie sur cet outil pour mes analyses business : comprendre ce qui fonctionne, repérer où agir et nourrir la stratégie. Il donne une base commune aux décisions sur les offres, les remises et les boutiques.",
    "I rely on this tool for my business analysis: understanding what works, spotting where to act and informing strategy. It gives a shared basis for decisions on offers, discounts and stores.",
  ),
};
