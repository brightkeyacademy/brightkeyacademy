"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { id: 1, name: "University of Excellence", logo: "/partners/daeguartsuniversity.jpg" },
    { id: 2, name: "Global Tech Institute", logo: "/partners/daeguartsuniversity.jpg" },
    { id: 3, name: "Royal Academy", logo: "/partners/daeguartsuniversity.jpg" },
  ];

  return (
    // py-8 දීලා gap එක ගාණට හැදුවා. Background එක සුදු පාටම දුන්නා Hero එකට blend වෙන්න.
    <section className="relative w-full py-8 md:py-12 bg-white overflow-hidden flex justify-center">
      
      {/* Modern Glassmorphism Pill-shaped Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] max-w-5xl bg-slate-50/80 backdrop-blur-md border border-slate-100 rounded-[2.5rem] px-8 py-6 md:py-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Area (Left Side) */}
          <div className="text-center md:text-left flex-shrink-0">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-1">
              Trusted By
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-slate-800">
              Global Partner Institutions
            </h2>
          </div>

          {/* Divider Line (Desktop only) */}
          <div className="hidden md:block w-[1px] h-12 bg-slate-200 rounded-full"></div>

          {/* Logos Grid (Right Side / Inline) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 sm:gap-12 md:gap-16 w-full">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {/* Logo Wrapper - Height එක ගාණට control කරලා තියෙන්නේ 'podi line' look එක එන්න */}
                <div className="relative h-10 sm:h-12 w-32 sm:w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}