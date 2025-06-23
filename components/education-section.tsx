"use client";

import { motion } from "framer-motion";
import { IoSchool, IoCalendar, IoLocation, IoTrophy } from "react-icons/io5";
import { AnimatedSection, StaggerChildren } from "./animations";

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications",
    field: "Computer Science",
    institution: "Rungta College of Engineering and Technology",
    location: "Chhattisgarh, India",
    period: "2022 - 2025",
    gpa: "7/10",
    achievements: [
      "Led development team for final year project",
      "Build a AI-based web application for Content Management",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks",
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "Practical Ethical Hacking",
    issuer: "TCM Security",
    date: "2023",
  },
  {
    id: 2,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education & Certifications
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My academic background and professional certifications
          </motion.p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <IoSchool className="w-6 h-6 text-primary" />
              Education
            </h3>

            <StaggerChildren className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-lg text-primary font-medium mb-2">
                        {edu.field}
                      </p>
                      <p className="text-muted-foreground font-medium mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <IoCalendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <IoLocation className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <IoTrophy className="w-4 h-4" />
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold mb-3 text-primary">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h5 className="font-semibold mb-3 text-primary">
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.4}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <IoTrophy className="w-6 h-6 text-primary" />
              Professional Certifications
            </h3>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IoTrophy className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground font-medium mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span>Issued: {cert.date}</span>
                        {/* <span className="font-mono text-xs">
                          ID: {cert.credentialId}
                        </span> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </AnimatedSection>

          {/* Learning Philosophy */}
          <AnimatedSection delay={0.6} className="mt-16">
            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border rounded-2xl p-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  I believe in continuous learning and staying updated with the
                  latest technologies. Currently pursuing advanced courses in
                  cloud architecture and exploring emerging technologies like
                  AI/ML integration in web development.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
