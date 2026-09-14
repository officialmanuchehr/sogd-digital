import { FadeIn } from "@/components/ui/FadeIn";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <div className="bg-brand-gradient rounded-3xl px-8 py-16 text-center md:px-16 md:py-20">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Готовы начать проект?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Первая консультация — бесплатно. Расскажите о задаче, обсудим
              стратегию и сроки.
            </p>
            <a
              href="#contacts"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Оставить заявку
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
