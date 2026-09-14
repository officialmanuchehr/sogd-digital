import { techStack } from "@/content/tech";
import { FadeIn } from "@/components/ui/FadeIn";

export function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-paper md:text-4xl">
            Наш стек
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Работаем на современных технологиях — это скорость, безопасность
            и масштабируемость.
          </p>
        </FadeIn>

        <FadeIn className="mt-14 flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.label}
              className="flex items-center gap-3 rounded-full border border-line px-5 py-3 text-sm text-muted"
            >
              <tech.icon size={18} strokeWidth={1.75} aria-hidden />
              <span>{tech.label}</span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
