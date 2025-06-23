"use client";

import { motion } from "framer-motion";
import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { AnimatedSection, StaggerChildren } from "./animations";
import Image from "next/image";
import sprout_scribble from "../public/assets/sprout-scribble.png";
import authentication_system from "../public/assets/authentication-system.png";
import kiwi_anime from "../public/assets/kiwi-anime.png";

const projects = [
  {
    id: 1,
    title: "Sprout & Scribble | E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Drizzle, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
    image: sprout_scribble,
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Drizzle",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.androvision.me",
    githubUrl: "https://github.com/DarkSword7/sprout-scribble",
    featured: true,
  },
  {
    id: 2,
    title: "MERN Authentication System",
    description:
      "A complete Fullstack Authentication System built using the (MongoDB, Express.js, React.js, Node.js) stack. This project provides a robust and secure foundation for user authentication in modern web applications.",
    image: authentication_system,
    tech: [
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "Framer Motion",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Kiwi Anime | Streaming Platform",
    description:
      "A responsive anime streaming platform built with React and Tailwind CSS. Features include user authentication, video streaming, and a dynamic content library.",
    image: kiwi_anime,
    tech: [
      "React",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "Shadcn UI",
      "Consumet API",
    ],
    liveUrl: "https://kiwianime.vercel.app/",
    githubUrl: "https://github.com/DarkSword7/kiwi-anime",
    featured: true,
  },
  {
    id: 4,
    title: "Production Grade Blog API",
    description:
      "A production-ready blog API built with Node.js, Express, and MongoDB. Features include user authentication, post management, and image uploads using Cloudinary.",
    image: "/api/placeholder/600/400",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary"],
    liveUrl: "https://blog-api-dc2g.onrender.com/api/v1",
    githubUrl: "https://github.com/DarkSword7/blog-api",
    featured: false,
  },
  {
    id: 5,
    title: "SaaS Website Landing Page",
    description:
      "A modern landing page template for SaaS products, featuring a clean design, responsive layout, and smooth animations.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sass-website-blue.vercel.app/",
    githubUrl: "https://github.com/DarkSword7/sass-website-dark-landing-page",
    featured: false,
  },
  {
    id: 6,
    title: "AirBnb Clone | Hotel Booking App",
    description:
      "A full-stack hotel booking application inspired by AirBnb, built with React, Node.js, and MongoDB. Features include user authentication, property listings, and booking management.",
    image: "/api/placeholder/600/400",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://airbnb-client-beta.vercel.app/",
    githubUrl: "https://github.com/DarkSword7/airbnb-client",
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.2}>
              <motion.div
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt="image"
                      width={1280}
                      height={720}
                    />
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IoOpenOutline className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IoLogoGithub className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IoOpenOutline className="w-3 h-3" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-3 py-2 border border-border rounded text-sm font-medium hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IoLogoGithub className="w-3 h-3" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </AnimatedSection>

        {/* View More Projects */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <motion.a
            href="https://github.com/darksword7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoLogoGithub className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
