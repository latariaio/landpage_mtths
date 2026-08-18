import { VENTURES, VENTURE_STATUS_STYLES, type Venture } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Ventures() {
  const { ref, visible } = useReveal<HTMLParagraphElement>();

  return (
    <section id="ventures" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="07 / Ventures" title="Construindo além do código." />

        <p
          ref={ref}
          className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''} body-text mt-12 max-w-2xl text-pretty`}
        >
          Desenvolver software também pode significar criar produtos. Algumas ideias começam
          pequenas, são experimentadas e, quando fazem sentido, podem se transformar em negócios.
        </p>

        <div className="mt-16 flex flex-col">
          {VENTURES.map((venture, i) => (
            <VentureRow key={venture.title} venture={venture} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureRow({ venture, index }: { venture: Venture; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group grid grid-cols-1 gap-4 border-t border-ink-800 py-8 last:border-b sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:py-10`}
    >
      <span className="font-mono text-sm text-zinc-600">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <div className="flex items-center gap-3">
          <h3 className="font-sans text-lg font-medium text-zinc-100 transition-colors duration-300 group-hover:text-accent sm:text-xl">
            {venture.title}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
            {venture.category}
          </span>
        </div>
        <p className="body-text mt-2 max-w-2xl">{venture.description}</p>
      </div>
      <span
        className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${VENTURE_STATUS_STYLES[venture.status]}`}
      >
        {venture.status}
      </span>
    </div>
  );
}
