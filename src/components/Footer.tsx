import { Mail, Github, ArrowUp, Heart } from 'lucide-react';
import ContactButton from './ui/ContactButton';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 border-t border-white/10 px-6 sm:px-10 pt-20 pb-16 sm:pb-20 z-20 text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-md">
            <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
              Pham Van Tu
            </h3>
            <p className="text-xs uppercase tracking-wider text-purple-400 font-medium mb-2">
              IT Student &bull; Computer Science Focus
            </p>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
              &ldquo;I'm a down-to-earth person who enjoys discovering new things, learning consistently, and making steady progress on my journey in technology.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <ContactButton onClick={onOpenContact} label="Let's Talk" />
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white/80 hover:text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-white/50">
          <div className="flex items-center gap-6">
            <a
              href="mailto:vantu242006@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>vantu242006@gmail.com</span>
            </a>
            <a
              href="https://github.com/vantu242006-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span>github.com/vantu242006-wq</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} Pham Van Tu. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
            <span>&amp; passion for code &amp; continuous learning.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
