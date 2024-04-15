import styles from "./full-width.module.scss";

interface FullWidthProps {
  children?: React.ReactNode;
  noPaddingY?: boolean;
}

export const FullWidth = ({ children, noPaddingY }: FullWidthProps) => {

  return (
    <div className={`${styles["full-width"]} ${noPaddingY ? styles["full-width--no-padding-y"] : ""}`}>
      {children}
    </div>
  )
};

