import { Accordion } from "@/components/common/accordion/accordion";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

export const Geothermal = () => {

  const { t } = useTranslation();

  return (
    <div className={styles["faq"]}>
      <h3 className={styles["faq__heating-title"]}>{t("my_property.heating_recommendations.geothermal.title")}</h3>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.functionality")}</h4>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_1")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_1")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_2")} >
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_3")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_4")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_4_1")} <a href={t("my_property.heating_faq.geothermal.detail_4_link_target")} target="_blank">{t("my_property.heating_faq.geothermal.detail_4_link")}</a> {t("my_property.heating_faq.geothermal.detail_4_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_5")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_5")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_6")} >
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_6_1")} <a href={t("my_property.heating_faq.geothermal.detail_6_link_target_1")} target="_blank">{t("my_property.heating_faq.geothermal.detail_6_link_1")}</a> {t("my_property.heating_faq.geothermal.detail_6_2")} <a href={t("my_property.heating_faq.geothermal.detail_6_link_target_2")} target="_blank">{t("my_property.heating_faq.geothermal.detail_6_link_2")}</a> {t("my_property.heating_faq.geothermal.detail_6_3")} <a href={t("my_property.heating_faq.geothermal.detail_6_link_target_3")} target="_blank">{t("my_property.heating_faq.geothermal.detail_6_link_3")}</a> {t("my_property.heating_faq.geothermal.detail_6_4")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.permit")}</h4>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_7")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_7")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_8")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_8")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.geothermal.summary_9")}>
          <AccordionDetails>
            {t("my_property.heating_faq.geothermal.detail_9_1")} <a href={t("my_property.heating_faq.geothermal.detail_9_link_target_1")} target="_blank">{t("my_property.heating_faq.geothermal.detail_9_link_1")}</a>{t("my_property.heating_faq.geothermal.detail_9_2")}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}