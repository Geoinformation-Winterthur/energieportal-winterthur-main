import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import { House, HouseType } from "../house/house";
import { Point } from "../point/point";
import { SavingsPotentialTile } from "./savings-potential-tile";
import styles from "./savings-potential.module.scss";
import Overlay from "@/components/common/overlay/overlay";

export const SavingsPotential = () => {
  const { t } = useTranslation();
  const [typeToShow, setTypeToShow] = useState<HouseType | null>(null);
  const { isMobile } = useWindowSize();
  const houseTypes: HouseType[] = ["roof", "facade", "windows", "basement"];

  const handlePointClick = (type: HouseType) => {
    if (isMobile) {
    }
    return setTypeToShow(type);
  }

  const renderMobileOverlay = (type: HouseType) => (

    <Overlay trigger={<Point type={type} onClick={handlePointClick} />} key={type}>
      {typeToShow && (
        <>
          <House type={typeToShow} />
          <SavingsPotentialTile type={typeToShow} />
        </>
      )}
    </Overlay>
  )

  return (
    <div className={styles["savings-potential"]}>
      <h3 className={styles["savings-potential__title"]}>{t("my_property.refurbishment_saving_potential.title")}</h3>
      <div className={styles["savings-potential__content"]}>
        <div className={styles["savings-potential__house"]}>
          {typeToShow ? <House type={typeToShow} /> : <House type="base" />}
          {houseTypes.map(type => {
            if (isMobile) {
              return renderMobileOverlay(type)
            }
            return typeToShow !== type && <Point type={type} onClick={handlePointClick} isBlurred={typeToShow ? true : false} key={type} />
          })}
        </div>
        {typeToShow && !isMobile ? <SavingsPotentialTile type={typeToShow} /> :
          <div className={styles["savings-potential__empty-state"]}>
            <h4 className={styles["savings-potential__empty-state-text"]}>{t("my_property.refurbishment_saving_potential.empty")}</h4>
          </div>
        }
      </div>
    </div>
  )
}