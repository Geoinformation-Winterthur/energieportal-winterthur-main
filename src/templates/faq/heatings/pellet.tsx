import { Accordion } from "@/components/common/accordion/accordion";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

export const Pellet = () => {

  const { t } = useTranslation();

  return (
    <div className={styles["faq"]}>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.functionality")}</h4>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_1")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_1")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_2")} >
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_3")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_4")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_4")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_5")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_5")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_6")} >
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_6_1")} <a href={t("my_property.heating_faq.pellet.detail_6_link_target_1")} target="_blank">{t("my_property.heating_faq.pellet.detail_6_link_1")}</a> {t("my_property.heating_faq.pellet.detail_6_2")} <a href={t("my_property.heating_faq.pellet.detail_6_link_target_2")} target="_blank">{t("my_property.heating_faq.pellet.detail_6_link_2")}</a> {t("my_property.heating_faq.pellet.detail_6_3")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.permit")}</h4>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_7")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_7")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.pellet.summary_8")}>
          <AccordionDetails>
            {t("my_property.heating_faq.pellet.detail_8_1")} <a href={t("my_property.heating_faq.pellet.detail_8_link_target")} target="_blank">{t("my_property.heating_faq.pellet.detail_8_link")}</a>{t("my_property.heating_faq.pellet.detail_8_2")}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}