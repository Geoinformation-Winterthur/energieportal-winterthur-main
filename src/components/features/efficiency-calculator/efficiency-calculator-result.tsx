import { useTranslation } from "../../../../i18n";
import styles from "./efficiency-calculator.module.scss";

interface EfficiencyCalculatorResultProps {
  value: string;
  code: string;
}

export const EfficiencyCalculatorResult = ({ value, code }: EfficiencyCalculatorResultProps) => {
  const { t } = useTranslation();

  const resultTitle = t(`my_property.refurbishment_efficiency_calculator.result.${code}.title`, { returnObjects: true } as {})
  const resultText = t(`my_property.refurbishment_efficiency_calculator.result.${code}.text`, { returnObjects: true } as {})

  return (
    <div className={styles["efficiency-calculator-result"]}>
      <h5 className={styles["efficiency-calculator-result__title"]}>{t("my_property.refurbishment_efficiency_calculator.result_title")}</h5>
      <h2 className={styles["efficiency-calculator-result__result"]}>{value} {t("my_property.refurbishment_efficiency_calculator.result")}</h2>
      <div >
        <div className={styles["efficiency-calculator-result__flag"]}>
          <h5 className={styles["efficiency-calculator-result__flag-title"]}>{t("my_property.refurbishment_efficiency_calculator.result_box")}</h5>
        </div>
        <div className={styles["efficiency-calculator-result__box"]}>
          <p><span className={styles["efficiency-calculator-result__box-title"]}>{resultTitle}</span> {resultText}</p>
          <p className={styles["efficiency-calculator-result__box-subtext"]}>{t("my_property.refurbishment_efficiency_calculator.result_subtext")}</p>
        </div>
      </div>
    </div>
  )
}