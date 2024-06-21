import styles from "./co2-emissions.module.scss";

interface Co2EmissionDescriptionProps {
  text: string;
}

export const Co2EmissionDescription = ({ text }: Co2EmissionDescriptionProps) => {
  return (
    <div className={styles["co2-emissions-result__description"]}>
      <p>{text}</p>
    </div>
  )
}