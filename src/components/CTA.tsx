import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad border-t border-ink-800">
      <div className="container-page">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-900 px-6 py-16 text-center sm:px-16 sm:py-24`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 0%, rgba(63,167,150,0.10), transparent 70%)',
            }}
          />
          <div className="relative">
            <h2 className="heading-lg mx-auto max-w-3xl text-balance text-zinc-50">
              Tem um problema que pode ser resolvido com software?
            </h2>
            <p className="body-text mx-auto mt-6 max-w-xl text-balance">
              Vamos conversar sobre a sua ideia e descobrir a melhor forma de transformá-la em uma
              solução.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#contato" className="btn-primary">
                Entrar em contato
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Disponível para projetos freelance e oportunidades profissionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
