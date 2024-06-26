import { Intro } from "@/components/common/intro/intro"
import { FullWidth } from "@/components/common/layout/full-width/full-width"
import { OneCol } from "@/components/common/layout/one-col/one-col"
import { Section } from "@/components/common/section/section"
import TabList from "@/components/common/tabs/tab-list/tab-list"
import TabPanel from "@/components/common/tabs/tab-panel/tab-panel"
import Tab from "@/components/common/tabs/tab/tab"
import Tabs from "@/components/common/tabs/tabs"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { EfficiencyCalculator } from "@/components/features/efficiency-calculator/efficiency-calculator"
import { EndLayOut } from "@/components/features/end-layout/end-layout"
import { PropertyFacts } from "@/components/features/property-facts/property-facts"
import { PropertyImage } from "@/components/features/property-image/property-image"
import { SavingsPotential } from "@/components/features/savings-potential/savings-potential"
import { SolarPotential } from "@/components/features/solar-potential/solar-potential"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../i18n"
import { HeatingRecommendations } from "../heating-recommandations/heating-recommandations"
import styles from "./my-property.module.scss"
import { PropertyFactsAccordion } from "./property-facts-accordion"

export const MyPropertyPage = () => {
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById('recommendations');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    if (currentAddress) {
      const targetElement = document.getElementById('online-consulting');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentAddress])

  return (
    <div>
      <Intro title={t("my_property.title")} variant="dark" />
      <OneCol noPaddingTop>
        <AddressSearchBar variant="light" />
        <div id="online-consulting" className={styles["my-property_online-consulting"]}>
          <h2 className={styles["co2-emissions__title"]}>{t("my_property.co2_emissions_title")}</h2>
          <p className={styles["co2-emissions__lead"]}>{t("my_property.co2_emissions.lead_1")} <a href={t("my_property.co2_emissions.lead_link_target_1")} target="_blank">{t("my_property.co2_emissions.lead_link_1")}</a> {t("my_property.co2_emissions.lead_2")} <a href="#tabs" onClick={(e) => handleScroll(e)}>{t("my_property.co2_emissions.lead_link_2")}</a>{t("my_property.co2_emissions.lead_3")}</p>
          <h3 className={styles["property-facts__title"]}>{t("my_property.property_facts_title")} {currentAddress}</h3>
          <p className={styles["property-facts__lead"]}>{t("my_property.property_facts.lead_1")} <a href={t("my_property.property_facts.lead_link_target_1")} target="_blank">{t("my_property.property_facts.lead_link_1")}</a>{t("my_property.property_facts.lead_2")} <a href={process.env.NEXT_PUBLIC_BASE_PATH + t("my_property.property_facts.lead_link_target_2")} target="_blank">{t("my_property.property_facts.lead_link_2")}</a> {t("my_property.property_facts.lead_3")}</p>
          <div className={styles["property-facts__wrapper"]}>
            <PropertyFacts />
            <PropertyImage />
          </div>
        </div>
        <PropertyFactsAccordion />
      </OneCol>
      <OneCol noPaddingTop paddingBottomSmall>
        <Section title={t("my_property.our_recommendations.title")} description={t("my_property.our_recommendations.lead")} />
      </OneCol>
      <div id="recommendations">
        <Tabs initialValue={'0'} name={'tabs'}>
          <TabList>
            <Tab label='Heizung' value={'0'}></Tab>
            <Tab label='Solaranlage' value={'1'}></Tab>
            <Tab label='Sanierung' value={'2'}></Tab>
          </TabList>
          <TabPanel value={'0'}>
            <FullWidth>
              <HeatingRecommendations />
            </FullWidth>
            <EndLayOut type="heating" />
          </TabPanel>
          <TabPanel value={'1'}>
            <FullWidth>
              <SolarPotential />
            </FullWidth>
            <EndLayOut type="solar" />
          </TabPanel>
          <TabPanel value={'2'}>
            <FullWidth>
              <EfficiencyCalculator />
              <SavingsPotential />
            </FullWidth>
            <EndLayOut type="refurbishment" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
