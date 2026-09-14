import { works } from "@/content/works";
import { FadeIn } from "@/components/ui/FadeIn";

export function Works() {
  return (
    <section id="works" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-paper md:text-4xl">
            Избранные работы
          </h2>
          <p className="mt-4 max-w-xl text-muted">Кейсы, которыми гордимся.</p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <FadeIn key={work.title} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-line">
                <div
                  className="h-40 w-full"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${work.gradientFrom}, ${work.gradientTo})`,
                  }}
                  aria-hidden
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-gold">
                    {work.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-paper">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {work.result}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-2">Портфолио пополняется.</p>
      </div>
    </section>
  );
}
