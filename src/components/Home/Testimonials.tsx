"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  // Testimonials Data (Reviews 8ක් ඇතුලත් කර ඇත)
  const testimonials = [
    {
      id: 1,
      name: "Kavindu Perera",
      course: "MSc in Data Science",
      university: "University of Excellence, UK",
      image: "https://i.pravatar.cc/150?img=11",
      review: "Bright Key Academy made my dream of studying in the UK a reality. Their visa guidance is 100% transparent, and the team was with me every step of the way!",
      rating: 5,
    },
    {
      id: 2,
      name: "Shenali Fernando",
      course: "BSc in Business Management",
      university: "Global Tech Institute, Australia",
      image: "https://i.pravatar.cc/150?img=5",
      review: "I was so stressed about the application process, but their personalized counseling and fast-track processing got me my offer letter in record time.",
      rating: 5,
    },
    {
      id: 3,
      name: "Tharusha Silva",
      course: "BEng in Software Engineering",
      university: "Royal Academy, Canada",
      image: "https://i.pravatar.cc/150?img=12",
      review: "The post-arrival support is what makes them truly world-class. They didn't just help with the visa, they made sure I was settled comfortably in my new home.",
      rating: 5,
    },
    {
      id: 4,
      name: "Amila Sandaruwan",
      course: "MBA in International Business",
      university: "Stanford Gateway, USA",
      image: "https://i.pravatar.cc/150?img=15",
      review: "Extremely professional service! They handled my complicated financial documents perfectly. I got my US student visa without any hassle.",
      rating: 5,
    },
    {
      id: 5,
      name: "Nethmi Perera",
      course: "BSc in Nursing",
      university: "Auckland Health Institute, NZ",
      image: "https://i.pravatar.cc/150?img=9",
      review: "From selecting the right university to interview preparation, Bright Key was amazing. Their team is friendly and always available to answer questions.",
      rating: 5,
    },
    {
      id: 6,
      name: "Dasun Kumara",
      course: "MSc in Artificial Intelligence",
      university: "Berlin Tech, Germany",
      image: "https://i.pravatar.cc/150?img=33",
      review: "Applying to Europe seemed impossible until I met them. They guided me through the entire scholarship process and saved me a lot of money!",
      rating: 5,
    },
    {
      id: 7,
      name: "Dinithi Jayasuriya",
      course: "BA in Fashion Design",
      university: "Milan Arts College, Italy",
      image: "https://i.pravatar.cc/150?img=20",
      review: "A truly remarkable team. They carefully reviewed my portfolio and matched me with the perfect design school in Italy. Highly recommended!",
      rating: 5,
    },
    {
      id: 8,
      name: "Chamath Silva",
      course: "BSc in Cyber Security",
      university: "Singapore Tech University",
      image: "https://i.pravatar.cc/150?img=53",
      review: "Fast, reliable, and 100% genuine. If you want to study abroad without getting scammed, Bright Key Academy is the only place to go.",
      rating: 5,
    },
  ];

  // Slider Logic State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // Default for desktop
  const [isHovered, setIsHovered] = useState(false); // Hover කරද්දි auto-slide නවත්වන්න

  // Screen size එක අනුව items ගාණ හදනවා (Responsive)
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 Item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 Items
      } else {
        setItemsPerView(3); // Desktop: 3 Items
      }
    };
    
    updateView(); // Initial call
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  // Auto-Slide Logic
  useEffect(() => {
    if (isHovered) return; // Mouse එක තියෙද්දි slide වෙන එක නවත්තනවා

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // තත්පර 4කට සැරයක් මාරු වෙනවා (Standard smooth time)

    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    // Background එක සම්පූර්ණයෙන්ම Pure White (bg-white) කරලා තියෙන්නේ
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Container - Margins ඒ විදියටම තියෙනවා */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Don't Just Take Our Word <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Listen to Our Students
            </span>
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Wrapper (Framer Motion එකෙන් smooth slide කරනවා) */}
          <motion.div 
            className="flex gap-6 w-full cursor-grab active:cursor-grabbing"
            // Slide වෙන දුර ගණනය කිරීම (100% + gap (24px))
            animate={{ x: `calc(-${currentIndex} * (100% / ${itemsPerView} + ${24 / itemsPerView}px))` }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} // Premium custom ease
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                // Responsive Item Width (Mobile: 100%, Tablet: ~50%, Desktop: ~33.3%)
                className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]"
              >
                {/* Review Card */}
                <div className="group relative bg-slate-50/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100/80 hover:bg-white hover:shadow-[0_20px_50px_rgb(59,130,246,0.08)] hover:border-blue-100/50 transition-all duration-500 flex flex-col h-full">
                  
                  {/* Cute Quote Icon Top Left */}
                  <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                    <Quote className="w-5 h-5 text-blue-600 fill-blue-600/20" />
                  </div>

                  <div className="relative z-10 flex-grow">
                    {/* 5-Star Rating */}
                    <div className="flex gap-1.5 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 leading-relaxed mb-8 text-sm md:text-base font-medium">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Student Profile Info */}
                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-200/60 group-hover:border-blue-100 transition-colors">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm group-hover:ring-blue-50 transition-all duration-300">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                        {testimonial.course}
                      </p>
                      <p className="text-xs text-blue-600 font-semibold mt-0.5">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modern Dots (Slide Indicators) */}
        <div className="flex items-center justify-center gap-2.5 mt-12 md:mt-16">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === index 
                  ? "w-10 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/20" // Active Dot (දිගයි, පාටයි)
                  : "w-2.5 bg-slate-200 hover:bg-slate-300" // Inactive Dot (රවුම්)
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}