import { Button } from "@/components/common/button/button";
import { Icon } from "@/components/common/icon/icon";
import { Input } from "@/components/form/input/input";
import { Select } from "@/components/form/select/select";
import { buildingTypeOptions } from "@/constants/building-type-options";
import { heatingConstructionYearOptions } from "@/constants/heating-construction-year-options";
import { hotWaterViaHeaterOptions } from "@/constants/hot-water-via-heater-options";
import { unitOptions } from "@/constants/unit-options";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./efficiency-calculator.module.scss";

export const EfficiencyCalculatorForm = () => {
  const [buildingType, setBuildingType] = useState<string | null>("");
  const [usableBuildingArea, setUsableBuildingArea] = useState("");
  const [heatingConstructionYear, setHeatingConstructionYear] = useState<string | null>("");
  const [powerConsumption, setPowerConsumption] = useState("");
  const [unit, setUnit] = useState<string | null>("");
  const [hotWaterViaHeater, setHotWaterViaHeater] = useState<boolean | null>(false);
  const [numberPersons, setNumberPersons] = useState("");
  const [usableBuildingAreaError, setUsableBuildingAreaError] = useState(false);
  const { t } = useTranslation();

  const requiredFields = [
    buildingType,
    usableBuildingArea,
    powerConsumption,
    unit
  ];

  const hasRequiredErrors =
    requiredFields.some((field) => field === null || field === "");



  return (
    <form className={styles["efficiency-calculator-form"]}>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_title_1")}</h5>
        <div className={styles["efficiency-calculator-form__full"]}>
          <Select label="Gebäudeart *" options={buildingTypeOptions} onChange={(_, value) => setBuildingType(value)} />
        </div>
        <div className={styles["efficiency-calculator-form__50-50"]}>
          <Input
            label="Energiebezugsfläche in m² *"
            placeholder="1234"
            name="usableBuildingArea"
            value={usableBuildingArea}
            onChange={(e) => setUsableBuildingArea(e.target.value)}
            onBlur={(e) => setUsableBuildingAreaError(e.target.value === "")}
            error={usableBuildingAreaError ? "Bitte ausfüllen" : ""}
          />
          <Select label="Baujahr" options={heatingConstructionYearOptions} onChange={(_, value) => setHeatingConstructionYear(value)} />
        </div>
      </div>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_title_2")}</h5>
        <div className={styles["efficiency-calculator-form__70-30"]}>
          <Input
            label="Energieverbrauch pro Jahr *"
            placeholder="1234"
            name="powerConsumption"
            value={powerConsumption}
            onChange={(e) => setPowerConsumption(e.target.value)}
          />
          <Select label="Einheit des Energieverbrauchs *" options={unitOptions} onChange={(_, value) => setUnit(value)} />
        </div>
      </div>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_title_3")}</h5>
        <div className={styles["efficiency-calculator-form__50-50"]}>
          <Select label="Warmwasser über die Heizung?" options={hotWaterViaHeaterOptions} onChange={(_, value) => setHotWaterViaHeater(value === "true" ? true : false)} />
          {hotWaterViaHeater && <Input
            label="Personen im Haushalt"
            placeholder="0"
            name="numberPersons"
            value={numberPersons}
            onChange={(e) => setNumberPersons(e.target.value)}
          />}
        </div>
      </div>
      <div className={styles["efficiency-calculator-form__button"]}>
        <Button disabled={hasRequiredErrors}>{t("my_property.refurbishment_efficiency_calculator.form_submit")}<Icon icon="arrow-right" /></Button>
      </div>
    </form>
  )
}