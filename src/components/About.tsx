import { FOCUS_LIST } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="06 / Sobre" title="Desenvolvedor, curioso e builder." />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} space-y-6`}>
            <p className="body-text text-pretty">
              Sou Matheus, desenvolvedor de software com foco em backend, sistemas e APIs.
            </p>
            <p className="body-text text-pretty">
              Gosto de entender como as coisas funcionam, construir soluções do zero e transformar
              ideias em projetos reais.
            </p>
            <p className="body-text text-pretty">
              Minha jornada está dividida entre desenvolvimento profissional, estudos de engenharia
              de software e construção de projetos próprios.
            </p>
            <p className="body-text text-pretty">
              Estou constantemente experimentando novas ideias, tecnologias e formas de transformar
              software em produtos úteis.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Atualmente focado em
            </h3>
            <ul className="mt-6 flex flex-col">
              {FOCUS_LIST.map((item, i) => (
                <FocusItem key={item} item={item} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusItem({ item, index }: { item: string; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal reveal-delay-${Math.min(index + 1, 4)} ${visible ? 'is-visible' : ''} flex items-center justify-between border-t border-ink-800 py-3.5 last:border-b`}
    >
      <span className="text-base text-zinc-200">{item}</span>
      <span className="font-mono text-xs text-zinc-700">{String(index + 1).padStart(2, '0')}</span>
    </li>
  );
}
