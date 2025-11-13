import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LanguageToggle from "./components/LanguageToggle";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
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
      <div className="mx-auto max-w-7xl">
        <LanguageToggle />
      </div>
      <main>
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <Hero />
          <Skills />
          <Projects />
          <Contacts />
        </motion.div>
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-500">
        {t("footer.madeBy", { name: "Aleksei Loguntsov" })}
      </footer>
    </div>
  );
}
