export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Брифинг",
    description: "Разбираемся в бизнесе, целях и аудитории.",
  },
  {
    number: "02",
    title: "Стратегия и дизайн",
    description: "Прототип и концепция до старта разработки.",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Вёрстка и интеграции на понятных этапах.",
  },
  {
    number: "04",
    title: "Запуск и поддержка",
    description: "Деплой, аналитика и сопровождение после старта.",
  },
];
