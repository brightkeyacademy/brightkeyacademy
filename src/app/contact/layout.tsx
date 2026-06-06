import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/SeoScripts";
import { breadcrumbListSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us — Study in South Korea with Bright Key Academy",
  description:
    "Get in touch with Bright Key Academy, Sri Lanka's trusted education consultancy for South Korean university placements. Call, email, WhatsApp or visit our Colombo office. Free consultation.",
  path: "/contact",
  keywords: [
    "contact Bright Key Academy",
    "study in South Korea consultant Sri Lanka",
    "Korean university help Sri Lanka",
    "education consultancy Colombo contact",
    "student visa South Korea inquiry",
    "Bright Key Academy WhatsApp",
    "free study abroad consultation Sri Lanka",
  ],
});

export default function ContactLayout({
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
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
