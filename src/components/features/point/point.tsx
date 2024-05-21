import clsx from "clsx";
import { HouseType } from "../house/house";
import styles from "./point.module.scss";

interface PointProps {
  type: HouseType;
  isBlurred?: boolean;
  onClick: (type: HouseType) => void;
}

export const Point = ({ type, onClick, isBlurred }: PointProps) => {

  return (
    <button className={clsx(styles["point"], styles[`point--${type}`], isBlurred ? styles["point--blurred"] : "")} onClick={() => onClick(type)}></button>
  )
}