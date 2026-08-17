import { VALUES } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader
          number="05 / Sobre"
          title="Desenvolvedor interessado em transformar problemas em software."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} space-y-6`}
          >
            <p className="body-text text-balance">
              Sou Matheus, desenvolvedor de sistemas e aplicativos personalizados. Meu foco está
              principalmente no desenvolvimento backend, APIs e construção de sistemas que
              resolvem problemas reais.
            </p>
            <p className="body-text text-balance">
              Gosto de entender como um processo funciona antes de pensar na tecnologia. Acredito
              que um bom software deve ser simples de entender, fácil de manter e capaz de evoluir
              junto com o negócio.
            </p>
            <p className="body-text text-balance">
              Atualmente estou aprofundando meus conhecimentos em Go, arquitetura de software,
              APIs, Docker e infraestrutura.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              O que valorizo
            </h3>
            <ul className="mt-6 flex flex-col">
              {VALUES.map((value, i) => (
                <ValueItem key={value} value={value} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueItem({ value, index }: { value: string; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal reveal-delay-${Math.min(index + 1, 4)} ${visible ? 'is-visible' : ''} flex items-center justify-between border-t border-ink-800 py-4 last:border-b`}
    >
      <span className="text-base text-zinc-200">{value}</span>
      <span className="font-mono text-xs text-zinc-700">{String(index + 1).padStart(2, '0')}</span>
    </li>
  );
}
