import { Intro } from "@/components/common/intro/intro";
import { useTranslation } from "../../../i18n";
import { SideBySide } from "@/components/common/side-by-side/side-by-side";
import { Teaser } from "@/components/common/teaser/teaser";
import { Section } from "@/components/common/section/section";
import { Contact } from "@/components/common/contact/contact";

export default function OnlineConsulting() {

  const { t } = useTranslation();

  const rightContent = () => (
    <>
      <Teaser title={t("online_consulting.teaser_1_title")} description={t("online_consulting.teaser_1_description")} image={t("online_consulting.teaser_1_image")} link={t("online_consulting.teaser_1_link")} link_target={t("online_consulting.teaser_1_link_target")} />
      <Teaser title={t("online_consulting.teaser_2_title")} description={t("online_consulting.teaser_2_description")} image={t("online_consulting.teaser_2_image")} link={t("online_consulting.teaser_2_link")} link_target={t("online_consulting.teaser_2_link_target")} />
    </>
  )
  const leftContent = () => (
    <>
      <Section title={t("online_consulting.section_title")} description={t("online_consulting.section_description")} />
      <Contact />
    </>
  )

  return (
    <main>
      <Intro title={t("online_consulting.intro.title")} lead={t("online_consulting.intro.lead")} variant="light" />
      <SideBySide contentLeft={leftContent()} contentRight={rightContent()}></SideBySide>
    </main>
  );
}