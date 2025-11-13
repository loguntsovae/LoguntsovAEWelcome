import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import ItTimer from "../components/ItTimer";
import { RESUME_URL } from "../constants/links";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-[80px] pb-[10px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left column */}
          <div>
            <h1 className="mb-[6px] text-[48px] font-bold leading-[1.1] text-[#111]">
              {t("hero.name")}
            </h1>
            <p className="mb-[8px] text-[24px] font-medium leading-[1.3] text-[#1f1f1f]">
              {t("hero.title")}
            </p>
            <p className="mb-[14px] text-[15px] leading-[1.4] text-[#555]">
              {t("hero.subline")}
            </p>
            <p className="mb-[20px] max-w-[460px] text-[15px] leading-[1.5] text-[#444]">
              {t("hero.tagline")}
            </p>
            <div className="flex flex-wrap">
              <Button href={RESUME_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                {t("common.resume")}
              </Button>
              <Button href="#projects" variant="secondary" className="ml-[12px]">
                {t("common.portfolio")}
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex items-center justify-start md:justify-end">
            <ItTimer startDate="2020-09-01" />
          </div>
        </div>
      </div>
    </section>
  );
}
