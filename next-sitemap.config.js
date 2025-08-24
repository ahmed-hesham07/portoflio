/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ahmed-hesham.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ahmed-hesham.dev/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customPriority = {
      '/': 1.0,
      '/about': 0.8,
      '/projects': 0.9,
      '/experience': 0.7,
      '/skills': 0.6,
      '/contact': 0.8,
    };

    const customChangefreq = {
      '/': 'weekly',
      '/about': 'monthly',
      '/projects': 'weekly',
      '/experience': 'monthly',
      '/skills': 'monthly',
      '/contact': 'yearly',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || 'monthly',
      priority: customPriority[path] || 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
