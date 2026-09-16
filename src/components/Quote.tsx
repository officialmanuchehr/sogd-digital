import { FadeIn } from "@/components/ui/FadeIn";

export function Quote() {
  return (
    <section className="border-y border-line py-20 md:py-28">
      <div className="container-page">
        <FadeIn>
          <p className="max-w-3xl font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
            Мы не просто пишем код — мы строим системы, которые управляют бизнесом
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
