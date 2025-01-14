/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cv.laurentarcos.fr'],
  },
};

module.exports = nextConfig;
