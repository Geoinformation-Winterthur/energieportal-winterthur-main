
import styles from "./side-by-side.module.scss";

interface SideBySideProps {
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
}

export const SideBySide = ({
  contentLeft,
  contentRight,
}: SideBySideProps) => {
  return (
    <div
      className={`${styles["side-by-side"]}`}
    >
      <div className={styles["side-by-side__content"]}>
        <div className={styles["side-by-side__left"]}>
          {contentLeft}
        </div>
        <div className={styles["side-by-side__right"]}>
          {contentRight}
        </div>
      </div>
    </div>
  );
};
