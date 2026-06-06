/**
 * =============================================================================
 * BRIGHT KEY ACADEMY — Centralized SEO Configuration
 * =============================================================================
 * Single source of truth for all SEO metadata across the site.
 * Update values here and they propagate everywhere.
 *
 * References (2025-2026 Best Practices):
 * - Google Search Central: https://developers.google.com/search/docs
 * - Schema.org Organization & EducationalOrganization specs
 * - OpenGraph Protocol: https://ogp.me/
 * - JSON-LD for SEO: Google-recommended structured data format
 * =============================================================================
 */

export const SITE_CONFIG = {
  // ── Core Identity ──────────────────────────────────────────────────────
  name: "Bright Key Academy",
  shortName: "BK Academy",
  tagline: "Your Pathway to Excellence in South Korea",
  description:
    "Sri Lanka's premier educational consultancy for South Korean university placements. Expert visa guidance, TOPIK preparation, and end-to-end support for students aspiring to study in Korea.",
  url: "https://brightkeyacademy.com",
  baseUrl: "https://brightkeyacademy.com",

  // ── Organization Details ───────────────────────────────────────────────
  organization: {
    name: "Bright Key Group",
    legalName: "Bright Key (Pvt) Ltd",
    alternateName: ["Bright Key Academy", "BrightKey", "BK Academy"],
    description:
      "Delivering unparalleled excellence across cutting-edge Construction solutions and world-class Education services.",
    url: "https://brightkeyacademy.com",
    logo: "https://brightkeyacademy.com/brightkeyedu.png",
    image: "https://brightkeyacademy.com/og-image.jpg",
    foundingDate: "2024",
    email: "info@brightkey.lk",
    telephone: "+94771337989",
    whatsapp: "94771337989",
    address: {
      streetAddress: "123 Bright Key Tower, Colombo 03",
      addressLocality: "Colombo",
      addressCountry: "LK",
      postalCode: "00300",
    },
    sameAs: [
      "https://www.facebook.com/brightkeyacademy",
      "https://www.instagram.com/brightkeyacademy",
      "https://www.tiktok.com/@brightkeyacademy",
      "https://www.linkedin.com/company/brightkeyacademy",
    ],
  },

  // ── Primary Keywords & Topics ──────────────────────────────────────────
  primaryKeyword: "Study in South Korea",
  keywords: [
    "study in South Korea",
    "South Korea university placement",
    "Sri Lanka education consultancy",
    "Korean visa guidance Sri Lanka",
    "TOPIK exam preparation",
    "study abroad South Korea",
    "Korean university admission",
    "student visa South Korea",
    "GKS scholarship Sri Lanka",
    "Korean language course Sri Lanka",
    "Bright Key Academy",
    "Chosun College of Science & Technology",
    "Suseong University",
    "Daegu Arts University",
    "South Korean universities for international students",
    "study in Korea from Sri Lanka",
  ],

  // ── Social Profiles ────────────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/brightkeyacademy",
    instagram: "https://www.instagram.com/brightkeyacademy",
    tiktok: "https://www.tiktok.com/@brightkeyacademy",
    linkedin: "https://www.linkedin.com/company/brightkeyacademy",
  },

  // ── Language & Locale ──────────────────────────────────────────────────
  locale: "en_US",
  alternateLocales: ["en_US", "si_LK", "ko_KR"],
  defaultLocale: "en_US",

  // ── Verification ───────────────────────────────────────────────────────
  verification: {
    google: "",
    bing: "",
    yandex: "",
    baidu: "",
  },
} as const;

// ── Helper: Full OpenGraph Image Object ───────────────────────────────────
export const OG_IMAGE = {
  url: `${SITE_CONFIG.url}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: SITE_CONFIG.name,
  type: "image/jpeg",
} as const;

// ── Helper: Twitter Image ─────────────────────────────────────────────────
export const TWITTER_IMAGE = {
  url: `${SITE_CONFIG.url}/twitter-image.jpg`,
  width: 1200,
  height: 675,
  alt: SITE_CONFIG.name,
} as const;

// ── Helper: Generate canonical URL ────────────────────────────────────────
export function canonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

// ── Helper: Build standard metadata for any page ──────────────────────────
export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildPageMetadata(seo: PageSEO) {
  const title = `${seo.title} | ${SITE_CONFIG.name}`;
  const description = seo.description || SITE_CONFIG.description;
  const url = canonicalUrl(seo.path);
  const keywords = seo.keywords || SITE_CONFIG.keywords;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: seo.ogType || "website",
      images: [seo.ogImage ? { url: seo.ogImage } : OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [TWITTER_IMAGE],
      creator: "@brightkeyacademy",
      site: "@brightkeyacademy",
    },
    robots: seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ── Routes Map (for sitemap & structured data) ────────────────────────────
export const ROUTES = {
  home: { path: "/", priority: 1.0, changefreq: "weekly" as const },
  education: { path: "/education", priority: 0.9, changefreq: "weekly" as const },
  universities: {
    chosun: {
      path: "/universities/chosun-college",
      priority: 0.85,
      changefreq: "monthly" as const,
    },
    daegu: {
      path: "/universities/daegu-arts-university",
      priority: 0.85,
      changefreq: "monthly" as const,
    },
    suseong: {
      path: "/universities/suseong-university",
      priority: 0.85,
      changefreq: "monthly" as const,
    },
  },
} as const;
