import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-[#00D9FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Zoren Corbillon.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#00D9FF] fill-[#00D9FF]" />
            <span>in the Philippines</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#hero"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
