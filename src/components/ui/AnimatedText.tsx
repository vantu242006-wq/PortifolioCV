import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for exact layout dimensions */}
      <span className="opacity-0 select-none pointer-events-none">
        {char === ' ' ? '\u00A0' : char}
      </span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let runningCharIndex = 0;
  const totalChars = Array.from(text).length;

  return (
    <p
      ref={containerRef}
      className={className}
    >
      {words.map((word, wordIndex) => {
        const wordChars = Array.from(word);
        const wordElements = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              const globalIndex = runningCharIndex++;
              const start = globalIndex / totalChars;
              const end = Math.min(1, start + 1 / totalChars);

              return (
                <AnimatedChar
                  key={charIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Include trailing space if not the last word
        let spaceElement = null;
        if (wordIndex < words.length - 1) {
          const spaceGlobalIndex = runningCharIndex++;
          const start = spaceGlobalIndex / totalChars;
          const end = Math.min(1, start + 1 / totalChars);
          spaceElement = (
            <AnimatedChar
              key={`space-${wordIndex}`}
              char=" "
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        }

        return (
          <span key={wordIndex} className="inline">
            {wordElements}
            {spaceElement}
          </span>
        );
      })}
    </p>
  );
}
