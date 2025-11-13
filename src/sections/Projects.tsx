import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import placeholder from "../assets/profile-placeholder.svg";

type Project = {
  key: string;
  title: string;
  desc: string;
  live?: string;
  github?: string;
  image?: string;
};

export default function Projects() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const projects: Project[] = [
    { key: "asyncflow", title: "AsyncFlow", desc: t("projects.items.asyncflow") as string, live: "#", github: "#", image: placeholder },
    { key: "easypeasysobes", title: "EasyPeasySobes", desc: t("projects.items.easypeasysobes") as string, live: "#", github: "#", image: placeholder },
    { key: "sudoku", title: "Sudoku Solver", desc: t("projects.items.sudoku") as string, live: "#", github: "#", image: placeholder },
    { key: "awsdemo", title: "AWS Deployment Demo", desc: t("projects.items.awsdemo") as string, live: "#", github: "#", image: placeholder }
  ];

  return (
    <section id="projects" className="py-16">
      <button
        type="button"
        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-left hover:bg-neutral-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{t("projects.title")}</h2>
          <span className="text-neutral-400">{open ? "–" : "+"}</span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <div key={p.key} className="card">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      {p.image && <img src={p.image} alt="" className="h-16 w-16 rounded border border-neutral-200 object-cover" />}
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-medium">{p.title}</h3>
                        <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                        <div className="mt-4 flex gap-3">
                          {p.live && (
                            <Button href={p.live} target="_blank" rel="noopener" variant="secondary">
                              {t("common.live")}
                            </Button>
                          )}
                          {p.github && (
                            <Button href={p.github} target="_blank" rel="noopener" variant="secondary">
                              GitHub
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
