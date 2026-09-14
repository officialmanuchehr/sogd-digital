import { services } from "@/content/services";
import { FadeIn } from "@/components/ui/FadeIn";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-paper md:text-4xl">
            Что мы делаем
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Фокусируемся только на разработке сайтов — поэтому делаем их
            глубже и качественнее.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line p-8 transition-colors hover:border-white/20">
                <service.icon
                  className="text-indigo"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-6 text-lg font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
