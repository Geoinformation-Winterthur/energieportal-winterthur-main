import { Contact } from "@/components/common/contact/contact";
import { TwoCols } from "@/components/common/layout/two-cols/two-cols";
import { Section } from "@/components/common/section/section";
import { Teaser } from "@/components/common/teaser/teaser";
import { useTranslation } from "../../../i18n";


export const EndLayOutHeating = () => {

  const { t } = useTranslation();

  const LeftContent = () => (
    <>
      <Section title={t("my_property.heating_section_title")} description={t("my_property.heating_section_description")} />
      <Contact />
    </>
  )
  const RightContent = () => (
    <>
      <Teaser title={t("my_property.heating_teaser_1_title")} description={t("my_property.heating_teaser_1_description")} image={t("my_property.heating_teaser_1_image")} image_credits={t("my_property.heating_teaser_1_image_credits")} link={t("my_property.heating_teaser_1_link")} link_target={t("my_property.heating_teaser_1_link_target")} />
      <Teaser title={t("my_property.heating_teaser_2_title")} description={t("my_property.heating_teaser_2_description")} image={t("my_property.heating_teaser_2_image")} image_credits={t("my_property.heating_teaser_2_image_credits")} link={t("online_consulting.teaser_2_link")} link_target={t("online_consulting.teaser_2_link_target")} />
    </>
  )
  return (
    <TwoCols contentLeft={<LeftContent />} contentRight={<RightContent />}></TwoCols>
  )
}