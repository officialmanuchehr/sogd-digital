import { aiOfferings } from "@/content/ai";
import { FadeIn } from "@/components/ui/FadeIn";

export function AiServices() {
  return (
    <section id="ai" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            AI для вашего бизнеса
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Автоматизируем то, что отнимает время: заявки, ответы клиентам,
            рутину. Настраиваем под ваши процессы — работает 24/7.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {aiOfferings.map((offering) => (
            <div
              key={offering.title}
              className="flex gap-5 border-t border-line pt-6"
            >
              <offering.icon
                className="mt-1 shrink-0 text-ink"
                size={22}
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="label mt-8 text-muted-2">
          Работаем на n8n, Claude и современных AI-инструментах.
        </p>
      </div>
    </section>
  );
}
