import { useTranslation } from "../../../../../../i18n";
import styles from "../heating-status.module.scss";

export const V5 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <span className={styles["heating-status__title"]}>
        {t("my_property.heating_faq.districtheating_V5.title")}:
      </span>{" "}
      {t("my_property.heating_faq.districtheating_V5.status_1")}
    </p>
  );
};
