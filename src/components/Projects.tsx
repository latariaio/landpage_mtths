import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECT_STATUS_STYLES, SOCIAL_LINKS, type Project } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Projects() {
  return (
    <section id="projetos" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="02 / Projetos" title="O código fala por mim." />

        <p className="body-text mt-8 max-w-2xl text-pretty">
          Projetos pessoais, experimentos e sistemas desenvolvidos para colocar ideias em prática.
        </p>

        <div className="mt-16 flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i + 1} />
          ))}
        </div>

        <div className="mt-12">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-text">
            Ver todos os projetos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group relative border-t border-ink-800 py-10 transition-all duration-500 last:border-b hover:bg-ink-900/40 sm:py-14`}
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:gap-16">
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-sm text-zinc-600">{project.index}</span>
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${PROJECT_STATUS_STYLES[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="heading-md text-zinc-50 transition-colors duration-300 group-hover:text-accent">
            {project.name}
          </h3>

          <p className="body-text mt-4 max-w-2xl">{project.description}</p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600">
            <span className="font-mono text-zinc-500">Problema: </span>
            {project.problem}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink-600 bg-ink-850 px-3 py-1.5 font-mono text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-row gap-4 sm:mt-1 sm:flex-col sm:items-end">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
