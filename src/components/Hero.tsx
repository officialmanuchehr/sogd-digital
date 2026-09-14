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

const specs = ["Современный стек", "Чистый код", "Запуск в срок"];

export function Hero() {
  return (
    <section className="bg-ink pt-40 pb-24 md:pt-48 md:pb-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page md:grid md:grid-cols-[1fr_260px] md:gap-16"
      >
        <div>
          <motion.span
            variants={item}
            className="label mb-6 block text-paper/50"
          >
            Веб-студия · Худжанд
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-2xl text-3xl font-semibold text-paper sm:text-4xl md:text-5xl"
          >
            Создаём сайты, которые работают на ваш бизнес
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base text-paper/60 md:text-lg"
          >
            sogd.digital — веб-студия полного цикла по разработке сайтов и
            AI-автоматизации. Лендинги, корпоративные сайты, веб-приложения,
            интернет-магазины и чат-боты — современно, быстро, под ключ.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <LinkButton href="#contacts" variant="inverted">
              Обсудить проект
            </LinkButton>
            <LinkButton href="#services" variant="outlineInvert">
              Смотреть услуги
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-col md:mt-0 md:justify-start"
        >
          {specs.map((spec, i) => (
            <span
              key={spec}
              className={`label py-3 text-paper/50 ${
                i > 0 ? "border-t border-line-invert" : ""
              }`}
            >
              {spec}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
