import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionHeaderProps = {
  number: string;
  title: ReactNode;
  className?: string;
};

export function SectionHeader({ number, title, className = '' }: SectionHeaderProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.25em] text-accent">{number}</span>
        <span className="h-px w-10 bg-ink-600" />
      </div>
      <h2 className="heading-lg max-w-3xl text-balance text-zinc-50">{title}</h2>
    </div>
  );
}
