import { processSteps } from "@/content/process";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Как мы работаем
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Четыре шага без сюрпризов — от брифинга до запуска.
          </p>
        </FadeIn>

        {/* Desktop: horizontal stepped timeline */}
        <div className="relative mt-20 hidden md:grid md:grid-cols-4 md:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 h-px bg-line"
            style={{ marginInline: "12.5%" }}
          />
          {processSteps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-ink bg-paper font-display text-sm font-semibold text-ink">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-14 flex flex-col gap-10 md:hidden">
          <div
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-px bg-line"
          />
          {processSteps.map((step) => (
            <div key={step.number} className="relative flex gap-5">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-ink bg-paper font-display text-sm font-semibold text-ink">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
