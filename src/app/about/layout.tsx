import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import { breadcrumbListSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us — Sri Lanka's Premier Study in South Korea Consultancy",
  description:
    "Learn about Bright Key Academy, Sri Lanka's leading educational consultancy for South Korean university placements. Our mission, vision, and commitment to helping students achieve their dream of studying in Korea.",
  path: "/about",
  keywords: [
    "Bright Key Academy about",
    "Sri Lanka education consultancy about us",
    "study in South Korea consultant Sri Lanka",
    "Bright Key Group",
    "Korean university placement services",
    "education consultancy Colombo",
  ],
});

export default function AboutLayout({
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
          { name: "About Us", path: "/about" },
        ])}
      />
    </>
  );
}
