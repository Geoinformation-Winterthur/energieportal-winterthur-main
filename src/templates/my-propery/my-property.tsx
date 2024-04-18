import { Intro } from "@/components/common/intro/intro"
import { FullWidth } from "@/components/common/layout/full-width/full-width"
import { Section } from "@/components/common/section/section"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { PropertyFacts } from "@/components/features/property-facts/property-facts"
import { useTranslation } from "../../../i18n"

export const MyPropertyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Intro title={t("my_property.title")} variant="dark" />
      <FullWidth noPaddingY>
        <AddressSearchBar variant="light" />
        <Section title={t("my_property.co2_emissions_title")}>
          <p className="typo-lead">{t("my_property.co2_emissions_lead_pre")}
            <a href={t("my_property.co2_emissions_link_target")} target="_blank">{t("my_property.co2_emissions_link")}</a>
            {t("my_property.co2_emissions_lead_post")}
          </p>
        </Section>
        <PropertyFacts />
      </FullWidth >
    </>
  )
}
