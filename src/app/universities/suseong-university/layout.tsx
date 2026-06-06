import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import {
  universitySchema,
  breadcrumbListSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Suseong University — Healthcare, Beauty & Vocational Training in Daegu",
  description:
    "Study at Suseong University in Daegu, South Korea — specialized vocational training in Healthcare, Beauty, Fashion, Engineering & Culinary Arts. Expert placement and visa support for Sri Lankan students via Bright Key Academy.",
  path: "/universities/suseong-university",
  ogType: "website",
  keywords: [
    "Suseong University",
    "study healthcare South Korea",
    "Korean vocational university",
    "beauty school South Korea",
    "culinary arts Korea",
    "fashion design Korea university",
    "Bright Key Academy Suseong",
    "nursing university South Korea",
    "cosmetology school Korea",
  ],
});

export default function SuseongUniversityLayout({
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
            name: "Suseong University",
            alternateName: "수성대학교",
            description:
              "A premier institute in Daegu focused on specialized vocational training, healthcare, beauty, fashion, engineering and culinary arts. Modern facilities include hospital simulation labs, professional salons and commercial kitchens.",
            url: "https://brightkeyacademy.com/universities/suseong-university",
            logo: "https://brightkeyacademy.com/education/logo-2.png",
            address: {
              addressLocality: "Daegu",
              addressCountry: "South Korea",
            },
            foundingDate: "1978",
            numberOfStudents: "5000",
          }),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Universities", path: "/education" },
            {
              name: "Suseong University",
              path: "/universities/suseong-university",
            },
          ]),
        ]}
      />
    </>
  );
}
