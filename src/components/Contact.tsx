import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="contacts" className="py-24 md:py-32">
      <div className="container-page">
        <FadeIn>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Свяжитесь с нами
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 max-w-xl">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
