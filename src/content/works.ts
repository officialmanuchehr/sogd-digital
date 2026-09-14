// TODO: replace with real cases
export type WorkCategory =
  | "Лендинг"
  | "Корпоративный"
  | "Веб-приложение"
  | "E-commerce";

export type Work = {
  category: WorkCategory;
  title: string;
  result: string;
  gradientFrom: string;
  gradientTo: string;
};

export const works: Work[] = [
  {
    category: "Лендинг",
    title: "Запуск продукта для локального бренда",
    result: "Рост заявок с сайта за первый месяц продвижения.",
    gradientFrom: "#4F46E5",
    gradientTo: "#8B5CF6",
  },
  {
    category: "Корпоративный",
    title: "Сайт-визитка для сферы услуг",
    result: "Новая структура и понятная навигация для клиентов.",
    gradientFrom: "#121732",
    gradientTo: "#4F46E5",
  },
  {
    category: "E-commerce",
    title: "Каталог товаров с онлайн-оплатой",
    result: "Удобная админка для самостоятельного управления каталогом.",
    gradientFrom: "#8B5CF6",
    gradientTo: "#F5B13D",
  },
];
