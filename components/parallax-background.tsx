"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ParallaxBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current || !starsRef.current) return;

    // Create floating particles
    const particles = Array.from({ length: 50 }, () => {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-primary/20 rounded-full";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      // Animate particles
      gsap.to(particle, {
        y: -100,
        opacity: 0,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5,
      });

      return particle;
    });

    particles.forEach((particle) => starsRef.current?.appendChild(particle));

    // Parallax scrolling effect
    gsap.to(bgRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      particles.forEach((particle) => particle.remove());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

        {/* Animated Stars/Particles */}
        <div ref={starsRef} className="absolute inset-0" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
}
