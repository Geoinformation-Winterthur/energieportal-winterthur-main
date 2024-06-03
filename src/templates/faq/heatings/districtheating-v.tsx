import { Accordion } from "@/components/common/accordion/accordion";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

interface DistrictHeatingVProps {
  inPlanning?: boolean;
}

export const DistrictHeatingV = ({ inPlanning }: DistrictHeatingVProps) => {

  const { t } = useTranslation();

  const renderInPlanning = () => (
    <p><span className={styles["faq__box-title"]}>{t("my_property.heating_faq.districtheating_v.status_pl_1")}</span> {t("my_property.heating_faq.districtheating_v.status_pl_2")} <a href={t("my_property.heating_faq.districtheating_v.status_pl_link_target_1")}>{t("my_property.heating_faq.districtheating_v.status_pl_link_1")}</a> {t("my_property.heating_faq.districtheating_v.status_pl_3")} <a href={t("my_property.heating_faq.districtheating_v.status_pl_link_target_2")}>{t("my_property.heating_faq.districtheating_v.status_pl_link_2")}</a>{t("my_property.heating_faq.districtheating_v.status_pl_4")} <a href={t("my_property.heating_faq.districtheating_v.status_pl_link_target_3")} target="_blank">{t("my_property.heating_faq.districtheating_v.status_pl_link_3")}</a>{t("my_property.heating_faq.districtheating_v.status_pl_5")}</p>
  )

  const renderInReview = () => (
    <p><span className={styles["faq__box-title"]}>{t("my_property.heating_faq.districtheating_v.status_pr_1")}</span> {t("my_property.heating_faq.districtheating_v.status_pr_2")} <a href={t("my_property.heating_faq.districtheating_v.status_pr_link_target_1")} target="_blank">{t("my_property.heating_faq.districtheating_v.status_pr_link_1")}</a>{t("my_property.heating_faq.districtheating_v.status_pr_3")}</p>
  )

  return (
    <div className={styles["faq"]}>
      <div className={styles["faq__box"]}>
        {inPlanning ? renderInPlanning() : renderInReview()}
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.functionality")}</h4>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_1")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_1_1")} <a href={t("my_property.heating_faq.districtheating_v.detail_link_target_1")} target="_blank">{t("my_property.heating_faq.districtheating_v.detail_link_1")}</a>{t("my_property.heating_faq.districtheating_v.detail_1_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_2")} >
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_3")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_4")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_4")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_5")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_5")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_6")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_6")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_7")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_7")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>{t("my_property.heating_faq.permit")}</h4>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_8")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_8")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.heating_faq.districtheating_v.summary_9")}>
          <AccordionDetails>
            {t("my_property.heating_faq.districtheating_v.detail_9_1")} <a href={t("my_property.heating_faq.districtheating_v.detail_9_link_target")} target="_blank">{t("my_property.heating_faq.districtheating_v.detail_9_link")}</a> {t("my_property.heating_faq.districtheating_v.detail_9_2")}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}