# Utilise une image Node.js stable comme base
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de gestion des dépendances
COPY package.json pnpm-lock.yaml ./

# Installe pnpm
RUN npm install -g pnpm

# Installe les dépendances du projet
RUN pnpm install --frozen-lockfile

# Copie le reste des fichiers du projet
COPY . .

# Compile le projet Next.js en mode production
RUN pnpm build --no-lint

# Définit la variable d'environnement pour le port d'écoute
ENV PORT=3000

# Expose le port 3000 utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application en production
CMD ["pnpm", "start"]
