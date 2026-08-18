import { PILLARS, type Pillar } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function WhatIDo() {
  const { ref, visible } = useReveal<HTMLParagraphElement>();

  return (
    <section id="o-que-faco" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="01 / O que faço" title="Do problema ao software." />

        <p
          ref={ref}
          className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''} body-text mt-12 max-w-2xl text-pretty`}
        >
          Meu trabalho está entre tecnologia, produto e resolução de problemas. Exploro ideias,
          desenvolvo sistemas, crio APIs e transformo processos em soluções digitais.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.label} pillar={pillar} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, delay }: { pillar: Pillar; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-850 sm:p-10`}
    >
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-accent transition-colors duration-500 group-hover:border-accent/50">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-zinc-100">
        {pillar.label}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-500">{pillar.description}</p>
    </div>
  );
}
