import clsx from 'clsx';
import styles from "./full-width.module.scss";

interface FullWidthProps {
  children?: React.ReactNode;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
}

export const FullWidth = ({ children, noPaddingTop, noPaddingBottom }: FullWidthProps) => {

  return (
    <div className={clsx(
      styles["full-width"],
      noPaddingTop ? styles["full-width--no-padding-top"] : "",
      noPaddingBottom ? styles["full-width--no-padding-bottom"] : ""
    )}>
      {children}
    </div>
  )
};


