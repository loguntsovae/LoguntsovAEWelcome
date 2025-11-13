import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionItem } from "../components/Accordion";

export default function Skills() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [expanded, setExpanded] = useState(false);
  const items = t("skills.items", { returnObjects: true }) as { title: string; points: string[] }[];
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <button
          type="button"
          className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-left hover:bg-neutral-50"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{t("skills.title")}</h2>
            <span className="text-neutral-400">{expanded ? "–" : "+"}</span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-3">
                {items.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    title={item.title}
                    isOpen={openIdx === idx}
                    onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                  >
                    <ul className="grid gap-1">
                      {item.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
