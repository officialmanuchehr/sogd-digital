"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

const projectTypes = [
  "Лендинг",
  "Корпоративный сайт",
  "Веб-приложение",
  "Интернет-магазин",
  "AI-автоматизация",
  "Другое",
] as const;

type FormState = {
  name: string;
  contact: string;
  projectType: (typeof projectTypes)[number];
  message: string;
};

const initialState: FormState = {
  name: "",
  contact: "",
  projectType: projectTypes[0],
  message: "",
};

const inputClasses =
  "w-full border border-line bg-transparent px-4 py-3 text-ink placeholder:text-muted-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.contact.trim()) {
      setError("Пожалуйста, укажите имя и контакт для связи.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setError("Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-line pt-8">
        <p className="text-ink">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-muted">
          Имя
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          required
          className={inputClasses}
          placeholder="Ваше имя"
        />
      </div>

      <div>
        <label htmlFor="contact" className="mb-2 block text-sm text-muted">
          Контакт (телеграм/телефон)
        </label>
        <input
          id="contact"
          type="text"
          value={form.contact}
          onChange={(e) => update("contact", e.target.value)}
          required
          className={inputClasses}
          placeholder="@username или +992 ..."
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-2 block text-sm text-muted">
          Тип проекта
        </label>
        <select
          id="projectType"
          value={form.projectType}
          onChange={(e) =>
            update("projectType", e.target.value as FormState["projectType"])
          }
          className={inputClasses}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-paper text-ink">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Сообщение
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className={`resize-none ${inputClasses}`}
          placeholder="Расскажите коротко о задаче"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Отправляем..." : "Отправить заявку"}
      </Button>
    </form>
  );
}
