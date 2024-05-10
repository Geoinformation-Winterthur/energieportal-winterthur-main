import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import { House, HouseType } from "../house/house";
import { Point } from "../point/point";
import { SavingsPotentialTile } from "./savings-potential-tile";
import styles from "./savings-potential.module.scss";

export const SavingsPotential = () => {
  const { t } = useTranslation();
  const [typeToShow, setTypeToShow] = useState<HouseType | null>(null);

  const handlePointClick = (type: HouseType) => (
    setTypeToShow(type)
  )

  return (
    <div className={styles["savings-potential"]}>
      <h3 className={styles["savings-potential__title"]}>{t("my_property.refurbishment_saving_potential.title")}</h3>
      <div className={styles["savings-potential__content"]}>
        <div className={styles["savings-potential__house"]}>
          {typeToShow ? <House type={typeToShow} /> : <House type="base" />}
          <Point type="roof" onClick={handlePointClick} />
          <Point type="facade" onClick={handlePointClick} />
          <Point type="windows" onClick={handlePointClick} />
          <Point type="basement" onClick={handlePointClick} />
        </div>
        {typeToShow ? <SavingsPotentialTile type={typeToShow} /> :
          <div className={styles["savings-potential__empty-state"]}>
            <h4 className={styles["savings-potential__empty-state-text"]}>{t("my_property.refurbishment_saving_potential.empty")}</h4>
          </div>
        }
      </div>
    </div>
  )
}