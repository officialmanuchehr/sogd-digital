import { Target, Zap, Code2, TrendingUp, type LucideIcon } from "lucide-react";

export type WhyUsPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsPoints: WhyUsPoint[] = [
  {
    icon: Zap,
    title: "Быстрая реализация",
    description: "Ценим ваше время и рынок.",
  },
  {
    icon: Code2,
    title: "Чистая архитектура",
    description: "Код, который легко поддерживать.",
  },
  {
    icon: Target,
    title: "Бизнес-ориентированность",
    description: "Решаем реальные задачи бизнеса.",
  },
  {
    icon: TrendingUp,
    title: "Гибкость и выгода",
    description: "Эффективное распределение ресурсов.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "100%", label: "фокус только на вебе" },
  { value: "от 7 дней", label: "от идеи до запуска" },
  { value: "24/7", label: "поддержка, когда она нужна" },
];
