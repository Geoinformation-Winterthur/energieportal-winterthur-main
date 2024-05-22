
import Base from "./assets/base.svg";
import Basement from "./assets/basement.svg";
import Facade from "./assets/facade.svg";
import Roof from "./assets/roof.svg";
import Windows from "./assets/windows.svg";
import styles from "./house.module.scss";

export type HouseType = "base" | "basement" | "facade" | "roof" | "windows"

interface HouseProps {
  type: HouseType;
}

export const House = ({ type }: HouseProps) => {

  const houseMap = {
    base: <Base />,
    basement: <Basement />,
    facade: <Facade />,
    roof: <Roof />,
    windows: <Windows />,
  }

  return (
    <div className={styles["house"]}>
      {houseMap[type]}
    </div>
  )
}