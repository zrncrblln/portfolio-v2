import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from './ui/badge';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience" className="relative py-20 sm:py-32 bg-[#0A1628]/50">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <h3 className="text-xl text-white mb-1">Web Developer Intern</h3>
                      <p className="text-[#00D9FF]">AKSI iSynergies</p>
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
                  Contributed to full-stack development projects, focusing on building robust web applications 
                  and improving system performance. Collaborated with cross-functional teams to deliver 
                  user-centric solutions.
                </p>

                {/* Expandable Achievements */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors mb-4"
                >
                  <span>Key Achievements</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00D9FF]/10">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="text-white">Solution Advocacy</p>
                        <p className="text-sm text-gray-400">Improved system reliability by 15% through proactive problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#00FF88]/10">
                      <span className="text-2xl">👥</span>
                      <div>
                        <p className="text-white">User-Centric Design</p>
                        <p className="text-sm text-gray-400">Enhanced usability by 20% through iterative design improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#0A1628] rounded-lg border border-[#8B5CF6]/10">
                      <span className="text-2xl">🔧</span>
                      <div>
                        <p className="text-white">Technical Support</p>
                        <p className="text-sm text-gray-400">Full lifecycle development from planning to deployment</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#00D9FF]/30 text-[#00D9FF]">
                    PHP
                  </Badge>
                  <Badge variant="outline" className="border-[#00D9FF]/30 text-[#00D9FF]">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="border-[#8B5CF6]/30 text-[#8B5CF6]">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="border-[#00FF88]/30 text-[#00FF88]">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-[#8B5CF6]/30 text-[#8B5CF6]">
                    Bootstrap
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
                    <h3 className="text-xl text-white mb-1">Bachelor of Science in Computer Engineering</h3>
                    <p className="text-[#00FF88]">Nueva Ecija University of Science and Technology</p>
                    <p className="text-sm text-gray-400 mt-2">2024</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Specialized in web development, cybersecurity, and data management. 
                  Built a strong foundation in software engineering principles and system architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
