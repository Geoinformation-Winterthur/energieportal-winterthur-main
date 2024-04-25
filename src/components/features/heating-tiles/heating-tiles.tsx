import { IconType } from "@/components/common/icon/icon";
import { Heating } from "@/types/heating";
import { useTranslation } from "../../../../i18n";
import { HeatingTile } from "./heating-tile";
import styles from "./heating-tiles.module.scss";

interface HeatingTilesProps {
  heatings: Heating[];
}

export const HeatingTiles = ({ heatings }: HeatingTilesProps) => {
  const { t } = useTranslation();

  const getPros = (heating: Heating) => t(`my_property.heating_recommendations.${heating.code}.pros`, { returnObjects: true }) as string[];
  const getCons = (heating: Heating) => t(`my_property.heating_recommendations.${heating.code}.cons`, { returnObjects: true }) as string[];

  const renderHeating = (heating: Heating) => (
    <HeatingTile title={t(`my_property.heating_recommendations.${heating.code}.title`)} icon={heating.code as IconType} pros={getPros(heating)} cons={getCons(heating)} isRecommendation={heating.isRecommendation} key={heating.code} />
  )

  const sortHeatingsByRecommendation = () => {
    return heatings.sort((a, b) => {
      if (a.isRecommendation && !b.isRecommendation) {
        return -1;
      } else if (!a.isRecommendation && b.isRecommendation) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className={styles["heating-tiles"]}>
      <div className={styles["heating-tiles__header"]}>
        <h3 className={styles["heating-tiles__title"]}>{t("my_property.heating_recommendations.title")}</h3>
        <p className={styles["heating-tiles__lead"]}>{t("my_property.heating_recommendations.lead")}</p>
      </div>
      <div className={styles["heating-tiles__content"]}>
        {sortHeatingsByRecommendation().map(heating => renderHeating(heating))}
      </div>
    </div>
  )
}