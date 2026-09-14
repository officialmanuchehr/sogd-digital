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
    gradientFrom: "#3a3a3a",
    gradientTo: "#0a0a0a",
  },
  {
    category: "Корпоративный",
    title: "Сайт-визитка для сферы услуг",
    result: "Новая структура и понятная навигация для клиентов.",
    gradientFrom: "#8a8a86",
    gradientTo: "#3a3a3a",
  },
  {
    category: "E-commerce",
    title: "Каталог товаров с онлайн-оплатой",
    result: "Удобная админка для самостоятельного управления каталогом.",
    gradientFrom: "#c2c1bc",
    gradientTo: "#5a5a56",
  },
];
