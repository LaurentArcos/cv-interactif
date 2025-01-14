/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // domains: ['cv.laurentarcos.fr'],
    unoptimized: true, // Désactive l'optimiseur Next
  },
};

module.exports = nextConfig;
