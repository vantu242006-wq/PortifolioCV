import { useEffect, useRef } from 'react';
import { marqueeRow1, marqueeRow2 } from '../../data/marqueeImages';

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Triple arrays for seamless scrolling
  const tripledRow1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const tripledRow2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current && row1Ref.current && row2Ref.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

            // Row 1: moves RIGHT on scroll: translateX(offset - 200)
            row1Ref.current.style.transform = `translateX(${offset - 200}px)`;

            // Row 2: moves LEFT on scroll: translateX(-(offset - 200))
            row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves Right on Scroll */}
        <div
          ref={row1Ref}
          className="flex gap-3 flex-nowrap"
          style={{ willChange: 'transform' }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5"
            >
              <img
                src={src}
                alt="3D motion render"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div
          ref={row2Ref}
          className="flex gap-3 flex-nowrap"
          style={{ willChange: 'transform' }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5"
            >
              <img
                src={src}
                alt="3D motion render"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
