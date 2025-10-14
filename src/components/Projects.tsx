import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Code,
  Zap,
  TrendingUp,
  Target,
  GraduationCap,
  Film,
  Shield,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const metrics = [
    {
      icon: Zap,
      value: "30%",
      label: "Faster Data Processing",
      color: "#00D9FF",
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Feature Adoption",
      color: "#00FF88",
    },
    { icon: Target, value: "99.9%", label: "Data Accuracy", color: "#8B5CF6" },
  ];

  const techStack = [
    "PHP",
    "HTML5",
    "CSS3",
    "MySQL",
    "JavaScript",
    "Bootstrap 5",
    "Tailwind CSS",
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-32">
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">The Showcase</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects that demonstrate technical excellence and
            problem-solving capabilities
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-[#1a1a2e] border border-[#00D9FF]/20 rounded-2xl overflow-hidden hover:border-[#00D9FF]/50 transition-all hover:shadow-2xl hover:shadow-[#00D9FF]/10">
            {/* Project Image/Mockup */}
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#00D9FF]/20 via-[#8B5CF6]/20 to-[#00FF88]/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0A1628] border-2 border-[#00D9FF] mb-4">
                  <Code className="w-10 h-10 text-[#00D9FF]" />
                </div>
                <h3 className="text-2xl text-white">iSyn-app Platform</h3>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] text-white border-0">
                  Featured Project
                </Badge>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl text-white mb-2">
                  iSyn-app Automation Platform
                </h3>
                <p className="text-[#00D9FF]">
                  Inventory, Sales & Data Management System
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="p-4 rounded-lg bg-[#0A1628] border border-[#00D9FF]/10 text-center"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <Icon
                          className="w-5 h-5"
                          style={{ color: metric.color }}
                        />
                      </div>
                      <div
                        className="text-xl mb-1"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </div>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Problem Statement */}
              <div className="mb-6">
                <h4 className="text-lg text-white mb-3">Problem Statement</h4>
                <p className="text-gray-300 leading-relaxed">
                  AKSI iSynergies needed a comprehensive platform to streamline
                  inventory management, track sales operations, and provide
                  real-time data insights. The existing manual processes were
                  time-consuming and prone to errors.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-lg text-white mb-3">Solution</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed a full-stack web application using PHP and MySQL
                  that automates inventory tracking, sales reporting, and data
                  analytics. Implemented RESTful APIs for seamless data flow and
                  created an intuitive, user-centered dashboard for real-time
                  monitoring with modern UI/UX design principles.
                </p>
              </div>

              {/* Technical Implementation - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full text-lg text-white mb-3 hover:text-[#00D9FF] transition-colors"
                >
                  <span>Technical Implementation</span>
                  <span className="text-[#00D9FF]">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF]">•</span>
                      <p>
                        Built with PHP architecture for maintainable, scalable
                        code
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF]">•</span>
                      <p>
                        Optimized MySQL queries reducing data retrieval time by
                        30%
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF]">•</span>
                      <p>
                        Implemented responsive UI with Bootstrap 5 for
                        cross-device compatibility and enhanced user experience
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF]">•</span>
                      <p>
                        Created automated backup system ensuring 99.9% data
                        accuracy
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00D9FF]">•</span>
                      <p>
                        Applied security best practices including input
                        validation and SQL injection prevention
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-[#00D9FF]/30 text-[#00D9FF]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1628]"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Private Repository
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">
            More Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Automate - School Management System",
                description:
                  "A robust web-based system for managing students, teachers, and academic records with role-based access.",
                icon: GraduationCap,
                techStack: [
                  "PHP",
                  "MySQL",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Bootstrap 5",
                ],
                link: "https://github.com/zrncrblln/automate",
              },
              {
                id: 2,
                title: "Moviez - Netflix-Inspired Streaming Platform",
                description:
                  "A modern streaming platform interface inspired by Netflix, built with React, TypeScript, and Vite.",
                icon: Film,
                techStack: [
                  "React",
                  "TypeScript",
                  "Vite",
                  "React Router",
                  "CSS3",
                  "TMDB API",
                ],
                link: "https://github.com/zrncrblln/film-library",
              },
              {
                id: 3,
                title: "Cybersecurity Awareness Landing Page",
                description:
                  "A landing page designed to raise awareness about cybersecurity best practices, built with React.",
                icon: Shield,
                techStack: [
                  "React",
                  "TypeScript",
                  "Vite",
                  "React Router",
                  "CSS3",
                  "Figma",
                ],
                link: "https://zrncrblln.github.io/cybersecurity-awareness-landing-page/",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-[#1a1a2e] border border-[#00D9FF]/10 hover:border-[#00D9FF]/30 transition-all group cursor-pointer overflow-hidden"
              >
                <div className="aspect-video flex items-center justify-center p-6">
                  <div className="text-center">
                    <project.icon className="w-12 h-12 text-gray-600 mx-auto mb-3 group-hover:text-[#00D9FF] transition-colors" />
                    <h4 className="text-lg text-white mb-2">{project.title}</h4>
                    <p className="text-gray-500 group-hover:text-gray-400 transition-colors text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-[#00D9FF]/10">
                  {project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-[#00D9FF]/30 text-[#00D9FF]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1628]"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Project
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
