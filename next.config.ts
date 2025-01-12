/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/cv',
  assetPrefix: '/cv/',
  images: {
    path: '/cv/_next/image',
    loader: 'default',
  },
};

module.exports = nextConfig;
