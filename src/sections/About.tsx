import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function About() {
  const { t } = useTranslation();
  const points = t("about.points", { returnObjects: true }) as string[];
  return (
    <section id="about" className="py-16">
      <motion.h2 variants={fadeUp} className="text-2xl font-semibold">
        {t("about.title")}
      </motion.h2>
      <motion.ul variants={fadeUp} className="mt-4 grid gap-2 text-neutral-700">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </motion.ul>
    </section>
  );
}
