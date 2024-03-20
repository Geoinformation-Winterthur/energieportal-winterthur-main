import { Icon, IconType } from "@/components/common/icon/icon";
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
  if (href) {
    return (
      <a
        className={`
		${styles["button"]}
		${disabled ? styles["button--disabled"] : ""}
	  `}
        href={href}
      >
        {children}
        {icon && <Icon icon={icon as IconType} size={24} />}
      </a>
    );
  }
  return (
    <button
      className={`
		${styles["button"]}
		${disabled ? styles["button--disabled"] : ""}
	`}
      onClick={onClick}
    >
      {children}
      {icon && <Icon icon={icon as IconType} size={24} />}
    </button>
  );
};


