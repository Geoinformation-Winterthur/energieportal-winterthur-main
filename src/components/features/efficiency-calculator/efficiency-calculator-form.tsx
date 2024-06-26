import { Button } from "@/components/common/button/button";
import { Icon } from "@/components/common/icon/icon";
import { Input } from "@/components/form/input/input";
import { Select } from "@/components/form/select/select";
import { buildingTypeOptions } from "@/constants/building-type-options";
import { heatingConstructionYearOptions } from "@/constants/heating-construction-year-options";
import { hotWaterViaHeaterOptions } from "@/constants/hot-water-via-heater-options";
import { unitOptions } from "@/constants/unit-options";
import { blockInvalidChars } from "@/utils/block-invalid-chars";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./efficiency-calculator.module.scss";

interface EfficiencyCalculatorFormProps {
  handleSubmit: (searchParams: string, buildingType: string) => void;
}

export const EfficiencyCalculatorForm = ({ handleSubmit }: EfficiencyCalculatorFormProps) => {
  const [buildingType, setBuildingType] = useState("");
  const [usableBuildingArea, setUsableBuildingArea] = useState("");
  const [usableBuildingAreaError, setUsableBuildingAreaError] = useState(false);
  const [heatingConstructionYear, setHeatingConstructionYear] = useState("Ab 2000");
  const [powerConsumption, setPowerConsumption] = useState("");
  const [powerConsumptionError, setPowerConsumptionError] = useState(false);
  const [unit, setUnit] = useState("");
  const [hotWaterViaHeater, setHotWaterViaHeater] = useState(true);
  const [numberPersons, setNumberPersons] = useState("");
  const { t } = useTranslation();

  const requiredFields = [
    buildingType,
    usableBuildingArea,
    powerConsumption,
    unit
  ];

  const hasRequiredErrors = requiredFields.some((field) => field === null || field === "");

  const handleSubmitClick = () => {
    const searchParams = `usableBuildingArea=${Number(usableBuildingArea)}&powerConsumption=${Number(powerConsumption)}&unit=${unit}&hotWaterViaHeater=${hotWaterViaHeater}&numberPersons=${Number(numberPersons)}&heatingConstructionYear=${heatingConstructionYear}`;
    handleSubmit(searchParams, buildingType);
  }

  const handleHotWaterViaHeaterChange = (value: string) => {
    if (value === "false") {
      setHotWaterViaHeater(false);
    } else {
      setHotWaterViaHeater(true);
      setNumberPersons("");
    }
  }

  return (
    <div className={styles["efficiency-calculator-form"]}>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_building")}</h5>
        <div className={styles["efficiency-calculator-form__full"]}>
          <Select
            label={t("my_property.refurbishment_efficiency_calculator.form.label_building_type")}
            options={buildingTypeOptions}
            onChange={(_, value) => setBuildingType(value ?? "")}
          />
        </div>
        <div className={styles["efficiency-calculator-form__50-50"]}>
          <Input
            label={t("my_property.refurbishment_efficiency_calculator.form.label_building_area")}
            type="number"
            placeholder="1234"
            name="usableBuildingArea"
            value={usableBuildingArea}
            onChange={(e) => setUsableBuildingArea(e.target.value)}
            onBlur={(e) => setUsableBuildingAreaError(e.target.value === "")}
            error={usableBuildingAreaError ? t("my_property.refurbishment_efficiency_calculator.form_error") : ""}
            onKeyDown={(e) => blockInvalidChars(e)}
          />
          <Select
            label={t("my_property.refurbishment_efficiency_calculator.form.label_construction_year")}
            options={heatingConstructionYearOptions}
            onChange={(_, value) => setHeatingConstructionYear(!value || value === "" ? "Ab 2000" : value)}
          />
        </div>
      </div>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_power_consumption")}</h5>
        <div className={styles["efficiency-calculator-form__70-30"]}>
          <Select
            label={t("my_property.refurbishment_efficiency_calculator.form_unit")}
            options={unitOptions}
            onChange={(_, value) => setUnit(value ?? "")}
          />
          <Input
            label={t("my_property.refurbishment_efficiency_calculator.form.label_power_consumption")}
            type="number"
            placeholder="1234"
            name="powerConsumption"
            value={powerConsumption}
            onChange={(e) => setPowerConsumption(e.target.value)}
            onBlur={(e) => setPowerConsumptionError(e.target.value === "")}
            error={powerConsumptionError ? t("my_property.refurbishment_efficiency_calculator.form_error") : ""}
            onKeyDown={(e) => blockInvalidChars(e)}
          />
        </div>
      </div>
      <div>
        <h5 className={styles["efficiency-calculator-form__title"]}>{t("my_property.refurbishment_efficiency_calculator.form_hot_water")}</h5>
        <div className={styles["efficiency-calculator-form__50-50"]}>
          <Select
            defaultValue="true"
            label={t("my_property.refurbishment_efficiency_calculator.form.label_hot_water")}
            options={hotWaterViaHeaterOptions}
            onChange={(_, value) => handleHotWaterViaHeaterChange(value ?? "")}
          />
          {!hotWaterViaHeater &&
            <Input
              label={t("my_property.refurbishment_efficiency_calculator.form.label_number_persons")}
              type="number"
              name="numberPersons"
              value={numberPersons}
              onChange={(e) => setNumberPersons(e.target.value)}
              onKeyDown={(e) => blockInvalidChars(e)}
            />
          }
        </div>
      </div>
      <div className={styles["efficiency-calculator-form__button"]}>
        <Button disabled={hasRequiredErrors} onClick={handleSubmitClick}>{t("my_property.refurbishment_efficiency_calculator.form_submit")}<Icon icon="arrow-right" /></Button>
      </div>
    </div>
  )
}