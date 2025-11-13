import { useTranslation } from "react-i18next";

export default function LookingFor() {
  const { t } = useTranslation();
  return (
    <section id="looking-for" className="py-16">
      <h2 className="text-2xl font-semibold">{t("lookingFor.title")}</h2>
      <p className="mt-3 text-neutral-700">{t("lookingFor.line")}</p>
    </section>
  );
}
