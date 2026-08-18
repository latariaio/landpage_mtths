import { FlaskConical } from 'lucide-react';
import { LAB_ITEMS, LAB_STATUS_STYLES, LAB_ICONS, type LabItem } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Lab() {
  const { ref, visible } = useReveal<HTMLParagraphElement>();

  return (
    <section id="lab" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="03 / Lab" title="Lab" />

        <p
          ref={ref}
          className={`reveal reveal-delay-1 ${visible ? 'is-visible' : ''} body-text mt-12 max-w-2xl text-pretty`}
        >
          Nem tudo precisa começar como um produto. Algumas coisas começam como uma ideia, um
          experimento ou algumas linhas de código.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_ITEMS.map((item, i) => (
            <LabCard key={item.id} item={item} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LabCard({ item, delay }: { item: LabItem; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = LAB_ICONS[item.tag] ?? FlaskConical;

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-850`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 text-zinc-500 transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </div>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide ${LAB_STATUS_STYLES[item.status]}`}
        >
          {item.status}
        </span>
      </div>

      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
        {item.tag}
      </span>
      <h3 className="mt-2 font-sans text-base font-medium text-zinc-100">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
    </div>
  );
}
