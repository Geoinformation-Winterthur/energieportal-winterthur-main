import clsx from 'clsx';
import styles from "./one-col.module.scss";

interface OneColProps {
  children?: React.ReactNode;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
}

export const OneCol = ({ children, noPaddingTop, noPaddingBottom }: OneColProps) => {

  return (
    <div className={clsx(
      styles["one-col"],
      noPaddingTop ? styles["one-col--no-padding-top"] : "",
      noPaddingBottom ? styles["one-col--no-padding-bottom"] : ""
    )}>
      {children}
    </div>
  )
};


