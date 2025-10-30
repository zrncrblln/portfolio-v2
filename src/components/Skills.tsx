import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Server, Layout, Database, Palette, Code, Cpu } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      color: "#00D9FF",
      skills: ["PHP", "Laravel", "Node.js", "REST API", "Apache"],
    },
    {
      id: "frontend",
      title: "Frontend & Design",
      icon: Layout,
      color: "#00FF88",
      skills: [
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Responsive Design",
      ],
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: Palette,
      color: "#00D9FF",
      skills: [
        "Figma",
        "Photoshop",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      id: "database",
      title: "Database & Analytics",
      icon: Database,
      color: "#8B5CF6",
      skills: ["MySQL", "SQL", "Data Analytics", "Excel", "Tableau"],
    },
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      color: "#00FF88",
      skills: [
        "Python",
        "C++",
        "Java",
        "Assembly (ASM)",
        "TypeScript",
        "MATLAB",
        "PowerShell",
      ],
    },
    {
      id: "hardware",
      title: "Hardware & IoT",
      icon: Cpu,
      color: "#8B5CF6",
      skills: ["Arduino Uno", "ESP32"],
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-32">
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
          <h2 className="text-4xl sm:text-5xl text-white mb-4">The Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through education, certification, and
            hands-on experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveCategory(category.id)}
                onHoverEnd={() => setActiveCategory(null)}
                className="relative group cursor-pointer h-[320px]"
              >
                <div
                  className={`p-6 rounded-xl bg-[#1a1a2e] border transition-all duration-200 flex flex-col h-full ${
                    isActive
                      ? "border-opacity-100 shadow-2xl"
                      : "border-opacity-20 hover:border-opacity-50"
                  }`}
                  style={{
                    borderColor: category.color,
                    boxShadow: isActive
                      ? `0 10px 40px ${category.color}40`
                      : "none",
                  }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isActive
                          ? `${category.color}30`
                          : `${category.color}10`,
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-all duration-300"
                        style={{
                          color: category.color,
                          filter: isActive
                            ? "drop-shadow(0 0 8px currentColor)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-center mb-4 transition-colors duration-300"
                    style={{ color: isActive ? category.color : "#E2E8F0" }}
                  >
                    {category.title}
                  </h3>

                  {/* Skills List as Badges */}
                  <div className="flex-grow flex flex-wrap gap-2 justify-center overflow-y-auto">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isActive
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0.7, scale: 0.95 }
                        }
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs transition-all duration-300"
                          style={{
                            borderColor: isActive
                              ? category.color
                              : `${category.color}40`,
                            color: isActive ? category.color : "#9CA3AF",
                            backgroundColor: isActive
                              ? `${category.color}10`
                              : "transparent",
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Prompt */}
                  <div className="mt-4 h-6 flex items-center justify-center">
                    {!isActive && (
                      <p className="text-center text-gray-500 text-xs group-hover:text-gray-400 transition-colors">
                        Hover to highlight
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
