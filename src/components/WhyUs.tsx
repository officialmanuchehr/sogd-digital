import { whyUsPoints, stats } from "@/content/whyUs";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Почему нас выбирают
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {whyUsPoints.map((point) => (
            <div key={point.title} className="flex gap-5 border-t border-line pt-6">
              <point.icon
                className="mt-1 shrink-0 text-ink"
                size={22}
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <FadeIn className="mt-20 grid gap-8 border-t border-line pt-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-ink md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-2">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
