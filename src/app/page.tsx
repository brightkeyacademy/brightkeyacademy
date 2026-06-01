"use client";

import { useState } from "react";
import { motion } from "framer-motion"; 
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer"; 
import Partners from "@/components/Education/Partners";
import AboutAcademy from "@/components/Education/AboutAcademy";
import AcademyFeatures from "@/components/Education/AcademyFeatures";
import VisionMission from "@/components/Education/VisionMission";
import WhyTrustUs from "@/components/Education/WhyTrustUs";
import Universities from "@/components/Education/Universities";
import AcademyStats from "@/components/Education/AcademyStats";
import AcademyCTA from "@/components/Education/AcademyCTA";
import Testimonials from "@/components/Education/Testimonials";
import AcademyHero from "@/components/Education/Hero";
import AcademyNavbar from "@/components/Education/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white relative">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        > 
        
      <AcademyNavbar />
      <AcademyHero />
      <Partners />
      <AboutAcademy />
      <AcademyFeatures />
      <Universities />
      <VisionMission />
      <WhyTrustUs />
      <AcademyStats />
      <Testimonials />
      <AcademyCTA />
          <Footer />         
          
        </motion.div>
      )}
    </main>
  );
}