import FadeIn from '../ui/FadeIn';
import Magnet from '../ui/Magnet';
import ContactButton from '../ui/ContactButton';
import tuPortrait from '../../assets/tu-portrait.jpg';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-start overflow-x-clip bg-[#0C0C0C]">
      {/* Hero portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="flex items-center justify-center"
          >
            <div className="relative group">
              {/* Subtle ambient back-glow */}
              <div className="absolute -inset-2 bg-gradient-to-t from-[#B600A8]/30 via-purple-600/15 to-transparent rounded-[36px] sm:rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src={tuPortrait}
                alt="Pham Van Tu"
                className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] max-h-[66vh] sm:max-h-[74vh] object-cover rounded-[32px] sm:rounded-[40px] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] select-none pointer-events-none"
                draggable={false}
                loading="eager"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Navigation buttons in the top-right corner */}
      <header className="w-full px-6 md:px-12 pt-6 sm:pt-8 flex justify-end items-start z-20">
        <FadeIn delay={0.5} y={-20} className="max-w-full">
          <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
            <ContactButton onClick={() => scrollTo('about')} label="About" className="shrink-0 whitespace-nowrap" />
            <ContactButton onClick={() => scrollTo('services')} label="Services" className="shrink-0 whitespace-nowrap" />
            <ContactButton onClick={onOpenContact} label="Contact Me" className="shrink-0 whitespace-nowrap" />
          </nav>
        </FadeIn>
      </header>
    </section>
  );
}
