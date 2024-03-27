"use client"
import { Intro } from "@/components/common/intro/intro";
import { useTranslation } from "../../../i18n";

export default function OnlineConsulting() {

  const { t } = useTranslation();

  return (
    <main>
      <Intro title={t("online_consulting.intro.title")} lead={t("online_consulting.intro.lead")} variant="light" />
    </main>
  );
}