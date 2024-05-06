import { Accordion } from "@/components/common/accordion/accordion";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../../i18n";
import { EfficiencyCalculatorForm } from "./efficiency-calculator-form";
import { EfficiencyCalculatorResult } from "./efficiency-calculator-result";
import styles from "./efficiency-calculator.module.scss";

export const EfficiencyCalculator = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["efficiency-calculator"]}>
      <div className={styles["efficiency-calculator__header"]}>
        <h3 className={styles["efficiency-calculator__title"]}>{t("my_property.refurbishment_efficiency_calculator.title")}</h3>
        <p>{t("my_property.refurbishment_efficiency_calculator.lead")}</p>
      </div>
      <div className={styles["efficiency-calculator__content"]}>
        <EfficiencyCalculatorForm />
        <EfficiencyCalculatorResult value="150" code="moderate" />
      </div>
      <div>
        <Accordion summary={t("my_property.refurbishment_efficiency_calculator.summary_1")}>
          <AccordionDetails>{t("my_property.refurbishment_efficiency_calculator.detail_1")}</AccordionDetails>
        </Accordion>
        <Accordion summary={t("my_property.refurbishment_efficiency_calculator.summary_2")}>
          <AccordionDetails>{t("my_property.refurbishment_efficiency_calculator.detail_2")}</AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}