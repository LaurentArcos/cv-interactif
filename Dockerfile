FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

# ✅ Autorisation du build script de sharp
RUN pnpm dlx pnpm-approve sharp

# Installation des dépendances
RUN pnpm install --frozen-lockfile

# Copie du code source
COPY . .

# Build Next.js
RUN pnpm build

# COPIE SUPPLÉMENTAIRE pour le mode standalone
RUN cp -r .next/static .next/standalone/.next/static
RUN cp -r public .next/standalone/public

EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
