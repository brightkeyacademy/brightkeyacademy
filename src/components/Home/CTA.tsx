"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, Plane, Globe2, GraduationCap } from "lucide-react";

export default function CTA() {
  return (
    // Section එකේ උස ටිකක් අඩු කළා ගාණට blend වෙන්න (py-16 md:py-20)
    <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      
      {/* Container - About/Why Choose Us වල Margins */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Premium Dark Glassmorphism Card - Padding අඩු කරලා Cute කළා */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden px-6 py-12 md:py-16 text-center shadow-2xl shadow-blue-900/10 border border-slate-800"
        >
          {/* ================= Background Decorative Glows ================= */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-transparent blur-[90px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-cyan-500/15 blur-[70px] rounded-full pointer-events-none z-0" />

          {/* ================= Floating Cute Icons (Animations) ================= */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-8 md:top-12 md:left-16 text-blue-400/40 hidden md:block z-0"
          >
            <Plane className="w-10 h-10" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-16 text-violet-400/40 hidden md:block z-0"
          >
            <Globe2 className="w-12 h-12" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-6 md:right-24 -translate-y-1/2 text-cyan-400/30 hidden lg:block z-0"
          >
            <GraduationCap className="w-8 h-8 rotate-12" />
          </motion.div>

          {/* ================= Main Content ================= */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            
            {/* Cute Glowing Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-blue-200 font-medium text-xs md:text-sm mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Let's Make It Happen
            </motion.div>
            
            {/* Powerful Heading - Size එක ගාණට adjust කළා */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-5"
            >
              Your Journey to a World-Class Education{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Starts Here.
              </span>
            </motion.h2>
            
            {/* Paragraph - Size එක සහ margin අඩු කළා */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl"
            >
              Stop worrying about the complex visa processes and university applications. Talk to our experts today and take the first step towards your dream destination.
            </motion.p>

            {/* Action Buttons (Cute & Compact) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-900 rounded-full text-sm md:text-base font-bold flex items-center justify-center gap-2 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgb(255,255,255,0.15)]">
                Talk to an Advisor
                <PhoneCall className="w-4 h-4" />
              </button>
              
              <button className="w-full sm:w-auto px-7 py-3.5 bg-slate-800/60 text-white border border-slate-700 rounded-full text-sm md:text-base font-bold flex items-center justify-center gap-2 hover:bg-slate-700/60 hover:border-slate-500 hover:scale-105 backdrop-blur-sm transition-all duration-300">
                Apply Now for 2026
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}