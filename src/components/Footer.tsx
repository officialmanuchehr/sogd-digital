import Image from "next/image";
import { Send, Camera, MessageCircle } from "lucide-react";
import { navLinks } from "@/content/nav";

// TODO: swap for real brand icons if a brand icon set is added later
const socialLinks = [
  { icon: Send, label: "Telegram", href: "https://t.me/sogd_digital" },
  { icon: Camera, label: "Instagram", href: "https://instagram.com/sogd.digital" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/992000000000" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="container-page grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <Image
            src="/logo/sogd-logo-light.svg"
            alt="sogd.digital"
            width={84}
            height={32}
            className="h-8 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Соединяем бизнес с цифрой.
          </p>
        </div>

        <div>
          <h3 className="label text-ink">Навигация</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-2">
          © 2026 sogd.digital · Худжанд, Согдийская область
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-2 hover:text-ink transition-colors"
            >
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
