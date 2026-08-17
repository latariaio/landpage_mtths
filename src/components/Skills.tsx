import { SKILLS, type SkillGroup as SkillGroupType } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Skills() {
  return (
    <section id="habilidades" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader
          number="04 / Stack"
          title="Ferramentas que utilizo para construir software."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <SkillGroup key={group.title} group={group} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group, delay }: { group: SkillGroupType; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} bg-ink-900 p-8 sm:p-10`}
    >
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{group.title}</h3>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        {group.items.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <span
              className={`text-base ${item.learning ? 'text-zinc-600' : 'text-zinc-200'}`}
            >
              {item.name}
            </span>
            {item.learning && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent/70">
                estudando
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
