import { Intro } from "@/components/common/intro/intro"
import { OneCol } from "@/components/common/layout/one-col/one-col"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { Co2Emissions } from "@/components/features/co2-emissions/co2-emissions"
import { PropertyFacts } from "@/components/features/property-facts/property-facts"
import { useTranslation } from "../../../i18n"
import { PropertyFactsAccordion } from "./property-facts-accordion"
import { HeatingRecommendations } from "../heating-recommandations/heating-recommandations"
import { PropertyImage } from "@/components/features/property-image/property-image"
import styles from "./my-property.module.scss"

export const MyPropertyPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["my-property"]}>
      <Intro title={t("my_property.title")} variant="dark" />
      <OneCol noPaddingTop>
        <AddressSearchBar variant="light" />
        <Co2Emissions />
        <div className={styles["my-property__property-facts"]}>
          <h3 className={styles["property-facts__title"]}>{t("my_property.property_facts_title")}</h3>
          <div className={styles["my-property__wrapper"]}>
            <PropertyFacts />
            <PropertyImage />
          </div>
        </div>
        <PropertyFactsAccordion />
      </OneCol >
      <HeatingRecommendations />
    </div>
  )
}
