import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import {
  universitySchema,
  breadcrumbListSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Chosun College of Science & Technology — Engineering & IT in Gwangju",
  description:
    "Study at Chosun College of Science & Technology in Gwangju, South Korea. Engineering, IT, Nursing programs with Bright Key Academy's expert placement and visa guidance for Sri Lankan students.",
  path: "/universities/chosun-college",
  ogType: "website",
  keywords: [
    "Chosun College of Science & Technology",
    "study engineering in South Korea",
    "Gwangju university Sri Lanka",
    "Korean IT college",
    "study nursing South Korea",
    "South Korea technical college",
    "Bright Key Academy Chosun College",
    "Korean university STEM programs",
  ],
});

export default function ChosunCollegeLayout({
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
            name: "Chosun College of Science & Technology",
            alternateName: "Chosun College",
            description:
              "Specializing in advanced technical training and industry-collaborative education with high employment rates. Programs in Computer Engineering, IT, Mechanical, Electrical, Applied Chemistry and Health Sciences.",
            url: "https://brightkeyacademy.com/universities/chosun-college",
            logo: "https://brightkeyacademy.com/education/logo-3.png",
            address: {
              addressLocality: "Gwangju",
              addressCountry: "South Korea",
            },
            foundingDate: "1963",
            numberOfStudents: "6000",
          }),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Universities", path: "/education" },
            {
              name: "Chosun College of Science & Technology",
              path: "/universities/chosun-college",
            },
          ]),
        ]}
      />
    </>
  );
}
