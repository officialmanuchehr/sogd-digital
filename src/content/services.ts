import { Rocket, Building2, AppWindow, ShoppingBag, Sparkles, Globe, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Rocket,
    title: "Full-Stack Разработка",
    description: "Комплексные решения от идеи до запуска.",
  },
  {
    icon: Building2,
    title: "API Интеграции",
    description: "Связываем ваши сервисы в единую экосистему.",
  },
  {
    icon: AppWindow,
    title: "ИИ-Ассистенты",
    description: "Внедрение нейросетей для умной автоматизации бизнеса.",
  },
  {
    icon: ShoppingBag,
    title: "Архитектура Систем",
    description: "Проектирование надежных и масштабируемых структур.",
  },
  {
    icon: Sparkles,
    title: "Автоматизация",
    description: "Минимизируем рутину, максимизируем эффективность.",
  },
  {
    icon: Globe,
    title: "Кастомные сайты",
    description: "Разработка уникальных веб-решений под ваши запросы.",
  },
];
