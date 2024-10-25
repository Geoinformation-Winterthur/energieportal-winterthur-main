import { useTranslation } from "../../../../../../i18n";
import styles from "../heating-status.module.scss";

export const P9 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <span className={styles["heating-status__title"]}>
        {t("my_property.heating_faq.districtheating_p9.title")}
      </span>{" "}
      {t("my_property.heating_faq.districtheating_p9.status_1")}{" "}
      <a
        href={t(
          "my_property.heating_faq.districtheating_p9.status_link_target_1"
        )}
      >
        {t("my_property.heating_faq.districtheating_p9.status_link_1")}
      </a>{" "}
      {t("my_property.heating_faq.districtheating_p9.status_2")}{" "}
      <a
        href={t(
          "my_property.heating_faq.districtheating_p9.status_link_target_2"
        )}
      >
        {t("my_property.heating_faq.districtheating_p9.status_link_2")}
      </a>
      {t("my_property.heating_faq.districtheating_p9.status_3")}
    </p>
  );
};
