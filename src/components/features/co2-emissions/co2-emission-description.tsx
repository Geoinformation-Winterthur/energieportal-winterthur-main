import { Icon } from "@/components/common/icon/icon";
import { useTranslation } from "../../../../i18n";
import styles from "./co2-emissions.module.scss";

export const Co2EmissionDescription = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["co2-emissions-result__description"]}>
      <div className={styles["co2-emissions-result__description-icon"]}>
        <Icon icon="info" size={20} />
      </div>
      <p>{t("my_property.co2_emissions.info_1")} <a href={t("my_property.co2_emissions.info_link_target_1")} target="_blank">{t("my_property.co2_emissions_info_link_1")}</a>{t("my_property.co2_emissions.info_2")} <a href={t("my_property.co2_emissions.info_link_target_2")} target="_blank">{t("my_property.co2_emissions.info_link_2")}</a> {t("my_property.co2_emissions.info_3")}</p>
    </div>
  )
}