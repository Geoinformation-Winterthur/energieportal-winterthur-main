import { Button } from "@/components/common/button/button";
import { Icon, IconType } from "@/components/common/icon/icon";
import clsx from "clsx";
import { useTranslation } from "../../../../i18n";
import styles from "./heating-tile.module.scss";

interface HeatingTileProps {
  title: string;
  icon: IconType;
  pros?: string[];
  cons?: string[];
  isRecommendation?: boolean;
}

export const HeatingTile = ({ title, icon, pros, cons, isRecommendation }: HeatingTileProps) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles["heating-tile"], isRecommendation && styles["heating-tile--is-recommendation"])}>
      {isRecommendation && <div className={styles["heating-tile__flag"]}>{t("my_property.heating_recommendations.flag")}</div>}
      <div className={styles["heating-tile__inner"]}>
        <div className={styles["heating-tile__content"]}>
          <div className={styles["heating-tile__header"]}>
            <h4 className={styles["heating-tile__title"]}>{title}</h4>
            <Icon icon={icon} size={56} />
          </div>
          <div className={styles["heating-tile__lists"]}>
            <div>
              <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.pros")}</h5>
              <ul className={styles["heating-tile__list"]}>
                {pros && pros.map(pro => (
                  <li className={styles["heating-tile__list-item"]} key={pro}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.cons")}</h5>
              <ul className={styles["heating-tile__list"]}>
                {cons && cons.map(con => (
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