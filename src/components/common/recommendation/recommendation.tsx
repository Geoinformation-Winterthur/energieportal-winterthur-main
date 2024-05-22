import styles from "./recommendation.module.scss";

interface RecommendationProps {
  title: string;
  children: JSX.Element;
  height?: number;
}

export const Recommendation = ({ title, height, children }: RecommendationProps) => {
  return (
    <div className={styles["recommendation"]}>
      <div className={styles["recommendation__flag"]}>
        {title}
      </div>
      <div className={styles["recommendation__inner"]} style={{ height: `${height}px` ?? "auto" }}>
        {children}
      </div>
    </div>
  );
};
