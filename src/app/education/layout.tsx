import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import { breadcrumbListSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Education Services",
  description:
    "Explore Bright Key Academy's comprehensive education services for studying in South Korea. University placements, visa processing, TOPIK preparation, and post-arrival support for Sri Lankan students.",
  path: "/education",
  ogType: "website",
  keywords: [
    "study in South Korea from Sri Lanka",
    "Korean university placement Sri Lanka",
    "TOPIK exam Sri Lanka",
    "student visa South Korea Sri Lanka",
    "Korean language course Sri Lanka",
    "education consultancy Sri Lanka",
    "study abroad South Korea",
    "Bright Key Academy education services",
  ],
});

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Education", path: "/education" },
        ])}
      />
    </>
  );
}
