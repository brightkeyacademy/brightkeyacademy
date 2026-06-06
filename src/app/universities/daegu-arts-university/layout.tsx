import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import {
  universitySchema,
  breadcrumbListSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Daegu Arts University — Fine Arts, Music & Design in South Korea",
  description:
    "Study at Daegu Arts University in Daegu, South Korea — Korea's premier arts institution. Fine Arts, Music, Film, Dance & Design programs with Bright Key Academy's expert placement guidance for Sri Lankan students.",
  path: "/universities/daegu-arts-university",
  ogType: "website",
  keywords: [
    "Daegu Arts University",
    "study fine arts South Korea",
    "Korean arts university",
    "music university South Korea",
    "film school Korea",
    "design university South Korea",
    "Bright Key Academy Daegu Arts",
    "Korean university arts programs",
    "dance university Korea",
  ],
});

export default function DaeguArtsUniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <JsonLd
        data={[
          universitySchema({
            name: "Daegu Arts University",
            alternateName: "DAU",
            description:
              "South Korea's dedicated arts institution in Chilgok-gun near Daegu. Offers Fine Arts, Music Performance, Film & Media Arts, Dance, Theatre Arts and Design programs with professional-grade studios and international exchange opportunities.",
            url: "https://brightkeyacademy.com/universities/daegu-arts-university",
            logo: "https://brightkeyacademy.com/education/logo-1.png",
            address: {
              addressLocality: "Daegu",
              addressCountry: "South Korea",
            },
            foundingDate: "1992",
            numberOfStudents: "3000",
          }),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Universities", path: "/education" },
            {
              name: "Daegu Arts University",
              path: "/universities/daegu-arts-university",
            },
          ]),
        ]}
      />
    </>
  );
}
