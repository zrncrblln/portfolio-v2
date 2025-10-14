import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('zorencorbillon@gmail.com');
    setEmailCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/zorencorbillon',
      color: '#00D9FF',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/zorencorbillon',
      color: '#00D9FF',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:zorencorbillon@gmail.com',
      color: '#00FF88',
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Constellation Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D9FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl text-[#00D9FF] mb-4">
            Ready to Build Something Amazing?
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-[#1a1a2e] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF]"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-[#1a1a2e] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-[#1a1a2e] border-[#00D9FF]/20 text-white placeholder:text-gray-500 focus:border-[#00D9FF] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] hover:opacity-90 text-white border-0"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="mr-2"
                    >
                      ⚡
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a2e] border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D9FF]/20 transition-all">
                  <Mail className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:zorencorbillon@gmail.com"
                    className="text-white hover:text-[#00D9FF] transition-colors"
                  >
                    zorencorbillon@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="ml-2 text-gray-500 hover:text-[#00D9FF] transition-colors"
                    title="Copy email"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 inline" />
                    ) : (
                      <Copy className="w-4 h-4 inline" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a2e] border border-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FF88]/20 transition-all">
                  <Phone className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+639166100257"
                    className="text-white hover:text-[#00FF88] transition-colors"
                  >
                    +63 916 610 0257
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a2e] border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B5CF6]/20 transition-all">
                  <MapPin className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white">Nueva Ecija, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white mb-4">Connect on Social Media</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#1a1a2e] border border-[#00D9FF]/20 hover:border-[#00D9FF] hover:shadow-lg hover:shadow-[#00D9FF]/30 transition-all group"
                    >
                      <Icon className="w-6 h-6 text-[#00D9FF] group-hover:text-[#00FF88] transition-colors" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
