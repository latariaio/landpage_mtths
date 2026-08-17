import { SERVICES, type Service } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Services() {
  return (
    <section id="servicos" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader
          number="06 / Serviços"
          title="Posso ajudar a transformar uma ideia em software."
        />

        <div className="mt-16 flex flex-col">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group grid grid-cols-1 gap-4 border-t border-ink-800 py-8 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10 sm:py-10`}
    >
      <span className="font-mono text-sm text-zinc-600">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="font-sans text-xl font-medium text-zinc-100 transition-colors duration-300 group-hover:text-accent sm:text-2xl">
          {service.title}
        </h3>
        <p className="body-text mt-2 max-w-2xl">{service.description}</p>
      </div>
    </div>
  );
}
