import { JOBS } from '@/data/content';

export function Experience() {
  return (
    <section className="section work" id="experiencia" aria-labelledby="experiencia-title">
      <div className="wrap">
        <h2 id="experiencia-title" className="section__title work__title">
          Experiência
        </h2>
      </div>
      <ol className="work__rows">
        {JOBS.map((job) => (
          <li key={job.company} className="work__row">
            <div className="wrap work__grid">
              <span className="work__period">{job.period}</span>
              <span className="work__company">{job.company}</span>
              <span className="work__role">
                {job.role} <span aria-hidden="true">|</span> {job.stack}
              </span>
            </div>
          </li>
        ))}
      </ol>
      <div className="wrap">
        <p className="work__total">
          Desenvolvendo desde 2018
          <br />
          <em>Inglês básico, em evolução</em>
        </p>
      </div>
    </section>
  );
}
