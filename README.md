# 📋 Cahier des Charges : Projet CV Interactif

## 🎯 **Objectif du Projet**

Créer un site web interactif qui présente mon **CV** sous la forme d'une **Single Page Application (SPA)** avec des animations et des sections dynamiques. Le site doit être **rapide**, **responsive**, et **sécurisé**, tout en offrant une **expérience utilisateur agréable**.

Le projet sera **déployé sur mon Raspberry Pi** et accessible via un sous-domaine personnalisé sécurisé avec **HTTPS**.

---

## 💻 **Stack Technologique**

| **Technologie**   | **Rôle**              | **Pourquoi ?**                                                     |
| ----------------- | --------------------- | ------------------------------------------------------------------ |
| **Next.js**       | Framework frontend    | Pour gérer le rendu statique (SSG) et les interactions dynamiques. |
| **TypeScript**    | Langage               | Pour une meilleure sécurité et maintenabilité du code.             |
| **Tailwind CSS**  | Styling               | Pour un design moderne et responsive.                              |
| **Framer Motion** | Animation             | Pour des transitions fluides et des animations interactives.       |
| **Docker Desktop**| Conteneurisation      | Pour simplifier le déploiement et assurer un environnement standardisé sur Windows. |
| **Docker Compose**| Orchestration         | Pour gérer facilement plusieurs services Docker.                   |
| **PM2**           | Gestion des processus | Pour garder le site en ligne sur le Raspberry Pi.                  |
| **Apache**        | Serveur web           | Déjà installé sur le Raspberry Pi pour servir le site.             |
| **Let's Encrypt** | Certificat SSL        | Pour sécuriser le site avec HTTPS.                                 |

---

## 🛠️ **Fonctionnalités à Implémenter**

### **1. Page principale avec sections dynamiques**

- Le site doit être divisé en plusieurs **sections** :
  - **Profil** (Introduction, titre, contact rapide)
  - **Expériences professionnelles** (avec timeline interactive)
  - **Compétences techniques** (avec filtres dynamiques)
  - **Formations**
  - **Projets** (filtrage par technologie)
  - **Formulaire de contact**

### **2. Animations interactives (Framer Motion)**

- **Transitions fluides** entre les sections.
- **Animations au scroll** pour la timeline des expériences.
- **Animations des boutons et des modales**.

### **3. Dark Mode Toggle**

- Ajouter un bouton permettant de basculer entre les modes **clair** et **sombre**.

### **4. Filtrage dynamique des projets**

- Ajouter des boutons permettant de filtrer les projets par **technologie** (React, TypeScript, etc.).

### **5. Toggle de choix de langue (Français / Anglais)**

- Ajouter un bouton permettant de basculer entre les versions **française** et **anglaise** du site.
- Utiliser les fonctionnalités d'internationalisation de Next.js.

---

## 🖥️ **Architecture du Projet**

```
📁 MonCV
├── 📂 pages
│   ├── 📄 index.tsx           # Page principale
│   ├── 📄 api
│       └── 📄 contact.ts      # API route pour le formulaire de contact
├── 📂 components
│   ├── 📄 Navbar.tsx         # Composant de navigation
│   ├── 📄 Timeline.tsx       # Timeline interactive des expériences
│   ├── 📄 ProjectFilter.tsx  # Filtrage dynamique des projets
│   ├── 📄 DarkModeToggle.tsx # Bouton pour basculer en mode sombre
│   └── 📄 LanguageToggle.tsx # Bouton pour basculer entre les langues
├── 📂 styles
│   └── 📄 globals.css        # Styles globaux avec Tailwind CSS
├── 📄 Dockerfile             # Configuration Docker pour le projet
├── 📄 docker-compose.yml     # Orchestration des services Docker
├── 📄 next.config.js         # Configuration Next.js
├── 📄 tsconfig.json          # Configuration TypeScript
└── 📄 package.json           # Dépendances du projet
```

---

## 📦 **Déploiement sur le Raspberry Pi avec Docker Desktop sur Windows**

### **Étapes à suivre sur Windows avec Docker Desktop :**

1. **Créer les fichiers Dockerfile et docker-compose.yml.**
2. **Ouvrir Docker Desktop** et s'assurer qu'il fonctionne correctement.
3. **Construire les images Docker** depuis le terminal PowerShell ou CMD :
   ```powershell
   docker-compose build
   ```
4. **Lancer les containers Docker** :
   ```powershell
   docker-compose up -d
   ```
5. **Configurer Apache sur le Raspberry Pi** pour servir le site via un sous-domaine.

6. **Activer le HTTPS avec Let's Encrypt** sur le Raspberry Pi :
   ```bash
   sudo certbot --apache -d cv.laurentarcos.fr
   ```

---

## ✅ **Checklist des Fonctionnalités Finales**

| Fonctionnalité                | Statut    |
| ----------------------------- | --------- |
| Page principale avec sections | ✅ Fait   |
| Timeline interactive          | ✅ Fait   |
| Dark Mode Toggle              | ✅ Fait   |
| Filtrage des projets          | ✅ Fait   |
| Formulaire de contact         | ✅ Fait   |
| Toggle de choix de langue     | ✅ Fait   |
| Dockerisation du projet       | ✅ Fait   |
| Déploiement sur Raspberry Pi  | ✅ Fait   |

---

## 📝 **Objectifs supplémentaires (Bonus)**

- Ajouter une **page de blog** simple pour partager des articles.
- Intégrer une **section "Testimonials"** avec des animations.
- Ajouter des **tests unitaires** avec **Jest** pour sécuriser le code.
- Ajouter un **formulaire de contact intégré** qui utilise une **API route Next.js** pour envoyer les messages.
  
```
