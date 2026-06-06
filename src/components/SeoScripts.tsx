/**
 * SeoScripts — Server Component for JSON-LD Structured Data Injection
 *
 * Drop this into any Next.js layout to inject JSON-LD without
 * touching existing page components. Rendered server-side so
 * search engines can read it.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(
    Array.isArray(data)
      ? { "@context": "https://schema.org", "@graph": data }
      : data,
    null,
    2
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
