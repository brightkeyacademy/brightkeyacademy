"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Zap, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  // Why Choose Us Cards සඳහා දත්ත
  const reasons = [
    {
      id: 1,
      title: "Expert Visa Guidance",
      description: "Our visa success rate speaks for itself. We handle the complex paperwork so you can focus on your future.",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-100/50",
      border: "group-hover:border-blue-200",
      shadow: "group-hover:shadow-blue-900/5",
    },
    {
      id: 2,
      title: "Global Network",
      description: "Direct partnerships with top-tier globally recognized institutes to ensure you get the best education.",
      icon: Globe2,
      color: "text-emerald-600",
      bg: "bg-emerald-100/50",
      border: "group-hover:border-emerald-200",
      shadow: "group-hover:shadow-emerald-900/5",
    },
    {
      id: 3,
      title: "Fast-Track Processing",
      description: "Optimized application workflows and direct university contacts to get your offer letters faster.",
      icon: Zap,
      color: "text-violet-600",
      bg: "bg-violet-100/50",
      border: "group-hover:border-violet-200",
      shadow: "group-hover:shadow-violet-900/5",
    },
    {
      id: 4,
      title: "Post-Arrival Support",
      description: "We don't stop at the visa. We guide you on accommodation and settling into your new home abroad.",
      icon: HeartHandshake,
      color: "text-rose-600",
      bg: "bg-rose-100/50",
      border: "group-hover:border-rose-200",
      shadow: "group-hover:shadow-rose-900/5",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Container - About එකේ වගේම Left/Right Margins මෙතන තියෙනවා */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Desktop වලදී Left/Right වෙන් වෙන්න Grid එකක් පාවිච්චි කරලා තියෙන්නේ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ===================== LEFT COLUMN: Sticky Text Area ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm mb-6 w-max shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              The Bright Key Advantage
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6">
              Why Students & Parents <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Trust Us.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We take the guesswork out of studying abroad. From choosing the right university to landing safely in your dream destination, we are with you every step of the way with 100% transparency.
            </p>

            <div className="flex items-center gap-4">
               <div className="flex -space-x-4">
                  {/* Decorative User Avatars - (Optional: replace with real images if needed) */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600">
                    +100
                  </div>
               </div>
               <p className="text-sm font-medium text-slate-600">
                 Successful <br/> Student Visas
               </p>
            </div>
          </motion.div>


          {/* ===================== RIGHT COLUMN: Feature Cards Grid ===================== */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className={`group relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-500 cursor-default ${reason.border} ${reason.shadow} hover:shadow-2xl`}
              >
                {/* Background Hover Glow Effect for Cards */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${reason.bg} ${reason.color} group-hover:scale-110 transition-transform duration-500`}>
                    <reason.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}