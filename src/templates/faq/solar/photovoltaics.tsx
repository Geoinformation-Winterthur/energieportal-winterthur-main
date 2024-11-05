import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { AccordionDetails } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "../../../../i18n";
import styles from "../faq.module.scss";

export const SolarPhotovoltaics = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["faq"]}>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>
          {t("my_property.solar_faq.functionality")}
        </h4>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_1")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_1")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_2")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_3")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_3_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_3_link_target_1"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_3_link_1")}
            </a>{" "}
            {t("my_property.solar_faq.photovoltaics.detail_3_2")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_3_link_target_2"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_3_link_2")}
            </a>{" "}
            {t("my_property.solar_faq.photovoltaics.detail_3_3")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_4")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_4_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_4_link_target_1"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_4_link_1")}
            </a>{" "}
            {t("my_property.solar_faq.photovoltaics.detail_4_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_5")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_5_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_5_link_target_1"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_5_link_1")}
            </a>{" "}
            {t("my_property.solar_faq.photovoltaics.detail_5_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_6")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_6")}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles["faq__acc-wrapper"]}>
        <h4 className={styles["faq__title"]}>
          {t("my_property.solar_faq.permit")}
        </h4>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_7")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_7_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_7_link_target"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_7_link")}
            </a>
            {t("my_property.solar_faq.photovoltaics.detail_7_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_8")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_8_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_8_link_target"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_8_link")}
            </a>{" "}
            {t("my_property.solar_faq.photovoltaics.detail_8_2")}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.solar_faq.photovoltaics.summary_9")}>
          <AccordionDetails>
            {t("my_property.solar_faq.photovoltaics.detail_9_1")}{" "}
            <a
              href={t(
                "my_property.solar_faq.photovoltaics.detail_9_link_target"
              )}
              target="_blank"
            >
              {t("my_property.solar_faq.photovoltaics.detail_9_link")}
            </a>
            {t("my_property.solar_faq.photovoltaics.detail_9_2")}
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
