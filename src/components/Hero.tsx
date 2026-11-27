import { CONTACT } from '@/data/content';
import { ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="ring ring--hero" aria-hidden="true" />
      <div className="wrap">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--first">Full Stack</span>
          <span className="hero__row">
            <span className="hero__intro">
              Sou Matheus Monteiro, desenvolvedor em Belém (PA) desde 2018. Construo{' '}
              <em>APIs, sistemas web e apps mobile</em>, do requisito ao deploy.
            </span>
            <span className="hero__line hero__line--second">Developer</span>
          </span>
        </h1>

        <div className="hero__actions">
          <a className="pill pill--light" href="#projetos">
            Ver projetos
            <ArrowRight />
          </a>
          <a className="pill" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
          <a className="pill" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
          <a className="pill" href={CONTACT.email}>
            <MailIcon />
            E-mail
          </a>
        </div>

        <dl className="hero__facts">
          <div>
            <dt>Desde 2018</dt>
            <dd>desenvolvendo software</dd>
          </div>
          <div>
            <dt>5 devs</dt>
            <dd>liderados como Tech Lead</dd>
          </div>
          <div>
            <dt>+10% acordos</dt>
            <dd>na plataforma de cobrança</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
