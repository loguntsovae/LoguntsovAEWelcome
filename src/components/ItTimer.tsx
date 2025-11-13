import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useItTimer } from "../hooks/useItTimer";

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

type AnimatedUnitProps = { value: number; suffix: string; pad?: boolean };

function AnimatedUnit({ value, suffix, pad = false }: AnimatedUnitProps) {
  const display = (pad ? pad2(value) : String(value)) + suffix;
  return (
    <span className="inline-block tabular-nums will-change-transform">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={display}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-block"
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function ItTimer({ startDate = "2020-09-01" }: { startDate?: string }) {
  const { t } = useTranslation();
  const { years, months, days, hours, minutes, seconds } = useItTimer(startDate);

  return (
    <div className="flex flex-col items-end justify-center text-right">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mb-[12px] text-[13px] font-medium uppercase tracking-[0.06em] text-[#666]"
      >
        {t("hero.timeLabel")}
      </motion.div>
      <div className="mt-[8px] font-sans font-medium text-[#111]">
        <div className="text-2xl md:text-4xl leading-[1.1]">
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
