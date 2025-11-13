import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AccordionItem } from "../components/Accordion";

export default function Skills() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const items = t("skills.items", { returnObjects: true }) as { title: string; points: string[] }[];
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold">{t("skills.title")}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item, idx) => (
          <AccordionItem key={idx} title={item.title} isOpen={open === idx} onToggle={() => setOpen(open === idx ? null : idx)}>
            <ul className="grid gap-1">
              {item.points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
