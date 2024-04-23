import { getCo2EmissionData } from "@/utils/get-co2-emission";
import { getPropertyFacts } from "@/utils/get-property-facts";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import { Co2EmissionDescription } from "./co2-emission-description";
import { Co2EmissionResult } from "./co2-emission-result";
import styles from "./co2-emissions.module.scss";

export const Co2Emissions = () => {

  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [co2EmissionValue, setCo2EmissionValue] = useState<string | null>(null);
  const isVeryHigh = co2EmissionValue === "> 25";
  const isHigh = co2EmissionValue === "20 - 25";
  const isRatherHigh = co2EmissionValue === "15 - 20";
  const isModerate = co2EmissionValue === "10 - 15";
  const isLow = co2EmissionValue === "5 - 10";
  const isVeryLow = co2EmissionValue === "0" || co2EmissionValue === "5 - 10";

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      const propertyData = await getPropertyFacts(currentAddress || "");
      const currentEgid = propertyData.results[0].attributes.egid;
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;
      const co2EmissionData = await getCo2EmissionData(eCoordinate, nCoordinate);


      if (co2EmissionData.results.length) {
        const co2Emission = co2EmissionData.results.find((result: { id: string; properties: { co2_range: string } }) => {
          return String(result.id) === currentEgid;
        });
        setCo2EmissionValue(co2Emission.properties.co2_range)
      } else {
        setCo2EmissionValue(null);
      }
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])

  const renderVeryLow = () => <Co2EmissionResult result="very-low" title={t("my_property.co2_emissions.result.very_low_1")} subtitle={t("my_property.co2_emissions.result.very_low_2")} />;
  const renderLow = () => <Co2EmissionResult result="low" title={t("my_property.co2_emissions.result.low_1")} subtitle={t("my_property.co2_emissions.result.low_2")} />;
  const renderModerate = () => <Co2EmissionResult result="moderate" title={t("my_property.co2_emissions.result.moderate_1")} subtitle={t("my_property.co2_emissions.result.moderate_2")} />;
  const renderRatherHigh = () => <Co2EmissionResult result="rather-high" title={t("my_property.co2_emissions.result.rather_high_1")} subtitle={t("my_property.co2_emissions.result.rather_high_2")} />;
  const renderHigh = () => <Co2EmissionResult result="high" title={t("my_property.co2_emissions.result.high_1")} subtitle={t("my_property.co2_emissions.result.high_2")} />;
  const renderVeryHigh = () => <Co2EmissionResult result="very-high" title={t("my_property.co2_emissions.result.very_high_1")} subtitle={t("my_property.co2_emissions.result.very_high_2")} />;

  return (
    <div className={styles["co2-emissions"]}>
      <h3 className={styles["co2-emissions__title"]}>{t("my_property.co2_emissions_title")}</h3>
      <p className={styles["co2-emissions__lead"]}>{t("my_property.co2_emissions_lead_pre")}
        <a href={t("my_property.co2_emissions_link_target")} target="_blank">{t("my_property.co2_emissions_link")}</a>
        {t("my_property.co2_emissions_lead_post")}
      </p>
      {!co2EmissionValue && <Co2EmissionDescription text={t("my_property.co2_emissions.result.no_result")} />}
      {co2EmissionValue &&
        <>
          <ul className={styles["co2-emissions__scale"]}>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--very-high"],
              isVeryHigh && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.very_high")}
              {renderVeryHigh()}
            </li>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--high"],
              isHigh && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.high")}
              {renderHigh()}
            </li>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--rather-high"],
              isRatherHigh && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.rather_high")}
              {renderRatherHigh()}
            </li>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--moderate"],
              isModerate && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.moderate")}
              {renderModerate()}
            </li>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--low"],
              isLow && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.low")}
              {renderLow()}
            </li>
            <li className={clsx(
              styles["co2-emissions__scale-value"],
              styles["co2-emissions__scale-value--very-low"],
              isVeryLow && styles["co2-emissions__scale-value--active"]
            )}>
              {t("my_property.co2_emissions.scale_value.very_low")}
              {renderVeryLow()}
            </li>
          </ul>
          <div>
            {isVeryLow &&
              <>
                {renderVeryLow()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.very_low_3")} />
              </>
            }
            {isLow &&
              <>
                {renderLow()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.low_3")} />
              </>
            }
            {isModerate &&
              <>
                {renderModerate()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.moderate_3")} />
              </>
            }
            {isRatherHigh &&
              <>
                {renderRatherHigh()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.rather_high_3")} />
              </>
            }
            {isHigh &&
              <>
                {renderHigh()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.high_3")} />
              </>
            }
            {isVeryHigh &&
              <>
                {renderVeryHigh()}
                <Co2EmissionDescription text={t("my_property.co2_emissions.result.very_high_3")} />
              </>
            }
          </div>
        </>
      }
    </div>
  )
}