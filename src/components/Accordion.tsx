import { PropsWithChildren, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "classnames";

type AccordionItemProps = PropsWithChildren<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}>;

export function AccordionItem({ title, isOpen, onToggle, children }: AccordionItemProps) {
  const id = useId();
  return (
    <div className="rounded-lg border border-neutral-200">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
      >
        <span className="font-medium">{title}</span>
        <span className={clsx("transition-transform", isOpen ? "rotate-45" : "rotate-0")}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="border-t border-neutral-200 p-4 text-sm text-neutral-700">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
