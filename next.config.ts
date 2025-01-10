/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/cv',
  assetPrefix: '/cv/',
  images: {
    path: '/cv/_next/image',
    domains: ['www.laurentarcos.fr'], // Ajoute ton domaine ici
  },
};

module.exports = nextConfig;
