import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { AccordionDetails } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

export const Refurbishment = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["faq"]}>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>
          {t("my_property.heating_faq.functionality")}
        </h4>
        <Accordion summary={t("my_property.refurbishment_faq.summary_1")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_1")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_faq.summary_2")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_2_1")}{" "}
            <a
              href={t("my_property.refurbishment_faq.detail_2_link_target_1")}
              target="_blank"
            >
              {t("my_property.refurbishment_faq.detail_2_link_1")}
            </a>{" "}
            {t("my_property.refurbishment_faq.detail_2_2")}{" "}
            <a
              href={t("my_property.refurbishment_faq.detail_2_link_target_2")}
              target="_blank"
            >
              {t("my_property.refurbishment_faq.detail_2_link_2")}
            </a>
            {t("my_property.refurbishment_faq.detail_2_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_faq.summary_3")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_faq.summary_4")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_4")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_faq.summary_5")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_5_1")}{" "}
            <a
              href={t("my_property.refurbishment_faq.detail_5_link_target_1")}
              target="_blank"
            >
              {t("my_property.refurbishment_faq.detail_5_link_1")}
            </a>{" "}
            {t("my_property.refurbishment_faq.detail_5_2")}{" "}
            <a
              href={t("my_property.refurbishment_faq.detail_5_link_target_2")}
              target="_blank"
            >
              {t("my_property.refurbishment_faq.detail_5_link_2")}
            </a>{" "}
            {t("my_property.refurbishment_faq.detail_5_3")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>
          {t("my_property.heating_faq.permit")}
        </h4>
        <Accordion summary={t("my_property.refurbishment_faq.summary_6")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_6")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_faq.summary_7")}>
          <AccordionDetails>
            {t("my_property.refurbishment_faq.detail_7_1")}{" "}
            <a
              href={t("my_property.refurbishment_faq.detail_7_link_target")}
              target="_blank"
            >
              {t("my_property.refurbishment_faq.detail_7_link")}
            </a>
            {t("my_property.refurbishment_faq.detail_7_2")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <h4 className={styles["faq__title"]}>
          {t("my_property.faq.case_studies.title")}
        </h4>
        <Link
          href={t("my_property.faq.case_studies.link_target")}
          className="has-icon"
        >
          {t("my_property.faq.case_studies.link")}
          <Icon icon="arrow-right" />
        </Link>
      </div>
    </div>
  );
};
