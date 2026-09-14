import { contactChannels } from "@/content/contacts";
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

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <FadeIn className="flex flex-col divide-y divide-line border-t border-line">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 py-5 transition-colors hover:bg-ink/[0.03]"
              >
                <channel.icon
                  className="text-ink"
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <div className="text-sm text-muted-2">{channel.label}</div>
                  <div className="text-ink">{channel.value}</div>
                </div>
              </a>
            ))}
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
