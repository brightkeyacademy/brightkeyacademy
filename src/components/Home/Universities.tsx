"use client";

import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Universities() {
  // දැනට අනිත් නම් දන්නේ නැති නිසා ඔයා කිව්ව විදියටම Daegu Arts University එක 3 පාරක් දැම්මා. 
  // (පස්සේ නම/ෆොටෝස් වෙනස් කරගන්න පුළුවන්)
  const universities = [
    {
      id: 1,
      name: "Daegu Arts University",
      location: "Gyeongsangbuk-do, South Korea",
      campusImg: "/partners/daeguartsuniversity.jpg", 
      logo: "/partners/daeguartsuniversity.jpg", 
      rating: "4.9",
      features: [
        "Top-Tier Arts & Design Programs",
        "High Visa Success Rate",
        "International Student Support",
      ],
    },
    {
      id: 2,
      name: "Daegu Arts University",
      location: "Gyeongsangbuk-do, South Korea",
      campusImg: "/partners/daeguartsuniversity.jpg",
      logo: "/partners/daeguartsuniversity.jpg",
      rating: "4.8",
      features: [
        "Top-Tier Arts & Design Programs",
        "High Visa Success Rate",
        "International Student Support",
      ],
    },
    {
      id: 3,
      name: "Daegu Arts University",
      location: "Gyeongsangbuk-do, South Korea",
      campusImg: "/partners/daeguartsuniversity.jpg",
      logo: "/partners/daeguartsuniversity.jpg",
      rating: "4.9",
      features: [
        "Top-Tier Arts & Design Programs",
        "High Visa Success Rate",
        "International Student Support",
      ],
    },
  ];

  return (
    // ඔයා කිව්ව විදියටම Force Pure White Background (bg-white)
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Decorative Glow Elements - සුදු bg එකේ ලස්සනට පේන්න පොඩි premium glow එකක් */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />

      {/* Container - About, Why Choose Us වල තිබ්බ හරියටම ගැලපෙන Margins! */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-semibold text-sm mb-6 shadow-sm">
            <GraduationCap className="w-4 h-4" />
            Study In South Korea
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Our Top Partner <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Universities
            </span>
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl text-lg">
            We have partnered with globally recognized institutions to provide you with the best educational opportunities and a smooth visa process.
          </p>
        </motion.div>

        {/* University Cards Grid (Mobile: 1, Tablet: 2, Desktop: 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              // Premium Card Style on White BG
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(59,130,246,0.12)] hover:border-blue-100/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Inner Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

              {/* Top Banner Image */}
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden z-10">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={uni.campusImg}
                  alt={`${uni.name} Campus`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100/50">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-800">{uni.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative p-8 pt-12 flex-grow flex flex-col z-10">
                
                {/* Floating Logo */}
                <div className="absolute -top-10 left-8 w-20 h-20 bg-white rounded-2xl shadow-md border border-slate-100 p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-20">
                  <div className="relative w-full h-full">
                    <Image
                      src={uni.logo}
                      alt={`${uni.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {uni.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-slate-500 mb-6">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="text-sm font-medium">{uni.location}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {uni.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Button */}
                <button className="w-full py-4 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 border border-slate-100 hover:border-blue-600 shadow-sm">
                  Explore University
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}