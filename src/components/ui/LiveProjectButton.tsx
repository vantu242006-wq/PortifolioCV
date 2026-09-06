import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  className?: string;
  href?: string;
}

export default function LiveProjectButton({
  label = 'Live Project',
  className = '',
  href = '#',
  ...props
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer select-none ${className}`}
      {...props}
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4 opacity-70" />
    </a>
  );
}
