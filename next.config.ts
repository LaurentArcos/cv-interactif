/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/cv',
  assetPrefix: '/cv/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    path: '/cv/_next/image',
    domains: ['www.laurentarcos.fr'],
  },
};

module.exports = nextConfig;
