"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IoDownload, IoArrowDown } from "react-icons/io5";
import { AnimatedSection } from "./animations";

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && bgRef.current) {
      const tl = gsap.timeline();

      // Background animation
      gsap.set(bgRef.current, {
        background:
          "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
      });

      tl.to(bgRef.current, {
        background:
          "radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Floating animation for the background
      gsap.to(bgRef.current, {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadResume = () => {
    // In a real scenario, you'd put your actual resume file in the public folder
    // For now, this shows an alert. Replace with actual file path when ready.
    const resumePath = "/public/Ashutosh_Tiwari_Resume.pdf";

    // Check if resume file exists, otherwise show instruction
    fetch(resumePath, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          // File exists, download it
          const link = document.createElement("a");
          link.href = resumePath;
          link.download = "Ashutosh_Tiwari_Resume.pdf";
          link.click();
        } else {
          // File doesn't exist, show instruction
          alert(
            'Please add your resume file as "Ashutosh_Tiwari_Resume.pdf" in the public folder.'
          );
        }
      })
      .catch(() => {
        alert(
          'Please add your resume file as "Ashutosh_Tiwari_Resume.pdf" in the public folder.'
        );
      });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div ref={bgRef} className="absolute inset-0 -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-4 font-mono"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Ashutosh Tiwari
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light"
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Crafting digital experiences with modern technologies. Passionate
              about clean code, innovative solutions, and bringing ideas to
              life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={downloadResume}
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <IoDownload className="w-5 h-5" />
                  Download Resume
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 border border-border rounded-full font-medium hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to next section"
          >
            <IoArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
