"use client";
import clsx from "clsx";
import Airwater from "./assets/airwater.svg";
import ArrowDown from "./assets/arrow-down.svg";
import ArrowRight from "./assets/arrow-right.svg";
import Burger from "./assets/burger.svg";
import ChevronDown from "./assets/chevron-down.svg";
import ChevronUp from "./assets/chevron-up.svg";
import Close from "./assets/close.svg";
import DistrictHeating from "./assets/districtheating.svg";
import Geothermal from "./assets/geothermal.svg";
import Groundwater from "./assets/groundwater.svg";
import Info from "./assets/info.svg";
import Link from "./assets/link.svg";
import Loading from "./assets/loading.svg";
import Mail from "./assets/mail.svg";
import Pellet from "./assets/pellet.svg";
import Phone from "./assets/phone.svg";
import Search from "./assets/search.svg";
import Send from "./assets/send.svg";
import styles from "./icon.module.scss";

export type IconType =
  "airwater"
  | "arrow-right"
  | "arrow-down"
  | "burger"
  | "chevron-down"
  | "chevron-up"
  | "close"
  | "district-heating"
  | "geothermal"
  | "groundwater"
  | "info"
  | "link"
  | "loading"
  | "mail"
  | "pellet"
  | "phone"
  | "search"
  | "send"

interface IconProps {
  icon: IconType;
  size?: number;
  color?: "red" | "dark";
  onButtonClick?: () => void;
}

export const Icon = ({ icon, size = 20, color, onButtonClick }: IconProps) => {
  const iconMap = {
    airwater: <Airwater width={size} height={size} />,
    "arrow-down": <ArrowDown width={size} height={size} />,
    "arrow-right": <ArrowRight width={size} height={size} />,
    burger: <Burger width={size} height={size} />,
    "chevron-down": <ChevronDown width={size} height={size} />,
    "chevron-up": <ChevronUp width={size} height={size} />,
    close: <Close width={size} height={size} />,
    "district-heating": <DistrictHeating width={size} height={size} />,
    geothermal: <Geothermal width={size} height={size} />,
    groundwater: <Groundwater width={size} height={size} />,
    info: <Info width={size} height={size} />,
    link: <Link width={size} height={size} />,
    loading: <Loading width={size} height={size} />,
    mail: <Mail width={size} height={size} />,
    pellet: <Pellet width={size} height={size} />,
    phone: <Phone width={size} height={size} />,
    search: <Search width={size} height={size} />,
    send: <Send width={size} height={size} />,
  };

  if (onButtonClick) {
    return (
      <button className={clsx(styles["icon-button"], styles[`icon--${color}`])} onClick={onButtonClick}>
        {iconMap[icon]}
      </button>
    )
  }

  return (
    <span className={clsx(styles["icon"], styles[`icon--${color}`])}>
      {iconMap[icon]}
    </span>
  );
};
