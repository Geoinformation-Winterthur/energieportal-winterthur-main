"use client";
import { Accordion } from "@/components/common/accordion/accordion";
import { Intro } from "@/components/common/intro/intro";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import { OneCol } from "@/components/common/layout/one-col/one-col";
import { Section } from "@/components/common/section/section";
import TabList from "@/components/common/tabs/tab-list/tab-list";
import TabPanel from "@/components/common/tabs/tab-panel/tab-panel";
import Tab from "@/components/common/tabs/tab/tab";
import Tabs from "@/components/common/tabs/tabs";
import { Teaser } from "@/components/common/teaser/teaser";
import { EfficiencyCalculator } from "@/components/features/efficiency-calculator/efficiency-calculator";
import { EndLayOut } from "@/components/features/end-layout/end-layout";
import { SavingsPotential } from "@/components/features/savings-potential/savings-potential";
import { SolarPotential } from "@/components/features/solar-potential/solar-potential";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useTranslation } from "../../../i18n";
import { HeatingRecommendations } from "../heating-recommandations/heating-recommandations";
import styles from "./case-studies.module.scss";

export const CaseStudiesTemplate = () => {
  const { t } = useTranslation();

  return (
    <>
      <Intro title={t("case_studies.intro.title")} variant="dark" slim />
      <OneCol>
        <Teaser
          title={t("case_studies.teaser_title")}
          description={t("case_studies.teaser_description")}
          image={t("case_studies.teaser_image")}
          image_credits={t("case_studies.teaser_image_credits")}
          link={t("case_studies.teaser_link")}
          link_target={t("case_studies.teaser_link_target")}
          subtitle={t("case_studies.teaser_subtitle")}
          asRow
        />
        <div>
          <h4 className={styles["case-studies__acc-title"]}>
            {t("case_studies.accordion_title")}
          </h4>
          <Accordion summary={t("case_studies.accordion_summary")}>
            <AccordionDetails>
              {t("case_studies.accordion_detail")}
            </AccordionDetails>
          </Accordion>
        </div>
      </OneCol>
      <OneCol noPaddingTop paddingBottomSmall>
        <Section
          title={t("case_studies.examples.title")}
          description={t("case_studies.examples.lead")}
        />
      </OneCol>

      <Tabs initialValue={"0"} name={"tabs"}>
        <TabList>
          <Tab label="Heizung" value={"0"}></Tab>
          <Tab label="Solaranlage" value={"1"}></Tab>
          <Tab label="Sanierung" value={"2"}></Tab>
        </TabList>
        <TabPanel value={"0"}>
          <FullWidth></FullWidth>
        </TabPanel>
        <TabPanel value={"1"}>
          <FullWidth></FullWidth>
        </TabPanel>
        <TabPanel value={"2"}>
          <FullWidth></FullWidth>
        </TabPanel>
      </Tabs>
    </>
  );
};
