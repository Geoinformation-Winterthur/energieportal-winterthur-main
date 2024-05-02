import { Intro } from "@/components/common/intro/intro";
import { useTranslation } from "../../../i18n";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Intro title={t("contact.title")} variant="dark" />
    </>
  );
}