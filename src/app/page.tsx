import Hero from "@/components/Home/Hero";
import Partners from "@/components/Home/Partners";
import Stats from "@/components/Home/Stats";
import AboutSummary from "@/components/Home/AboutSummary";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials";
import CTA from "@/components/Home/CTA";
import Universities from "@/components/Home/Universities";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Partners />
      <AboutSummary />
      <WhyChooseUs />
      <Universities />
      <Stats />
      <Testimonials /> 
      <CTA /> 
    </main>
  );
}