import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Award,
  Shield,
  Database,
  Brain,
  Code,
  Users,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import { Badge } from "./ui/badge";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Certified Data Center Technician (CDCT)",
      organization: "East West International Educational Specialists, Inc.",
      date: "Nov 2024",
      icon: Database,
      featured: true,
      color: "#8B5CF6",
      category: "Infrastructure",
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      organization: "Cisco",
      date: "Nov 2024",
      icon: Shield,
      featured: true,
      color: "#00D9FF",
      category: "Cybersecurity",
    },
    {
      title: "Certificate – Marketing ME Live (Career Session)",
      organization: "Jobs180.com, Inc.",
      date: "May 2025",
      icon: Users,
      featured: false,
      color: "#8B5CF6",
      category: "Marketing",
    },
    {
      title: "Professionalism (US English)",
      organization: "Wadhwani Foundation",
      date: "Apr 2025",
      icon: Briefcase,
      featured: false,
      color: "#8B5CF6",
      category: "Professional Development",
    },
    {
      title: "Start-up Mindset (US English)",
      organization: "Wadhwani Foundation",
      date: "Apr 2025",
      icon: Lightbulb,
      featured: false,
      color: "#8B5CF6",
      category: "Business",
    },
    {
      title: "Python Essentials 1",
      organization: "Cisco",
      date: "Nov 2024",
      icon: Code,
      featured: false,
      color: "#00D9FF",
      category: "Programming",
    },
    {
      title: "Data Analytics Essentials",
      organization: "Cisco",
      date: "Oct 2024",
      icon: Brain,
      featured: false,
      color: "#00FF88",
      category: "Analytics",
    },
    {
      title: "Introduction to Data Science",
      organization: "Cisco",
      date: "Oct 2024",
      icon: Brain,
      featured: false,
      color: "#00FF88",
      category: "Data Science",
    },
    {
      title: "Introduction to Cybersecurity",
      organization: "Cisco",
      date: "May 2024",
      icon: Shield,
      featured: false,
      color: "#00D9FF",
      category: "Cybersecurity",
    },
    {
      title: "Certificate – General Assembly: Empowering Tomorrow",
      organization: "General Assembly",
      date: "2024",
      icon: Award,
      featured: false,
      color: "#00D9FF",
      category: "Professional Development",
    },
  ];

  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, 8);

  return (
    <section
      id="certifications"
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
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            The Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating commitment to
            continuous learning and expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {visibleCertifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div
                  className={`h-full p-6 rounded-xl bg-[#1a1a2e] border transition-all duration-300 ${
                    cert.featured
                      ? "border-[#00D9FF]/50 shadow-lg shadow-[#00D9FF]/20"
                      : "border-[#00D9FF]/10 hover:border-[#00D9FF]/30"
                  }`}
                >
                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute -top-3 -right-3">
                      <Badge className="bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] text-white border-0">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        cert.featured
                          ? "bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20"
                          : "bg-[#0A1628]"
                      } group-hover:scale-110`}
                      style={{
                        boxShadow: cert.featured
                          ? `0 0 20px ${cert.color}30`
                          : "none",
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-all duration-300"
                        style={{
                          color: cert.color,
                          filter: cert.featured
                            ? "drop-shadow(0 0 8px currentColor)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3
                      className="text-white line-clamp-2 min-h-[3rem]"
                      style={{
                        color: cert.featured ? cert.color : "#E2E8F0",
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.organization}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>

                    {/* Category Badge */}
                    <div className="pt-2">
                      <Badge
                        variant="outline"
                        className="text-xs"
                        style={{
                          borderColor: `${cert.color}40`,
                          color: cert.color,
                        }}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${cert.color}10 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {certifications.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-lg bg-[#1a1a2e] border border-[#00D9FF]/30 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] transition-all"
            >
              {showAll
                ? "Show Less"
                : `View All ${certifications.length} Certifications`}
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-xl bg-[#1a1a2e] border border-[#00D9FF]/10">
            <div className="text-3xl text-[#00D9FF] mb-2">
              {certifications.length}+
            </div>
            <p className="text-gray-400 text-sm">Total Certifications</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1a1a2e] border border-[#00FF88]/10">
            <div className="text-3xl text-[#00FF88] mb-2">6</div>
            <p className="text-gray-400 text-sm">From Cisco</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1a1a2e] border border-[#8B5CF6]/10">
            <div className="text-3xl text-[#8B5CF6] mb-2">2</div>
            <p className="text-gray-400 text-sm">From Wadhwani</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1a1a2e] border border-[#00D9FF]/10">
            <div className="text-3xl text-[#00D9FF] mb-2">2025</div>
            <p className="text-gray-400 text-sm">Most Recent</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
