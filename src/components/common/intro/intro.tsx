import clsx from 'clsx';
import styles from "./intro.module.scss";

interface IntroProps {
  title: string;
  lead?: string;
  variant: "light" | "dark";
  slim?: boolean;
}

export const Intro = ({ title, lead, variant, slim }: IntroProps) => {

  return (
    <section className={clsx(styles["intro"], styles[`intro--${variant}`], slim ? styles["intro--slim"] : "")}>
      <div className={styles["intro__content"]}>
        <h1 className={styles["intro__title"]}>{title}</h1>
        {lead && <p className={styles["intro__lead"]}>{lead}</p>}
      </div>
    </section>
  )
};


