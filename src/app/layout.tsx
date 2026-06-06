import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { JsonLd } from "@/components/SeoScripts";
import {
  organizationSchema,
  webSiteSchema,
  localBusinessSchema,
  videoObjectSchema,
  reviewSchema,
} from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Bright Key Academy | Study in South Korea — Sri Lanka's Premier Education Consultancy",
    template: "%s | Bright Key Academy",
  },
  description:
    "Bright Key Academy is Sri Lanka's trusted educational consultancy for South Korean university placements. Expert visa guidance, TOPIK preparation, and end-to-end support for students aspiring to study in Korea. 100% visa success rate.",
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
  metadataBase: new URL("https://brightkeyacademy.com"),
  openGraph: {
    title: "Bright Key Academy | Study in South Korea",
    description:
      "Sri Lanka's premier educational consultancy for South Korean university placements. Expert visa guidance, TOPIK preparation, and end-to-end support.",
    url: "https://brightkeyacademy.com",
    siteName: "Bright Key Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bright Key Academy - Study in South Korea",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Key Academy | Study in South Korea",
    description:
      "Sri Lanka's premier educational consultancy for South Korean university placements. Expert visa guidance and TOPIK preparation.",
    images: ["/twitter-image.jpg"],
    creator: "@brightkeyacademy",
    site: "@brightkeyacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://brightkeyacademy.com",
    languages: {
      "en-US": "https://brightkeyacademy.com",
    },
  },
  verification: {
    google: "G-MZWS795D34",
    yandex: "",
    yahoo: "",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon.png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "education",
  creator: "Bright Key Group",
  publisher: "Bright Key Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "Bright Key Academy",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "LK",
    "geo.placename": "Colombo",
    "geo.position": "6.9176;79.8612",
    ICBM: "6.9176, 79.8612",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZWS795D34"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZWS795D34');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <JsonLd
          data={[
            organizationSchema(),
            webSiteSchema(),
            localBusinessSchema(),
            videoObjectSchema(),
            reviewSchema(),
          ]}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
