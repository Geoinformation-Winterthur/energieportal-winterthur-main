"use client";
import ArrowDown from "./assets/arrow-down.svg";
import ArrowRight from "./assets/arrow-right.svg";
import Burger from "./assets/burger.svg";
import ChevronDown from "./assets/chevron-down.svg";
import ChevronUp from "./assets/chevron-up.svg";
import Close from "./assets/close.svg";
import Info from "./assets/info.svg";
import Link from "./assets/link.svg";
import Loading from "./assets/loading.svg";
import Mail from "./assets/mail.svg";
import Phone from "./assets/phone.svg";
import Search from "./assets/search.svg";
import Send from "./assets/send.svg";
import styles from "./icon.module.scss";

export type IconType =
  | "arrow-right"
  | "arrow-down"
  | "burger"
  | "chevron-down"
  | "chevron-up"
  | "close"
  | "info"
  | "link"
  | "loading"
  | "mail"
  | "phone"
  | "search"
  | "send"

interface IconProps {
  icon: IconType;
  size?: number;
  onButtonClick?: () => void;
}

export const Icon = ({ icon, size = 20, onButtonClick }: IconProps) => {
  const iconMap = {
    "arrow-down": <ArrowDown width={size} height={size} />,
    "arrow-right": <ArrowRight width={size} height={size} />,
    burger: <Burger width={size} height={size} />,
    "chevron-down": <ChevronDown width={size} height={size} />,
    "chevron-up": <ChevronUp width={size} height={size} />,
    close: <Close width={size} height={size} />,
    info: <Info width={size} height={size} />,
    link: <Link width={size} height={size} />,
    loading: <Loading width={size} height={size} />,
    mail: <Mail width={size} height={size} />,
    phone: <Phone width={size} height={size} />,
    search: <Search width={size} height={size} />,
    send: <Send width={size} height={size} />,
  };

  if (onButtonClick) {
    return (
      <button className={styles["icon-button"]} onClick={onButtonClick}>
        {iconMap[icon]}
      </button>
    )
  }

  return (
    <span className={styles["icon"]}>
      {iconMap[icon]}
    </span>
  );
};
