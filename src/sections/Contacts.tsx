import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { RESUME_URL } from "../constants/links";

export default function Contacts() {
  const { t } = useTranslation();
  const links = t("contacts.links", { returnObjects: true }) as { label: string; href: string }[];
  return (
    <section id="contacts" className="py-16">
      <h2 className="text-2xl font-semibold">{t("contacts.title")}</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((l) => (
          <Button key={l.label} href={l.href} target="_blank" rel="noopener" variant="secondary">
            {l.label}
          </Button>
        ))}
        <Button href={RESUME_URL} target="_blank" rel="noopener" variant="primary">
          {t("common.resume")}
        </Button>
      </div>
    </section>
  );
}
