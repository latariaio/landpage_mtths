import { SKILLS, SKILL_LEVEL_STYLES, type SkillGroup as SkillGroupType } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Skills() {
  return (
    <section id="stack" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="04 / Stack" title="Ferramentas que uso para construir." />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <SkillGroup key={group.title} group={group} delay={i + 1} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <LevelLegend label="Primary" />
          <LevelLegend label="Working with" />
          <LevelLegend label="Exploring" />
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
      <ul className="mt-6 flex flex-col">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between border-t border-ink-800 py-3 first:border-t-0"
          >
            <span className={`text-base ${SKILL_LEVEL_STYLES[item.level]}`}>{item.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              {item.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LevelLegend({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${dotClass(label)}`} />
      <span className="font-mono text-xs text-zinc-500">{label}</span>
    </span>
  );
}

function dotClass(label: string): string {
  if (label === 'Primary') return 'bg-zinc-100';
  if (label === 'Working with') return 'bg-zinc-400';
  return 'bg-zinc-600';
}
