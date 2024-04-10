import { Intro } from "@/components/common/intro/intro";
import { useTranslation } from "../../../i18n";
import { TwoCols } from "@/components/common/layout/two-cols/two-cols";
import { Teaser } from "@/components/common/teaser/teaser";
import { Section } from "@/components/common/section/section";
import { Contact } from "@/components/common/contact/contact";
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar";
import { FullWidth } from "@/components/common/layout/full-width/full-width";

export default function OnlineConsulting() {

  const { t } = useTranslation();

  const rightContent = () => (
    <>
      <Teaser title={t("online_consulting.teaser_1_title")} description={t("online_consulting.teaser_1_description")} image={t("online_consulting.teaser_1_image")} image_credits={t("online_consulting.teaser_1_image_credits")} link={t("online_consulting.teaser_1_link")} link_target={t("online_consulting.teaser_1_link_target")} />
      <Teaser title={t("online_consulting.teaser_2_title")} description={t("online_consulting.teaser_2_description")} image={t("online_consulting.teaser_2_image")} image_credits={t("online_consulting.teaser_2_image_credits")} link={t("online_consulting.teaser_2_link")} link_target={t("online_consulting.teaser_2_link_target")} />
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
      <FullWidth noPaddingY>
        <AddressSearchBar variant="dark" />
      </FullWidth>
      <TwoCols contentLeft={leftContent()} contentRight={rightContent()}></TwoCols>
    </main>
  );
}