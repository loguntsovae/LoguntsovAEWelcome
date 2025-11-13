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
        { 
            key: "AsyncFlow", 
            title: "AsyncFlow", 
            desc: t("projects.items.asyncflow") as string, 
            live: "https://loguntsovae.digital/asyncflow", 
            github: "https://github.com/loguntsovae/AsyncFlow", 
            image: placeholder 
        },
        { 
            key: "TextSummarizer", 
            title: "TextSummarizer", 
            desc: t("projects.items.TextSummarizer") as string, 
            live: "https://loguntsovae.digital/textsummarizer", 
            github: "https://github.com/loguntsovae/TextSummarizer", 
            image: placeholder 
        },
        { 
            key: "sudoku", 
            title: "Sudoku Solver", 
            desc: t("projects.items.sudoku") as string, 
            live: "https://loguntsovae.digital/sudoku", 
            github: "https://github.com/loguntsovae/sudoku", 
            image: placeholder 
        },
        { 
            key: "TeachMeMailer", 
            title: "TeachMeMailer", 
            desc: t("projects.items.TeachMeMailer") as string, 
            live: "https://loguntsovae.digital/mailer", 
            github: "https://github.com/loguntsovae/TeachMeMailer", 
            image: placeholder 
        }
    ];

    const toggleOpen = () => setOpen((prev) => !prev);

    return (
        <section id="projects" className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-left hover:bg-neutral-50"
                    onClick={toggleOpen}
                    aria-expanded={open}
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">{t("projects.title")}</h2>
                        <span className="text-neutral-400">{open ? "–" : "+"}</span>
                    </div>
                </button>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                {projects.map((project) => (
                                    <ProjectCard key={project.key} project={project} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-body">
                <div className="flex items-start gap-4">
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-16 w-16 rounded border border-neutral-200 object-cover"
                        />
                    )}
                    <div className="min-w-0">
                        <h3 className="truncate text-lg font-medium">{project.title}</h3>
                        <p className="mt-1 text-sm text-neutral-600">{project.desc}</p>
                        <div className="mt-4 flex gap-3">
                            {project.live && (
                                <Button href={project.live} target="_blank" rel="noopener" variant="secondary">
                                    {t("common.live")}
                                </Button>
                            )}
                            {project.github && (
                                <Button href={project.github} target="_blank" rel="noopener" variant="secondary">
                                    GitHub
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
