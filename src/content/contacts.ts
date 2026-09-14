import { Send, MessageCircle, Mail, Phone, type LucideIcon } from "lucide-react";

export type ContactChannel = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

// TODO: replace with real contact details
export const contactChannels: ContactChannel[] = [
  {
    icon: Send,
    label: "Telegram",
    value: "@sogd_digital",
    href: "https://t.me/sogd_digital",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+992 000 00 00 00",
    href: "https://wa.me/992000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@sogd.digital",
    href: "mailto:hello@sogd.digital",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+992 000 00 00 00",
    href: "tel:+992000000000",
  },
];
