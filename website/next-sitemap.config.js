/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://lmnas.com",
  sitemapSize: 10000,
  additionalPaths: async (config) => {
    const result = [];
    result.push({
      loc: "/pricing#faq",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "/#products",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "/#industry",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "https://nectar.lmnas.com/career",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "https://nectar.lmnas.com/contact",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "https://nectar.lmnas.com/free-trail-registraion/new",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "https://nectar.lmnas.com/contact?subject=Enterprise%20Plan%20Enquiry",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    result.push({
      loc: "https://demolens.lmnas.com/",
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    });
    return result;
  },
  generateRobotsTxt: true,
};

