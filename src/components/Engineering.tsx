import { PRINCIPLES, type Principle } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Engineering() {
  return (
    <section id="engineering" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader
          number="05 / Engineering"
          title="Tecnologia é importante. As decisões são ainda mais."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <PrincipleCard key={principle.title} principle={principle} delay={(i % 2) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({ principle, delay }: { principle: Principle; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} bg-ink-900 p-8 sm:p-10`}
    >
      <h3 className="font-sans text-xl font-medium text-zinc-100 sm:text-2xl">
        {principle.title}
      </h3>
      <p className="body-text mt-3 max-w-md">{principle.description}</p>
    </div>
  );
}
