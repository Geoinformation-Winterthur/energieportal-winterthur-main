import { Intro } from "@/components/common/intro/intro"
import { FullWidth } from "@/components/common/layout/full-width/full-width"
import { OneCol } from "@/components/common/layout/one-col/one-col"
import { Section } from "@/components/common/section/section"
import TabList from "@/components/common/tabs/tab-list/tab-list"
import TabPanel from "@/components/common/tabs/tab-panel/tab-panel"
import Tab from "@/components/common/tabs/tab/tab"
import Tabs from "@/components/common/tabs/tabs"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { Co2Emissions } from "@/components/features/co2-emissions/co2-emissions"
import { EfficiencyCalculator } from "@/components/features/efficiency-calculator/efficiency-calculator"
import { EndLayOut } from "@/components/features/end-layout/end-layout"
import { PropertyFacts } from "@/components/features/property-facts/property-facts"
import { PropertyImage } from "@/components/features/property-image/property-image"
import Link from "next/link"
import { useTranslation } from "../../../i18n"
import { HeatingRecommendations } from "../heating-recommandations/heating-recommandations"
import styles from "./my-property.module.scss"
import { PropertyFactsAccordion } from "./property-facts-accordion"

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
            <div>
              <PropertyImage />
              <p className={styles["my-property__update-info"]}>{t("my_property.property_update_info_1")} <Link href={t("my_property.property_update_info_link_target")}>{t("my_property.property_update_info_link")}</Link> {t("my_property.property_update_info_2")}</p>
            </div>
          </div>
        </div>
        <PropertyFactsAccordion />
      </OneCol>
      <OneCol noPaddingTop paddingBottomSmall>
        <Section title={t("my_property.our_recommendations.title")} description={t("my_property.our_recommendations.lead")} />
      </OneCol>
      <Tabs initialValue={'0'} name={'tabs'}>
        <TabList>
          <Tab label='Heizung' value={'0'}></Tab>
          <Tab label='Sanierung' value={'1'}></Tab>
        </TabList>
        <TabPanel value={'0'}>
          <FullWidth>
            <HeatingRecommendations />
          </FullWidth>
          <EndLayOut type="heating" />
        </TabPanel>
        <TabPanel value={'1'}>
          <FullWidth>
            <EfficiencyCalculator />
          </FullWidth>
          <EndLayOut type="refurbishment" />
        </TabPanel>
      </Tabs>
    </div>
  )
}
