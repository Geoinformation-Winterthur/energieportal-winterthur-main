import { getPropertyFacts } from "@/utils/get-property-facts";
import { getPropertyCategory } from "@/utils/property-facts/get-property-category";
import { getPropertyHeatSource } from "@/utils/property-facts/get-property-heat-source";
import { getPropertyHeatingType } from "@/utils/property-facts/get-property-heating-type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./property-facts.module.scss";

export const PropertyFacts = () => {

  const { t } = useTranslation();
  const isNotAvailableMessage = t("my_property.property_facts_not_available");
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");
  const [apartments, setApartments] = useState(0);
  const [heating, setHeating] = useState("");
  const [heatSource, setHeatSource] = useState("");

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      const propertyData = await getPropertyFacts(currentAddress || "");
      const propertyAttributes = propertyData.results[0].attributes;
      setCategory(getPropertyCategory(propertyAttributes?.gkat) || isNotAvailableMessage);
      setYear(propertyAttributes?.gbauj || isNotAvailableMessage);
      setArea(propertyAttributes?.garea && propertyAttributes?.garea + " m²" || isNotAvailableMessage);
      setFloors(propertyAttributes?.gastw || isNotAvailableMessage);
      setApartments(propertyAttributes?.ganzwhg || isNotAvailableMessage);
      setHeating(getPropertyHeatingType(propertyAttributes?.gwaerzh1) || isNotAvailableMessage);
      setHeatSource(getPropertyHeatSource(propertyAttributes?.genh1) || isNotAvailableMessage);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress, isNotAvailableMessage])

  return (
    <div className={styles["property-facts"]}>
      <table className={styles["property-facts__table"]}>
        <tbody>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_category")}</th>
            <td className={styles["property-facts__table-row-data"]}>{category}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_year")}</th>
            <td className={styles["property-facts__table-row-data"]}>{year}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_area")}</th>
            <td className={styles["property-facts__table-row-data"]}>{area}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_floors")}</th>
            <td className={styles["property-facts__table-row-data"]}>{floors}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_apartments")}</th>
            <td className={styles["property-facts__table-row-data"]}>{apartments}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_heating")}</th>
            <td className={styles["property-facts__table-row-data"]}>{heating}</td>
          </tr>
          <tr className={styles["property-facts__table-row"]}>
            <th className={styles["property-facts__table-row-head"]}>{t("my_property.property_facts_heat_source")}</th>
            <td className={styles["property-facts__table-row-data"]}>{heatSource}</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}