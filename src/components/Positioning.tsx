import { HIGHLIGHTS } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Positioning() {
  return (
    <section id="o-que-eu-faco" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader
          number="01 / O que eu faço"
          title="Software pensado para o problema, não apenas para a tecnologia."
        />

        <div className="mt-12 max-w-2xl">
          <RevealText>
            Cada projeto começa entendendo o problema. A partir disso, desenvolvo soluções simples,
            organizadas e preparadas para evoluir conforme o negócio cresce.
          </RevealText>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={item.title} item={item} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealText({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal<HTMLParagraphElement>();
  return (
    <p
      ref={ref}
      className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''} body-text`}
    >
      {children}
    </p>
  );
}

function HighlightCard({
  item,
  delay,
}: {
  item: (typeof HIGHLIGHTS)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-850 sm:p-10`}
    >
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-accent transition-colors duration-500 group-hover:border-accent/50">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-sans text-lg font-medium text-zinc-100">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.description}</p>
    </div>
  );
}
