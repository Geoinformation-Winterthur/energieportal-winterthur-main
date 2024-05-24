import clsx from 'clsx';
import { useState } from 'react';
import { Icon, IconType } from "../icon/icon";
import styles from "./button.module.scss";

interface ButtonProps {
  children?: React.ReactNode | string;
  icon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  icon,
  onClick,
  href,
  disabled,
}: ButtonProps) => {

  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => (
    setIsPressed(true)
  )

  const handleTouchEnd = () => (
    setIsPressed(false)
  )

  if (href) {
    return (
      <a
        className={clsx(styles["button"], disabled ? styles["button--disabled"] : "")}
        href={href}
      >
        {children}
        {icon && <Icon icon={icon as IconType} size={24} />}
      </a>
    );
  }
  return (
    <button
      className={clsx(styles["button"], disabled ? styles["button--disabled"] : "", isPressed ? styles["button--pressed"] : "")}
      onClick={onClick} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
    >
      {children}
      {icon && <Icon icon={icon as IconType} size={24} />}
    </button>
  );
};


