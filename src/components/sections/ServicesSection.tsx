import FadeIn from '../ui/FadeIn';
import { servicesData } from '../../data/servicesData';
import { Code2, Cpu, Sparkles, FlaskConical, Globe } from 'lucide-react';

const serviceIcons = [Code2, Cpu, Sparkles, FlaskConical, Globe];

const serviceColors = [
  { accent: '#7621B0', bg: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-500/20', text: 'text-purple-400' },
  { accent: '#2563EB', bg: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-400' },
  { accent: '#B600A8', bg: 'from-pink-500/10 to-pink-500/5', border: 'border-pink-500/20', text: 'text-pink-400' },
  { accent: '#059669', bg: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  { accent: '#D97706', bg: 'from-amber-500/10 to-amber-500/5', border: 'border-amber-500/20', text: 'text-amber-400' },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 select-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Compact bento card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {servicesData.map((item, index) => {
            const Icon = serviceIcons[index] ?? Code2;
            const color = serviceColors[index] ?? serviceColors[0];
            // Make the last item span 2 columns if odd count
            const isLastOdd = index === servicesData.length - 1 && servicesData.length % 2 !== 0;

            return (
              <FadeIn
                key={item.number}
                delay={index * 0.08}
                y={20}
                className={isLastOdd ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div
                  className={`group relative h-full rounded-[24px] sm:rounded-[28px] border bg-gradient-to-br ${color.bg} ${color.border} p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-default`}
                >
                  {/* Number watermark */}
                  <span
                    className="absolute -top-4 -right-3 text-[80px] sm:text-[100px] font-black leading-none select-none pointer-events-none opacity-[0.06] text-white"
                  >
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${color.bg} border ${color.border} ${color.text}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Name */}
                  <h3 className="font-black uppercase tracking-tight text-white text-sm sm:text-base mb-2 leading-tight">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-light text-[#D7E2EA]/80 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[24px] sm:rounded-b-[28px]"
                    style={{ backgroundColor: color.accent }}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
