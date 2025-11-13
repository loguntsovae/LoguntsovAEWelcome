import { motion } from "framer-motion";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import ItTimer from "../components/ItTimer";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h1 variants={fadeUp} className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t("hero.name")}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-xl text-neutral-700 md:text-2xl">
            {t("hero.title")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-neutral-600">
            {t("hero.subline")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-neutral-800">
            {t("hero.tagline")}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="primary">
              {t("common.resume")}
            </Button>
            <Button href="#projects" variant="secondary">{t("common.portfolio")}</Button>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-end">
          <ItTimer startDate="2018-09-01" />
        </motion.div>
      </div>
    </section>
  );
}
