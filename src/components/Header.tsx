"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/nav";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center" aria-label="sogd.digital — на главную">
          <Image
            src="/logo/sogd-logo-dark.svg"
            alt="sogd.digital"
            width={117}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="#contacts">Обсудить проект</LinkButton>
        </div>

        <button
          type="button"
          className="md:hidden text-paper"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-ink border-t border-line">
          <nav
            className="container-page flex flex-col gap-6 py-8"
            aria-label="Мобильная навигация"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-paper"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full"
            >
              Обсудить проект
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
