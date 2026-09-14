import { Bot, Workflow, Sparkles, type LucideIcon } from "lucide-react";

export type AiOffering = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const aiOfferings: AiOffering[] = [
  {
    icon: Bot,
    title: "Чат-боты",
    description:
      "Отвечают клиентам, собирают заявки и квалифицируют лиды в Telegram, Instagram и на сайте.",
  },
  {
    icon: Workflow,
    title: "Автоматизация процессов",
    description:
      "Связываем ваши сервисы в один поток: заявки, CRM, уведомления, отчёты — без ручной работы.",
  },
  {
    icon: Sparkles,
    title: "AI для контента",
    description:
      "Генерация текстов, изображений и видео для маркетинга — быстро и в вашем стиле.",
  },
];
