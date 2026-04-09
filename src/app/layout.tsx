import type { Metadata } from "next";
// 1. අලුත් Cute & Modern Premium Font එක Import කරගන්නවා
import { Outfit } from "next/font/google"; 
import "./globals.css";

// 2. Font එක Configure කිරීම (Outfit කියන්නේ 2026 ට ගැළපෙන අතිශය ආකර්ෂණීය ෆොන්ට් එකක්)
const mainFont = Outfit({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Bright Key Academy | Your Journey Abroad",
  description: "We help students find the right university and secure their visa without the complications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. mainFont.className එක body එකට දැම්මම මුළු වෙබ්සයිට් එකටම (Hero එකටත් එක්කම) 
        මේ අලුත් ලස්සන ෆොන්ට් එක අදාළ වෙනවා. අනිත් classes මුකුත් වෙනස් කරේ නෑ.
      */}
      <body className={`${mainFont.className} ${mainFont.variable} bg-slate-50 text-slate-900 antialiased selection:bg-blue-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}