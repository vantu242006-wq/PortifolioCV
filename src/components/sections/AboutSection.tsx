import FadeIn from '../ui/FadeIn';
import AnimatedText from '../ui/AnimatedText';
import ContactButton from '../ui/ContactButton';
import { Headphones, BookOpen, Sparkles, Code2, Brain, Target, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  const aboutText =
    "I'm a down-to-earth person who enjoys discovering new things and is passionate about Computer Science. With curiosity and persistence, I'm building a strong foundation in programming, learning to use technology confidently, and applying AI to grow every day.";

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Decorative 3D images in four corners */}
      {/* 1. Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Icon"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object"
            loading="lazy"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Icon"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Shapes Group"
            loading="lazy"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Main Content: Heading -> Animated Paragraph -> Detailed Bento Profile Cards -> Contact Button */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl text-center w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading and text */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center max-w-2xl">
          {/* Animated paragraph */}
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px] text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Detail Bento Cards: Personal Life & Education */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16 text-left">
          {/* Card 1: Personal Life */}
          <FadeIn delay={0.3} y={30} className="w-full">
            <div className="h-full rounded-[32px] sm:rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-white/20 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Personal Life
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-white/50">Pham Van Tu</p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <p>
                    I'm a <span className="text-white font-medium">down-to-earth person</span> who enjoys exploring and discovering new things.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Headphones className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                  <p>
                    In my free time, I enjoy <span className="text-white font-medium">listening to music</span> and relaxing to recharge.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <p>
                    I focus on <span className="text-white font-medium">personal growth</span> and maintaining a healthy balance between my studies and personal life.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p>
                    I value <span className="text-white font-medium">persistence &amp; learning</span>, building knowledge and experience steadily without expecting to master everything right away.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Education */}
          <FadeIn delay={0.4} y={30} className="w-full">
            <div className="h-full rounded-[32px] sm:rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-white/20 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Education
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <p>
                    I'm interested in <span className="text-white font-medium">programming, Java, and AI</span>, along with emerging technology trends.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Brain className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <p>
                    I focus on developing strong analytical thinking and a structured approach to <span className="text-white font-medium">problem-solving</span>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <p>
                    I enjoy <span className="text-white font-medium">learning by doing</span>, solving exercises, and building practical projects.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white/90">
                  <span className="text-pink-400 font-medium uppercase tracking-wider block mb-1">How I Learn &amp; Work:</span>
                  &ldquo;I use AI as a helpful tool while prioritizing independent thinking, writing my own code, and understanding the fundamentals.&rdquo;
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Spacing between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-14 sm:mt-18 md:mt-20">
          <FadeIn delay={0.5} y={30}>
            <ContactButton onClick={onOpenContact} label="Contact Me" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
