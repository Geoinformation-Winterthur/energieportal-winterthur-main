import { Button } from "@/components/common/button/button";
import { useTranslation } from "../../../../i18n";
import { HouseType } from "../house/house";
import styles from "./savings-potential-tile.module.scss";

interface SavingsPotentialTileProps {
  type: HouseType;
}

export const SavingsPotentialTile = ({ type }: SavingsPotentialTileProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles["savings-potential-tile"]}>
      <div>
        <h4 className={styles["savings-potential-tile__title"]}>{t(`my_property.refurbishment_saving_potential.${type}.title`)}</h4>
        <p className={styles["savings-potential-tile__description"]}>{t(`my_property.refurbishment_saving_potential.${type}.description`)}</p>
        <ul>
          <li className={styles["savings-potential-tile__list-item"]}><span className={styles["savings-potential-tile__list-item-title"]}>{t("my_property.refurbishment_saving_potential.potential")}</span> {t(`my_property.refurbishment_saving_potential.${type}.potential`)}</li>
          <li className={styles["savings-potential-tile__list-item"]}><span className={styles["savings-potential-tile__list-item-title"]}>{t("my_property.refurbishment_saving_potential.costs")}</span> {t(`my_property.refurbishment_saving_potential.${type}.costs`)}</li>
          <li className={styles["savings-potential-tile__list-item"]}><span className={styles["savings-potential-tile__list-item-title"]}>{t("my_property.refurbishment_saving_potential.funding")}</span> {t(`my_property.refurbishment_saving_potential.${type}.funding`)}</li>
        </ul>
      </div>
      <div className={styles["savings-potential-tile__button"]}>
        <Button>{t("my_property.refurbishment_saving_potential.button")}</Button>
      </div>
    </div>
  )
}