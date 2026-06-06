"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-black text-red-100 mb-4 select-none">500</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
          An unexpected error occurred. Please try again or return to the home
          page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3.5 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-500 transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3.5 bg-slate-100 text-slate-700 rounded-full text-sm font-bold hover:bg-slate-200 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
