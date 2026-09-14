import {
  Triangle,
  Atom,
  FileCode2,
  Wind,
  Server,
  Database,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export type Tech = {
  icon: LucideIcon;
  label: string;
};

export const techStack: Tech[] = [
  { icon: Triangle, label: "Next.js" },
  { icon: Atom, label: "React" },
  { icon: FileCode2, label: "TypeScript" },
  { icon: Wind, label: "Tailwind CSS" },
  { icon: Server, label: "Node.js" },
  { icon: Database, label: "PostgreSQL / Supabase" },
  { icon: Cloud, label: "Vercel" },
];
