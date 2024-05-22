import { Recommendation } from "@/components/common/recommendation/recommendation";
import { SolarFacts as SolarFactsType } from "@/types/solar-facts";
import { useTranslation } from "../../../../i18n";
import styles from "./solar-facts.module.scss";
import { Button } from "@/components/common/button/button";
import { AccordionDetails } from "@mui/material";
import { Accordion } from "@/components/common/accordion/accordion";

interface SolarFactsProps {
  solarFacts: SolarFactsType | null;
}

export const SolarFacts = ({ solarFacts }: SolarFactsProps) => {
  const { t } = useTranslation();

  const renderNoResultMessage = () => {
    return (
      <p className={styles["solar-facts__no-result"]}>
        {t("my_property.solar_facts.no_result_text")}
      </p>
    )
  }

  const renderTableRow = (label: string, value: string) => (
    <tr className={styles["solar-facts__table-row"]} key={label}>
      <th className={styles["solar-facts__table-row-head"]}>{label}</th>
      <td className={styles["solar-facts__table-row-data"]}>{value}</td>
    </tr>
  )

  const renderSolarPotentialTable = () => {
    const solarPotentialFacts = [
      { label: t("my_property.solar_facts.area"), value: `${solarFacts?.area} m²` },
      { label: t("my_property.solar_facts.roof_type"), value: solarFacts?.roofType },
      { label: t("my_property.solar_facts.exposition"), value: solarFacts?.exposition },
      { label: t("my_property.solar_facts.slope"), value: solarFacts?.slope },
    ];
    return (
      <table className={styles["solar-facts__table"]}>
        <tbody>
          {solarPotentialFacts.map(fact => renderTableRow(fact.label, fact.value ?? "N/A"))}
        </tbody>
      </table>
    );
  }

  const renderProjectedAnnualProductionTable = () => {
    const annualProductionFacts = [
      { label: t("my_property.solar_facts.calculated_electricity_module_area"), value: `${solarFacts?.calculatedElectricityModuleArea} m²` },
      { label: t("my_property.solar_facts.calculated_electricity_max_power"), value: `${solarFacts?.calculatedElectricityMaxPower} kW` },
      { label: t("my_property.solar_facts.electricity_production"), value: `${solarFacts?.electricityProduction} kWh` },
    ];
    return (
      <table className={styles["solar-facts__table"]}>
        <tbody>
          {annualProductionFacts.map(fact => renderTableRow(fact.label, fact.value))}
        </tbody>
        <tfoot className={styles["solar-facts__table-footer"]}>
          <tr>
            <td className={styles["solar-facts__table-footer-row"]} colSpan={2}>
              {t("my_property.solar_facts.electricity_production_footer")}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }

  const renderProjectedThermalProductionTable = () => {
    const thermalProductionFacts = [
      { label: t("my_property.solar_facts.calculated_thermal_module_area"), value: `${solarFacts?.calculatedThermalModuleArea} m²` },
      { label: t("my_property.solar_facts.calculated_thermal_max_power"), value: `${solarFacts?.calculatedThermalMaxPower} kW` },
      { label: t("my_property.solar_facts.thermal_production"), value: `${solarFacts?.thermalProduction} kWh` },
    ];
    return (
      <table className={styles["solar-facts__table"]}>
        <tbody>
          {thermalProductionFacts.map(fact => renderTableRow(fact.label, fact.value))}
        </tbody>
        <tfoot className={styles["solar-facts__table-footer"]}>
          <tr>
            <td className={styles["solar-facts__table-footer-row"]} colSpan={2}>
              {t("my_property.solar_facts.thermal_production_footer")}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }

  const renderResults = () => (
    <div>
      <section className={styles["solar-facts__section"]}>
        {renderSolarPotentialTable()}
      </section>
      <section className={styles["solar-facts__section"]}>
        <h4 className={styles["solar-facts__subtitle"]}>{t("my_property.solar_facts.projected_annual_production_title")}</h4>
        {renderProjectedAnnualProductionTable()}
        <Recommendation title={t("my_property.solar_facts.suitability_title")}>
          <div>
            {solarFacts?.suitability === "sehr gut" && t("my_property.solar_facts.suitability_1")}
            {solarFacts?.suitability === "gut" && t("my_property.solar_facts.suitability_2")}
            {solarFacts?.suitability === "mässig" && t("my_property.solar_facts.suitability_3")}
            {solarFacts?.suitability === "schlecht" && t("my_property.solar_facts.suitability_4")}
          </div>
        </Recommendation>
        <div className={styles["solar-facts__button"]}>
          <Button>
            Mehr erfahren
          </Button>
        </div>
      </section>
      <section className={styles["solar-facts__section"]}>
        <h4 className={styles["solar-facts__subtitle"]}>{t("my_property.solar_facts.projected_annual_thermal_production_title")}</h4>
        {renderProjectedThermalProductionTable()}
        <div className={styles["solar-facts__button"]}>
          <Button>
            Mehr erfahren
          </Button>
        </div>
      </section>
      <Accordion summary={t("my_property.solar_accordion.summary")}>
        <AccordionDetails>
          {t("my_property.solar_accordion.detail")}
        </AccordionDetails>
      </Accordion>
    </div>
  )

  return (
    <div className={styles["solar-facts"]}>
      <h4 className={styles["solar-facts__subtitle"]}>
        {solarFacts ? t("my_property.solar_facts.result_title") : t("my_property.solar_facts.no_result_title")}
      </h4>
      {solarFacts ? renderResults() : renderNoResultMessage()}
    </div>
  )
};