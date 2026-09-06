import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../ui/FadeIn';
import LiveProjectButton from '../ui/LiveProjectButton';
import { projectsData, ProjectItem } from '../../data/projectsData';

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Target scale calculation: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl origin-top flex flex-col justify-between gap-6 md:gap-8"
      >
        {/* Top Row: Number, Category, Project Name, and Live Project button */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>

            {/* Title & Category */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase tracking-tight text-white"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <div className="shrink-0">
            <LiveProjectButton href={project.liveUrl || '#'} label="Live Project" />
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/5 border border-white/10"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/5 border border-white/10"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] flex">
            <div className="w-full min-h-[260px] md:min-h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-white/5 border border-white/10">
              <img
                src={project.col2Img}
                alt={`${project.name} main showcase`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const totalCards = projectsData.length;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <div className="max-w-6xl mx-auto mb-14 sm:mb-20 text-center">
        {/* Heading: "Project" (singular) with .hero-heading gradient */}
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* 3 Sticky-stacking project cards */}
      <div className="relative w-full">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={totalCards}
          />
        ))}
      </div>
    </section>
  );
}
