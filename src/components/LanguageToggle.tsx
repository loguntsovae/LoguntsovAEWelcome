import React from "react";
import { useTranslation } from "react-i18next";
import clsx from "classnames";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
  const change = (lng: "en" | "ru") => (e: React.MouseEvent) => {
    e.preventDefault();
    i18n.changeLanguage(lng);
  };
  return (
    <div className="mt-[24px] flex items-center justify-end pr-6">
      <nav className="text-[14px] font-medium text-[#444] opacity-90">
        <a
          href="#"
          onClick={change("en")}
          className={clsx("cursor-pointer hover:opacity-80", current === "en" && "text-[#111]")}
        >
          EN
        </a>
        <span className="mx-2 text-[#888]">·</span>
        <a
          href="#"
          onClick={change("ru")}
          className={clsx("cursor-pointer hover:opacity-80", current === "ru" && "text-[#111]")}
        >
          RU
        </a>
      </nav>
    </div>
  );
}
