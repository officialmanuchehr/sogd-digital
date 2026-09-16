import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="contacts" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <p className="max-w-xl text-muted">
            Опишите задачу — ответим в течение дня и предложим решение, а не
            шаблон.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 max-w-xl">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
