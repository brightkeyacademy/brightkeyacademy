"use client";

import { motion, useInView, animate } from "framer-motion";
import { Building2, CalendarDays, ShieldCheck, PlaneTakeoff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// තනි Stat එකක් සඳහා Component එක (Icon එක වමෙන්, Text එක දකුණෙන් - Compact Look)
const AnimatedStatItem = ({ stat, index, isLast }: { stat: any; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(
    (stat.padZero ? "00" : "0") + (stat.suffix || "")
  );

  const triggerAnimation = () => {
    animate(0, stat.numValue, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        let val = Math.floor(latest);
        let formatted = stat.padZero && val < 10 ? `0${val}` : `${val}`;
        setDisplayValue(formatted + (stat.suffix || ""));
      },
    });
  };

  useEffect(() => {
    if (isInView) {
      triggerAnimation();
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
        onMouseEnter={triggerAnimation} 
        // Cute & Compact Inline Style
        className="group relative flex items-center justify-center md:justify-start gap-4 p-3 md:p-4 rounded-2xl hover:bg-white/60 transition-colors duration-300 cursor-pointer w-full"
      >
        {/* Icon (වම් පැත්තේ) */}
        <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-[1rem] flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-sm border border-white/50`}>
          <stat.icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        
        {/* Text Container (දකුණු පැත්තේ) */}
        <div className="flex flex-col text-left">
          {/* Animated Number */}
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} drop-shadow-sm`}>
            {displayValue}
          </h3>
          
          {/* Label */}
          <p className="text-[10px] md:text-xs font-bold text-slate-500 tracking-wider uppercase group-hover:text-slate-800 transition-colors">
            {stat.label}
          </p>
        </div>
      </motion.div>

      {/* Desktop වලදී Item දෙකක් අතරට එන Divider Line එක (අන්තිම එකට එන්නෙ නෑ) */}
      {!isLast && (
        <div className="hidden lg:block w-[1px] h-12 bg-slate-200/60 rounded-full mx-2"></div>
      )}
    </>
  );
};

export default function Stats() {
  const statsData = [
    { 
      id: 1, 
      numValue: 3, 
      padZero: true, 
      suffix: "", 
      label: "Global Partners", 
      icon: Building2, 
      color: "text-blue-600", 
      bg: "bg-blue-100/50",
      gradient: "from-blue-600 to-cyan-500",
    },
    { 
      id: 2, 
      numValue: 1, 
      padZero: true, 
      suffix: "+", 
      label: "Years Experience", 
      icon: CalendarDays, 
      color: "text-emerald-600", 
      bg: "bg-emerald-100/50",
      gradient: "from-emerald-600 to-teal-400",
    },
    { 
      id: 3, 
      numValue: 100, 
      padZero: false, 
      suffix: "%", 
      label: "Visa Guarantee", 
      icon: ShieldCheck, 
      color: "text-violet-600", 
      bg: "bg-violet-100/50",
      gradient: "from-violet-600 to-purple-500",
    },
    { 
      id: 4, 
      numValue: 100, 
      padZero: false, 
      suffix: "+", 
      label: "Visa Success", 
      icon: PlaneTakeoff, 
      color: "text-rose-600", 
      bg: "bg-rose-100/50",
      gradient: "from-rose-600 to-pink-500",
    },
  ];

  return (
    // Partners section එක වගේම gap එක සහ alignment එක
    <section className="relative w-full py-10 md:py-16 bg-white overflow-hidden flex justify-center z-20">
      
      {/* Background glow Optional */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150px] bg-blue-50/50 blur-[80px] -z-10 rounded-full pointer-events-none" />

      {/* Modern Glassmorphism Pill-shaped Container (Partners එකේ වගේමයි) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[95%] xl:w-[90%] bg-slate-50/80 backdrop-blur-md border border-slate-100/80 rounded-[2rem] md:rounded-[3rem] px-6 py-6 md:px-10 md:py-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-500"
        >
          {/* Stats Grid - Mobile: 2x2, Desktop: 1x4 (Inline Row) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 lg:gap-2 w-full">
            {statsData.map((stat, index) => (
              <AnimatedStatItem 
                key={stat.id} 
                stat={stat} 
                index={index} 
                isLast={index === statsData.length - 1} 
              />
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}