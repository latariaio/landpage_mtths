import { CONTACT } from '@/data/content';
import { ArrowRight, GithubIcon, LinkedinIcon } from '@/components/Icons';

export function Contact() {
  return (
    <footer className="contact" id="contato" aria-labelledby="contato-title">
      <div className="wrap">
        <p className="section__path">/contato</p>
        <h2 id="contato-title" className="contact__title">
          Vamos conversar
          <br />
          sobre a sua vaga
        </h2>
        <div className="contact__actions">
          <a className="pill pill--light pill--large" href={CONTACT.email}>
            {CONTACT.emailAddress}
            <ArrowRight />
          </a>
          <a className="pill pill--large" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
          <a className="pill pill--large" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </div>
        <div className="contact__legal">
          <span>© {new Date().getFullYear()} Matheus Monteiro</span>
          <span>Desenvolvedor Full Stack em Belém (PA)</span>
        </div>
      </div>
    </footer>
  );
}
