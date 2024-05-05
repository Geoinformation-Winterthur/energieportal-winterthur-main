import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { HeatingTiles } from "@/components/features/heating-tiles/heating-tiles";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import { useTranslation } from "../../../i18n";
import styles from "./heating-recommendations.module.scss";

export const HeatingRecommendations = () => {

  const { t } = useTranslation();

  return (
    <div className={styles["heating-recommendations"]}>

      <div className={styles["heating-recommendations_inner"]}>
        <HeatingTiles />
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