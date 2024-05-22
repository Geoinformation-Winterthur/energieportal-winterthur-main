import clsx from "clsx";
import styles from "./full-width.module.scss";

interface FullWidthProps {
  children?: React.ReactNode;
  variant?: "green" | "white";
}

export const FullWidth = ({ children, variant = "green" }: FullWidthProps) => {

  return (
    <div className={clsx(styles["full-width"], styles[`full-width--${variant}`])}>
      <div className={styles["full-width__inner"]}>
        {children}
      </div>
    </div>
  )
};
