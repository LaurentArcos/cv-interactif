/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/cv',
  assetPrefix: '/cv/',
  images: {
    loader: 'default',
    path: '/cv/_next/image',
    domains: ['www.laurentarcos.fr'],
  },
};

module.exports = nextConfig;
