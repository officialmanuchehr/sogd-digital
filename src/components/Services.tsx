import { services } from "@/content/services";
import { FadeIn } from "@/components/ui/FadeIn";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Мы создаем все, что нужно вашему бизнесу — от простых инструментов до сложных платформ
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            От лендинга до интернет-магазина — весь цикл в одной команде.
          </p>
        </FadeIn>

        <div className="mt-14 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <div className="h-full border-r border-b border-line p-8">
                <span className="label block text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <service.icon
                  className="mt-6 text-ink"
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-6 text-lg font-semibold text-ink">
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
