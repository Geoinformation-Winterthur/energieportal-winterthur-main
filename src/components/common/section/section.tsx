import styles from "./section.module.scss";

interface SectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Section = ({ title, description }: SectionProps) => {

  return (
    <div className={`${styles["section"]}`}>
      <h2 className={styles["section__title"]}>{title}</h2>
      <p className={styles["section__description"]}>{description}</p>
    </div>
  )
};


