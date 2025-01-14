FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copie du code source
COPY . .

# Build Next.js
RUN pnpm build

# COPIE SUPPLÉMENTAIRE pour le mode standalone
RUN cp -r .next/static .next/standalone/.next/static

EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
