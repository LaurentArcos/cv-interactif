FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de gestion des dépendances
COPY package.json pnpm-lock.yaml ./

# Installe pnpm
RUN npm install -g pnpm

# Installe les dépendances
RUN pnpm install --frozen-lockfile

# Copie le reste des fichiers
COPY . .

# Compile le projet
RUN pnpm build

# Expose le port
EXPOSE 3000

# Commande de démarrage
CMD ["node", ".next/standalone/server.js"]
