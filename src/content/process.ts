export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Брифинг",
    description: "Изучаем ваш бизнес, цели, аудиторию и конкурентов.",
  },
  {
    number: "02",
    title: "Стратегия и дизайн",
    description: "Прототип, визуальная концепция и техническое задание.",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Вёрстка, интеграции и наполнение на согласованных этапах.",
  },
  {
    number: "04",
    title: "Запуск и поддержка",
    description: "Деплой, аналитика и дальнейшее сопровождение.",
  },
];
