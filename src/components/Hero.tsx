import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full-Stack Developer', 'Cybersecurity Enthusiast', 'Computer Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const techStack = [
    { name: 'PHP', icon: '<?>' },
    { name: 'Laravel', icon: 'L' },
    { name: 'MySQL', icon: 'DB' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'CEH', icon: '🔒' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a1a2e] to-[#8B5CF6]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#00D9FF]"
          >
            Hi, I'm
          </motion.p>

          {/* Name with glow effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl text-white tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
            }}
          >
            Zoren Corbillon
          </motion.h1>

          {/* Animated Role */}
          <div className="h-12 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Building secure, scalable solutions with a passion for solving complex technical problems
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] hover:opacity-90 text-white border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A1628]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-6 pt-12"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a1a2e] border border-[#00D9FF]/20 flex items-center justify-center group-hover:border-[#00D9FF] group-hover:shadow-lg group-hover:shadow-[#00D9FF]/50 transition-all">
                  <span className="text-[#00D9FF]">{tech.icon}</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-[#00D9FF] transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://github.com/zorencorbillon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00D9FF]/20 flex items-center justify-center hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
            >
              <Github className="w-5 h-5 text-[#00D9FF]" />
            </a>
            <a
              href="https://linkedin.com/in/zorencorbillon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00D9FF]/20 flex items-center justify-center hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
            >
              <Linkedin className="w-5 h-5 text-[#00D9FF]" />
            </a>
            <a
              href="mailto:zorencorbillon@gmail.com"
              className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#00D9FF]/20 flex items-center justify-center hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
            >
              <Mail className="w-5 h-5 text-[#00D9FF]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-[#00D9FF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
