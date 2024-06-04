import { Accordion } from "@/components/common/accordion/accordion";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

interface DistrictHeatingPProps {
  isP1?: boolean;
}

export const DistrictHeatingP = ({ isP1 }: DistrictHeatingPProps) => {

  const { t } = useTranslation();

  const renderP1Status = () => (
    <p>{t("my_property.heating_faq.districtheating_p1.status_1")} <a href={t("my_property.heating_faq.districtheating_p1.status_link_target_1")}>{t("my_property.heating_faq.districtheating_p1.status_link_1")}</a> {t("my_property.heating_faq.districtheating_p1.status_2")} <a href={t("my_property.heating_faq.districtheating_p1.status_link_target_2")}>{t("my_property.heating_faq.districtheating_p1.status_link_2")}</a>{t("my_property.heating_faq.districtheating_p1.status_3")} <a href={t("my_property.heating_faq.districtheating_p1.status_link_target_3")} target="_blank">{t("my_property.heating_faq.districtheating_p1.status_link_3")}</a>{t("my_property.heating_faq.districtheating_p1.status_4")}</p>
  )

  return (
    <div className={styles["faq"]}>
      <div className={styles["faq__box"]}>
        {isP1 ? renderP1Status() : <p>{t("my_property.heating_faq.districtheating_p.status_1")} <a href={t("my_property.heating_faq.districtheating_p.status_link_target_1")}>{t("my_property.heating_faq.districtheating_p.status_link_1")}</a> {t("my_property.heating_faq.districtheating_p.status_2")} <a href={t("my_property.heating_faq.districtheating_p.status_link_target_2")}>{t("my_property.heating_faq.districtheating_p.status_link_2")}</a>{t("my_property.heating_faq.districtheating_p.status_3")} <a href={t("my_property.heating_faq.districtheating_p.status_link_target_3")} target="_blank">{t("my_property.heating_faq.districtheating_p.status_link_3")}</a>{t("my_property.heating_faq.districtheating_p.status_4")} </p>}
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.functionality")}</h4>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_1")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_1_1")} <a href={t("my_property.heating_faq.districtheating_p.detail_link_target_1")} target="_blank">{t("my_property.heating_faq.districtheating_p.detail_link_1")}</a>{t("my_property.heating_faq.districtheating_p.detail_1_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_2")} >
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_3")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_4")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_4")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_5")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_5")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_6")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_6_1")} <a href={t("my_property.heating_faq.districtheating_p.detail_6_link_target_1")} target="_blank">{t("my_property.heating_faq.districtheating_p.detail_6_link_1")}</a> {t("my_property.heating_faq.districtheating_p.detail_6_2")} <a href={t("my_property.heating_faq.districtheating_p.detail_6_link_target_2")} target="_blank">{t("my_property.heating_faq.districtheating_p.detail_6_link_2")}</a> {t("my_property.heating_faq.districtheating_p.detail_6_3")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.permit")}</h4>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_7")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_7_1")} <a href={t("my_property.heating_faq.districtheating_p.detail_7_link_target")} target="_blank">{t("my_property.heating_faq.districtheating_p.detail_7_link")}</a> {t("my_property.heating_faq.districtheating_p.detail_7_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_p.summary_8")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_p.detail_8_1")} <a href={t("my_property.heating_faq.districtheating_p.detail_8_link_target")} target="_blank">{t("my_property.heating_faq.districtheating_p.detail_8_link")}</a>{t("my_property.heating_faq.districtheating_p.detail_8_2")}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}