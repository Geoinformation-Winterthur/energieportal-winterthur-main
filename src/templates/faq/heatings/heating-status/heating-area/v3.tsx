import { useTranslation } from "../../../../../../i18n";
import styles from "../heating-status.module.scss";

export const V3 = () => {
  const { t } = useTranslation();

  return (
    <p>
      <span className={styles["heating-status__title"]}>
        {t("my_property.heating_faq.districtheating_V3.title")}:
      </span>{" "}
      {t("my_property.heating_faq.districtheating_V3.status_1")}
    </p>
  );
};
