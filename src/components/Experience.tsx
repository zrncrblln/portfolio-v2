import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge } from "./ui/badge";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-32 bg-[#0A1628]/50"
    >
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
          <h2 className="text-4xl sm:text-5xl text-white mb-4">The Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9FF] via-[#8B5CF6] to-[#00FF88]" />

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#00D9FF] border-4 border-[#0A1628] shadow-lg shadow-[#00D9FF]/50" />

              {/* Card */}
              <div className="bg-[#1a1a2e] border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all hover:shadow-xl hover:shadow-[#00D9FF]/10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-1">
                        Full Stack Developer & Documentation Writer
                      </h3>
                      <p className="text-[#00D9FF]">ASKI iSynergies, Inc.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>June 2024 - August 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Cabanatuan City</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">
                  The iSyn-app is an internal all-in-one enterprise system
                  developed for ASKI iSynergies to automate and integrate
                  various company operations. The platform combines inventory,
                  sales, employee, and program management modules, allowing
                  departments to manage and monitor workflows efficiently in one
                  centralized system.
                </p>

                {/* Expandable Achievements */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors mb-4"
                >
                  <span>Key Achievements</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
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
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00D9FF]/10">
                      <span className="text-2xl">💻</span>
                      <div>
                        <p className="text-white">Full-Stack Development</p>
                        <p className="text-sm text-gray-400">
                          Developed and maintained both frontend and backend
                          modules using PHP, MySQL, HTML, CSS, JavaScript, and
                          jQuery.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00FF88]/10">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <p className="text-white">Responsive UI Design</p>
                        <p className="text-sm text-gray-400">
                          Designed responsive user interfaces with Tailwind CSS,
                          ensuring accessibility and consistent styling across
                          pages.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#8B5CF6]/10">
                      <span className="text-2xl">🗄️</span>
                      <div>
                        <p className="text-white">Database-Driven Features</p>
                        <p className="text-sm text-gray-400">
                          Implemented database-driven features for tracking
                          inventory, employee data, and sales transactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00D9FF]/10">
                      <span className="text-2xl">📚</span>
                      <div>
                        <p className="text-white">Technical Documentation</p>
                        <p className="text-sm text-gray-400">
                          Authored technical documentation covering feature
                          specifications, database schema, and user flow for
                          future developers and system updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00FF88]/10">
                      <span className="text-2xl">🤝</span>
                      <div>
                        <p className="text-white">Team Collaboration</p>
                        <p className="text-sm text-gray-400">
                          Collaborated closely within a 4-member development
                          team to test, debug, and deploy key system components.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#00D9FF]/30 text-[#00D9FF]"
                  >
                    PHP
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#00FF88]/30 text-[#00FF88]"
                  >
                    HTML
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#00FF88]/30 text-[#00FF88]"
                  >
                    CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#00FF88]/30 text-[#00FF88]"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#8B5CF6]/30 text-[#8B5CF6]"
                  >
                    jQuery
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#8B5CF6]/30 text-[#8B5CF6]"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#8B5CF6]/30 text-[#8B5CF6]"
                  >
                    MySQL
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Education Entry */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#00FF88] border-4 border-[#0A1628] shadow-lg shadow-[#00FF88]/50" />

              {/* Card */}
              <div className="bg-[#1a1a2e] border border-[#00FF88]/20 rounded-xl p-6 hover:border-[#00FF88]/50 transition-all hover:shadow-xl hover:shadow-[#00FF88]/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-1">
                      Bachelor of Science in Computer Engineering
                    </h3>
                    <p className="text-[#00FF88]">
                      Wesleyan University-Philippines
                    </p>
                    <p className="text-sm text-gray-400 mt-2">2021-2025</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Specialized in web development, UI/UX design, and data
                  management. Built a strong foundation in software engineering
                  principles and system architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
