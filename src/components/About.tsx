import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Zap, Target, Award } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { icon: TrendingUp, value: 15, suffix: '%', label: 'System Reliability', color: '#00D9FF' },
    { icon: Zap, value: 30, suffix: '%', label: 'Faster Processing', color: '#00FF88' },
    { icon: Target, value: 99.9, suffix: '%', label: 'Data Accuracy', color: '#8B5CF6' },
    { icon: Award, value: 8, suffix: '+', label: 'Certifications', color: '#00D9FF' },
  ];

  function Counter({ end, duration, suffix }: { end: number; duration: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const isCountInView = useInView(countRef, { once: true });

    useEffect(() => {
      if (!isCountInView) return;

      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(end * progress);
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [isCountInView, end, duration]);

    return (
      <span ref={countRef}>
        {count.toFixed(end % 1 !== 0 ? 1 : 0)}
        {suffix}
      </span>
    );
  }

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">The Foundation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-[#00D9FF]">Building Secure, Scalable Solutions</h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Fresh Computer Engineering graduate with a specialization in web development and cybersecurity. 
                I'm passionate about creating robust, user-centric applications that solve real-world problems.
              </p>
              <p>
                During my internship at AKSI iSynergies, I contributed to full-stack development projects, 
                improving system reliability by 15% and enhancing data processing efficiency by 30%. 
                My approach combines technical expertise with a deep understanding of user needs.
              </p>
              <p>
                Based in Nueva Ecija, Philippines, I'm driven by curiosity and a commitment to continuous 
                learning. Whether it's optimizing database queries or implementing security best practices, 
                I bring fresh perspectives with proven results.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-[#1a1a2e] border border-[#00D9FF]/30 text-[#00D9FF]">
                Web Development
              </span>
              <span className="px-4 py-2 rounded-full bg-[#1a1a2e] border border-[#00FF88]/30 text-[#00FF88]">
                Cybersecurity
              </span>
              <span className="px-4 py-2 rounded-full bg-[#1a1a2e] border border-[#8B5CF6]/30 text-[#8B5CF6]">
                Data Management
              </span>
            </div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div
                    className="p-6 rounded-xl bg-[#1a1a2e] border border-transparent hover:border-[#00D9FF]/30 transition-all"
                    style={{
                      boxShadow: `0 4px 20px rgba(0, 217, 255, 0.1)`,
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${metric.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: metric.color }} />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2" style={{ color: metric.color }}>
                        <Counter end={metric.value} duration={2000} suffix={metric.suffix} />
                      </div>
                      <p className="text-gray-400 text-sm">{metric.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
