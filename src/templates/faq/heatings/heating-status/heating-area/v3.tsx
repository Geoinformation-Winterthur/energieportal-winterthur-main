import { useTranslation } from "../../../../../../i18n";
import styles from "../heating-status.module.scss";

export const V3 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <span className={styles["heating-status__title"]}>
        {t("my_property.heating_faq.districtheating_V3.title")}:
      </span>{" "}
      {t("my_property.heating_faq.districtheating_V3.status_1")}{" "}
      <a
        href={t(
          "my_property.heating_faq.districtheating_V3.status_link_target_1"
        )}
        target="_blank"
      >
        {t("my_property.heating_faq.districtheating_V3.status_link_1")}
      </a>{" "}
      {t("my_property.heating_faq.districtheating_V3.status_2")}{" "}
      <a
        href={t(
          "my_property.heating_faq.districtheating_V3.status_link_target_2"
        )}
        target="_blank"
      >
        {t("my_property.heating_faq.districtheating_V3.status_link_2")}
      </a>
      {t("my_property.heating_faq.districtheating_V3.status_3")}{" "}
      <a
        href={t(
          "my_property.heating_faq.districtheating_V3.status_link_target_3"
        )}
        target="_blank"
      >
        {t("my_property.heating_faq.districtheating_V3.status_link_3")}
      </a>
      {t("my_property.heating_faq.districtheating_V3.status_4")}
    </p>
  );
};
