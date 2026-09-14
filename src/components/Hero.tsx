"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(79,70,229,0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.28), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(246,245,251,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page"
      >
        <motion.span
          variants={item}
          className="mb-6 block text-sm font-medium text-gold"
        >
          Веб-студия · Худжанд
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-semibold text-paper sm:text-5xl md:text-6xl"
        >
          Создаём сайты, которые работают на ваш бизнес
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          sogd.digital — веб-студия полного цикла по разработке сайтов.
          Лендинги, корпоративные сайты, веб-приложения и интернет-магазины —
          современно, быстро, под ключ.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <LinkButton href="#contacts">Обсудить проект</LinkButton>
          <LinkButton href="#services" variant="secondary">
            Смотреть услуги
          </LinkButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-2"
        >
          <span>Современный стек</span>
          <span aria-hidden className="text-muted-2/60">
            ·
          </span>
          <span>Чистый код</span>
          <span aria-hidden className="text-muted-2/60">
            ·
          </span>
          <span>Запуск в срок</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
