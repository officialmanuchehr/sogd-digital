import { Rocket, Building2, AppWindow, ShoppingBag, Sparkles, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Rocket,
    title: "Лендинги",
    description:
      "Продающие одностраничники с высокой конверсией: быстрый запуск, аналитика, A/B-тесты.",
  },
  {
    icon: Building2,
    title: "Корпоративные сайты",
    description:
      "Формируем доверие к бренду и приводим клиентов. Структура, контент, SEO.",
  },
  {
    icon: AppWindow,
    title: "Веб-приложения",
    description:
      "Личные кабинеты, сложная логика, интеграции и автоматизация процессов.",
  },
  {
    icon: ShoppingBag,
    title: "Интернет-магазины",
    description:
      "Каталог, корзина, онлайн-оплата и удобная админка для управления.",
  },
  {
    icon: Sparkles,
    title: "AI-автоматизация",
    description:
      "Чат-боты, автоматизация заявок и рутинных процессов, AI для контента и поддержки клиентов. Меньше ручной работы — больше роста.",
  },
];
