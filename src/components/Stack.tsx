import { STACK } from '@/data/content';

const LIGHT_MARKS = new Set(['nextjs', 'mysql']);

export function Stack() {
  return (
    <section className="section stack" id="stack" aria-labelledby="stack-title">
      <div className="ring ring--stack" aria-hidden="true" />
      <div className="wrap">
        <div className="stack__intro">
          <p className="section__path">/sobre</p>
          <p className="stack__lead">
            Olá! Sou o Matheus, <em>desenvolvedor full stack</em>. Atuo como freelancer desde 2022,
            já liderei times como Tech Lead e hoje estou expandindo meu backend para Go.
          </p>
        </div>

        <h2 id="stack-title" className="section__title stack__title">
          Stack
        </h2>

        <div className="stack__grid">
          {STACK.map((group, groupIndex) => (
            <article key={group.title} className={`stack-card${groupIndex === 0 ? ' stack-card--light' : ''}`}>
              <div className="stack-card__head">
                <h3>{group.title}</h3>
                {group.icons.length > 0 && (
                  <span className="stack-card__icons" aria-hidden="true">
                    {group.icons.map((icon) => (
                      <img
                        key={icon}
                        loading="lazy"
                        className={LIGHT_MARKS.has(icon) && groupIndex !== 0 ? 'invert' : undefined}
                        src={`/icons/${icon}.svg`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    ))}
                  </span>
                )}
              </div>
              <p>{group.items.join(' / ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
