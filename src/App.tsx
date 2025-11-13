import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LanguageToggle from "./components/LanguageToggle";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import LookingFor from "./sections/LookingFor";
import Contacts from "./sections/Contacts";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
          <LanguageToggle />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <LookingFor />
          <Contacts />
        </motion.div>
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
        {t("footer.madeBy", { name: "Aleksei Loguntsov" })}
      </footer>
    </div>
  );
}
