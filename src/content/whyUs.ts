import { Target, Zap, Code2, TrendingUp, type LucideIcon } from "lucide-react";

export type WhyUsPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsPoints: WhyUsPoint[] = [
  {
    icon: Target,
    title: "Узкий фокус",
    description: "Занимаемся только сайтами. Никакого распыления — только экспертиза.",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Прозрачные этапы и запуск в срок, без сюрпризов и срывов.",
  },
  {
    icon: Code2,
    title: "Чистый код",
    description: "Современный стек, быстрая загрузка и SEO из коробки.",
  },
  {
    icon: TrendingUp,
    title: "Результат",
    description: "Каждое решение работает на рост вашего бизнеса.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "100%", label: "фокус на вебе" },
  { value: "от 7 дней", label: "до запуска лендинга" },
  { value: "24/7", label: "поддержка после запуска" },
];
