import { useEffect, useState } from 'react';
import { CONTACT, NAV_LINKS } from '@/data/content';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="header__name" href="#conteudo">
          Matheus
          <br />
          Monteiro
        </a>
        <nav className="header__nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="pill pill--light header__cta" href={CONTACT.email}>
          Falar sobre uma vaga
        </a>
        <button
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav id="menu" className="header__sheet" aria-label="Menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="pill pill--light" href={CONTACT.email} onClick={() => setOpen(false)}>
            Falar sobre uma vaga
          </a>
        </nav>
      )}
    </header>
  );
}
