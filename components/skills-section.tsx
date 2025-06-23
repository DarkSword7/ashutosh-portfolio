"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiTypescript,
  SiJavascript,
  SiGit,
} from "react-icons/si";
import { AnimatedSection, StaggerChildren } from "./animations";

export function SkillsSection() {
  const { theme } = useTheme();

  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        {
          name: "Express",
          icon: SiExpress,
          color: theme === "dark" ? "#ffffff" : "#000000",
        },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies I work with to build modern, scalable applications
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.category}
              delay={categoryIndex * 0.2}
            >
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>

                <StaggerChildren className="space-y-4">
                  {category.techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/50 transition-colors group cursor-pointer"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="relative">
                        <tech.icon
                          className="w-8 h-8 transition-transform group-hover:scale-110"
                          style={{ color: tech.color }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `${tech.color}20`,
                            filter: "blur(8px)",
                          }}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </StaggerChildren>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Experience Level Indicator */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Experience Level
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { level: "Frontend Development", percentage: 90 },
                { level: "Backend Development", percentage: 95 },
                { level: "DevOps & Cloud", percentage: 85 },
              ].map((item, index) => (
                <motion.div
                  key={item.level}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted-foreground/20"
                      />
                      <motion.path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${item.percentage}, 100`}
                        className="text-primary"
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{
                          strokeDasharray: `${item.percentage}, 100`,
                        }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-medium text-sm">{item.level}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
