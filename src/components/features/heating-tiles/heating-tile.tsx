import { Button } from "@/components/common/button/button";
import { Icon, IconType } from "@/components/common/icon/icon";
import clsx from "clsx";
import { useTranslation } from "../../../../i18n";
import styles from "./heating-tile.module.scss";

interface HeatingTileProps {
  code: string;
  isRecommendation?: boolean;
  icon: IconType;
  showStatus?: boolean
}

export const HeatingTile = ({ code, isRecommendation, icon, showStatus }: HeatingTileProps) => {
  const { t } = useTranslation();

  const getPros = () => t(`my_property.heating_recommendations.${code}.pros`, { returnObjects: true }) as string[];
  const getCons = () => t(`my_property.heating_recommendations.${code}.cons`, { returnObjects: true }) as string[];

  const EnergyPlanStatus = () => (
    <div className={styles["heating-tile__status"]}>
      <h5 className={styles["heating-tile__status-label"]}>{t("my_property.heating_recommendations.state")}</h5>
      <button className={styles["heating-tile__status-btn"]}>{t(`my_property.heating_recommendations.${code}.status.label`)}</button>
    </div>
  )

  return (
    <div className={clsx(styles["heating-tile"], isRecommendation && styles["heating-tile--is-recommendation"])}>
      {isRecommendation && <div className={styles["heating-tile__flag"]}>{t("my_property.heating_recommendations.flag")}</div>}
      <div className={styles["heating-tile__inner"]}>
        <div className={styles["heating-tile__content"]}>
          <div className={styles["heating-tile__header"]}>
            <h4 className={styles["heating-tile__title"]}>{t(`my_property.heating_recommendations.${code}.title`)}</h4>
            <Icon icon={icon} size={56} />
          </div>
          <div className={styles["heating-tile__lists"]}>
            {showStatus && <EnergyPlanStatus />}
            <div>
              <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.pros")}</h5>
              <ul className={styles["heating-tile__list"]}>
                {getPros().map(pro => (
                  <li className={styles["heating-tile__list-item"]} key={pro}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.cons")}</h5>
              <ul className={styles["heating-tile__list"]}>
                {getCons().map(con => (
                  <li className={styles["heating-tile__list-item"]} key={con}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Button>{t("my_property.heating_recommendations.button")}</Button>
      </div>
    </div>
  )
}