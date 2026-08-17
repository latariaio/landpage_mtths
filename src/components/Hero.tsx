import { ArrowRight, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] flex-col justify-center pt-24 pb-16 sm:min-h-screen"
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
            Disponível para novos projetos
          </span>
        </div>

        <h1
          className="heading-xl max-w-4xl text-balance text-zinc-50 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Construo sistemas simples, confiáveis e feitos para resolver problemas reais.
        </h1>

        <p
          className="body-text mt-8 max-w-2xl text-balance opacity-0 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          Desenvolvedor de sistemas e aplicativos personalizados, criando APIs, aplicações web e
          soluções sob medida para transformar necessidades de negócio em software.
        </p>

        <div
          className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:items-center"
          style={{ animationDelay: '0.5s' }}
        >
          <a href="#contato" className="btn-primary w-full justify-center sm:w-auto">
            Vamos conversar
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projetos"
            className="btn-ghost w-full justify-center sm:w-auto"
          >
            Ver meus projetos
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <p
          className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          Desenvolvimento sob medida · Backend · APIs · Sistemas Web
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-700">
          Role para baixo
        </span>
      </div>
    </section>
  );
}
