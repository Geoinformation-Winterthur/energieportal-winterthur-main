"use client";
import clsx from "clsx";
import Airwater from "./assets/airwater.svg";
import ArrowDown from "./assets/arrow-down.svg";
import ArrowLeft from "./assets/arrow-left.svg";
import ArrowRight from "./assets/arrow-right.svg";
import Burger from "./assets/burger.svg";
import Check from "./assets/check.svg";
import ChevronDown from "./assets/chevron-down.svg";
import ChevronUp from "./assets/chevron-up.svg";
import Close from "./assets/close.svg";
import CloseOverlay from "./assets/close_overlay.svg";
import Consulting from "./assets/consulting.svg";
import DistrictHeating from "./assets/districtheating.svg";
import Error from "./assets/error.svg";
import Geothermal from "./assets/geothermal.svg";
import Groundwater from "./assets/groundwater.svg";
import Heating from "./assets/heating.svg";
import Info from "./assets/info.svg";
import Link from "./assets/link.svg";
import Loading from "./assets/loading.svg";
import Mail from "./assets/mail.svg";
import Minus from "./assets/minus.svg";
import Pellet from "./assets/pellet.svg";
import Phone from "./assets/phone.svg";
import Plus from "./assets/plus.svg";
import Refurbishment from "./assets/refurbishment.svg";
import Search from "./assets/search.svg";
import Send from "./assets/send.svg";
import Warning from "./assets/warning.svg";
import styles from "./icon.module.scss";

export type IconType =
  | "airwater"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "burger"
  | "chevron-down"
  | "chevron-up"
  | "close_overlay"
  | "close"
  | "consulting"
  | "districtheating"
  | "error"
  | "geothermal"
  | "groundwater"
  | "heating"
  | "info"
  | "link"
  | "loading"
  | "mail"
  | "minus"
  | "pellet"
  | "phone"
  | "plus"
  | "refurbishment"
  | "search"
  | "send"
  | "success"
  | "warning";

interface IconProps {
  icon: IconType;
  size?: number;
  color?: "red" | "dark" | "light";
  onButtonClick?: () => void;
}

export const Icon = ({ icon, size = 20, color, onButtonClick }: IconProps) => {
  const iconMap = {
    airwater: <Airwater width={size} height={size} />,
    "arrow-down": <ArrowDown width={size} height={size} />,
    "arrow-left": <ArrowLeft width={size} height={size} />,
    "arrow-right": <ArrowRight width={size} height={size} />,
    burger: <Burger width={size} height={size} />,
    "chevron-down": <ChevronDown width={size} height={size} />,
    "chevron-up": <ChevronUp width={size} height={size} />,
    close: <Close width={size} height={size} />,
    close_overlay: <CloseOverlay width={size} height={size} />,
    consulting: <Consulting width={size} height={size} />,
    districtheating: <DistrictHeating width={size} height={size} />,
    error: <Error width={size} height={size} />,
    geothermal: <Geothermal width={size} height={size} />,
    groundwater: <Groundwater width={size} height={size} />,
    heating: <Heating width={size} height={size} />,
    info: <Info width={size} height={size} />,
    link: <Link width={size} height={size} />,
    loading: <Loading width={size} height={size} />,
    mail: <Mail width={size} height={size} />,
    minus: <Minus width={size} height={size} />,
    pellet: <Pellet width={size} height={size} />,
    phone: <Phone width={size} height={size} />,
    plus: <Plus width={size} height={size} />,
    refurbishment: <Refurbishment width={size} height={size} />,
    search: <Search width={size} height={size} />,
    send: <Send width={size} height={size} />,
    success: <Check width={size} height={size} />,
    warning: <Warning width={size} height={size} />,
  };

  if (onButtonClick) {
    return (
      <button
        className={clsx(styles["icon-button"], styles[`icon--${color}`])}
        onClick={onButtonClick}
      >
        {iconMap[icon]}
      </button>
    );
  }

  return (
    <span className={clsx(styles["icon"], styles[`icon--${color}`])}>
      {iconMap[icon]}
    </span>
  );
};
