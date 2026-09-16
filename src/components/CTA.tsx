import { FadeIn } from "@/components/ui/FadeIn";
import { LinkButton } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <div className="bg-ink px-8 py-16 text-center md:px-16 md:py-20">
            <h2 className="text-3xl font-semibold text-paper md:text-4xl">
              Готовы?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-paper/70">
              Первая консультация — бесплатно. Опишите задачу, а мы предложим
              решение и сроки.
            </p>
            <LinkButton href="#contacts" variant="inverted" className="mt-8">
              Оставить заявку
            </LinkButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
