import { useReveal } from '@/hooks/useReveal';

export function ImpactQuote() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad border-t border-ink-800">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-4xl`}>
          <p className="heading-lg text-balance text-zinc-100">
            Não quero apenas escrever código. Quero construir coisas que tenham propósito.
          </p>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-zinc-600">
            Software é a ferramenta. Resolver problemas é o objetivo.
          </p>
        </div>
      </div>
    </section>
  );
}
