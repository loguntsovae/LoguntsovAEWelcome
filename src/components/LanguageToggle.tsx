import { useTranslation } from "react-i18next";
import clsx from "classnames";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language || "en";
  const change = (lng: "en" | "ru") => () => i18n.changeLanguage(lng);
  return (
    <div className="inline-flex items-center rounded-md border border-neutral-200 p-1 text-sm">
      <button
        type="button"
        onClick={change("en")}
        className={clsx(
          "px-2 py-1 rounded",
          current === "en" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-pressed={current === "en"}
      >
        EN
      </button>
      <span className="px-1 text-neutral-300">|</span>
      <button
        type="button"
        onClick={change("ru")}
        className={clsx(
          "px-2 py-1 rounded",
          current === "ru" ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-pressed={current === "ru"}
      >
        RU
      </button>
    </div>
  );
}
