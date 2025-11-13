import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useItTimer } from "../hooks/useItTimer";

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

function AnimatedUnit({ value, suffix, pad = false }: { value: number; suffix: string; pad?: boolean }) {
  const display = (pad ? pad2(value) : String(value)) + suffix;
  return (
    <span className="inline-block tabular-nums">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={display}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-block"
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function ItTimer({ startDate = "2018-09-01" }: { startDate?: string }) {
  const { t } = useTranslation();
  const { years, months, days, hours, minutes, seconds } = useItTimer(startDate);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        className="text-xs uppercase tracking-wider text-neutral-500">
        {t("hero.timeLabel")}
      </motion.div>
      <div className="mt-2 font-mono text-neutral-800">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <AnimatedUnit value={years} suffix="y" />
          <span className="mx-2">·</span>
          <AnimatedUnit value={months} suffix="m" />
          <span className="mx-2">·</span>
          <AnimatedUnit value={days} suffix="d" />
          <span className="mx-2">·</span>
          <AnimatedUnit value={hours} suffix="h" pad />
          <span className="mx-2">·</span>
          <AnimatedUnit value={minutes} suffix="m" pad />
          <span className="mx-2">·</span>
          <AnimatedUnit value={seconds} suffix="s" pad />
        </div>
      </div>
    </div>
  );
}
