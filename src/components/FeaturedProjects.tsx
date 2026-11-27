import { useState, type KeyboardEvent } from 'react';
import { PROJECTS, type Project } from '@/data/content';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@/components/Icons';

export function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];
  const total = PROJECTS.length;

  const go = (next: number) => setIndex((next + total) % total);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') go(index + 1);
    if (event.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <section className="section projects" id="projetos" aria-labelledby="projetos-title">
      <div className="wrap">
        <div className="section__head">
          <p className="section__path">/projetos</p>
          <h2 id="projetos-title" className="section__title">
            Projetos
          </h2>
        </div>

        <div
          className="feature"
          role="group"
          aria-roledescription="destaque de projetos"
          aria-label={`Projeto ${index + 1} de ${total}: ${project.name}`}
          onKeyDown={onKeyDown}
        >
          <FeatureMedia key={project.id} project={project} />

          <div className="feature__body">
            <p className="feature__count" aria-live="polite">
              <span>{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
              <span className="feature__kind">{project.kind}</span>
            </p>
            <h3 className="feature__name">{project.name}</h3>
            <p className="feature__description">{project.description}</p>
            <ul className="feature__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="feature__tech">{project.technologies.join(' / ')}</p>

            <div className="feature__footer">
              {project.links.map((link) => (
                <a key={link.href} className="pill pill--light" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight />
                </a>
              ))}
              <div className="feature__arrows">
                <button className="round" type="button" onClick={() => go(index - 1)} aria-label="Projeto anterior">
                  <ArrowLeft />
                </button>
                <button className="round" type="button" onClick={() => go(index + 1)} aria-label="Próximo projeto">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ol className="project-list" aria-label="Todos os projetos">
          {PROJECTS.map((item, itemIndex) => (
            <li key={item.id}>
              <button
                type="button"
                aria-current={itemIndex === index ? 'true' : undefined}
                onClick={() => setIndex(itemIndex)}
              >
                <span className="project-list__index">{String(itemIndex + 1).padStart(2, '0')}</span>
                <span className="project-list__name">{item.name}</span>
                {item.video && <span className="project-list__badge">vídeo</span>}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeatureMedia({ project }: { project: Project }) {
  if (project.video) {
    return (
      <div className="feature__media">
        <video controls playsInline preload="none" poster={project.video.poster} aria-label={project.video.label}>
          <source src={project.video.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="feature__media feature__media--spec" aria-hidden="true">
      <p className="spec__path">~/projetos/{project.id}</p>
      <p className="spec__name">{project.name}</p>
      <ul className="spec__stack">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}
