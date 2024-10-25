import { useTranslation } from "../../../../../../i18n";
import styles from "../heating-status.module.scss";

export const V18 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <span className={styles["heating-status__title"]}>
        {t("my_property.heating_faq.districtheating_v18.title")}
      </span>{" "}
      {t("my_property.heating_faq.districtheating_v18.status_1")}
    </p>
  );
};
