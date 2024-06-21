import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { getEfficiency } from "@/utils/get-efficiency";
import { getEfficiencyCode } from "@/utils/get-efficiency-code";
import { AccordionDetails } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import { EfficiencyCalculatorForm } from "./efficiency-calculator-form";
import { EfficiencyCalculatorResult } from "./efficiency-calculator-result";
import styles from "./efficiency-calculator.module.scss";

export const EfficiencyCalculator = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (searchParams: string, buildingType: string) => {
    setIsLoading(true);
    const resultValue = await getEfficiency(searchParams)
    setValue(resultValue);
    setCode(getEfficiencyCode(buildingType, resultValue) ?? "");
    setIsLoading(false);
  }

  return (
    <div className={styles["efficiency-calculator"]}>
      <div className={styles["efficiency-calculator__header"]}>
        <h3 className={styles["efficiency-calculator__title"]}>{t("my_property.refurbishment_efficiency_calculator.title")}</h3>
        <p>{t("my_property.refurbishment_efficiency_calculator.lead")}</p>
      </div>
      <div className={styles["efficiency-calculator__content"]}>
        <EfficiencyCalculatorForm handleSubmit={handleSubmit} />
        {isLoading && <Icon icon="loading" color="red" size={72} />}
        {code && <EfficiencyCalculatorResult value={value} code={code} />}
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