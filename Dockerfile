# Dockerfile

# Étape 1 : Construire l'application
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

# Étape 2 : Lancer le serveur Next.js
FROM node:18 AS runner
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]