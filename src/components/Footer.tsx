import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/content';

export function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#inicio"
              className="font-mono text-sm font-medium text-zinc-100 transition-colors hover:text-accent"
            >
              mtths<span className="text-accent">.com.br</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              Software · Engineering · Building
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Email"
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-zinc-600">© 2026 Matheus</p>
          <p className="font-mono text-xs text-zinc-700">
            Built with code, curiosity and too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
