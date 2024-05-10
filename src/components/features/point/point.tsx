import clsx from "clsx";
import { HouseType } from "../house/house";
import styles from "./point.module.scss";

interface PointProps {
  type: HouseType;
  onClick: (type: HouseType) => void;
}

export const Point = ({ type, onClick }: PointProps) => {

  return (
    <button className={clsx(styles["point"], styles[`point--${type}`])} onClick={() => onClick(type)}></button>
  )
}