import { PROCESS_STEPS } from '@/data/content';
import { SectionHeader } from '@/components/SectionHeader';
import { useReveal } from '@/hooks/useReveal';

export function Process() {
  return (
    <section id="processo" className="section-pad border-t border-ink-800">
      <div className="container-page">
        <SectionHeader number="03 / Processo" title="Do problema ao software." />

        <div className="mt-16 flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessItem key={step.step} step={step} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessItem({
  step,
  isLast,
}: {
  step: (typeof PROCESS_STEPS)[number];
  isLast: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} relative flex gap-6 pb-12 sm:gap-10 sm:pb-16`}
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-600 font-mono text-sm text-accent transition-colors duration-500 sm:h-14 sm:w-14">
          {step.step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-ink-700" />}
      </div>

      <div className="pt-2 sm:pt-3">
        <h3 className="font-sans text-xl font-medium text-zinc-100 sm:text-2xl">{step.title}</h3>
        <p className="body-text mt-2 max-w-xl">{step.description}</p>
      </div>
    </div>
  );
}
