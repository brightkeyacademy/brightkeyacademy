/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://brightkeyacademy.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/api/*", "/_next/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin/"] },
      
      // 2025/2026 GEO (Generative Engine Optimization) - Allowing Top AI Bots to Crawl & Recommend the Site
      { userAgent: "GPTBot", allow: "/" },           // ChatGPT Crawler
      { userAgent: "ChatGPT-User", allow: "/" },     // ChatGPT Custom Actions
      { userAgent: "Google-Extended", allow: "/" },  // Google Gemini AI Crawler
      { userAgent: "Anthropic-ai", allow: "/" },     // Anthropic Claude Crawler
      { userAgent: "PerplexityBot", allow: "/" },    // Perplexity AI Search Crawler
      { userAgent: "CCBot", allow: "/" },            // Common Crawl (AI Training Dataset)
    ],
    additionalSitemaps: ["https://brightkeyacademy.com/sitemap.xml"],
  },
  transform: async (_config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/education": 0.9,
      "/universities/chosun-college": 0.85,
      "/universities/daegu-arts-university": 0.85,
      "/universities/suseong-university": 0.85,
    };
    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};