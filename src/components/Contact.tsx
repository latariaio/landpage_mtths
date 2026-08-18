import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const channels = [
    {
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'GitHub',
      value: CONTACT_INFO.github,
      href: SOCIAL_LINKS.github,
      icon: Github,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: CONTACT_INFO.linkedin,
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <section id="contato" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-accent">08 / Contato</span>
            <span className="h-px w-10 bg-ink-600" />
          </div>

          <h2 className="heading-xl max-w-3xl text-balance text-zinc-50">Tem uma ideia?</h2>

          <p className="body-text mt-8 max-w-2xl text-pretty">
            Uma ideia, um problema, um projeto ou simplesmente vontade de conversar sobre
            tecnologia?
          </p>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-zinc-500">
            Minha caixa de entrada está aberta.
          </p>

          <div className="mt-10">
            <a href={`mailto:${CONTACT_INFO.email}`} className="btn-primary">
              Vamos conversar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-16 flex flex-col">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between border-t border-ink-800 py-5 transition-colors last:border-b hover:bg-ink-900/40"
                  >
                    <span className="flex items-center gap-4">
                      <Icon
                        className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-accent"
                        strokeWidth={1.5}
                      />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {channel.label}
                      </span>
                    </span>
                    <span className="text-sm text-zinc-300 transition-colors group-hover:text-accent">
                      {channel.value}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
