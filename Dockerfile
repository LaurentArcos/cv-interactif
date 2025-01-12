# Utilise une image Node.js comme base
FROM node:18-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Installe pnpm
RUN npm install -g pnpm

# Installe les dépendances
RUN pnpm install

# Copie le reste des fichiers du projet
COPY . .

# Compile le projet Next.js
RUN pnpm build --no-lint

# Définit le port d'écoute
EXPOSE 3000

# Commande pour lancer le serveur
CMD ["pnpm", "start"]

