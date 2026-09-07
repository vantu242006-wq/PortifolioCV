import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Check, Copy, Sparkles, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = 'vantu242006@gmail.com';
  const github = 'https://github.com/vantu242006-wq';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[32px] sm:rounded-[40px] bg-[#121214] border border-[#D7E2EA]/20 p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7] text-xs font-medium uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Let&apos;s Connect</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-1">
              Pham Van Tu
            </h3>
            <p className="text-xs uppercase tracking-wider text-purple-400 font-medium mb-3">
              IT Student &bull; Computer Science Focus
            </p>

            <p className="text-xs sm:text-sm text-[#D7E2EA]/75 italic leading-relaxed mb-4 bg-white/[0.03] p-3 rounded-2xl border border-white/5">
              &ldquo;Hi! I’m Pham Van Tu, an Information Technology student at Ton Duc Thang University with a focus on Computer Science. I enjoy programming in Java, exploring AI, and building practical software projects. My goal is to grow in backend development and AI integration.&rdquo;
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Java', 'Computer Science', 'AI & Logic', 'Software Dev', 'Music & Chill'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-light">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Contact channels */}
            <div className="space-y-3 mb-6">
              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">Email</div>
                    <div className="text-sm sm:text-base font-medium text-white truncate">
                      {email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="p-2 rounded-lg bg-[#B600A8] hover:bg-[#B600A8]/80 text-white transition-colors"
                    title="Send Email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* GitHub item */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-white/50">GitHub</div>
                    <div className="text-sm sm:text-base font-medium text-white group-hover:text-purple-300 transition-colors">
                      github.com/vantu242006-wq
                    </div>
                  </div>
                </div>
                <span className="text-xs text-white/50 group-hover:text-white transition-colors px-2">
                  Visit &rarr;
                </span>
              </a>
            </div>

            {/* Direct message button */}
            <a
              href={`mailto:${email}?subject=Hello%20Pham%20Van%20Tu%20-%20Portfolio%20Inquiry`}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
