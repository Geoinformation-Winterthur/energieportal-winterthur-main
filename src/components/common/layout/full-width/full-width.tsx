import styles from "./full-width.module.scss";

interface FullWidthProps {
  children?: React.ReactNode;
}

export const FullWidth = ({ children }: FullWidthProps) => {

  return (
    <div className={styles["full-width"]}>
      <div className={styles["full-width__inner"]}>
        {children}
      </div>
    </div>
  )
};


