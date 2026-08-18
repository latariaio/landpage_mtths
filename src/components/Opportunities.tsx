import { ArrowRight } from 'lucide-react';
import { OPPORTUNITIES, type Opportunity } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Opportunities() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="oportunidades" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <h2 className="heading-lg max-w-3xl text-balance text-zinc-50">
            Vamos construir alguma coisa?
          </h2>
          <p className="body-text mt-6 max-w-2xl text-pretty">
            Estou aberto a projetos interessantes, oportunidades profissionais, colaborações e
            ideias que possam ser transformadas em software.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {OPPORTUNITIES.map((opp, i) => (
            <OpportunityCard key={opp.title} opportunity={opp} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunityCard({ opportunity, delay }: { opportunity: Opportunity; delay: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={opportunity.href}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group flex flex-col justify-between bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-850 sm:p-10`}
    >
      <div>
        <h3 className="font-sans text-xl font-medium text-zinc-100 sm:text-2xl">
          {opportunity.title}
        </h3>
        <p className="body-text mt-3">{opportunity.description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-all duration-300 group-hover:gap-2.5 group-hover:text-accent">
        {opportunity.cta}
        <ArrowRight className="h-4 w-4" />
      </span>
    </a>
  );
}
