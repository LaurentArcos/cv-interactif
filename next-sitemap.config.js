/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cv.laurentarcos.fr',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
};