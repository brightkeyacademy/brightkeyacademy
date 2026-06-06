"use client";

import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, MessageCircle, Send, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AcademyNavbar from "@/components/Education/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/94771337989?text=${encodeURIComponent(
      `Hello! I'm ${formData.name}. Email: ${formData.email}, Phone: ${formData.phone}. Message: ${formData.message}`
    )}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <AcademyNavbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mb-6 shadow-sm uppercase tracking-widest"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Us
            </motion.div>
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6"
            >
              Let&apos;s Talk About<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Your Future
              </span>
            </motion.h1>
            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl font-medium"
            >
              Ready to start your journey to South Korea? Reach out and our team will get back to you within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative w-full -mt-10 sm:-mt-16 z-20 pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: Contact Form (3/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 text-sm font-medium">
                    We&apos;ll connect with you on WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-sm text-slate-500 font-medium mb-8">
                    Fill in the details and we&apos;ll reply on WhatsApp.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Email *</label>
                        <input
                          type="email" required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone *</label>
                        <input
                          type="tel" required
                          placeholder="+94 77 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Message *</label>
                      <textarea
                        required rows={4}
                        placeholder="Tell us about your study plans..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-500 hover:shadow-lg transition-all duration-300 active:scale-95"
                    >
                      Send via WhatsApp
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right: Contact Info (2/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {[
                {
                  icon: MapPin, title: "Visit Us",
                  text: "123 Bright Key Tower,\nColombo 03, Sri Lanka.",
                  link: "#", linkLabel: "Get Directions",
                },
                {
                  icon: Phone, title: "Call Us",
                  text: "+94 77 133 7989",
                  link: "tel:+94771337989", linkLabel: "Call Now",
                },
                {
                  icon: Mail, title: "Email Us",
                  text: "info@brightkey.lk",
                  link: "mailto:info@brightkey.lk", linkLabel: "Send Email",
                },
                {
                  icon: MessageCircle, title: "WhatsApp",
                  text: "Reply within 1 hour",
                  link: "https://wa.me/94771337989", linkLabel: "Chat Now",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i}
                    className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4>
                        <p className="text-xs text-slate-500 whitespace-pre-line font-medium mb-2">{item.text}</p>
                        <a href={item.link}
                          className="text-xs font-bold text-blue-600 hover:text-blue-500 inline-flex items-center gap-1 transition-colors"
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.linkLabel} <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
