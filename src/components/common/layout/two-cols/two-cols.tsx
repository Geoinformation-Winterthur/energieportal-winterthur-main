
import styles from "./two-cols.module.scss";

interface TwoColsProps {
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

export const TwoCols = ({
  contentLeft,
  contentRight,
}: TwoColsProps) => {
  return (
    <div
      className={`${styles["two-cols"]}`}
    >
      <div className={styles["two-cols__content"]}>
        <div className={styles["two-cols__left"]}>
          {contentLeft}
        </div>
        <div className={styles["two-cols__right"]}>
          {contentRight}
        </div>
      </div>
    </div>
  );
};
