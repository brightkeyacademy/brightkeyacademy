/**
 * =============================================================================
 * BRIGHT KEY ACADEMY — Comprehensive JSON-LD Structured Data
 *
 * Schema types:
 * - EducationalOrganization
 * - WebSite (with Sitelinks Searchbox)
 * - BreadcrumbList
 * - FAQ
 * - VideoObject (for hero video)
 * - Review (for testimonials)
 * - CollegeOrUniversity (for each partner university)
 * - LocalBusiness
 * =============================================================================
 */

import { SITE_CONFIG, canonicalUrl } from "./seo-config";
import { testimonials } from "./testimonials-data";

// ════════════════════════════════════════════════════════════════════════════
// Organization Schema
// ════════════════════════════════════════════════════════════════════════════
export function organizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.organization.name,
    legalName: SITE_CONFIG.organization.legalName,
    alternateName: SITE_CONFIG.organization.alternateName,
    description: SITE_CONFIG.organization.description,
    url: SITE_CONFIG.organization.url,
    logo: SITE_CONFIG.organization.logo,
    image: SITE_CONFIG.organization.image,
    foundingDate: SITE_CONFIG.organization.foundingDate,
    email: SITE_CONFIG.organization.email,
    telephone: SITE_CONFIG.organization.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.organization.address.streetAddress,
      addressLocality: SITE_CONFIG.organization.address.addressLocality,
      addressCountry: SITE_CONFIG.organization.address.addressCountry,
      postalCode: SITE_CONFIG.organization.address.postalCode,
    },
    sameAs: SITE_CONFIG.organization.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.organization.telephone,
        contactType: "customer service",
        areaServed: ["LK", "KR"],
        availableLanguage: ["English", "Sinhala", "Korean"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.organization.telephone,
        contactType: "whatsapp",
        contactOption: "WhatsApp",
        areaServed: ["LK", "KR"],
        availableLanguage: ["English", "Sinhala", "Korean"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Sri Lanka" },
      { "@type": "Country", name: "South Korea" },
    ],
    knowsAbout: [
      "South Korean University Admissions",
      "Student Visa Processing",
      "TOPIK Exam Preparation",
      "International Education Consulting",
      "Study Abroad Programs",
      "GKS Scholarship Guidance",
    ],
  };
}

// ════════════════════════════════════════════════════════════════════════════
// WebSite Schema
// ════════════════════════════════════════════════════════════════════════════
export function webSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    inLanguage: SITE_CONFIG.locale,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ════════════════════════════════════════════════════════════════════════════
// BreadcrumbList Schema
// ════════════════════════════════════════════════════════════════════════════
export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

// ════════════════════════════════════════════════════════════════════════════
// VideoObject Schema (for Hero video)
// ════════════════════════════════════════════════════════════════════════════
export function videoObjectSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Bright Key Academy — Study in South Korea",
    description:
      "Bright Key Academy helps Sri Lankan students study at top universities in South Korea. Expert visa guidance, TOPIK preparation, and end-to-end support.",
    thumbnailUrl: `${SITE_CONFIG.url}/og-image.jpg`,
    uploadDate: "2024-01-01",
    duration: "PT30S",
    contentUrl: `${SITE_CONFIG.url}/hero-video.mp4`,
    embedUrl: `${SITE_CONFIG.url}/hero-video.mp4`,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
  };
}

// ════════════════════════════════════════════════════════════════════════════
// Review Schema (from testimonials data)
// ════════════════════════════════════════════════════════════════════════════
export function reviewSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client Testimonials",
    description: "What our clients say about Bright Key Academy",
    itemListElement: testimonials.map((t, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewBody: t.review,
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
        },
        itemReviewed: {
          "@type": "EducationalOrganization",
          name: SITE_CONFIG.organization.name,
        },
      },
    })),
  };
}

// ════════════════════════════════════════════════════════════════════════════
// FAQ Schema
// ════════════════════════════════════════════════════════════════════════════
export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FAQItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// ════════════════════════════════════════════════════════════════════════════
// CollegeOrUniversity Schema
// ════════════════════════════════════════════════════════════════════════════
export interface UniversityData {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  address: { addressLocality: string; addressCountry: string };
  foundingDate?: string;
  numberOfStudents?: string;
}

export function universitySchema(uni: UniversityData): object {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: uni.name,
    ...(uni.alternateName && { alternateName: uni.alternateName }),
    description: uni.description,
    url: uni.url,
    ...(uni.logo && { logo: uni.logo }),
    ...(uni.image && { image: uni.image }),
    address: {
      "@type": "PostalAddress",
      addressLocality: uni.address.addressLocality,
      addressCountry: uni.address.addressCountry,
    },
    ...(uni.foundingDate && { foundingDate: uni.foundingDate }),
    ...(uni.numberOfStudents && { numberOfStudents: uni.numberOfStudents }),
  };
}

// ════════════════════════════════════════════════════════════════════════════
// LocalBusiness Schema
// ════════════════════════════════════════════════════════════════════════════
export function localBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.organization.name,
    image: SITE_CONFIG.organization.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.organization.address.streetAddress,
      addressLocality: SITE_CONFIG.organization.address.addressLocality,
      addressCountry: SITE_CONFIG.organization.address.addressCountry,
      postalCode: SITE_CONFIG.organization.address.postalCode,
    },
    telephone: SITE_CONFIG.organization.telephone,
    email: SITE_CONFIG.organization.email,
    url: SITE_CONFIG.organization.url,
    geo: { "@type": "GeoCoordinates", latitude: "6.9176", longitude: "79.8612" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };
}

// ════════════════════════════════════════════════════════════════════════════
// Helper: Render JSON-LD as script tag string
// ════════════════════════════════════════════════════════════════════════════
export function renderJsonLd(schema: object | object[]): string {
  return JSON.stringify(
    Array.isArray(schema)
      ? { "@context": "https://schema.org", "@graph": schema }
      : schema,
    null,
    2
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Default: All essential schemas for the home page
// ════════════════════════════════════════════════════════════════════════════
export function defaultStructuredData(): string {
  return renderJsonLd([
    organizationSchema(),
    webSiteSchema(),
    localBusinessSchema(),
    videoObjectSchema(),
    reviewSchema(),
  ]);
}
