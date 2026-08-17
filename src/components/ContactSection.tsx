import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function ContactSection() {
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
    {
      label: '99Freelas',
      value: CONTACT_INFO.ninetyfreelas,
      href: SOCIAL_LINKS.ninetyfreelas,
      icon: ExternalLink,
      external: true,
    },
  ];

  return (
    <section id="contato" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="07 / Contato" title="Vamos construir algo útil." />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20`}
        >
          <div>
            <p className="body-text max-w-md text-balance">
              Se você tem um problema que pode ser resolvido com software, posso ajudar a
              transformar isso em uma solução real.
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="btn-primary mt-8 w-full justify-center sm:w-auto"
            >
              Enviar mensagem
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="flex flex-col">
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
                      <Icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-accent" strokeWidth={1.5} />
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
