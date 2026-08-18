import { ArrowRight, ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/content';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[94vh] flex-col justify-center pt-24 pb-16 sm:min-h-screen"
    >
      <div className="container-page">
        <div
          className="mb-8 flex items-center gap-2.5 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Desenvolvedor &amp; Builder
          </span>
        </div>

        <h1
          className="heading-xl max-w-4xl text-balance text-zinc-50 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Construo software para transformar ideias em realidade.
        </h1>

        <p
          className="body-text mt-8 max-w-2xl text-pretty opacity-0 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          Desenvolvedor de sistemas e aplicativos, apaixonado por backend, arquitetura e produtos
          digitais. Construo projetos próprios e soluções sob medida para transformar problemas em
          software.
        </p>

        <div
          className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:items-center"
          style={{ animationDelay: '0.5s' }}
        >
          <a href="#projetos" className="btn-primary w-full justify-center sm:w-auto">
            Explorar projetos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contato" className="btn-ghost w-full justify-center sm:w-auto">
            Vamos conversar
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text w-full justify-center sm:w-auto"
          >
            GitHub ↗
          </a>
        </div>

        <p
          className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          Backend · APIs · Sistemas · Automação · Produtos Digitais
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <ArrowDown className="h-4 w-4 text-zinc-700" />
      </div>
    </section>
  );
}
