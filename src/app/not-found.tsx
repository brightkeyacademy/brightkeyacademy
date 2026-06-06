import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Bright Key Academy",
  description:
    "The page you are looking for does not exist. Explore Bright Key Academy for South Korean university placements and study abroad guidance.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-blue-100 mb-4 select-none">404</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-500 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/education"
            className="px-8 py-3.5 bg-slate-100 text-slate-700 rounded-full text-sm font-bold hover:bg-slate-200 transition-all duration-300"
          >
            Education Services
          </Link>
        </div>
      </div>
    </main>
  );
}
