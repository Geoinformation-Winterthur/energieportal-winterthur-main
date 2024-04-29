import { Icon } from "@/components/common/icon/icon";
import clsx from "clsx";
import styles from "./co2-emissions.module.scss";

interface Co2EmissionResultProps {
  result: "very-high" | "high" | "rather-high" | "moderate" | "low" | "very-low";
  title: string;
  subtitle: string;
}

export const Co2EmissionResult = ({ result, title, subtitle }: Co2EmissionResultProps) => {
  return (
    <div className={clsx(styles["co2-emissions-result"], styles[`co2-emissions__scale-value--${result}`])}>
      <Icon icon="info" />
      <div className={styles["co2-emissions-result__content"]}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}