import { Intro } from "@/components/common/intro/intro";
import { OneCol } from "@/components/common/layout/one-col/one-col";
import { ContactForm } from "@/components/features/contact-form/contact-form";
import { useTranslation } from "../../../i18n";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Intro title={t("contact.title")} variant="dark" />
      <OneCol>
        <ContactForm />
      </OneCol>
    </>
  );
}