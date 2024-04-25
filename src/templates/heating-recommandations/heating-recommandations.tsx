import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { HeatingTiles } from "@/components/features/heating-tiles/heating-tiles";
import { Heating } from "@/types/heating";
import { getHeatingSystems } from "@/utils/get-heating-systems";
import { getPropertyFacts } from "@/utils/get-property-facts";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../i18n";
import styles from "./heating-recommendations.module.scss";

export const HeatingRecommendations = () => {

  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [heatingSystems, setHeatingSystems] = useState<Heating[]>([])

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      setIsLoading(true);
      const propertyData = await getPropertyFacts(currentAddress || "");
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;
      const heatingData = await getHeatingSystems(eCoordinate, nCoordinate);
      if (heatingData) {
        setHeatingSystems(heatingData);
      }
      setIsLoading(false);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])

  return (
    <div className={styles["heating-recommendations"]}>
      <div className={styles["heating-recommendations_inner"]}>
        <HeatingTiles heatings={heatingSystems} />
        <Accordion>
          <AccordionSummary
            expandIcon={<Icon icon='chevron-down' color="red" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {t("my_property.heating_recommendations.accordion_summary")}
          </AccordionSummary>
          <AccordionDetails>
            {t("my_property.heating_recommendations.accordion_detail_1")} <a href={t("my_property.heating_recommendations.accordion_link_target_1")} target="_blank">{t("my_property.heating_recommendations.accordion_link_1")}</a>{t("my_property.heating_recommendations.accordion_detail_2")}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}