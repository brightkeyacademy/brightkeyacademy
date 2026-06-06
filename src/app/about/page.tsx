"use client";

import { motion } from "framer-motion";
import { Compass, Target, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import AcademyNavbar from "@/components/Education/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AcademyNavbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mb-6 shadow-sm uppercase tracking-widest"
            >
              <Compass className="w-3.5 h-3.5" />
              About Us
            </motion.div>
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6"
            >
              We Are Bright Key
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Academy
              </span>
            </motion.h1>
            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl font-medium"
            >
              Sri Lanka's premier educational consultancy, dedicated to helping ambitious students unlock world-class opportunities at top South Korean universities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative w-full -mt-16 z-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "3+", label: "University Partners", color: "text-blue-600" },
              { value: "100%", label: "Visa Success Rate", color: "text-emerald-600" },
              { value: "50+", label: "Students Placed", color: "text-cyan-600" },
              { value: "1+", label: "Years Experience", color: "text-violet-600" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <p className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target, title: "Our Mission",
                text: "To unlock limitless potential through a future-focused education, empowering students with the character and critical thinking to achieve greatness.",
                gradient: "from-blue-600 to-indigo-600", bg: "bg-blue-50", border: "border-blue-100",
              },
              {
                icon: Globe2, title: "Our Vision",
                text: "To cultivate globally-minded leaders who navigate a changing world with empathy, innovation, and a drive for progress.",
                gradient: "from-cyan-600 to-blue-500", bg: "bg-cyan-50", border: "border-cyan-100",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.2, 0.65, 0.3, 1] }}
                  className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
                  </div>
                  <h3 className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient} mb-4`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative w-full pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-sm font-medium max-w-xl mx-auto">
              The principles that guide everything we do for our students' success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Integrity", text: "Complete transparency in every process from application to arrival." },
              { icon: Target, title: "Excellence", text: "Uncompromising quality in guidance, documentation, and support." },
              { icon: Globe2, title: "Global Vision", text: "Cultivating world-ready graduates with international perspective." },
              { icon: Compass, title: "Guidance", text: "Dedicated mentorship through every step of your academic journey." },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-slate-950 rounded-[2.5rem] overflow-hidden px-6 py-16 text-center border border-slate-800"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-transparent blur-[90px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 font-medium">
                Take the first step toward studying in South Korea. Our team is ready to guide you.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-white text-slate-900 rounded-full text-sm font-bold flex items-center gap-2 mx-auto hover:bg-cyan-50 transition-all duration-300 shadow-lg">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
