import { useTranslation } from "../../../../i18n";
import { Co2EmissionDescription } from "./co2-emission-description";
import styles from "./co2-emissions.module.scss";

export const Co2Emissions = () => {

  const { t } = useTranslation();

  return (
    <div className={styles["co2-emissions"]}>
      <h2 className={styles["co2-emissions__title"]}>{t("my_property.co2_emissions_title")}</h2>
      <p className={styles["co2-emissions__lead"]}>{t("my_property.co2_emissions_lead_pre")}
        <a href={t("my_property.co2_emissions_link_target")} target="_blank">{t("my_property.co2_emissions_link")}</a>
        {t("my_property.co2_emissions_lead_post")}
      </p>
      <Co2EmissionDescription />
    </div>
  )
}