import { Accordion } from "@/components/common/accordion/accordion";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import { HeatingTiles } from "@/components/features/heating-tiles/heating-tiles";
import { AccordionDetails } from "@mui/material";
import { useTranslation } from "../../../i18n";

export const HeatingRecommendations = () => {

  const { t } = useTranslation();

  return (
    <FullWidth>
      <HeatingTiles />
      <Accordion summary={t("my_property.heating_recommendations.accordion_summary")}>
        <AccordionDetails>
          {t("my_property.heating_recommendations.accordion_detail_1")} <a href={t("my_property.heating_recommendations.accordion_link_target_1")} target="_blank">{t("my_property.heating_recommendations.accordion_link_1")}</a> {t("my_property.heating_recommendations.accordion_detail_2")}
        </AccordionDetails>
      </Accordion>
    </FullWidth>
  )
}