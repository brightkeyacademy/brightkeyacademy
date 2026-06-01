"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowLeft, MapPin, Calendar, DollarSign, GraduationCap,
  Globe2, Star, CheckCircle2, PhoneCall, ArrowRight, Building2,
  Cpu, Wrench, Laptop, FlaskConical, Stethoscope, Languages, ShieldCheck,
  PlaneTakeoff, Users, BookOpen, Briefcase, Zap, Microscope
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Education/Navbar";
import Footer from "@/components/Footer";

export default function ChosunCollegePage() {
  const [activeTab, setActiveTab] = useState<"programs" | "fees" | "admission">("programs");

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: [0.2, 0.65, 0.3, 1] },
    }),
  };

  const stats = [
    { icon: Building2, value: "1963", label: "Established", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: MapPin, value: "Gwangju", label: "South Korea", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: GraduationCap, value: "2-4 Year", label: "Associate / Bachelor's", color: "text-sky-600", bg: "bg-sky-50" },
    { icon: Users, value: "6,000+", label: "Students", color: "text-rose-600", bg: "bg-rose-50" },
  ];

  const programs = [
    { icon: Cpu, name: "Computer Engineering", dept: "Software Development, AI, Networks", duration: "2-4 Years", lang: "Korean", desc: "Comprehensive training in modern computing: programming, artificial intelligence, cybersecurity, and network infrastructure. Strong ties to Gwangju's growing tech sector." },
    { icon: Laptop, name: "Information Technology", dept: "Web Development, Database, Cloud", duration: "2-3 Years", lang: "Korean", desc: "Hands-on IT education covering full-stack development, cloud computing, database management, and IT service operations." },
    { icon: Wrench, name: "Mechanical Engineering", dept: "CAD/CAM, Robotics, Manufacturing", duration: "2-4 Years", lang: "Korean", desc: "Advanced manufacturing and mechanical systems training with modern CNC labs, robotics workshops, and industry-sponsored projects." },
    { icon: Zap, name: "Electrical Engineering", dept: "Power Systems, Electronics, Control", duration: "2-4 Years", lang: "Korean", desc: "Electrical systems design, renewable energy technology, and industrial automation with hands-on lab training." },
    { icon: FlaskConical, name: "Applied Chemistry", dept: "Materials Science, Bio-Chemistry", duration: "2-3 Years", lang: "Korean", desc: "Laboratory-focused chemistry programs with applications in materials science, pharmaceuticals, and environmental technology." },
    { icon: Stethoscope, name: "Health Sciences", dept: "Medical Technology, Public Health", duration: "2-3 Years", lang: "Korean", desc: "Growing health sciences division with programs in medical laboratory technology, public health, and healthcare informatics." },
  ];

  const fees = [
    { program: "Computer Engineering", perSemester: "KRW 3.2M - 3.8M", perYear: "KRW 6.4M - 7.6M", scholarship: "25% - 50%" },
    { program: "Information Technology", perSemester: "KRW 3.0M - 3.5M", perYear: "KRW 6.0M - 7.0M", scholarship: "25% - 45%" },
    { program: "Mechanical Engineering", perSemester: "KRW 3.2M - 3.8M", perYear: "KRW 6.4M - 7.6M", scholarship: "25% - 50%" },
    { program: "Electrical Engineering", perSemester: "KRW 3.2M - 3.8M", perYear: "KRW 6.4M - 7.6M", scholarship: "25% - 50%" },
    { program: "Applied Chemistry", perSemester: "KRW 3.0M - 3.5M", perYear: "KRW 6.0M - 7.0M", scholarship: "20% - 40%" },
    { program: "Health Sciences", perSemester: "KRW 3.0M - 3.6M", perYear: "KRW 6.0M - 7.2M", scholarship: "20% - 40%" },
  ];

  const intlBenefits = [
    { icon: Globe2, title: "Gwangju: Tech Hub City", desc: "Gwangju is Korea's 6th largest city and a growing technology and manufacturing hub. Major companies like Kia Motors and Samsung have facilities here." },
    { icon: Languages, title: "Korean Language Support", desc: "Full Korean language training available on campus. Students can complete TOPIK preparation before or alongside their main program." },
    { icon: ShieldCheck, title: "Scholarship Programs", desc: "Generous international scholarships reducing tuition by 20-50%. Additional Korean government scholarships available for outstanding students." },
    { icon: Briefcase, title: "Industry Connections", desc: "Strong partnerships with Korea's leading tech and manufacturing companies provide internship and job placement opportunities for graduates." },
    { icon: Users, title: "Affordable Living", desc: "Gwangju's cost of living is significantly lower than Seoul. Student housing, meals, and transportation are budget-friendly for international students." },
    { icon: PlaneTakeoff, title: "Career Pathways", desc: "STEM graduates are in high demand in Korea. Chosun College's practical, industry-aligned curriculum gives you a competitive edge in the job market." },
  ];

  const sriLankaBenefits = [
    { icon: Star, title: "Exclusive Sri Lanka Channel", desc: "Bright Key Academy is the authorized Sri Lankan representative for Chosun College admissions. Direct application processing with priority review." },
    { icon: DollarSign, title: "High ROI Education", desc: "Engineering and IT education at Chosun College costs roughly 50-60% less than comparable programs in Western countries, with excellent employment outcomes." },
    { icon: ShieldCheck, title: "Complete Visa Support", desc: "Full visa documentation support, embassy interview preparation, and post-arrival assistance — ensuring a smooth transition to life in Gwangju." },
    { icon: BookOpen, title: "STEM Foundation in Sri Lanka", desc: "Pre-departure technical orientation and Korean language training provided in Sri Lanka so you're fully prepared when you arrive on campus." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-sky-950 overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[700px] max-h-[700px] bg-blue-500/15 rounded-full blur-[100px] md:blur-[120px]" />
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute bottom-[10%] -right-[10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] max-w-[600px] max-h-[600px] bg-sky-500/10 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14 sm:px-10 lg:px-16 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-semibold text-xs sm:text-sm mb-6 shadow-lg">
                <Cpu className="w-4 h-4" />
                Engineering & Technology College
              </motion.div>

              <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                Chosun College of<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300">Science & Technology</span>
              </motion.h1>

              <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                조선이공대학교 — Gwangju's premier STEM institution since 1963. Where engineering excellence meets innovation. Building Korea's next generation of technologists and engineers.
              </motion.p>

              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 active:scale-95">
                    Apply Through Bright Key
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="https://smart.cst.ac.kr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm font-medium flex items-center justify-center gap-1 transition-colors py-2 px-4">
                  Visit Official Website <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            </div>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex-1 w-full max-w-md mt-8 lg:mt-0">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((s, i) => (
                    <motion.div key={i} custom={5 + i} initial="hidden" animate="visible" variants={fadeUp} className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white/10 group-hover:scale-110 transition-transform duration-300">
                        <s.icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <p className="text-white font-extrabold text-lg sm:text-xl">{s.value}</p>
                      <p className="text-slate-400 text-xs font-medium mt-1">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK STATS BAR ==================== */}
      <section className="relative w-full -mt-12 sm:-mt-16 z-20 pb-0 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: MapPin, label: "Location", value: "Gwangju City" },
              { icon: Calendar, label: "Intakes", value: "March & September" },
              { icon: Languages, label: "Medium", value: "Korean" },
              { icon: DollarSign, label: "Est. Tuition", value: "$2,500 - $3,000/sem" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-50/50 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mb-6 w-max uppercase tracking-widest shadow-sm">About the College</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-6">
                Engineering the<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Future of Korea</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">Founded in 1963 and originally affiliated with Chosun University, Chosun College of Science & Technology became an independent institution in 1998. Located in Gwangju — Korea's city of light and democracy — the college has been at the forefront of technical education for over 60 years.</p>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">With a strong focus on STEM fields, the college produces industry-ready graduates who power Korea's manufacturing, IT, and technology sectors. The curriculum is continuously updated with input from industry partners to ensure graduates have the exact skills employers need.</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["60+ Years of Excellence", "STEM-Focused", "Industry-Aligned", "Modern Labs"].map((tag, i) => (
                  <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-500 p-[3px] shadow-2xl shadow-blue-500/20">
                <div className="bg-white rounded-[2.4rem] p-6 sm:p-10">
                  
                  {/* ADDED LOGO SECTION HERE */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                      <Image src="/education/logo-3.png" alt="Chosun College Logo" fill className="object-contain" />
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    {[
                      { label: "Korean Name", value: "조선이공대학교" },
                      { label: "Type", value: "Private Junior College" },
                      { label: "Campus", value: "Dong-gu, Gwangju City" },
                      { label: "Accreditation", value: "Ministry of Education, Korea" },
                      { label: "Degree Levels", value: "Associate, Bachelor's" },
                      { label: "Student Body", value: "6,000+ (International: 6%)" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <span className="text-slate-500 text-xs sm:text-sm font-medium">{item.label}</span>
                        <span className="text-slate-900 text-xs sm:text-sm font-bold text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAMS / FEES / ADMISSION TABS ==================== */}
      <section className="relative w-full py-16 md:py-24 bg-slate-50/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-xs mb-4 uppercase tracking-widest shadow-sm">Explore</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Programs, Fees & Admissions</h2>
          </div>

          <div className="flex justify-center mb-10 md:mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-white rounded-2xl md:rounded-full p-2 border border-slate-200 shadow-sm">
              {(["programs", "fees", "admission"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === tab ? "bg-slate-900 text-white shadow-lg scale-105" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}>
                  {tab === "programs" ? "Programs" : tab === "fees" ? "Tuition & Fees" : "Admission"}
                </button>
              ))}
            </div>
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-5xl mx-auto">
            {activeTab === "programs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {programs.map((prog, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg transition-all duration-300 shrink-0">
                        <prog.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">{prog.name}</h3>
                        <p className="text-xs sm:text-sm text-blue-600 font-bold mb-3">{prog.dept}</p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{prog.desc}</p>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-500 font-semibold bg-slate-50 inline-flex px-3 py-2 rounded-lg border border-slate-100">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{prog.duration}</span>
                          <span className="w-px h-3 bg-slate-300 my-auto"></span>
                          <span className="flex items-center gap-1.5"><Languages className="w-3.5 h-3.5" />{prog.lang}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "fees" && (
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-1">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50/80">
                      <th className="p-4 sm:p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider rounded-tl-xl">Program</th>
                      <th className="p-4 sm:p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Per Semester</th>
                      <th className="p-4 sm:p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Per Year</th>
                      <th className="p-4 sm:p-5 text-xs font-extrabold text-blue-600 uppercase tracking-wider rounded-tr-xl">Scholarship</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {fees.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 sm:p-5 text-sm sm:text-base font-bold text-slate-800">{row.program}</td>
                        <td className="p-4 sm:p-5 text-sm text-slate-600 font-medium">{row.perSemester}</td>
                        <td className="p-4 sm:p-5 text-sm text-slate-600 font-medium">{row.perYear}</td>
                        <td className="p-4 sm:p-5 text-sm font-extrabold text-blue-600">{row.scholarship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-slate-400 mt-4 mb-2 text-center font-medium">* Fees in KRW. Approximate USD: $2,500-$3,000 per semester. Subject to change. Scholarships are merit-based.</p>
              </div>
            )}

            {activeTab === "admission" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Academic Requirements", items: ["High school diploma (O/L + A/L for Sri Lanka)", "Minimum GPA: 2.5 / 4.0 or equivalent", "Math & Science background preferred for STEM", "No specific entrance exam required"] },
                  { title: "Language Requirements", items: ["TOPIK Level 2 minimum (Level 3 recommended)", "Korean Language Program available on campus", "Can apply with 0 Korean and study language first", "English-track options for some IT programs"] },
                  { title: "Required Documents", items: ["Completed application form", "Academic transcripts (translated to Korean/English)", "Passport copy (valid 6+ months)", "Personal statement / Study plan", "Financial proof ($10,000+ bank balance)", "Passport photos (3.5 x 4.5 cm, white background)"] },
                  { title: "Key Dates (2026 Intakes)", items: ["Spring: Apply by December 2025", "Spring: Semester starts March 2026", "Fall: Apply by June 2026", "Fall: Semester starts September 2026"] },
                ].map((card, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-extrabold text-slate-900 mb-5 flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      {card.title}
                    </h4>
                    <ul className="space-y-3.5">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                          <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ==================== INTERNATIONAL BENEFITS ==================== */}
      <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-blue-600 font-bold text-xs mb-4 uppercase tracking-widest shadow-sm">
              <Globe2 className="w-4 h-4" />
              International Students
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-[1.2]">
              Benefits for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">International Students</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {intlBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SRI LANKA BENEFITS ==================== */}
      <section className="relative w-full py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-blue-500/30 group">
            {/* ADDED BACKGROUND IMAGE & GLASS OVERLAY HERE */}
            <div className="absolute inset-0 z-0">
              <Image src="/education/chosun-bg.jpg" alt="Chosun College Sri Lanka" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/85 via-sky-600/85 to-cyan-600/85 backdrop-blur-[4px]" />
            </div>

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl pointer-events-none z-0" />
            
            <div className="relative z-10 text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs mb-6 uppercase tracking-widest shadow-lg">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                For Sri Lankan Students
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Build Your Tech Career 🇱🇰
              </h2>
              <p className="text-blue-50 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Bright Key Academy provides Sri Lankan students a direct pathway to Chosun College — the ideal launchpad for a tech career in Korea's booming STEM industry.</p>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {sriLankaBenefits.map((b, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                      <b.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white mb-2">{b.title}</h3>
                      <p className="text-sm sm:text-base text-blue-50 leading-relaxed opacity-90">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative z-10 text-center mt-12">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-extrabold hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] inline-flex items-center gap-2 text-lg">
                  <PhoneCall className="w-5 h-5" />
                  Talk to Our Sri Lanka Team
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Launch Your Tech Career at Chosun</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">From software engineering to robotics — Chosun College of Science & Technology equips you with the skills Korea's top employers demand. Start your journey today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/education" className="text-slate-400 hover:text-white font-medium flex items-center justify-center gap-2 transition-colors py-3">
              <ArrowLeft className="w-4 h-4" /> Back to All Universities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}